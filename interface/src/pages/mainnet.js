import React from 'react';
import logo from '../assets/selendra.png';
import reward from '../assets/sel-coin.png';

export default function Mainnet() {
  return (
    <>
      <div className="background-img animate-pulse" />
      <div className="home-page py-16 xl:py-8 ">
        <div className="my-card flex xl:w-2/3 ">
          <div className="shadow-md w-full py-20 xl:py-10 px-11 mx-auto">
            <center>
              <img
                className="pt-10"
                src={logo}
                alt="selendra logo"
                width={200}
              />
            </center>

            <div className="pt-16">
              <label className="font-semibold text-sm text-black">
                Wallet Address:
              </label>
              <input
                type="text"
                placeholder="Unavailable!"
                className="w-full bg-white h-12 rounded-lg px-4 focus:ring-2 ring-selendra cursor-not-allowed "
              />
            </div>

            <button
              disabled={true}
              class="btn btn-primary border-none h-12 w-full py-2 px-22 rounded-lg bg-selendra hover:bg-selendra
               mt-16 cursor-not-allowed"
            >
              <span className="text-white font-bold text-xl">Claim SEL</span>
            </button>
          </div>

          <div className="other-card w-full py-24 xl:py-10 px-11 mx-auto">
            <h1 className="text-3xl font-bold text-red text-center mt-16">
              AIRDROPS COMING SOON ...
            </h1>
            <div>
              <img src={reward} alt="mainnet" className="w-2/3 mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <footer class="footer footer-center p-5 bg-black-500 text-white">
        <div>
          <p>Build with ❤️ SELENDRA Team.</p>
        </div>
      </footer>
    </>
  );
}
