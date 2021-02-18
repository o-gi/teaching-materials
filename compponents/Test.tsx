import { FC } from "react";

type TestProps = {
  value: string;
};

const Test: FC<TestProps> = (props) => {
  return <div className="red">{props.value}</div>;
};

export default Test;
