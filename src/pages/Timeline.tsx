import { BiImageAdd, BiDotsHorizontalRounded } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import moment from "moment";
import axios from "axios";

import { ButtonWhite } from "components/Button";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import PostCard from "components/PostCard";
import { useTitle } from "utils/hooks/customHooks";
import { PostType } from "utils/types/post";

const Timeline = () => {
  useTitle(`Galaxy - Timeline`);
  const [cookie] = useCookies(["token"]);
  const [datas, setDatas] = useState<PostType[]>([]);
  const checkToken = cookie.token ? true : false;
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

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
              <span className="text-white">
                <BiImageAdd size={30} />
              </span>
              <span>
                <ButtonWhite label="Publish" />
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
