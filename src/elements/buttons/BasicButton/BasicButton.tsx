import { Button } from "@mui/base";

interface BasicButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const BasicButton = (props: BasicButtonProps) => {
  const { text, type, onClick } = props;

  const isSubmit = type === "submit";

  return (
    <>
      <Button type={type} onClick={isSubmit ? undefined : onClick}>
        {text}
      </Button>
    </>
  );
};
