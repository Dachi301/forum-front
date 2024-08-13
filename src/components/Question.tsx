import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "@/components/buttons/Button.tsx";
import ViewsIcon from "@/assets/icons/ViewsIcon.tsx";
import VotesIcon from "@/assets/icons/VotesIcon.tsx";
import CommentsIcon from "@/assets/icons/CommentsIcon.tsx";
import QuestionLikeIcon from "@/assets/icons/QuestionLikeIcon.tsx";
import createAxiosInstance from "@/axios/axios-instance.ts";
import { useCookies } from "react-cookie";

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
  const [cookies, , removeCookie] = useCookies(["user"]);
  const [liked, setLiked] = useState<boolean>(false);

  const axiosInstance = createAxiosInstance(cookies.user?.token);

  const user = useSelector((state) => state.user);
  const isAuthenticated = Object.keys(user).length !== 0;

  const notify = () =>
    toast.error("Please log in or sign up!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  useEffect(() => {
    axiosInstance
      .get(`/questions/${id}`)
      .then((resp) => resp.data)
      .then((data) => {
        setLiked(data.likes.some((like: any) => like.user_id === user.id)); // Check if the user has liked the question
      })
      .catch((error) => console.log(error));
  }, [id, user.id]);

  const handleLikeUnlike = async () => {
    axiosInstance
      .post(`/questions/${id}/like-unlike-question`)
      .then(function (response) {
        console.log({ response });
        if (response.status >= 200 && response.status < 300) {
          setLiked((prev) => !prev);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
        //   Single Question Page
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
              text={liked ? "Liked" : "Like"}
              onClick={isAuthenticated ? handleLikeUnlike : notify}
              icon={<QuestionLikeIcon />}
              className={
                "flex items-center gap-3 px-5 py-2 bg-[#1682FD] rounded text-white text-xs"
              }
            />
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </div>
      )}
    </>
  );
};

export default Question;
