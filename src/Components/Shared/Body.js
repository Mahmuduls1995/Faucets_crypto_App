import React, { useState } from "react";
import { GoAlert } from "react-icons/go";
import HomeETHHistory from "../../Container/HomeETHHistory";
import HomeTestLinkHistory from "../../Container/HomeTestLinkHistory";
import "../../Components/Shared/Body.css";
import Recaptch from "../../Container/Recaptch";
const Body = () => {
  const [tabs, setTabs] = useState(1);
  return (
    <div className="p-7 bg-sky-100">
      <h2 className=" text-3xl p-3 ml-3">Request testnet LINK</h2>
      <p className="w-1/2 p-3 ml-3">
        Get testnet LINK for an account on one of the supported blockchain
        testnets so you can create and test your own oracle and Chainlinked
        smart contract
      </p>

      <div className="bg-gray-100 ml-6 ">
        <div className="flex p-4 m-4 bg-lime-200 ml-6">
          <div className="mt-1">
            <GoAlert />
          </div>
          <div>
            <h2 className=" mx-3">
              {" "}
              Your wallet is connected to Ethereum Kovan, so you are requesting
              Ethereum Kovan Link/ETH.
            </h2>
          </div>
        </div>

        <label className="block ml-6">
          <span className=" mt-4 text-fuchsia-500 ">Wallet Address</span>
          <input
            type="text"
            placeholder="Waller Address ..."
            className="block p-2 w-1/2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400"
          />
        </label>

        <div className="mt-2 ml-6">
          <label htmlFor="wallet" className="text-fuchsia-500">
            Request Type
          </label>
          <div className=" flex">
            <div className=" flex">
              <input
                type="text"
                placeholder="Test link"
                name="test_link"
                value="20 Test Link"
                disabled={true}
                className="w-full p-2 px-12 mr-2 bg-slate-200"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="ETH"
                name="eth"
                value="0.5 ETH"
                disabled={true}
                className="w-full p-2 px-14 bg-slate-200"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 ml-6">
          <Recaptch />
        </div>
        <div className=" ml-6">
          <button
            type="submit"
            className=" btn hover:bg-violet-500 mt-3 bg-purple-500 "
          >
            Send Request
          </button>
        </div>

        <div className=" mt-5 ml-6">
          <h2 className=" mb-3 text-fuchsia-500">Request History</h2>
          <div>
            <button
              onClick={() => setTabs(1)}
              className={tabs === 1 && "active_tabs"}
            >
              ETH Transaction History
            </button>

            <button
              onClick={() => setTabs(2)}
              className={tabs === 2 && "active_tabs"}
            >
              TestLink Transaction History
            </button>
          </div>
          <div className="mt-5">
            {tabs === 1 && <HomeETHHistory />}
            {tabs === 2 && <HomeTestLinkHistory />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
