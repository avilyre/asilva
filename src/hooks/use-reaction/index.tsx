"use client";

import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";

import { Reaction as ReactionType } from "@/@types/reaction";
import { database } from "@/lib/firebase";
import { getReaction } from "@/services/get-reactions.service";

import { UseReactionProps } from "./interface";

export const useReaction = (props: UseReactionProps) => {
  const { slug } = props;

  const defaultAmount = 0;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reactions, setReactions] = useState<Partial<ReactionType>>({});

  const fetchReaction = useCallback(async () => {
    setIsLoading(() => true);

    const { id, amount } = await getReaction(slug);

    setReactions(() => ({
      id,
      amount,
    }));

    setIsLoading(() => false);
  }, [slug]);

  const handleAddReaction = async () => {
    if (reactions.amount && reactions.id) {
      const reactionIncrement = reactions.amount + 1;

      const reactionsRef = doc(database, "reactions", reactions.id);

      await updateDoc(reactionsRef, {
        amount: reactionIncrement,
      });

      await fetchReaction();

      return;
    }

    const reactionsRef = collection(database, "reactions");

    setDoc(doc(reactionsRef), {
      amount: 1,
      slug,
    });

    await fetchReaction();
  };

  useEffect(() => {
    fetchReaction();
  }, [fetchReaction]);

  return {
    isLoading,
    reactions: reactions.amount ?? defaultAmount,
    handleAddReaction,
  };
};
