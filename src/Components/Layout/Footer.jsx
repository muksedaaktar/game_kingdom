import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          
          <div>
            <h3 className="text-xl font-bold mb-4">Game Kingdom</h3>
            <p className="text-gray-400">
              Your go-to place for discovering popular games, latest updates, and exclusive content. Join our newsletter to never miss out!
            </p>
          </div>

          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-purple-400">Home</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-purple-400">Login</Link>
              </li>
              <li>
                <Link to="/registration" className="hover:text-purple-400">Registration</Link>
              </li>
              <li>
                <Link to="/my-profile" className="hover:text-purple-400">Profile</Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className=" ">
              <div>
                <a href="#" className="hover:text-purple-400">Twitter</a>
              </div>
              <div>
                <a href="#" className="hover:text-purple-400">Facebook</a>
              </div>
             <div>
               <a href="#" className="hover:text-purple-400">Instagram</a>
             </div>
             <div>
               <a href="#" className="hover:text-purple-400">YouTube</a>
             </div>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Game Kingdom. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
