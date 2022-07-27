import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuAlt2Icon } from '@heroicons/react/solid';
import Drawer from './Drawer';
import logo from '../assets/selendra.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:w-3/4 mx-auto">
      <div className="p-4 flex justify-between items-center">
        <Link to="/testnet">
          <img src={logo} alt="" height={24} width={120} />
        </Link>
        <div className="hidden w-64 md:grid grid-cols-2 gap-x-8 align-middle">
          <Link to="/testnet">
            <p className="font-bold text-white hover:text-[#03A9F4] active:text-[#03A9F4] ">
              Testnet
            </p>
          </Link>
          <Link to="/">
            <p className="font-bold text-white hover:text-[#03A9F4] cursor-not-allowed">
              Mainnet
            </p>
          </Link>
        </div>
        <MenuAlt2Icon
          onClick={() => setIsOpen(true)}
          className="md:hidden w-8 h-8 cursor-pointer"
        />
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className="px-8 py-4">
            <img src={logo} alt="" height={24} width={120} className="mb-6" />
            <Link to="/testnet">
              <p className=" text-white-900 font-bold text-lg mb-6 ">Testnet</p>
            </Link>
            <Link to="/">
              <p className="font-bold text-lg cursor-not-allowed">Mainnet</p>
            </Link>
          </div>
        </Drawer>
      </div>
      <div className="magic-line" />
    </div>
  );
}
