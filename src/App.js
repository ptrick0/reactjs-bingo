import { React, Suspense } from 'react';
import './App.css';
import Panel from './components/panel';
import Loading from './components/loading';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
					<Routes>
						<Route path="/" element={<Panel />} />
					</Routes>
				</Suspense>
    </Router>
  );
}

export default App;
