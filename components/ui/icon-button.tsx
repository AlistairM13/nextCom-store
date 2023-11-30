import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
  props?: ButtonProps
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
  props
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition',
        className
      )}
      {...props}
    >
      {icon}
    </Button>
  );
}

export default IconButton;
