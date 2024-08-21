import React from "react";
import Question from "@/components/Question.tsx";
import { QuestionType } from "@/types";

interface PropsTypes {
  questions: QuestionType[];
}

const QuestionsList: React.FC<any> = ({ questions }: PropsTypes) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <div className="flex flex-col gap-6">
      {questions.map((question: QuestionType) => (
        <Question
          key={question.id}
          id={question.id}
          username={question.user.username}
          userImageSrc={"/images/koba.jpeg"}
          time={question.created_at.slice(0, 10)}
          title={question.title}
          description={question.question}
          tags={question?.tags.map((tag) => tag.name)}
          views={0}
          comments={question.comments.length}
          likes={question.likes}
          mainPage={true}
          questionImageSrc={
            question.image !== null
              ? `${apiUrl}/images/${question.image}`
              : null
          }
        />
      ))}
    </div>
  );
};

export default QuestionsList;
