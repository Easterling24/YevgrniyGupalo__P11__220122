import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Error from './Pages/Error';
import Footer from './components/Footer';
import GloabalStyle from './style/GloabalStyle';
import DetailedPage from './Pages/DetailedPage';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<GloabalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/AppartmentDetails/:id" element={<DetailedPage />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error />} />
			</Routes>

			<Footer />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
