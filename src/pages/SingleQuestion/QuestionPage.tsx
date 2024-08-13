import { useParams } from "react-router-dom";

import useFetch from "@/hooks/useFetch.ts";

import MainLayout from "@/components/layouts/MainLayout.tsx";
import Question from "@/components/Question.tsx";
import Button from "@/components/buttons/Button.tsx";
import SuggestIcon from "@/assets/icons/SuggestIcon.tsx";

function QuestionPage() {
  const { id } = useParams();
  const { data, loading, error } = useFetch<any>(`questions/${id}`);

  // Check if loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check for errors
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <MainLayout>
      <div className={"flex flex-col gap-5"}>
        <Question
          id={data?.id}
          username={data?.user.username}
          userImageSrc={"/images/koba.jpeg"}
          time={data?.created_at.slice(0, 10)}
          title={data?.title}
          description={data?.question}
          tags={data?.tags.map((tag: any) => tag.name)}
          views={123}
          comments={33}
          votes={data?.likes}
          mainPage={false}
          questionImageSrc={data?.image}
        />
        <div className={"w-[75%]"}>
          <h1
            className={
              "text-[18px] text-center text-[#808080] font-bold leading-6 tracking-wider"
            }
          >
            Suggestions
          </h1>
        </div>
        <div
          className={
            "flex flex-col gap-3 w-[75%] py-7 px-10 bg-white shadow-default"
          }
        >
          <textarea
            placeholder={"Type here your wise suggestion"}
            className={
              "w-full outline-0 text-[12px] font-light rounded border-[2px] border-[#EAEAEA] pt-2 pb-4 px-3"
            }
            id="w3review"
            name="w3review"
            rows={1}
            cols={40}
          ></textarea>
          <div className={"flex justify-end items-center gap-3"}>
            {/*<Button*/}
            {/*    className={'py-3 px-5 bg-[#EAEAEA] rounded text-[#808080] text-xs'}*/}
            {/*    text={'Cancel'}*/}
            {/*    onClick={() => {*/}
            {/*    }}/>*/}
            <Button
              icon={<SuggestIcon />}
              text={"Suggest"}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default QuestionPage;
