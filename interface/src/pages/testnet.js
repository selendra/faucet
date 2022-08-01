import React, { useState } from "react";
import logo from "../assets/testnet.png";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
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
      <div className="container mx-auto sm:justify-items-center sm:flex-col md:px-32 2xl:px-64">
        <div className="mt-20">
          <div className=" rounded-2xl p-0.5  pb-2 bg-gradient-to-r from-pink-500 to-purple-600 h-full ">
            <div className="card h-full bg-white bg-opacity-90 backdrop-blur">
              <figure className="px-10 pt-10">
                <center>
                  <img src={logo} alt="selendra logo" width={50} />
                </center>
              </figure>
              <div className="card-body">
                <div className="p-0.5 bg-blue-500 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 ">
                  <div className="">
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Wallet Address"
                      className="w-full bg-white h-12 rounded-lg px-4 bg-opacity-90  focus:outline-none"
                    />
                  </div>
                </div>
                {/* <ReCAPTCHA
                  className="mt-6 flex justify-center"
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  onChange={handleChange}
                /> */}
                <center>
                  <button
                    disabled={!isVerified}
                    onClick={handleSubmit}
                    className="bg-blue-500 rounded-lg pt-3 w-1/3 mt-6  pb-3 bg-gradient-to-r from-pink-500 to-purple-600 "
                  >
                    <span className="text-white font-bold text-xl">
                      Give me tSEL
                    </span>
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
        {/* Des====================== */}
        <div className="mt-20">
          <div className=" rounded-2xl p-0.5  pb-2 bg-gradient-to-r from-cyan-500 to-blue-500 h-full ">
            <div className="card h-full bg-white bg-opacity-70 backdrop-blur py-12 px-20">
              <h1 className="text-center font-bold text-2xl">
                TESTNET DISCLAIMER
              </h1>
              <p className="pt-8 text-xl text-black">
                Tokens on the Selendra Testnet{" "}
                <span className="text-[#ED1576] font-bold ">
                  ("Testnet SEL")
                </span>{" "}
                do not equate to Selendra Mainnet tokens{" "}
                <span className="text-[#03A9F4] font-bold"> ("SEL") </span> ,
                have no monetary value, and cannot be exchanged for cash, cash
                equivalent, or other tokens or cryptocurrencies.
              </p>
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
