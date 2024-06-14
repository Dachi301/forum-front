import React from 'react';
import Question from "@/components/Question.tsx";
import {QuestionType} from "@/types";

interface PropsTypes {
    questions: QuestionType[]
}

const QuestionsList: React.FC<any> = ({questions}: PropsTypes) => {
    return (
        <div className='flex flex-col gap-6'>
            {questions.map((question: QuestionType) => (
                <Question
                    key={question.id}
                    id={question.id}
                    username={question.user.username}
                    userImageSrc={'/images/koba.jpeg'}
                    time={question.created_at.slice(0, 10)}
                    title={question.title}
                    description={question.question}
                    tags={question?.tags.map((tag) => tag.name)}
                    views={0}
                    comments={question.comments.length}
                    votes={question.likes.length}
                    mainPage={true}
                    questionImageSrc={question.image}
                />

            ))}
        </div>
    );
}

export default QuestionsList;
