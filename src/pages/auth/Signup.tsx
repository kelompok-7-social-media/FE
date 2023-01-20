import withReactContent from "sweetalert2-react-content";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Swal from "utils/Swal";
import axios from "axios";

import galaxy from "src/assets/galaxy-white.svg";
import logo from "src/assets/logo-white.svg";
import { ButtonPink } from "components/Button";
import { CustomInput } from "components/Input";
import Layout from "components/Layout";
import { useTitle } from "utils/hooks/customHooks";

const Signup = () => {
  useTitle(`Let's sign up!`);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");

  useEffect(() => {
    if (email && password && rePassword && name && username) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password, rePassword, name, username]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
      name: name,
      username: username,
    };

    axios
      .post("register", body)
      .then((res) => {
        const { message, data } = res.data;
        MySwal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
        });
        if (data) {
          navigate("/");
        }
      })
      .catch((err) => {
        const { message } = err.response.data;
        MySwal.fire({
          title: "Failed",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-bgpurple to-bgpink py-10 md:hidden">
        <div className="w-full flex justify-center">
          <img className="w-20" src={logo} alt="logo" />
        </div>
        <div className="w-full flex justify-center">
          <img className="w-20" src={galaxy} alt="logo" />
        </div>
        <div className="my-5 mx-5 border-4 py-5 px-5 rounded-3xl bg-white md:px-5">
          <form onSubmit={(e) => handleSubmit(e)}>
            <p className="">Full Name :</p>
            <CustomInput
              id="inputName"
              type="text"
              placeholder="Your full name"
              onChange={(e) => setName(e.target.value)}
            />
            <p className="">Username :</p>
            <CustomInput
              id="inputUsername"
              type="text"
              placeholder="Your username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="">Email :</p>
            <CustomInput
              id="inputEmail"
              type="email"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="">Password :</p>
            <CustomInput
              id="inputPassword"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="">Re-password :</p>
            <CustomInput
              id="inputRePassword"
              type="password"
              placeholder="Re-password"
              onChange={(e) => setRePassword(e.target.value)}
            />
            <div className="flex justify-center my-3">
              <ButtonPink
                type="submit"
                id="btn-register"
                label="Register"
                loading={loading || disabled}
              />
            </div>
            <p className="flex justify-center font-light mb-1">OR</p>
            <span className="flex justify-center text-sm gap-2">
              Have an account?
              <Link className="font-semibold" to="/">
                Login
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
        <div className="w-1/2 my-5 mx-16 border-4 py-5 px-10 rounded-3xl bg-white md:px-5">
          <form onSubmit={(e) => handleSubmit(e)}>
            <p className="">Full Name :</p>
            <CustomInput
              id="inputName"
              type="text"
              placeholder="Your full name"
              onChange={(e) => setName(e.target.value)}
            />
            <p className="">Username :</p>
            <CustomInput
              id="inputUsername"
              type="text"
              placeholder="Your username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="">Email :</p>
            <CustomInput
              id="inputEmail"
              type="email"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="">Password :</p>
            <CustomInput
              id="inputPassword"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="">Re-password :</p>
            <CustomInput
              id="inputRePassword"
              type="password"
              placeholder="Re-password"
              onChange={(e) => setRePassword(e.target.value)}
            />
            <div className="flex justify-center my-3">
              <ButtonPink
                id="btn-register"
                label="Register"
                loading={loading || disabled}
              />
            </div>
            <p className="flex justify-center font-light mb-1">OR</p>
            <span className="flex justify-center text-sm gap-2">
              Have an account?
              <Link className="font-semibold" to="/">
                Login
              </Link>
            </span>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
