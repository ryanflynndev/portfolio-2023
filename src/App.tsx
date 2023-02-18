import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from './scenes/DotGroup';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <div className='app bg-deep-blue'>
      <header className='App-header'>
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <div className='w-5/6 mx-auto md:h-full'>
          { isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage}
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
