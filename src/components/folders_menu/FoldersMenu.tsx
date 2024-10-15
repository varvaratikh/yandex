import { useState } from "react";
import style from "./style.module.sass";

interface FoldersMenuProps {
  title: string;
  content: string;
}

export const FoldersMenu: React.FC<FoldersMenuProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
          cursor: "pointer",
        }}
        onClick={toggleAccordion}
      >
        <span className={style.title}>{title}</span>
        {isOpen && (
          <span style={{ marginRight: "10px" }}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.438462 22.7014C-0.146154 22.0941 -0.146154 21.1107 0.438462 20.5049L12.8338 7.66113C14.0045 6.44647 15.9038 6.44647 17.0745 7.66113L29.5613 20.5979C30.1399 21.199 30.1474 22.1702 29.5763 22.7791C28.9932 23.4004 28.0323 23.4079 27.4402 22.7959L16.0147 10.9556C15.4286 10.3482 14.4797 10.3482 13.8936 10.9556L2.55807 22.7014C1.97345 23.3087 1.02458 23.3087 0.438462 22.7014Z"
                fill="#34367C"
              />
            </svg>
          </span>
        )}
        {!isOpen && (
          <span style={{ marginRight: "10px" }}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.438462 7.29859C-0.146154 7.90591 -0.146154 8.88934 0.438462 9.49512L12.8338 22.3389C14.0045 23.5535 15.9038 23.5535 17.0745 22.3389L29.5613 9.4021C30.1399 8.80098 30.1474 7.82983 29.5763 7.22095C28.9932 6.59965 28.0323 6.59212 27.4402 7.2041L16.0147 19.0444C15.4286 19.6518 14.4797 19.6518 13.8936 19.0444L2.55807 7.29859C1.97345 6.69125 1.02458 6.69125 0.438462 7.29859Z"
                fill="#34367C"
              />
            </svg>
          </span>
        )}
      </div>
      {isOpen && (
        <div>
          <p className={style.content}>{content}</p>
        </div>
      )}
    </div>
  );
};

//▲

//▼