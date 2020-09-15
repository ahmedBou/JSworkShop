function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const images = document.querySelector("img");
const hero = document.querySelector("#player");


window.addEventListener("keyup", function(e){
	console.log(e.key);
	// alert(hero.style.top);
	if(e.key === "ArrowUp"){
		const currentPos = extractPos(hero.style.top);
		hero.style.top = `${currentPos+50}px`;
	}else if(e.key === "ArrowDown"){
		const currentPos = extractPos(hero.style.top);
		hero.style.top = `${currentPos-50}px`;
	}else if(e.key === "ArrowRight" || e.key === "Right"){
		const currentPos = extractPos(hero.style.left);
		hero.style.top = `${currentPos - 50}px`;
	}else if(e.key === "ArrowLeft"  || e.key === "left"){
		const currentPos = extractPos(hero.style.left);
		hero.style.top = `${currentPos + 50}px`;
	}

	
})

const extractPos = (pos)=>{
	if(!pos) return 100;
	return parseInt(pos.slice(0,-2));
}