import withReactContent from "sweetalert2-react-content";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import galaxy from "src/assets/galaxy-white.svg";
import logo from "src/assets/logo-white.svg";
import { ButtonPink, ButtonWhite } from "components/Button";
import { CustomInput } from "components/Input";
import Layout from "components/Layout";
import { useTitle } from "utils/hooks/customHooks";
import Swal from "utils/Swal";

const Index = () => {
  useTitle("Welcome to Galaxy!");
  const [, setCookie] = useCookies(["token"]);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios
      .post("login", body)
      .then((res) => {
        const { data, message } = res.data;
        setCookie("token", data.token, { path: "/timeline" });
        MySwal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
        });
        navigate("/timeline");
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-bgpurple to-bgpink h-full py-16 md:hidden">
        <div className="w-full flex justify-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="w-full flex justify-center">
          <img className="w-40" src={galaxy} alt="logo" />
        </div>
        <div className="my-5 mx-16">
          <form onSubmit={(e) => handleSubmit(e)}>
            <p className="text-white">Email :</p>
            <CustomInput
              id="inputEmail"
              type="email"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-white">Password :</p>
            <CustomInput
              id="inputPassword"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-center my-3">
              <ButtonWhite
                type="submit"
                id="btn-register"
                label="Login"
                loading={loading || disabled}
              />
            </div>
            <p className="flex justify-center text-white font-light mb-3">OR</p>
            <span className="flex justify-center text-white text-sm gap-2">
              Don't have an account?
              <Link id="to-register" className="font-semibold" to="/register">
                Sign up
              </Link>
            </span>
          </form>
        </div>
      </section>
      <section className="bg-gradient-to-b from-bgpurple to-bgpink h-full py-16 hidden md:flex md:items-center md:px-10 lg:px-36 xl:px-60">
        <div className="w-1/2 flex flex-col items-center">
          <img src={logo} alt="logo" />
          <img className="w-40" src={galaxy} alt="logo" />
        </div>
        <div className="w-1/2 my-5 mx-16 border-4 py-20 px-10 rounded-3xl bg-white md:px-5">
          <form onSubmit={(e) => handleSubmit(e)}>
            <p className="text-black">Email :</p>
            <CustomInput
              id="inputEmail"
              type="email"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-black">Password :</p>
            <CustomInput
              id="inputPassword"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-center my-3">
              <ButtonPink
                id="btn-register"
                label="Login"
                loading={loading || disabled}
              />
            </div>
            <p className="flex justify-center text-black font-light mb-3">OR</p>
            <span className="flex justify-center text-black text-sm gap-2">
              Don't have an account?
              <Link className="font-semibold" to="/register">
                Sign up
              </Link>
            </span>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
