import EditorPanel from "./_components/editorPanel/EditorPanel";
import Header from "./_components/header/Header";
import OutputPanel from "./_components/outputPanel/OutputPanel";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditorPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
};

export default Home;
