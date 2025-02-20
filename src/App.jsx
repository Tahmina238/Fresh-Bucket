import "./App.css";
import useMediaQuery from "./hooks/useMediaQuery";
import Home from "./pages/Home";

function App() {
  const isMobile = useMediaQuery();
  console.log("isMobile", isMobile);

  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
