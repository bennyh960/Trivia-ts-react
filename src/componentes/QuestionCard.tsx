import React from "react";
// import { AnswerObject } from "../App";
import { ButtonWrapper, Wrapper } from "./question.card";
type questionCardProps = {
  question: string;
  answeres: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  questionNum: number;
  totalQuestions: number;
  userAnswere: any;
  // userAnswere: AnswerObject;
};

export const QuestionCard: React.FC<questionCardProps> = ({
  question,
  answeres,
  callback,
  userAnswere,
  questionNum,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNum}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answeres?.map((answer, i) => (
          <ButtonWrapper
            key={i}
            correct={userAnswere?.cottectAnswer === answer}
            userClicked={userAnswere?.answer === answer}
          >
            <button disabled={!!userAnswere} onClick={callback} value={answer}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};
