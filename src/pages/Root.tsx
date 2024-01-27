function Root() {
	let links = [
		{
			id: "0",
			text: "ТГ-канал",
			href: "https://t.me/philainel_channel",
			icon: "bi-telegram",
			accentColor: "#2BA5E0"
		},
		{
			id: "1",
			text: "GitHub",
			href: "https://github.com/philainel",
			icon: "bi-github",
			accentColor: "#000000"
		},
		{
			id: "2",
			text: "Reddit",
			href: "https://reddit.com/u/Philainel",
			icon: "bi-reddit",
			accentColor: "#FF5700"
		},
		{
			id: "3",
			text: "Spotify",
			href: "https://open.spotify.com/user/zzizbtt9g6zynmcu7wuj5d5p5?si=a5f610866a174fa9",
			icon: "bi-spotify",
			accentColor: "#1DB954"
		},
		{
			id: "4",
			text: "Steam",
			href: "https://steamcommunity.com/id/Philainel/",
			icon: "bi-steam",
			accentColor: "#1b2838"
		},
		{
			id: "5",
			text: "Twitch",
			href: "https://twitch.tv/philainel",
			icon: "bi-twitch",
			accentColor: "#6441A5"
		},
		{
			id: "6",
			text: "Twitter",
			href: "https://twiiter.com/philainel",
			icon: "bi-twitter",
			accentColor: "#1DA1F2"
		},
		{
			id: "7",
			text: "YouTube",
			href: "https://youtube.com/@philainel",
			icon: "bi-youtube",
			accentColor: "#FF0000"
		}
	]
	// .sort((l1, l2) => l1.text.localeCompare(l2.text))
	return (
		<div id="RootPage" className="flex flex-col gap-2">
			<div
				className="bg-backgeoundImage-t500 rounded-2xl text-white font-medium backdrop-blur-[100px] py-6 px-5 roundex-2xl">
				<span className="text-3xl font-bold drop-shadow-lg">Привет.</span><br/>
				<span className="drop-shadow-lg">Меня зовут Матвей, но многие могут знать меня под ником Philainel. Здесь ты можешь найти ссылки на некоторые мои профили</span>
			</div>
			<div
				className="bg-backgeoundImage-t500 rounded-2xl text-white font-medium backdrop-blur-[100px] py-6 px-5 roundex-2xl">
				<span className="text-3xl font-bold drop-shadow-lg">Ссылки:</span><br/>
				<span className="drop-shadow-lg">Мои личные профили:</span>
				<div className="grid grid-cols-2 gap-2 items-center mt-2 select-none md:grid-cols-5 sm:grid-cols-3">
					{links.map(l =>
						<a href={l.href}
						   className="text-2xl bg-white py-1 px-2 flex items-center gap-1 rounded-2xl translate-y-0 hover:-translate-y-1 transition-transform duration-200 ease-in-out"
						   target="_blank" id={l.id}>
							<i className={`${l.icon} text-3xl`} style={{color: l.accentColor}}/>
							<span className="text-xl text-backgroundImage-500">{l.text}</span>
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default Root