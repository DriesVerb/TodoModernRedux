import { TextField as Input } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface TextFieldProps {
  label: string;
  type: string;
  onChange: Dispatch<SetStateAction<string>>;
  isRequired: boolean;
  value?: string | undefined;
  placeHolder?: string;
}

export const TextField = (props: TextFieldProps) => {
  const { label, type, onChange, isRequired, value, placeHolder } = props;

  return (
    <Input
      value={value}
      label={label}
      type={type}
      placeholder={placeHolder}
      onChange={(e) => onChange(e.currentTarget.value)}
      required={isRequired}
    />
  );
};
