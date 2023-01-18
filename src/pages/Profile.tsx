import { BiImageAdd, BiDotsHorizontalRounded } from "react-icons/bi";
import React from "react";

import { ButtonSmall } from "components/Button";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import { useTitle } from "utils/hooks/customHooks";

const Profile = () => {
  useTitle(`'s Profile`);
  return (
    <Layout>
      <Navbar />
      <section className="bg-gradient-to-b from-bgpurple to-bgpink py-5 px-5 mb-5 rounded-b-2xl sm:rounded-2xl sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
        <div className="flex items-center mb-5">
          <img
            className="w-20 rounded-full mx-2"
            src="src/assets/photo1.jpg"
            alt="photo"
          />
          <span className="mx-3 w-full">
            <p className="text-2xl text-white font-semibold">John Doe</p>
            <p className="text-white font-light">@JohnDoe</p>
          </span>
        </div>
        <div className="flex justify-center gap-3 md:gap-5 text-sm lg:gap-10">
          <span>
            <ButtonSmall label="Edit Profile" />
          </span>
          <span>
            <ButtonSmall label="Edit Password" />
          </span>
        </div>
      </section>
      <section className="border-b-2 pb-3 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
        <p className="flex justify-center text-lg border-b-2 font-medium py-5 mb-3 md:text-2xl">
          Your Posts
        </p>
        <div className="flex items-center justify-between px-3 mb-2">
          <div className="flex items-center gap-3">
            <img
              className="w-10 rounded-full"
              src="src/assets/photo1.jpg"
              alt="photo"
            />
            <span className="font-bold">username</span>
            <span className="text-xs font-normal">01 Jan 2023</span>
          </div>
          <span className="flex">
            <BiDotsHorizontalRounded />
          </span>
        </div>
        <div className="mb-2 flex justify-center">
          <img src="src/assets/picture.jpg" alt="picture" />
        </div>
        <p className="px-3 mb-2 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>

        <p className="px-3 mb-2 text-xs font-bold">View all comments</p>
        <div className="flex items-center justify-between px-3">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold">username</span>
            <span className="text-xs font-normal">01 Jan 2023</span>
          </div>
          <span className="flex">
            <BiDotsHorizontalRounded />
          </span>
        </div>
        <p className="px-3 mb-2 text-sm">
          Comments content Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </section>
    </Layout>
  );
};

export default Profile;
