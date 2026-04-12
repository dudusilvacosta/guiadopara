"use client";

import { useEffect } from "react";

type Props = {
  instagramId: string;
};

export default function InstagramEmbed({ instagramId }: Props) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [instagramId]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={`https://www.instagram.com/p/${instagramId}/`}
      data-instgrm-version="14"
    />
  );
}