"use client";

import { ThumbsUp } from "lucide-react";
import { HTMLAttributes } from "react";

import { strings } from "./string";

interface LikeButtonProps extends HTMLAttributes<HTMLButtonElement> {
  reactions: number;
  isLoading?: boolean;
}

export const LikeButton = (props: LikeButtonProps) => {
  const { isLoading, reactions, onClick } = props;

  const hasLike = reactions > 0;

  const iconColorBasedOnLike = hasLike
    ? "text-ocean"
    : "text-secondary group-hover:text-primary";

  return (
    <div className="flex w-fit items-center gap-2.5 rounded-md bg-tertiary/50 p-2">
      <button
        type="button"
        title={strings.react}
        onClick={onClick}
        className="group flex items-center justify-center gap-1 rounded-md bg-background/50 p-2 transition-all hover:bg-background"
      >
        <ThumbsUp className={`h-4 w-4 ${iconColorBasedOnLike}`} />
        {hasLike && (
          <span
            className={`${!isLoading && "animate-reaction-reveal"} text-sm leading-none text-secondary group-hover:text-primary`}
          >
            {"+ "}
            {reactions}
          </span>
        )}
      </button>
    </div>
  );
};
