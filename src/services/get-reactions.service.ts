import {
  collection,
  DocumentData,
  getDocs,
  Query,
  query,
  where,
} from "firebase/firestore";

import { Reaction } from "@/@types/reaction";
import { database } from "@/lib/firebase";

type ReactionGet = Reaction;

const getReactionDocument = async (
  query: Query<DocumentData, DocumentData>,
) => {
  const reactionGet = await getDocs(query);

  return reactionGet.docs
    .map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    .shift() as Partial<ReactionGet>;
};

export const getReaction = async (slug: string) => {
  const reactionsRef = collection(database, "reactions");
  const reactionQuery = query(reactionsRef, where("slug", "==", slug));

  const reaction = await getReactionDocument(reactionQuery);

  return {
    ...reaction,
  };
};
