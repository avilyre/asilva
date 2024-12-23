"use client";

import { LikeButton } from "@/components/like-button";
import { useReaction } from "@/hooks/use-reaction";

import { ReactionProps } from "./interface";

export const Reaction = (props: ReactionProps) => {
  const { slug } = props;

  const { isLoading, reactions, handleAddReaction } = useReaction({ slug });

  return (
    <LikeButton
      isLoading={isLoading}
      reactions={reactions}
      onClick={handleAddReaction}
    />
  );
};
