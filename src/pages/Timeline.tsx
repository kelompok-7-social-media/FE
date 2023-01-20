import withReactContent from "sweetalert2-react-content";
import React, { useState, useEffect } from "react";
import { BiImageAdd } from "react-icons/bi";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import axios from "axios";

import { ButtonWhite } from "components/Button";
import PostCard from "components/PostCard";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import { useTitle } from "utils/hooks/customHooks";
import { PostType } from "utils/types/post";
import Swal from "utils/Swal";

const Timeline = () => {
  useTitle(`Galaxy - Timeline`);
  const [cookie] = useCookies(["token"]);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [datas, setDatas] = useState<PostType[]>([]);
  const [description, setDescription] = useState<string>("");
  const [file_photos, setFilePhotos] = useState<[]>([]);
  const checkToken = cookie.token;

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get("posts")
      .then((data) => {
        const results = data.data.data;
        setDatas(results);
      })
      .catch((error) => {
        alert(error.toString());
      });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      description,
      file_photos,
    };
    axios
      .post("posts", body)
      .then((res) => {
        const { data, message } = res.data;
        MySwal.fire({
          title: "Posted",
          text: message,
          showCancelButton: false,
        });
        navigate("timeline");
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      });
  };

  return (
    <Layout>
      <Navbar />
      <div className="pt-1 dark:bg-gray-900 dark:text-white">
        {checkToken && (
          <section className="bg-gradient-to-b from-bgpurple to-bgpink py-5 px-5 mb-5 rounded-b-2xl sm:rounded-2xl sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
            <input
              className="w-full rounded-2xl py-5 px-5 border-2 border-gray-500 mb-3"
              type="text"
              placeholder="What's on your mind?"
            />
            <div className="flex justify-end items-center gap-3">
              <span className="duration-300 active:scale-90 hover:cursor-pointer text-white">
                <BiImageAdd size={30} />
              </span>
              <span>
                <ButtonWhite type="submit" id="btn-post" label="Publish" />
              </span>
            </div>
          </section>
        )}
        {datas.map((data) => (
          <PostCard
            key={data.post_id}
            post_id={data.post_id}
            username={data.username}
            description={data.description}
            photos={data.photos}
            created_at={data.created_at}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Timeline;
