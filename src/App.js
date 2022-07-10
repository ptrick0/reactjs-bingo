import { React, Suspense } from 'react';
import './App.css';
import Bingo from './components/bingo';
import Loading from './components/loading';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
					<Routes>
						<Route path="/" element={<Bingo />} />
					</Routes>
				</Suspense>
    </Router>
  );
}

export default App;
