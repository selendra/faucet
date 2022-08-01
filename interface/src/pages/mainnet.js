import React, { useState } from "react";
import logo from "../assets/selendra-logo.png";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
import airdrop from "../assets/airdrop.png";
const Testne = () => {
  const [address, setAddress] = useState("");
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
      if (!address) return toast.error("invalid address!");

      const res = await fetch(`${process.env.REACT_APP_API}/claim/testnet`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: address }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.data);
      } else {
        toast.error(data.data);
      }
    } catch (error) {
      toast.error("Something went wrong!");
      return;
    }
  };
  return (
    <div>
      <div className="container mx-auto sm:justify-items-center sm:flex-col lg:px-32 2xl:px-64">
        <div className="mt-20">
          <div className=" rounded-2xl p-0.5  pb-2 bg-gradient-to-r from-cyan-500 to-blue-500 h-full ">
            <div className="card h-full bg-white bg-opacity-70 backdrop-blur">
              <figure className="px-10 pt-10">
                <center>
                  <img
                    //   className="pt-10"
                    src={logo}
                    alt="selendra logo"
                    width={50}
                  />
                </center>
              </figure>
              <div className="card-body">
                <div className="p-0.5 bg-blue-500 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 ">
                  <div className="">
                    {/* <label className="font-semibold text-md text-gray-800">
                    Wallet Address:
                  </label> */}
                    <input
                      disabled
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Wallet Address"
                      className="w-full bg-white h-12 rounded-lg px-4 bg-opacity-90  focus:outline-none cursor-not-allowed"
                    />
                  </div>
                </div>
                {/* <div className="">
                  <label className="font-semibold text-md text-gray-800">
                    Wallet Address:
                  </label>
                  <input
                    disabled
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Wallet Address"
                    className="w-full border-blue-500 border-2 border-b-4 bg-white h-12 rounded-lg px-4 focus:ring-2 ring-selendra"
                  />
                </div> */}
                {/* <ReCAPTCHA
                className="mt-6 flex justify-center"
                sitekey={process.env.REACT_APP_API}
                onChange={handleChange}
              /> */}
                <center>
                  <button
                    disabled={!isVerified}
                    onClick={handleSubmit}
                    class="btn btn-primary border-none h-12 w-1/3 py-2 px-22 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 mt-6"
                    // className="bg-blue-500 rounded-lg pt-3 w-1/3 mt-6  pb-3 bg-gradient-to-r from-pink-500 to-purple-600 "
                  >
                    <span className="text-white font-bold text-xl">
                      Give me tSEL
                    </span>
                  </button>
                </center>
                {/* <button
                  disabled={!isVerified}
                  onClick={handleSubmit}
                  // className="bg-blue-500 rounded-lg pt-3  pb-3 bg-gradient-to-r from-cyan-500 to-blue-500 "
                  class="btn btn-primary border-none h-12 w-full py-2 px-22 rounded-lg bg-selendra hover:bg-selendra mt-6"
                >
                  <span className="text-white font-bold text-xl">
                    Claim SEL
                  </span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
        {/* Des====================== */}
        <div className="mt-20">
          <div className=" rounded-2xl p-0.5  pb-2 bg-gradient-to-r from-cyan-500 to-blue-500 h-full ">
            <div className="card h-full bg-white bg-opacity-70 backdrop-blur pb-12 px-8">
              <figure className="px-10 pt-10">
                <center>
                  <img
                    //   className="pt-10"
                    src={airdrop}
                    alt="selendra logo"
                    width={200}
                  />
                </center>
              </figure>
              <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r  from-cyan-500 to-blue-500 py-4 text-center">
                Coming soon!
              </h1>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer footer-center p-5 mt-12">
        <div>
          <p className="font-normal text-xl text-opacity-70">
            Made with ❤️ @Selendra Blockchain
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Testne;
