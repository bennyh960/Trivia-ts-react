import React, { useState } from "react";
type questionCardProps = {
  question: string;
  answeres: string[];
  callback: any;
  userAnswere: any;
  questionNum: number;
  totalQuestions: number;
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
    <div>
      <p className="number">
        Question: {questionNum}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answeres?.map((answere) => (
          <div>
            <button disabled={userAnswere} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answere }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
