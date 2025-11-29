"use client";

import { AnchorHTMLAttributes, ReactNode } from "react";
import { useResumeDownloadTracker } from "@/hooks/use-resume-download-tracker";

interface ResumeDownloadLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  children: ReactNode;
}

export function ResumeDownloadLink({
  children,
  onClick,
  className = "",
  ...rest
}: ResumeDownloadLinkProps) {
  const { count, trackDownload } = useResumeDownloadTracker();

  return (
    <a
      {...rest}
      href="/Pratyush Kumar Resume.pdf"
      target="_blank"
      rel="noreferrer"
      className={className}
      data-download-count={count}
      onClick={(event) => {
        trackDownload();
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
