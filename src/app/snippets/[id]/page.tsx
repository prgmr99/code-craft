"use client";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

import SnippetLoadingSkeleton from "./_components/skeleton/SnippetLoadingSkeleton";

const SnippetDetailPage = () => {
  const snippetId = useParams().id;

  const snippet = useQuery(api.snippets.getSnippetById, {
    snippetId: snippetId as Id<"snippets">,
  });

  if (snippet === undefined) {
    return <SnippetLoadingSkeleton />;
  }

  return <div></div>;
};

export default SnippetDetailPage;
