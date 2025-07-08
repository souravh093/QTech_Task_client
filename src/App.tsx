import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Button
        className="bg-red-500 text-white hover:bg-red-600"
        variant={"destructive"}
        size="lg"
      >
        Hello world!
      </Button>

      <div className="text-2xl bg-red-500 font-bold text-center mt-10">
        Welcome to Task BD!
      </div>
    </>
  );
}

export default App;
