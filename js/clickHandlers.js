import { scrollToNextPage, cycleQuestions } from './helpers';

export function handleNormalClick(e) {
	e.preventDefault();
	const scrollTarget = document.querySelector(e.target.hash);
	if (scrollTarget) {
		scrollToNextPage(scrollTarget);
	}
}

export function handleQuestionsClick() {
	const h1Node = document.getElementById('questions').querySelector('h1');
	const questions = [
		'Noise becomes signal.',
		'Signal becomes story.',
		'Stories become decisions.',
	]
	cycleQuestions(h1Node, questions, true);
}

export function turnOnModal(modalTargetID) {
	const modal = document.getElementById(modalTargetID);
	modal.classList.remove('off'); // just to be sure..
	modal.classList.add('on');
}

export function turnOffModal(modalNode) {
	modalNode.classList.remove('on');
	modalNode.classList.add('off');
	modalNode.addEventListener('transitionend', () => {
		modalNode.style.display = 'none';
	})
}

export function handleTransitionToFeelings(finalPage) {
	document.body.style.background = 'black';
	return new Promise((resolve, reject) => {
		deleteNodes(document.querySelectorAll('.background-image'));
		fadeNodes('.modal');
		fadeNodes('.questions');
		finalPage.addEventListener('transitionend', () => {
			document.querySelector('.feelings-are-never-an-abstraction').style.opacity = 1;
			deleteEverythingButWebcam();
			resolve(true);
		})
	})
}

// ------------
function fadeNodes(query) {
	document.querySelectorAll(query).forEach(node => {
		node.classList.add('final-off');
	})
}

function deleteNodes(nodes) {
	nodes.forEach(node => {
		node.remove()
	});
}

function deleteEverythingButWebcam() {
	deleteNodes(document.querySelectorAll('[data-delete="true"]'));
	deleteNodes(document.querySelectorAll('.modal'));
}