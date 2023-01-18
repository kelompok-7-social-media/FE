import { BiDotsHorizontalRounded } from "react-icons/bi";

import photo1 from "src/assets/photo1.jpg";
import picture from "src/assets/picture.jpg";
import { ButtonWhite } from "components/Button";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import { useTitle } from "utils/hooks/customHooks";

const Detail = () => {
  useTitle(`'s Post`);
  return (
    <Layout>
      <Navbar />
      <div className="pt-1 dark:bg-gray-900 dark:text-white">
        <section className="bg-gradient-to-b from-bgpurple to-bgpink py-5 px-5 mb-5 rounded-b-2xl sm:rounded-2xl sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
          <div className="flex items-center justify-between px-3 mb-2">
            <div className="flex items-center gap-3">
              <img className="w-10 rounded-full" src={photo1} alt="photo" />
              <span className="font-bold text-white">username</span>
              <span className="text-xs text-white font-normal">
                01 Jan 2023
              </span>
            </div>
            <span className="flex text-white">
              <BiDotsHorizontalRounded />
            </span>
          </div>
          <div className="mb-2 flex justify-center">
            <img src={picture} alt="picture" />
          </div>
          <p className="px-3 mb-5 text-white text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <input
            className="w-full rounded-2xl py-2 px-5 border-2 border-gray-500 mb-3"
            type="text"
            placeholder="What's your opinion?"
          />
          <div className="flex justify-end items-center gap-3">
            <span>
              <ButtonWhite label="Publish" />
            </span>
          </div>
        </section>
        <section className="border-b-2 pb-3 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
          <div className="flex items-center justify-between px-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold">username</span>
              <span className="text-xs font-normal">01 Jan 2023</span>
            </div>
            <span className="flex">
              <BiDotsHorizontalRounded />
            </span>
          </div>
          <p className="px-3 mb-5 text-sm">
            Comments content Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
          <div className="flex items-center justify-between px-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold">username</span>
              <span className="text-xs font-normal">01 Jan 2023</span>
            </div>
            <span className="flex">
              <BiDotsHorizontalRounded />
            </span>
          </div>
          <p className="px-3 mb-5 text-sm">
            Comments content Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
          <div className="flex items-center justify-between px-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold">username</span>
              <span className="text-xs font-normal">01 Jan 2023</span>
            </div>
            <span className="flex">
              <BiDotsHorizontalRounded />
            </span>
          </div>
          <p className="px-3 mb-5 text-sm">
            Comments content Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Detail;
