import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-3xl text-fuchsia-600">
          Faucets
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li className="border-2 mr-5 " tabindex="0">
            <a>
              Ethereum Kovan
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 border-2 bg-base-100">
              <li>
                <a>Arbitrum Rinkeby</a>
              </li>
              <li>
                <a>Avalanche Fuji</a>
              </li>
              <li>
                <a>BNB Chain Testnet</a>
              </li>
              <li>
                <a>Ethereum Rinkeby</a>
              </li>
              <li>
                <a>Fantom Testnet</a>
              </li>
              <li>
                <a>Harmony Testnet</a>
              </li>
            </ul>
          </li>
          <li className="border-fuchsia-700 border-2">
            <a>Connect Wallet</a>
          </li>

          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn hover:bg-gray-300 bg-slate-200 ml-6 btn-circle avatar">
              <div className="w-30 bg-black rounded-full">
              
                <FaRegUserCircle />
              </div>
            </label>
            <ul
              tabindex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-40"
            >
              <li>
                <Link to='/login'>
                  Log In
                </Link>
              </li>
              <li>
                <Link to='/signup'>Sign Up</Link>
              </li>
              
              <li>
                <Link to='/'>FAQ</Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
