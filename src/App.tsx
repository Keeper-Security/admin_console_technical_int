import { GlobalStyle, AppContainer } from './style/styledComponents';
import Header from './globalComponents/Header';
import Body from './globalComponents/Body';
import Navigation from './globalComponents/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
     <GlobalStyle />
     <AppContainer>
      <Header />
      <Body>
        <Navigation />
        <Outlet />
      </Body>
    </AppContainer>
    </>
  )
}

export default App
