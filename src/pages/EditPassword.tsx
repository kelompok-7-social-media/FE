import { Link } from "react-router-dom";

import { ButtonSmall } from "components/Button";
import Layout from "components/Layout";
import { useTitle } from "utils/hooks/customHooks";

const EditPassword = () => {
  useTitle(`Edit your password`);
  return (
    <Layout>
      <section className="bg-gradient-to-b from-bgpurple to-bgpink h-full pt-40 px-10 sm:pt-24 md:px-32 lg:px-60 xl:px-96">
        <div className="my-5 sm:border-4 sm:rounded-3xl sm:p-20">
          <p className="text-white">Password :</p>
          <input
            className="w-full rounded-full py-2 px-5 mb-5"
            type="text"
            placeholder="yourmail@mail.com"
          />
          <p className="text-white">Re-Password :</p>
          <input
            className="w-full rounded-full py-2 px-5"
            type="text"
            placeholder="****************"
          />
          <div className="flex justify-center pt-5 gap-5">
            <Link className="flex justify-center mt-7 mb-5" to="/timeline">
              <ButtonSmall label="Cancel" />
            </Link>
            <Link className="flex justify-center mt-7 mb-5" to="/timeline">
              <ButtonSmall label="Done" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EditPassword;
