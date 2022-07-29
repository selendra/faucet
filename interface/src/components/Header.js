import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MenuAlt2Icon } from '@heroicons/react/solid';
import Drawer from './Drawer';
import logo from '../assets/selendra.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  let location = useLocation();
  const [value, setValue] = useState(
    `${location.pathname.substring(1, location.pathname.length)}`
  );

  const onChange = () => {
    setValue(`${location.pathname.substring(1, location.pathname.length)}`);
  };

  useEffect(() => {
    onChange();
  });

  return (
    <div className="md:w-3/4 mx-auto">
      <div className="p-4 flex justify-between items-center">
        <Link to="/testnet">
          <img src={logo} alt="" height={24} width={120} />{' '}
        </Link>
        {/* <div className="hidden w-64 md:grid grid-cols-2 gap-0 align-middle">
          <button>
            <NavLink
              to="/testnet"
              className={({ isActive }) =>
                'btn btn-link ' +
                (isActive
                  ? 'bg-selendra text-white hover:bg-sky-700 no-underline focus:no-underline px-6'
                  : 'text-selendra hover:text-white hover:bg-sky-700 focus:no-underline px-6')
              }
            >
              Testnet
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/mainnet"
              className={({ isActive }) =>
                'btn btn-link ' +
                (isActive
                  ? 'bg-selendra text-white hover:bg-sky-700 no-underline focus:no-underline px-6'
                  : 'text-selendra hover:text-white hover:bg-sky-700 focus:no-underline px-6')
              }
            >
              Mainnet
            </NavLink>
          </button>
        </div> */}
        <div className="dropdown dropdown-end ">
          <label
            tabindex="0"
            className="btn btn-ghost bg-selendra rounded-btn text-white w-52"
          >
            {value}
          </label>
          <ui
            tabindex="0"
            className=" glass bg-base menu dropdown-content p-2 shadow rounded-lg w-52 mt-4 mx-auto"
          >
            {value === 'testnet' ? (
              <NavLink
                onClick={onChange}
                to="/mainnet"
                className={({ isActive }) =>
                  'btn btn-link ' +
                  (isActive
                    ? 'bg-selendra text-white hover:bg-sky-700 no-underline focus:no-underline '
                    : 'text-selendra hover:text-white hover:bg-sky-700 no-underline focus:no-underline ')
                }
              >
                Mainnet
              </NavLink>
            ) : (
              <NavLink
                onClick={onChange}
                to="/testnet"
                className={({ isActive }) =>
                  'btn btn-link ' +
                  (isActive
                    ? 'bg-selendra text-white hover:bg-sky-700 no-underline focus:no-underline '
                    : 'text-selendra hover:text-white hover:bg-sky-700 no-underline focus:no-underline ')
                }
              >
                Testnet
              </NavLink>
            )}
          </ui>
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
            <Link to="/mainnet">
              <p className="font-bold text-lg ">Mainnet</p>
            </Link>
          </div>
        </Drawer>
      </div>
      <div className="magic-line" />
    </div>
  );
}
