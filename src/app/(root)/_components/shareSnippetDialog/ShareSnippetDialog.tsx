"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useState } from "react";

const ShareSnippetDialog = ({ onClose }: { onClose: () => void }) => {
  const [title, setTitle] = useState("");
  const [isSharing, setIsSharing] = useState(false);
  const { language, getCode } = useCodeEditorStore();

  return <div></div>;
};

export default ShareSnippetDialog;
