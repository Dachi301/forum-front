import React from "react";
import Button from "@/components/buttons/Button.tsx";
import ViewsIcon from "@/assets/icons/ViewsIcon.tsx";
import VotesIcon from "@/assets/icons/VotesIcon.tsx";
import CommentsIcon from "@/assets/icons/CommentsIcon.tsx";
import QuestionLikeIcon from "@/assets/icons/QuestionLikeIcon.tsx";
import { Link } from "react-router-dom";

const Question: React.FC<any> = ({
  id,
  username,
  time,
  title,
  description,
  tags,
  views,
  comments,
  votes,
  userImageSrc,
  mainPage,
  questionImageSrc,
}) => {
  return (
    <>
      {mainPage ? (
        <Link
          to={`/questions/${id}`}
          className="shadow-default flex flex-col gap-4 bg-white w-[79%] rounded py-6 px-7"
        >
          <div className="flex items-center">
            <div className="flex items-center gap-4">
              <img
                className="w-10 h-10 rounded-[40px]"
                src={userImageSrc}
                alt="Profile Picture"
              />
              <div className="flex flex-col gap-1">
                <span className="text-[13px]">{username}</span>
                <span className="text-[10px]">{time}</span>
              </div>
            </div>
          </div>
          <div className=" relative flex flex-col gap-2">
            <span className="font-bold text-sm whitespace-nowrap">{title}</span>
            <p className="font-light text-sm">{description}</p>
            <img
              className={"w-full max-h-[250px] object-cover"}
              src={questionImageSrc}
              alt={"Question Image"}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {tags.map((tag: any, index: any) => (
                <Button
                  key={index}
                  className="flex items-center gap-[5px] px-[10px] py-1 bg-[#EAEAEA] text-[10px] text-[#808080] rounded"
                  text={tag} // Assuming `name` is the property you want to render
                  onClick={() => {
                    // Handle click event if needed
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <ViewsIcon />
                <span className="text-[13px] text-[#808080]">{views}</span>
              </div>
              <div className="flex items-center gap-1">
                <CommentsIcon />
                <span className="text-[13px] text-[#808080]">{comments}</span>
              </div>
              <div className="flex items-center gap-1">
                <VotesIcon />
                <span className="text-[13px] text-[#808080]">{votes}</span>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="shadow-default flex flex-col gap-4 bg-white w-[75%] rounded py-6 px-7">
          <div className="flex items-center">
            <div className="flex items-center gap-4">
              <img
                className="w-10 h-10 rounded-[40px]"
                src={userImageSrc}
                alt="Profile Picture"
              />
              <div className="flex flex-col gap-1">
                <span className="text-[13px]">{username}</span>
                <span className="text-[10px]">{time}</span>
              </div>
            </div>
          </div>
          <div className=" relative flex flex-col gap-2">
            <span className="font-bold text-sm whitespace-nowrap">{title}</span>
            <p className="font-light text-sm">{description}</p>
            <img
              className={"w-full max-h-[250px] object-cover"}
              src={questionImageSrc}
              alt={"Question Image"}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {tags.map((tag: any, index: any) => (
                <Button
                  key={index}
                  className="flex items-center gap-[5px] px-[10px] py-1 bg-[#EAEAEA] text-[10px] text-[#808080] rounded"
                  text={tag}
                  onClick={() => {}}
                />
              ))}
            </div>

            <Button
              text={"Like"}
              onClick={() => {}}
              icon={<QuestionLikeIcon />}
              className={
                "flex items-center gap-3 px-5 py-2 bg-[#1682FD] rounded text-white text-xs"
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Question;
