import './welcomePage';
import sneakInImages from './sneakInImages';
import renderWebcam from './renderWebcam';
import handlePopupClick from './popups/handlePopupClick';
import handleJumbleClick from './jumbler/handleJumbleClick'
import './pages/SadnessDotOnline';
import { scrollToNextPage, transitionToWebcam, insertQuizImage, cycleQuestions } from './helpers';
import '../styles/style.scss'

import 'remodal/dist/remodal.min.js';

const boop = document.getElementById('boop');
const popupTriggers = document.querySelectorAll('.trigger--popup');
const jumbleTriggers = document.querySelectorAll('.trigger--jumble');
const normalTriggers = document.querySelectorAll('.trigger--normal');
const quizLinks = document.querySelectorAll('.quiz-link');
const QuestionsTriggers = document.querySelector('#this-seems-impracticle').querySelectorAll('a');
const yesBttns = document.querySelectorAll('.bttn--yes');
const webcamCanvasOne = document.querySelector('.webcam-canvas--one');
const webcamCanvasTwo = document.querySelector('.webcam-canvas--two');

function handleNormalClick(e) {
	e.preventDefault();
	const scrollTarget = document.querySelector(e.target.hash);
	if (scrollTarget) {
		scrollToNextPage(scrollTarget);
	}
}

function handleYesBttnClick() {
	renderWebcam(webcamCanvasOne, webcamCanvasTwo, 3000);
	transitionToWebcam();
}

function handleQuestionsClick() {
	const h1Node = document.getElementById('questions').querySelector('h1');
	const questions = [
		'Noise becomes signal.',
		'Signal becomes story.',
		'Stories become decisions.',
	]
	cycleQuestions(h1Node, questions, true);
}

function boopOrNoBoop(e) {
	if (e.target.dataset.boop === 'true') {
		boop.currentTime = 0;
		boop.play();
	}
}

popupTriggers.forEach(trigger => trigger.addEventListener('click', handlePopupClick));
jumbleTriggers.forEach(trigger => trigger.addEventListener('click', handleJumbleClick));
document.addEventListener('click', boopOrNoBoop);
quizLinks.forEach(linkNode => insertQuizImage(linkNode));
QuestionsTriggers.forEach(trigger => trigger.addEventListener('click', handleQuestionsClick))
yesBttns.forEach(bttn => bttn.addEventListener('click', handleYesBttnClick));
normalTriggers.forEach(bttn => bttn.addEventListener('click', handleNormalClick));
setTimeout(() => sneakInImages(149), 4000);

// where to scroll on default
setTimeout(() => {
	// scrollToNextPage(document.getElementById('yes'))
}, 300)