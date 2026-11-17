<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>눈 내리는 샤갈의 마을</title>
<style>
body {
	background-image : url("media/snow.jpg");
	background-size : 100%;
	background-repeat : no-repeat;
}
div.snow {
	position : absolute;
	font-size : 40px;
	color : white;
	padding : 0px;
	margin : 0px;
}
</style>
</head>
<body>
<script>
let snow = new Array(30);
let x = new Array(30);
let y = new Array(30);
let speedOfFall = new Array(30);
let speedOfwind = new Array(30);
let step = new Array(30);

function fall() {
	for (let i = 0; i < 30; i++) {
		y[i] += speedOfFall[i];
		x[i] += Math.cos(speedOfwind[i]);
		if (y[i] >= window.innerHeight - 60) {
			x[i] = Math.floor(Math.random() * window.innerWidth);
			y[i] = 0;
			speedOfFall[i] = Math.random() * 2 + 2;
		}
		if (x[i] >= window.innerWidth - 50) {
			x[i] = window.innerWidth - 50;
		} else if (x[i] < 0) {
			x[i] = 50;
		}
		snow[i].style.top = y[i] + "px";
		snow[i].style.left = x[i] + "px";
		speedOfwind[i] += step[i];
	}
	setTimeout("fall()", 50);
}

for (let i = 0; i < 30; i++) {
	x[i] = Math.floor(Math.random() * window.innerWidth - 10);
	y[i] = Math.floor(Math.random() * window.innerHeight + 10);
	speedOfFall[i] = Math.random() * 2 + 2;
	speedOfwind[i] = 1;
	step[i] = Math.random() * 0.1 + 0.05;

	let div = document.createElement("div");
	div.innerHTML = "*";
	div.setAttribute("class", "snow");
	div.style.top = y[i] + "px";
	div.style.left = x[i] + "px";
	document.body.appendChild(div);
	snow[i] = div;
}
fall();
</script>
</body>
</html>
