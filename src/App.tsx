import { useState } from 'react';

import { GlobalStyle, AppContainer } from './style/styledComponents';
import Header from './globalComponents/Header';
import Body from './globalComponents/Body';
import Navigation from './globalComponents/Navigation';
import Project from './views/Project';
import About from './views/About';
import Contact from './views/Contact';
import { VIEW } from './utils/const';

function App() {
  const [view, setView] = useState<VIEW>(VIEW.ABOUT)

  const renderView = () => {
    if (view === VIEW.ABOUT) return <About />
    else if (view === VIEW.CONTACT) return <Contact />
    else if (view === VIEW.PROJECT) return <Project />
    return <About />;
  };

  return (
    <>
     <GlobalStyle />
     <AppContainer>
      <Header />
      <Body>
        <Navigation setView={setView} />
        {renderView()}
      </Body>
    </AppContainer>
    </>
  )
}

export default App
