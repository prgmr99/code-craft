import EditorPanelSkeleton from "../editorPanelSkeleton/EditorPanelSkeleton";
import OutputPanelSkeleton from "../outputPanelSkeleton/OutputPanelSkeleton";

const EditorViewSkeleton = () => {
  return (
    <div className="space-y-6 p-4">
      <EditorPanelSkeleton />
      <OutputPanelSkeleton />
    </div>
  );
};

export default EditorViewSkeleton;
