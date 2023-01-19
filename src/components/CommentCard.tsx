import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FC } from "react";

interface CommentCardProps {
  comment: string;
  comment_id: number;
  created_at: string;
  username: string;
}

const CommentCard: FC<CommentCardProps> = ({
  comment,
  created_at,
  username,
}) => {
  return (
    <section className="py-1">
      <div className="flex items-center justify-between px-3">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold">{username}</span>
          <span className="text-[0.7rem] font-normal">{created_at}</span>
        </div>
        <span className="flex">
          <BiDotsHorizontalRounded />
        </span>
      </div>
      <p className="px-3 text-sm">{comment}</p>
    </section>
  );
};

export default CommentCard;
