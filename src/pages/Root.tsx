import './Root.scss'

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
		<div id="RootPage">
			<div className="block">
				<h1>Привет.</h1>
				<span>Меня зовут Матвей, но многие могут знать меня по ником Philainel. Здесь ты можешь найти ссылки на некоторые мои профили</span>
			</div>
			<div className="block">
				<h1>Ссылки:</h1>
				<span>Мои личные профили:</span>
				<div className="links">
					{links.map(l =>
						<a href={l.href} className="link" target="_blank" id={l.id}>
							<i className={l.icon} style={{color: l.accentColor}}/>
							<span className="desc">{l.text}</span>
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default Root