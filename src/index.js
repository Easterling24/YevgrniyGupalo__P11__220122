import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Error from './screens/Error';
import NotFound from "./screens/NotFound/index"
import HomePage from './screens/HomePage';
import About from './screens/About';
import Footer from './components/Footer';
import GloabalStyle from './style/GloabalStyle';
import DetailedPage from './screens/DetailedPage';


ReactDOM.render(
	<React.StrictMode>
		<Router>
			<GloabalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/flat-detail/:id" element={<DetailedPage />} />
				<Route path="/flat-detail/*" element={<NotFound/>} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error />} />
			</Routes>

			<Footer />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
