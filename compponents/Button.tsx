import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  color: "red" | "black";
  size: number;
  sdjflskjsfldkjflksjdlkfsjlk: string;
};

const Button: FC<ButtonProps> = (props) => {
  if (props.size === 1) {
  }

  if (props.color === "red") {
    return (
      <button style={{ backgroundColor: "#ff0000", color: "#fff" }}>
        {props.children}
      </button>
    );
  }

  if (props.color === "black") {
    return (
      <button style={{ backgroundColor: "#000", color: "#fff" }}>
        {props.children}
      </button>
    );
  }
};

export default Button;
