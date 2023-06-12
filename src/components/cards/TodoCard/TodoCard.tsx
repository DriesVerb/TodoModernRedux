import { useState } from "react";

import { Checkbox } from "../../../elements";

interface TodoCardProps {
  title: string;
  text: string;
}

export const TodoCard = (props: TodoCardProps) => {
  const { title, text } = props;
  const [checked, setChecked] = useState(false);

  return (
    <li className="TodoCardContainer">
      <h3>{title}</h3>
      <p className={checked ? "checked" : undefined}>{text}</p>
      <Checkbox label="done" checked={checked} onChange={setChecked} />
    </li>
  );
};
