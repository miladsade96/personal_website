"use strict";

const dynamicYear = new Date().getFullYear();
document.querySelector(".year").textContent = String(dynamicYear);

let ctx;
const dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight];
const keywords = [
	"Milad",
	"Milad Sadeghi DM",
	"JS-Mechanic",
	"JS",
	"JavaScript",
	"TyeScript",
	"HTML",
	"HTML5",
	"CSS",
	"CSS3",
	"SASS",
	"SCSS",
	"Tailwind",
	"Tailwind CSS",
	"Css Modules",
	"Styled Components",
	"React",
	"ReactJS",
	"JSX",
	"Redux",
	"React Router",
	"React Query",
	"Fetch API",
	"Axios",
	"Jest",
	"React Testing Library",
	"Cypress",
	"API",
	"RestAPI",
	"GraphQL",
	"VSC",
	"Git",
	"GitHub",
	"GitLab",
	"Linux",
	"Linux OS",
	"CI/CD",
	"Continuous Integration",
	"Continuous Development",
	"Continuous Delivery",
	"Vite",
	"Webpack",
	"Babel",
	"Parcel",
	"Algorithms",
	"Data Structures",
	"Agile",
	"Scrum",
	"Jira",
	"Collaboration",
	"Communication",
	"Remote Development",
	"Self Motivation",
	"Frontend",
	"Web Development",
	"Netlify",
	"Vercel",
	"JetBrains",
	"WebStorm IDE",
	"VSCode",
];

const brushes = [
	"#16a085",
	"#27ae60",
	"#2980b9",
	"#8e44ad",
	"#2c3e50",
	"#f1c40f",
	"#e67e22",
	"#c0392b",
];
const position = [];

function RandomNumber(first, last) {
	const choices = last - first;
	return Math.floor(Math.random() * choices + first);
}

// const element = document.querySelector(".right-box");
// const rect = element.getBoundingClientRect();
//
// const top_ = rect.top;
// const left_ = rect.left;
// const right_ = rect.right;
// const bottom_ = rect.bottom;
// console.log(top_, left_, right_, bottom_);

function RandomPosition(l) {
	for (let i = 0; i <= 3600; i += 6) {
		position[i] = RandomNumber(0, dimension[0]);
		position[i + 1] = RandomNumber(0, dimension[1]);
		position[i + 2] = RandomNumber(0, 15);
		position[i + 3] = RandomNumber(0, 44 + l);
		position[i + 4] = RandomNumber(0, 8);
		position[i + 5] = RandomNumber(0, 100) / 100;
	}
}

function DrawClear(x, y) {
	ctx.clearRect(0, 0, x, y);
}

function DrawKernel() {
	DrawClear(dimension[0], dimension[1]);
	for (let i = 0; i <= 500; i += 6) {
		ctx.beginPath();

		ctx.font = ctx.font.replace(/\d+px/, position[i + 2] + 30 + "px");
		ctx.globalAlpha = position[i + 5];
		ctx.strokeStyle = brushes[position[i + 4]].toString();
		ctx.strokeText(keywords[position[i + 3]], position[i], position[i + 1]);
		ctx.closePath();
		ctx.stroke();

		position[i + 5] -= RandomNumber(0, 100) / 1000;
		if (position[i + 5] < 0) {
			position[i] = RandomNumber(0, dimension[0]);
			position[i + 1] = RandomNumber(0, dimension[1]);
			position[i + 2] = RandomNumber(0, 15);
			position[i + 3] = RandomNumber(0, 64);
			position[i + 4] = RandomNumber(0, 8);
			position[i + 5] = RandomNumber(0, 100) / 100;
		}
	}
}

const canvas = document.getElementById("canvas");
function StartBackground() {
	canvas.width = dimension[0];
	canvas.height = dimension[1];
	if (canvas.getContext) {
		ctx = canvas.getContext("2d");
		RandomPosition(20);
		setInterval(DrawKernel, 100);
	}
}

StartBackground();

function ReCalculateCanvasSize() {
	dimension[0] = document.documentElement.clientWidth;
	dimension[1] = document.documentElement.clientHeight;
	canvas.width = dimension[0];
	canvas.height = dimension[1];
}

window.addEventListener("resize", ReCalculateCanvasSize);
