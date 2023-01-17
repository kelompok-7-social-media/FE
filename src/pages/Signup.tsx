import React from "react";

import Layout from "components/Layout";

const Signup = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-bgpurple to-bgpink h-full flex justify-center items-center flex flex-col">
        <p className="text-white">Your Name : </p>
        <p className="text-white">Username : </p>
        <p className="text-white">Email : </p>
        <p className="text-white">Password : </p>
        <p className="text-white">Re-Password : </p>
      </section>
    </Layout>
  );
};

export default Signup;
