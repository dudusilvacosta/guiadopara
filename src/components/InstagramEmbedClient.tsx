'use client';

import dynamic from "next/dynamic";

const InstagramEmbed = dynamic(
  () => import("./InstagramEmbed"),
  { ssr: false }
);

export default function InstagramEmbedClient({
  instagramId,
}: {
  instagramId: string;
}) {
  return <InstagramEmbed instagramId={instagramId} />;
}