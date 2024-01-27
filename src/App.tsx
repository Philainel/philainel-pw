// @ts-ignore
import {Routes, Route, Link, useLocation} from "react-router-dom";
import Root from "./pages/Root.tsx";
import Keys from "./pages/Keys.tsx";

function App() {

	const routes = [
		{
			path: '/',
			element: <Root/>,
			name: 'Главная',
			icon: 'bi-house-fill'
		},
		{
			path: '/keys',
			element: <Keys/>,
			name: 'Ключи',
			icon: 'bi-key-fill'
		}
	];

	let location = useLocation()

	return (
		<div
			className="flex content-center h-full absolute top-0 bottom-0 left-0 right-0 bg-[url('/background.png')] bg-cover">
			<div className="flex flex-row m-auto gap-2 h-min-2 my-0 w-[97%] md:w-[95%] lg:w-11/12">
				<div
					className="bg-backgroundImage-t500 backdrop-blur-[100px] font-medium text-white py-6 px-5 rounded-2xl mt-[10vh] mb-[10vh] lg:mt-[20vh] lg:mb-[20vh] hidden md:block">
					<span className="text-3xl font-bold drop-shadow-lg">Меню:</span>
					<ul className="list-none p-0 flex flex-col items-stretch">
						{routes.map(r =>
							<li className={`transition-all duration-200 ease-in-out hover:text-backgroundImage-500 hover:bg-white hover:pl-1 delay-100 ${location.pathname == r.path ? 'text-backgroundImage-500 bg-white pl-0.5' : ''}`}>
								<Link className="no-underline box-border w-full inline-block" to={r.path}
									  key={r.path}>{r.name}</Link>
							</li>
						)}
					</ul>
				</div>
				<div className="overflow-x-hidden no-scrollbar shrink w-full">
					<div className="h-[10vh] md:h-[10vh] lg:h-[20vh]"></div>
					<Routes>
						{routes.map(r => <Route key={r.path} path={r.path} element={r.element}/>)}
					</Routes>
					<div className="h-5 md:h-[10vh] lg:h-2"></div>
				</div>
			</div>
			<div className="absolute flex md:hidden bottom-0 left-0 right-0 bg-gray-500 justify-evenly">
				{routes.map(r =>
					<div className={`transition-all duration-200 ease-in-out hover:text-gray-500 hover:bg-white px-2 delay-100 ${location.pathname == r.path ? 'text-gray-500 bg-white' : 'text-white'}`}>
						<Link className="no-underline box-border w-full inline-block" to={r.path}
							  key={r.path}>
							<i className={`${r.icon} text-3xl`}></i>
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default App
