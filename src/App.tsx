import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import './App.scss'
import Root from "./pages/Root.tsx";

function App() {

	const routes = [
		{
			path: '/',
			element: <Root/>,
			name: 'Главная'
		}
	];

	return (
		<div className="app">
			<div className="window">
				<BrowserRouter>
					{/*<div className="menu">*/}
					{/*	<h1>Меню</h1>*/}
					{/*	<ul className="list">*/}
					{/*		{routes.map(r =>*/}
					{/*			<li>*/}
					{/*				<Link to={r.path} key={r.path}>{r.name}</Link>*/}
					{/*			</li>*/}
					{/*		)}*/}
					{/*	</ul>*/}
					{/*</div>*/}
					<div className="page">
						<div className="filler"></div>
						<Routes>
							{routes.map(r => <Route key={r.path} path={r.path} element={r.element}/>)}
						</Routes>
					</div>
				</BrowserRouter>
			</div>
		</div>
	)
}

export default App
