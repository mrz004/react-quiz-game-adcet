import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import StorageHandler from "./Storage";
// import { clearData } from "./Storage";

function App() {
  useEffect((_) => {
    if (!StorageHandler.isLoaded()) StorageHandler.loadFromAPI();
    // dev : Uncomment the following code before deploying. This code is commented to reduce the number of requests sent at the time of testing
    // return StorageHandler.clear();
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
