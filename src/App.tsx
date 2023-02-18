import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <div className="app bg-deep-blue">
      <header className="App-header">
        <Navbar selectedPage={selectedPage} setSelectedPage{...setSelectedPage} />
      </header>
    </div>
  );
}

export default App;
