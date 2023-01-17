import { Link } from "react-router-dom";
import { useState } from "react";

import { ButtonPink, ButtonWhite } from "components/Button";
import Layout from "components/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-bgpurple to-bgpink h-full py-16 md:hidden">
        <div className="w-full flex justify-center">
          <img src="src/assets/logo-white.svg" alt="logo" />
        </div>
        <div className="w-full flex justify-center">
          <img className="w-40" src="src/assets/galaxy-white.svg" alt="logo" />
        </div>
        <div className="my-5 mx-16">
          <p className="text-white">Email :</p>
          <input
            className="w-full rounded-full py-2 px-5 mb-5"
            type="text"
            placeholder="yourmail@mail.com"
          />
          <p className="text-white">Password :</p>
          <input
            className="w-full rounded-full py-2 px-5"
            type="text"
            placeholder="****************"
          />
          <Link className="flex justify-center mt-7 mb-5" to="/timeline">
            <ButtonWhite label="Login" />
          </Link>
          <p className="flex justify-center text-white font-light mb-3">OR</p>
          <span className="flex justify-center text-white text-sm gap-2">
            Don't have an account?
            <Link className="font-semibold" to="/register">
              Sign up
            </Link>
          </span>
        </div>
      </section>
      <section className="bg-gradient-to-b from-bgpurple to-bgpink h-full py-16 hidden md:flex md:items-center md:px-10 lg:px-36 xl:px-60">
        <div className="w-1/2 flex flex-col items-center">
          <img src="src/assets/logo-white.svg" alt="logo" />
          <img className="w-40" src="src/assets/galaxy-white.svg" alt="logo" />
        </div>

        <div className="w-1/2 my-5 mx-16 border-4 py-20 px-10 rounded-3xl bg-white md:px-5">
          <p className="">Email :</p>
          <input
            className="w-full rounded-full py-2 px-5 mb-5 border-2 border-gray-500"
            type="text"
            placeholder="yourmail@mail.com"
          />
          <p className="">Password :</p>
          <input
            className="w-full rounded-full py-2 px-5 border-2 border-gray-500"
            type="text"
            placeholder="****************"
          />
          <Link className="flex justify-center mt-7 mb-5" to="/timeline">
            <ButtonPink label="Login" />
          </Link>
          <p className="flex justify-center font-light mb-3">OR</p>
          <span className="flex justify-center text-sm gap-2">
            Don't have an account?
            <Link className="font-semibold" to="/register">
              Sign up
            </Link>
          </span>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
