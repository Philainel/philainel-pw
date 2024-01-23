// @ts-ignore
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
		<div className="flex content-center h-full absolute top-0 bottom-0 left-0 right-0 bg-[url('/background.png')] bg-cover">
			<div className="mx-auto my-0 flex flex-row gap-2 p-0 max-w-[90%]">
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
					<div className="sticky overflow-y-scroll overflow-x-hidden no-scrollbar">
						<div className="h-[20vh]"></div>
						<Routes>
							{routes.map(r => <Route key={r.path} path={r.path} element={r.element}/>)}
						</Routes>
						<div className="h-[5vh]"></div>
					</div>
				</BrowserRouter>
			</div>
		</div>
	)
}

export default App
