import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

import picture from "src/assets/picture.jpg";
import photo1 from "src/assets/photo1.jpg";
import { ButtonSmall } from "components/Button";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import { useTitle } from "utils/hooks/customHooks";

const Profile = () => {
  useTitle(`Galaxy - Profile`);
  return (
    <Layout>
      <Navbar />
      <div className="pt-1 dark:bg-gray-900 dark:text-white">
        <section className="bg-gradient-to-b from-bgpurple to-bgpink py-5 px-5 mb-5 rounded-b-2xl sm:rounded-2xl sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
          <div className="flex items-center mb-5">
            <img className="w-20 rounded-full mx-2" src={photo1} alt="photo" />
            <span className="mx-3 w-full">
              <p className="text-2xl text-white font-semibold">John Doe</p>
              <p className="text-white font-light">@JohnDoe</p>
            </span>
          </div>
          <div className="flex justify-center gap-3 md:gap-5 text-sm lg:gap-10">
            <Link to="/edit-profile">
              <ButtonSmall label="Edit Profile" />
            </Link>
            <Link to="/edit-password">
              <ButtonSmall label="Edit Password" />
            </Link>
          </div>
        </section>
        <section className="border-b-2 pb-3 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
          <p className="flex justify-center text-lg border-b-2 font-medium py-5 mb-3 md:text-2xl">
            Your Posts
          </p>
          <div className="flex items-center justify-between px-3 mb-2">
            <div className="flex items-center gap-3">
              <img className="w-10 rounded-full" src={photo1} alt="photo" />
              <span className="font-bold">username</span>
              <span className="text-xs font-normal">01 Jan 2023</span>
            </div>
            <span className="flex">
              <BiDotsHorizontalRounded />
            </span>
          </div>
          <div className="mb-2 flex justify-center">
            <img src={picture} alt="picture" />
          </div>
          <p className="px-3 mb-2 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
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
            Comments content Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Profile;
