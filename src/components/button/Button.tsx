import React from "react";

interface ButtonProps {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  margin?: string;
  padding?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  borderColor,
  textColor,
  margin = "0",
  padding = "10px 20px",
  children,
}) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        margin: margin,
        padding: padding,
        color: textColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "20px",
        cursor: "pointer",
        height: "63px",
        fontSize: "18px",
        fontWeight: "500",
      }}
    >
      {children}
    </button>
  );
};