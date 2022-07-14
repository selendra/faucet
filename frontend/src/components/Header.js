import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/selendra.png';

export default function Header() {
  return (
    <div className='w-3/4 mx-auto'>
      <div className='p-4 flex justify-between items-center'>
        <img src={logo} alt='' height={24} width={120} />
        <div className='w-64 grid grid-cols-2 gap-x-8 align-middle'>
          <Link to='/testnet'>
            <p className='font-bold hover:text-[#03A9F4]'>Testnet</p>
          </Link>
          <Link to='/mainnet'>
            <p className='font-bold hover:text-[#03A9F4]'>Mainnet</p>
          </Link>
        </div>
      </div>
      <div className='magic-line'/>
    </div>
  )
}
