import './Root.scss'

function Root() {
	let links = [
		{
			id: "0",
			text: "ТГ-канал",
			href: "https://t.me/philainel_channel",
			icon: "bi-telegram"
		},
		{
			id: "1",
			text: "GitHub",
			href: "https://github.com/philainel",
			icon: "bi-github"
		},
		{
			id: "2",
			text: "Spotify",
			href: "https://open.spotify.com/user/zzizbtt9g6zynmcu7wuj5d5p5?si=a5f610866a174fa9",
			icon: "bi-spotify"
		},
		{
			id: "3",
			text: "Steam",
			href: "https://steamcommunity.com/id/Philainel/",
			icon: "bi-steam"
		},
		{
			id: "4",
			text: "YouTube",
			href: "https://youtube.com/@philainel",
			icon: "bi-youtube"
		},
		{
			id: "5",
			text: "Twitter",
			href: "https://twiiter.com/philainel",
			icon: "bi-twitter"
		},
		{
			id: "6",
			text: "Reddit",
			href: "https://reddit.com/u/Philainel",
			icon: "bi-reddit"
		}
	]
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
							<i className={l.icon} />
							<span className="desc">{l.text}</span>
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default Root