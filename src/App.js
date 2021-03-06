import { Fragment, React, Suspense } from 'react';
import './App.css';
import Bingo from './components/bingo';
import Menu from './components/menu';
import Loading from './components/loading';
import { ResetCSS } from './global/resetCSS';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <ResetCSS />
    
      <Router>
        <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/bingo/" element={<Bingo />} />
            </Routes>
          </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;
