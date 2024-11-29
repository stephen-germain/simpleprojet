function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateRandom() {
    let max = document.getElementById('max').value;
	console.log(max);

    alert(getRandomInt(max));
}

let button = document.querySelector('button');
button.addEventListener('click', generateRandom);
button.disabled = false;
