"use strict";

// Constants
const CURRENT_YEAR = new Date().getFullYear();
const BRUSHES = [
	"#16a085",
	"#27ae60",
	"#2980b9",
	"#8e44ad",
	"#2c3e50",
	"#f1c40f",
	"#e67e22",
	"#c0392b",
];
const KEYWORDS = [
	"Milad",
	"Milad Sadeghi",
	"miladsade96",
	"JAVA",
	"java",
	"Java SE",
	"Java EE",
	"Jakarta",
	"JVM",
	"JRE",
	"JDK",
	"JDBC",
	"SQL",
	"NoSQL",
	"MySQL",
	"PostgreSQL",
	"OracleDB",
	"H2",
	"Spring",
	"Spring Framework",
	"Spring Boot",
	"Spring Data JPA",
	"Spring MVC",
	"Hibernate",
	"ORM",
	"RestAPI",
	"API Design",
	"GraphQL",
	"Microservices",
	"MicroService Architecture",
	"VSC",
	"Git",
	"GitHub",
	"GitLab",
	"Maven",
	"Gradle",
	"JUnit",
	"Mockito",
	"Docker",
	"Kubernetes",
	"Apache Kafka",
	"Kafka",
	"Prometheus",
	"Grafana",
	"Linux",
	"Linux OS",
	"CI/CD",
	"Continuous Integration",
	"Continuous Development",
	"Continuous Delivery",
	"Algorithms",
	"Data Structures",
	"Agile",
	"Scrum",
	"Jira",
	"Collaboration",
	"Communication",
	"Remote Development",
	"Self Motivation",
	"Web Development",
	"JetBrains",
	"IntelliJ IDE",
	"VSCode",
	"Backend",
	"K6",
];

// DOM Elements
const yearElement = document.querySelector(".year");
const canvas = document.getElementById("canvas");

// State
let ctx;
let dimension = [window.innerWidth, window.innerHeight];
let particles = [];

// Utility Functions
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Particle Class
class Particle {
	constructor() {
		this.reset();
		this.x = randomNumber(0, dimension[0]);
		this.y = randomNumber(0, dimension[1]);
	}

	reset() {
		this.x = randomNumber(0, dimension[0]);
		this.y = randomNumber(0, dimension[1]);
		this.size = randomNumber(0, 1);
		this.keywordIndex = randomNumber(0, KEYWORDS.length);
		this.brushIndex = randomNumber(0, BRUSHES.length);
		this.opacity = Math.random();
		this.speed = randomNumber(1, 5) / 1000;
	}

	update() {
		this.opacity -= this.speed;
		if (this.opacity <= 0) {
			this.reset();
		}
	}

	draw() {
		ctx.beginPath();
		ctx.font = `${this.size + 30}px sans-serif`;
		ctx.globalAlpha = this.opacity;
		ctx.strokeStyle = BRUSHES[this.brushIndex];
		ctx.strokeText(KEYWORDS[this.keywordIndex], this.x, this.y);
		ctx.closePath();
	}
}

// Canvas Functions
function initCanvas() {
	canvas.width = dimension[0];
	canvas.height = dimension[1];

	if (canvas.getContext) {
		ctx = canvas.getContext("2d");
		initParticles();
		startAnimation();
	}
}

function initParticles() {
	particles = [];
	for (let i = 0; i < 10; i++) {
		particles.push(new Particle());
	}
}

function clearCanvas() {
	ctx.clearRect(0, 0, dimension[0], dimension[1]);
}

function animate() {
	clearCanvas();
	particles.forEach(particle => {
		particle.update();
		particle.draw();
	});
	requestAnimationFrame(animate);
}

function startAnimation() {
	// Use requestAnimationFrame for smoother animation
	requestAnimationFrame(animate);
}

function handleResize() {
	dimension[0] = window.innerWidth;
	dimension[1] = window.innerHeight;
	canvas.width = dimension[0];
	canvas.height = dimension[1];
}

// Initialize
yearElement.textContent = CURRENT_YEAR;
window.addEventListener("resize", handleResize);
window.addEventListener("load", initCanvas);
