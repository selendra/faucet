import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import giving from '../assets/giving.svg'
import { InformationCircleIcon, UploadIcon } from '@heroicons/react/outline'
import toast from 'react-hot-toast';

export default function Testnet() {
  const [address, setAddress] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  
  const handleChange = (value) => {
    // if value is null recaptcha expired
    if (value !== null) { 
      setIsVerified(true)
    } else {
      setIsVerified(false)
    }
  };

  const handleSubmit = async() => {
    try {
      if(!address) return toast.error('invalid address!');
  
      const res = await fetch(`${process.env.REACT_APP_API}/claim/testnet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({ address: address })
      })
  
      const data = await res.json();
      if(res.ok) {
        toast.success(data.data);
      } else {
        toast.error(data.data);
      }
    } catch (error) {
      toast.error('Something went wrong!');
      return;
    }
  }

  return (
    <div className='md:w-3/4 md:mx-auto mx-4 py-16'>
      <div className='my-card shadow-md'>
        {/* <img src={giving} alt='' className='fixed top-0 right-0' /> */}
        <h3 className='font-bold text-2xl'>Get Testnet Tokens</h3>
        <p className='font-light my-4 mr-[10%]'>This faucet transfers Testnet Token on Selendra testnets. Confirm details before submitting.</p>
        
        <label className='font-semibold text-sm'>Wallet Address:</label>
        <input 
          type="text" 
          value={address} 
          onChange={e => setAddress(e.target.value)} 
          placeholder="Enter Address" 
          className="input input-bordered w-full bg-white text-slate-700" 
        />
        <ReCAPTCHA
          className='mt-6 flex justify-center'
          sitekey={process.env.REACT_APP_SITE_KEY}
          onChange={handleChange}
        />

        <button 
          disabled={!isVerified} 
          onClick={handleSubmit} 
          class="btn btn-primary border-none w-full rounded-full bg-[#03A9F4] hover:bg-[#03A9F4] mt-6"
        >
          <UploadIcon className='h-5 w-5' />
          Submit
        </button>
        
        <div className='flex space-x-2 bg-[#023750] px-4 py-2 mt-4 rounded-lg'>
          <InformationCircleIcon className='h-5 w-5 mt-1 text-[#03A9F4]' />
          <p>You can request 5 testnet once per address every 24h.</p>
        </div>
      </div>
    </div>
  )
}
