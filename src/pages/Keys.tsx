import {useEffect, useState} from "react";

function Keys() {

	let [ssh, setSsh] = useState("")
	let [pgp, setPgp] = useState("")
	let sshCopy = "curl https://philainel.pw/data/keys/ssh_rsa_pub.key >> ~/.ssh/authorized_keys"
	let pgpCopy = "curl https://philainel.pw/data/keys/pgp_pub.key | gpg --import"
	useEffect(() => {
		fetch("data/keys/ssh_rsa_pub.key").then((res) => res.text()).then((res) => {
			setSsh(res)
		})
		fetch("data/keys/pgp_pub.key").then((res) => res.text()).then((res) => {
			setPgp(res)
			console.log(res)
		})
	}, []);
	return (
		<div id="KeysPage" className="flex flex-col gap-2 items-stretch">
			<div
				className="bg-backgeoundImage-t500 rounded-2xl text-white font-medium backdrop-blur-[100px] py-6 px-5">
				<span className="text-3xl font-bold drop-shadow-lg">Ключи.</span><br/>
				<span className="drop-shadow-lg">Здесь вы можете найти некоторые из моих публичных ключей.</span>
			</div>
			<div
				className="bg-backgeoundImage-t500 rounded-2xl text-white font-medium backdrop-blur-[100px] py-6 px-5">
				<div className="flex flex-col">
					<div className="flex justify-between items-center">
						<span className="font-bold drop-shadow-lg">SSH</span><br/>
						<div
							className="bg-white text-backgroundImage-500 font-bold rounded-xl p-2 select-none translate-y-0 hover:-translate-y-1 transition-transform duration-200 ease-in-out"
							onClick={() => {
								navigator.clipboard.writeText(ssh).then()
							}}>Скопировать
						</div>
					</div>
					<code className="mt-1 bg-gray-700 inline-block rounded-2xl p-3 break-all leading-tight">
						{ssh}
					</code>
				</div>
				<div className="flex flex-col mt-2">
					<div className="flex justify-between items-center">
						<span className="drop-shadow-lg">Команда для импорта:</span><br/>
						<div
							className="bg-white w-fit text-nowrap text-backgroundImage-500 font-bold rounded-xl p-2 select-none translate-y-0 hover:-translate-y-1 transition-transform duration-200 ease-in-out"
							onClick={() => {
								navigator.clipboard.writeText(sshCopy).then()
							}}>Скопировать
						</div>
					</div>
					<code
						className="mt-1 bg-gray-700 inline-block rounded-2xl p-3 break-all leading-tight">{sshCopy}</code>
				</div>
			</div>
			<div
				className="bg-backgeoundImage-t500 rounded-2xl text-white font-medium backdrop-blur-[100px] py-6 px-5">
				<div className="flex flex-col">
					<div className="flex justify-between items-center">
						<span className="font-bold drop-shadow-lg">PGP</span><br/>
						<div
							className="bg-white text-backgroundImage-500 font-bold rounded-xl p-2 select-none translate-y-0 hover:-translate-y-1 transition-transform duration-200 ease-in-out"
							onClick={() => {
								navigator.clipboard.writeText(pgp).then()
							}}>Скопировать
						</div>
					</div>
					<code
						className="mt-1 bg-gray-700 block rounded-2xl p-3 whitespace-pre truncate lg:whitespace-pre-wrap leading-tight">{pgp}
					</code>
				</div>
				<div className="flex flex-col mt-2">
					<div className="flex justify-between items-center">
						<span className="drop-shadow-lg">Команда для импорта:</span><br/>
						<div
							className="bg-white w-fit text-nowrap text-backgroundImage-500 font-bold rounded-xl p-2 select-none translate-y-0 hover:-translate-y-1 transition-transform duration-200 ease-in-out"
							onClick={() => {
								navigator.clipboard.writeText(pgpCopy).then()
							}}>Скопировать
						</div>
					</div>
					<code
						className="mt-1 bg-gray-700 inline-block rounded-2xl p-3 break-all leading-tight">{pgpCopy}</code>
				</div>
			</div>
		</div>
	)
}

export default Keys