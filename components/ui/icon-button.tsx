import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";

interface IconButtonProps extends ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactElement;
  className?: string;
}


const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
  ...props
}) => {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className={cn(
        'rounded-full flex items-center justify-center bg-white text-black border shadow-md p-2 hover:scale-110 transition',
        className
      )}
      {...props}
    >
      {icon}
    </Button>
  );
}

export default IconButton;
