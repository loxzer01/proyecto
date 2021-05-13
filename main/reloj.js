var cuentaVeces = 0;
const price = document.getElementById("price");
const bonus = document.getElementById("bonus");
const getRemainTime = deadline => {
	let now = new Date(),
		remainTime = (new Date(deadline) - now + 1000) / 1000,
		remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
		remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
		remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
		remainDays = Math.floor(remainTime / (3600 * 24));

	return {
		remainTime,
		remainSeconds,
		remainMinutes,
		remainHours,
		remainDays
	}
};

const countdown = (deadline, elem) => {
	const el = document.getElementById(elem);

	const timerUpdate = setInterval ( () =>{
		let time = getRemainTime(deadline);
		el.innerHTML = `	
        <h2 class="mg-12">${time.remainDays}<span id="day">days</span> : ${time.remainHours}<span id="hour">Hours</span> : ${time.remainMinutes}<span id="min">Mins</span> : ${time.remainSeconds}<span id="seg">Secs</span></h2>`
	if (time.remainTime <= 1) {
		cuentaVeces++;
		cambio();
		clearInterval(timerUpdate);
		el.innerHTML = `<h2 class="mg-12">Ended</h2>`;
	}

	}, 1000)
};
const cambio = () => {
	switch (cuentaVeces) {
		case 0:
			console.log("hola");
			countdown("May 15 2021 21:24:11 GMT-0400", 'reloj');
			break;
		case 1:
			countdown("May 30 2021 21:24:11 GMT-0400", 'reloj');
			price.textContent = "6 USD = 1 YFDR";
			bonus.textContent = "6% (+ 1000 USD)";
			break;
		case 2:
			countdown("jun 14 2021 21:24:11 GMT-0400", 'reloj');
			price.textContent = "6.5 USD = 1 YFDR";
			bonus.textContent = "5% (+ 1000 USD)";
			break
	}
}
if(cuentaVeces === 0) {
	countdown("May 15 2021 21:24:11 GMT-0400", 'reloj');
}