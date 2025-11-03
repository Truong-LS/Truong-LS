import { generatePacManGame } from 'pacman-contribution-graph';

generatePacManGame({
	username: 'Truong-LS',
	platform: 'github', // or 'gitlab'
	theme: 'github-dark', // or 'gitlab-dark'
	speed: 2,
	sound: true,
	output: 'canvas' // or 'svg'
});