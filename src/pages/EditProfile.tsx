import { Link } from "react-router-dom";
import { useState } from "react";

import { ButtonSmall } from "components/Button";
import Layout from "components/Layout";
import { useTitle } from "utils/hooks/customHooks";

const EditProfile = () => {
  useTitle(`Edit your profile`);
  return (
    <Layout>
      <section className="bg-gradient-to-b from-bgpurple to-bgpink h-full pt-40 px-10 sm:pt-24 md:px-32 lg:px-60 xl:px-96">
        <div className="my-5 sm:border-4 sm:rounded-3xl sm:p-20">
          <div className="flex items-center mb-5">
            <span className="flex flex-col items-center duration-300 hover:cursor-pointer active:scale-90">
              <img
                className="w-20 rounded-full mx-2"
                src="src/assets/photo1.jpg"
                alt="photo"
              />
              <span className="text-xs text-white font-light">
                Edit picture
              </span>
            </span>
            <span className="mx-3 w-full">
              <p className="text-2xl text-white font-semibold">John Doe</p>
              <p className="text-white font-light">@JohnDoe</p>
            </span>
          </div>
          <p className="text-white">Name :</p>
          <input
            className="w-full rounded-full py-2 px-5 mb-5"
            type="text"
            placeholder="yourmail@mail.com"
          />
          <p className="text-white">Username :</p>
          <input
            className="w-full rounded-full py-2 px-5"
            type="text"
            placeholder="****************"
          />
          <div className="flex justify-center pt-5 gap-5">
            <Link className="flex justify-center mt-7 mb-5" to="/profile">
              <ButtonSmall label="Cancel" />
            </Link>
            <Link className="flex justify-center mt-7 mb-5" to="/profile">
              <ButtonSmall label="Done" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EditProfile;
