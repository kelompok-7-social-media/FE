import { BiUser, BiDotsHorizontalRounded } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { FC } from "react";
import axios from "axios";

import CommentCard from "components/CommentCard";
import { CommentsType } from "utils/types/comment";

interface CardProps {
  post_id?: number;
  username?: string;
  description?: string;
  photos?: string;
  created_at?: string;
}

const PostCard: FC<CardProps> = ({
  post_id,
  username,
  description,
  photos,
  created_at,
}) => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState<CommentsType[]>([]);

  function onClickDetail() {
    navigate(`posts/${post_id}`);
  }

  useEffect(() => {
    fetchComment();
  }, []);

  function fetchComment() {
    axios
      .get(`comments/${post_id}`)
      .then((data) => {
        const results = data.data.data;
        setDatas(results);
      })
      .catch((error) => {
        alert(error.toString());
      });
  }

  return (
    <section className="border-b-2 py-4 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
      <div
        className="flex items-center justify-between px-3 mb-2"
        onClick={() => onClickDetail()}
      >
        <div className="flex items-center gap-3">
          <span className="border-2 rounded-full border-black dark:border-white">
            <BiUser size={25} />
          </span>
          <span className="text-sm font-bold lowercase">{username}</span>
          <span className="text-xs tracking-tighter">{created_at}</span>
        </div>
        <span className="flex">
          <BiDotsHorizontalRounded />
        </span>
      </div>
      <div className="mb-2 flex justify-center">
        <img src={photos} alt="photos" />
      </div>
      <p className="px-3 mb-2 text-sm">{description}</p>

      <p
        className="px-3 mb-2 text-xs font-bold"
        onClick={() => onClickDetail()}
      >
        View all comments
      </p>
      {datas.slice(0, 3).map((data) => (
        <CommentCard
          key={data.comment_id}
          comment_id={data.comment_id}
          comment={data.comment}
          username={data.username}
          created_at={data.created_at}
        />
      ))}
    </section>
  );
};

export default PostCard;
