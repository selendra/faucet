import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import toast, { Toaster } from 'react-hot-toast';
// import toast from 'react-hot-toast';
import logo from '../assets/selendra.png';

export default function Testnet() {
  const [address, setAddress] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (value) => {
    // if value is null recaptcha expired
    if (value !== null) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!address) return toast.error('invalid address!');

      const res = await fetch(`${process.env.REACT_APP_API}/claim/testnet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: address }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.data);
      } else {
        toast.error(data.data);
      }
    } catch (error) {
      toast.error('Something went wrong!');
      return;
    }
  };

  return (
    <>
      <div className="background-img animate-pulse" />
      <div className="home-page py-16 xl:py-8 ">
        <div className="my-card flex xl:w-2/3  ">
          <div className="shadow-md w-full py-20 xl:py-10 px-11 mx-auto">
            <center>
              <img src={logo} alt="selendra logo" width={180} />
            </center>
            <div className="pt-16">
              <label className="font-semibold text-sm">Wallet Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="se ..."
                className="w-full bg-white h-12 rounded-lg px-4 focus:ring-2 ring-selendra "
              />
            </div>
            <ReCAPTCHA
              className="mt-6 flex justify-center"
              sitekey={process.env.REACT_APP_SITE_KEY}
              onChange={handleChange}
            />

            <button
              disabled={!isVerified}
              onClick={handleSubmit}
              class="btn btn-primary border-none h-12 w-full py-2 px-22 text-white font-extrabold text-xl rounded-lg bg-[#03A9F4] hover:bg-[#03A9F4] mt-6"
            >
              <span> Give me tSEL (Selendra testnet)</span>
            </button>
          </div>

          <div className="other-card w-full py-24 xl:py-10 px-11 mx-auto">
            <h1 className="text-xl font-bold">TESTNET DISCLAIMER</h1>
            <p className="pt-8 text-lg">
              Tokens on the Selendra Testnet{' '}
              <span className="text-[#ED1576] font-bold">
                ("Selendra testnet"){' '}
              </span>{' '}
              do not equate to Selendra Mainnet tokens{' '}
              <span className="text-[#03A9F4] font-bold"> ("SEL") </span> , have
              no monetary value, and cannot be exchanged for cash, cash
              equivalent, or other tokens or cryptocurrencies.
            </p>
            {/* <h1 className="text-xl mt-4 font-bold">tSEL Status</h1>
            <div className="leading-9">
              <p>
                <strong className="text-[#03A9F4]">94,031,932.9602 tSEL</strong>{' '}
                available
              </p>
              <p>
                <strong className="text-[#ED1576] font-bold">
                  5.0000 tSEL
                </strong>{' '}
                daily limit per address
              </p>
              <p>
                <strong>11</strong> recipients queued
              </p>
              <p>
                Currently at block <strong>12654033</strong>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
