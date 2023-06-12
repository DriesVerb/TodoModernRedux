import { Dispatch, SetStateAction, ChangeEvent } from "react";

import { Checkbox as Check, FormLabel } from "@mui/material";

interface CheckboxProps {
  checked: boolean;
  label: string;
  onChange: Dispatch<SetStateAction<boolean>>;
}

export const Checkbox = (props: CheckboxProps) => {
  const { checked, onChange, label } = props;

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Check checked={checked} onChange={changeHandler} />
    </>
  );
};
