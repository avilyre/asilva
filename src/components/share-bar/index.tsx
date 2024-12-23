"use client";

import { Check, CopyIcon, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

import { ShareBarProps } from "./interface";
import { strings } from "./strings";

export const ShareBar = (props: ShareBarProps) => {
  const { content } = props;

  const resetCopiedTimeout = 3000; /// 3 seconds;
  const currentUrl = `https://avilysilva.com${window?.location?.pathname}`;

  const [isCopied, setIsCopied] = useState(false);

  const shareLinkedInUrl = `https://www.linkedin.com/sharing/share-offsite?text=${content.title}:+%20${currentUrl}&url=${currentUrl}`;
  const shareTwitterInUrl = `https://x.com/intent/post?text=${content.title}:+%20${currentUrl}&url=${currentUrl}`;

  const handleCopyCurrentUrl = () => {
    setIsCopied(() => true);

    navigator.clipboard.writeText(currentUrl);

    setTimeout(() => {
      setIsCopied(() => false);
    }, resetCopiedTimeout);
  };

  return (
    <div className="flex w-fit items-center gap-2.5 rounded-md bg-tertiary/50 px-4 py-2">
      <span className="text-secondary">{strings.share}</span>
      <a
        title="Compartilhar no Linkedin"
        target="_blank"
        className="group rounded-md bg-background/50 p-2 transition-all hover:bg-background"
        href={shareLinkedInUrl}
      >
        <Linkedin className="h-4 w-4 text-secondary group-hover:text-primary" />
      </a>
      <a
        title="Compartilhar no Twitter"
        target="_blank"
        className="group rounded-md bg-background/50 p-2 transition-all hover:bg-background"
        href={shareTwitterInUrl}
      >
        <Twitter className="h-4 w-4 text-secondary group-hover:text-primary" />
      </a>
      <button
        type="button"
        title={isCopied ? strings.copiedContentUrl : strings.copyContentUrl}
        disabled={isCopied}
        onClick={handleCopyCurrentUrl}
        className="rounded-md bg-background/50 p-2 transition-all hover:bg-background"
      >
        {isCopied ? (
          <Check className="h-4 w-4 text-green-700 group-hover:text-primary" />
        ) : (
          <CopyIcon className="h-4 w-4 text-secondary group-hover:text-primary" />
        )}
      </button>
    </div>
  );
};
