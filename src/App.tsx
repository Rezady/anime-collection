
import './App.css';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext';
import { Global, css } from '@emotion/react'
import { Suspense } from 'react';
import Loader from './components/loader';

function App() {

  return (
    <Suspense fallback={<Loader/>}>
      <Global
        styles={css`
          body {
            min-height: 100vh;
            background-color: rgb(237,241,245);
          }
          #root {
            min-height: 100vh;
          }
        `}
      />
      <UserContext>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserContext>
    </Suspense>
  );
}

export default App;
