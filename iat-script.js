function startConsent() {
    document.querySelector('.intro').classList.add('hidden');
    document.querySelector('.consent').classList.remove('hidden');
}

function startPreTask() {
    document.querySelector('.consent').classList.add('hidden');
    document.querySelector('.pre-task').classList.remove('hidden');
}



function startPractice1() {
    document.querySelector('.pre-task').classList.add('hidden');
    document.querySelector('.practice1').classList.remove('hidden');
    // load and handle practice image trials
}

function startPractice2() {
    document.querySelector('.practice1').classList.add('hidden');
    document.querySelector('.practice2').classList.remove('hidden');
    // load and handle practice word trials
}

function startTrial1() {
    document.querySelector('.practice2').classList.add('hidden');
    document.querySelector('.trial1').classList.remove('hidden');
    // record response times and mapping
}

function startTrial2() {
    document.querySelector('.trial1').classList.add('hidden');
    document.querySelector('.trial2').classList.remove('hidden');
    // reverse mapping
}

function showPostTask() {
    document.querySelector('.trial2').classList.add('hidden');
    document.querySelector('.post-task').classList.remove('hidden');
} 

