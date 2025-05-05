function startConsent() {
    document.querySelector('.intro').classList.add('hidden');
    document.querySelector('.consent').classList.remove('hidden');
    document.querySelector('.experiment-title').textContent = 'Consent';
}

function startPreTask() {
    document.querySelector('.consent').classList.add('hidden');
    document.querySelector('.pre-task').classList.remove('hidden');
    document.querySelector('.experiment-title').textContent = 'Pre-task Questionnaire';
}

function startExperiment() {
    // Hide the landing page
    document.getElementById('landing-page').style.display = 'none';
    // Show the experiment container
    document.getElementById('experiment').classList.remove('hidden');
    // Show the consent title
    document.querySelector('.experiment-title').textContent = 'Consent';
    document.querySelector('.experiment-title').classList.remove('hidden');
    // Start with the consent screen
    startConsent();
}

let currentPracticeImageIndex = 0;
let practiceImages = [];

// Prepare labeled image objects for practice
const eastImages = [
    {src: "Visual Stimuli/East/East1.png", label: "EAST"},
    {src: "Visual Stimuli/East/East2.png", label: "EAST"},
    {src: "Visual Stimuli/East/East3.png", label: "EAST"},
    {src: "Visual Stimuli/East/East4.png", label: "EAST"},
    {src: "Visual Stimuli/East/East5.png", label: "EAST"},
    {src: "Visual Stimuli/East/East6.png", label: "EAST"},
    {src: "Visual Stimuli/East/East7.png", label: "EAST"},
    {src: "Visual Stimuli/East/East8.png", label: "EAST"},
    {src: "Visual Stimuli/East/East9.png", label: "EAST"},
    {src: "Visual Stimuli/East/East10.png", label: "EAST"}
];

const westImages = [
    {src: "Visual Stimuli/West/West11.png", label: "WEST"},
    {src: "Visual Stimuli/West/West12.png", label: "WEST"},
    {src: "Visual Stimuli/West/West13.png", label: "WEST"},
    {src: "Visual Stimuli/West/West14.png", label: "WEST"},
    {src: "Visual Stimuli/West/West15.png", label: "WEST"},
    {src: "Visual Stimuli/West/West16.png", label: "WEST"},
    {src: "Visual Stimuli/West/West17.png", label: "WEST"},
    {src: "Visual Stimuli/West/West18.png", label: "WEST"},
    {src: "Visual Stimuli/West/West19.png", label: "WEST"},
    {src: "Visual Stimuli/West/West20.png", label: "WEST"}
];

function startPractice1() {
    // Hide pre-task section and show practice1 section
    document.querySelector('.pre-task').classList.add('hidden');
    document.querySelector('.practice1').classList.remove('hidden');
    document.querySelector('.experiment-title').textContent = 'Practice Round 1: Categorise Images';
    
    // Show instructions initially
    document.getElementById('practice1-instructions').style.display = 'block';
    document.getElementById('practice1-content').style.display = 'none';
    
    // Shuffle and store practice images
    practiceImages = [...eastImages, ...westImages];
    shuffleArray(practiceImages);
}

// Fisher-Yates shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showNextPracticeImage() {
    // Remove feedback if present
    let feedback = document.getElementById('practice1-feedback');
    if (feedback) feedback.remove();
    if (currentPracticeImageIndex >= practiceImages.length) {
        document.querySelector('.practice1').classList.add('hidden');
        showPractice1Complete();
        return;
    }
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = `<img src="${practiceImages[currentPracticeImageIndex].src}" alt="Design image">`;
}

function showPractice1Complete() {
    // Create and show a completion message
    let completeDiv = document.getElementById('practice1-complete');
    if (!completeDiv) {
        completeDiv = document.createElement('div');
        completeDiv.id = 'practice1-complete';
        completeDiv.className = 'instructions';
        completeDiv.innerHTML = `<h2>Practice 1 Completed!</h2><p>You have finished categorising all images.<br>Click Next to continue.</p><button onclick="showPractice2Instructions()">Next</button>`;
        document.querySelector('main').appendChild(completeDiv);
    }
    completeDiv.style.display = 'block';
}

function showPractice2Instructions() {
    document.getElementById('practice1-complete').style.display = 'none';
    startPractice2();
}

function handleKeyPress(event) {
    if (document.querySelector('.practice1') && !document.querySelector('.practice1').classList.contains('hidden')) {
        if (event.key === 'e' || event.key === 'i') {
            const current = practiceImages[currentPracticeImageIndex];
            const userLabel = event.key === 'e' ? 'EAST' : 'WEST';
            if (userLabel === current.label) {
                // Correct: advance
                currentPracticeImageIndex++;
                showNextPracticeImage();
            } else {
                // Incorrect: show feedback
                let feedback = document.getElementById('practice1-feedback');
                if (!feedback) {
                    feedback = document.createElement('div');
                    feedback.id = 'practice1-feedback';
                    feedback.style.color = 'red';
                    feedback.style.fontWeight = 'bold';
                    feedback.style.textAlign = 'center';
                    feedback.style.marginBottom = '0.5em';
                    feedback.textContent = '✗ incorrect, please try again';
                    const container = document.getElementById('practice1-content');
                    container.insertBefore(feedback, container.firstChild);
                } else {
                    feedback.textContent = '✗ incorrect, please try again';
                }
            }
        }
    }
}

// Ensure keydown event is always attached
if (!window._iatKeyListenerAttached) {
    document.addEventListener('keydown', handleKeyPress);
    window._iatKeyListenerAttached = true;
}

// Word stimuli for practice 2
const goodWords = [
    {word: "love", label: "GOOD"},
    {word: "joy", label: "GOOD"},
    {word: "harmony", label: "GOOD"},
    {word: "peace", label: "GOOD"},
    {word: "respect", label: "GOOD"},
    {word: "community", label: "GOOD"},
    {word: "beauty", label: "GOOD"},
    {word: "kindness", label: "GOOD"},
    {word: "growth", label: "GOOD"},
    {word: "hope", label: "GOOD"}
];
const badWords = [
    {word: "hate", label: "BAD"},
    {word: "pain", label: "BAD"},
    {word: "isolation", label: "BAD"},
    {word: "conflict", label: "BAD"},
    {word: "shame", label: "BAD"},
    {word: "ugly", label: "BAD"},
    {word: "cruelty", label: "BAD"},
    {word: "failure", label: "BAD"},
    {word: "anger", label: "BAD"},
    {word: "fear", label: "BAD"}
];
let currentPracticeWordIndex = 0;
let practiceWords = [];

function startPractice2() {
    document.querySelector('.practice1').classList.add('hidden');
    document.querySelector('.practice2').classList.remove('hidden');
    document.querySelector('.experiment-title').textContent = 'Practice Round 2: Categorise Words';
    document.getElementById('practice2-instructions').style.display = 'block';
    document.getElementById('practice2-content').style.display = 'none';
    practiceWords = [...goodWords, ...badWords];
    shuffleArray(practiceWords);
}

function startWordPractice() {
    document.getElementById('practice2-instructions').style.display = 'none';
    document.getElementById('practice2-content').style.display = 'flex';
    currentPracticeWordIndex = 0;
    showNextPracticeWord();
}

function showNextPracticeWord() {
    let feedback = document.getElementById('practice2-feedback');
    if (feedback) feedback.remove();
    if (currentPracticeWordIndex >= practiceWords.length) {
        document.querySelector('.practice2').classList.add('hidden');
        showPractice2Complete();
        return;
    }
    const wordContainer = document.getElementById('wordContainer');
    wordContainer.innerHTML = `<span class="practice-word">${practiceWords[currentPracticeWordIndex].word}</span>`;
}

function showPractice2Complete() {
    let completeDiv = document.getElementById('practice2-complete');
    if (!completeDiv) {
        completeDiv = document.createElement('div');
        completeDiv.id = 'practice2-complete';
        completeDiv.className = 'instructions';
        completeDiv.innerHTML = `<h2>Practice 2 Completed!</h2><p>You have finished categorising all words.<br>Click Next to continue.</p><button onclick="hidePractice2AndStartTrial1()">Next</button>`;
        document.querySelector('main').appendChild(completeDiv);
    }
    completeDiv.style.display = 'block';
}

function hidePractice2AndStartTrial1() {
    document.querySelector('.practice2').classList.add('hidden');
    document.getElementById('practice2-complete').style.display = 'none';
    document.querySelector('.trial1').classList.remove('hidden');
    document.getElementById('trial1-instructions').style.display = 'block';
    document.getElementById('trial1-content').style.display = 'none';
    document.getElementById('trial1-begin').onclick = function() {
        document.getElementById('trial1-instructions').style.display = 'none';
        document.getElementById('trial1-content').style.display = 'flex';
        startTrial1();
    };
}

function handleKeyPress(event) {
    // Practice 1 logic
    if (document.querySelector('.practice1') && !document.querySelector('.practice1').classList.contains('hidden')) {
        if (event.key === 'e' || event.key === 'i') {
            const current = practiceImages[currentPracticeImageIndex];
            const userLabel = event.key === 'e' ? 'EAST' : 'WEST';
            if (userLabel === current.label) {
                currentPracticeImageIndex++;
                showNextPracticeImage();
            } else {
                let feedback = document.getElementById('practice1-feedback');
                if (!feedback) {
                    feedback = document.createElement('div');
                    feedback.id = 'practice1-feedback';
                    feedback.style.color = 'red';
                    feedback.style.fontWeight = 'bold';
                    feedback.style.textAlign = 'center';
                    feedback.style.marginBottom = '0.5em';
                    feedback.textContent = '✗ incorrect, please try again';
                    const container = document.getElementById('practice1-content');
                    container.insertBefore(feedback, container.firstChild);
                } else {
                    feedback.textContent = '✗ incorrect, please try again';
                }
            }
        }
    }
    // Practice 2 logic
    if (document.querySelector('.practice2') && !document.querySelector('.practice2').classList.contains('hidden')) {
        if (event.key === 'e' || event.key === 'i') {
            const current = practiceWords[currentPracticeWordIndex];
            const userLabel = event.key === 'e' ? 'GOOD' : 'BAD';
            if (userLabel === current.label) {
                currentPracticeWordIndex++;
                showNextPracticeWord();
            } else {
                let feedback = document.getElementById('practice2-feedback');
                if (!feedback) {
                    feedback = document.createElement('div');
                    feedback.id = 'practice2-feedback';
                    feedback.style.color = 'red';
                    feedback.style.fontWeight = 'bold';
                    feedback.style.textAlign = 'center';
                    feedback.style.marginBottom = '0.5em';
                    feedback.textContent = '✗ incorrect, please try again';
                    const container = document.getElementById('practice2-content');
                    container.insertBefore(feedback, container.firstChild);
                } else {
                    feedback.textContent = '✗ incorrect, please try again';
                }
            }
        }
    }
}

// --- Trial 1 (Congruent Block) ---
let trial1Images = [];
let trial1Words = [];
let trial2Images = [];
let trial2Words = [];
let trial1Stimuli = [];
let currentTrial1Index = 0;
let trialData = [];
let trial1StimulusStart = 0;

function startTrial1() {
    // Hide practice2, show trial1
    document.querySelector('.practice2').classList.add('hidden');
    document.querySelector('.trial1').classList.remove('hidden');
    document.querySelector('.experiment-title').textContent = 'Trial 1';

    // Shuffle and split images/words for trial 1 and 2
    let allImages = [...eastImages, ...westImages];
    let allWords = [...goodWords, ...badWords];
    shuffleArray(allImages);
    shuffleArray(allWords);
    trial1Images = allImages.slice(0, 10);
    trial2Images = allImages.slice(10, 20);
    trial1Words = allWords.slice(0, 10);
    trial2Words = allWords.slice(10, 20);
    trial1Stimuli = [...trial1Images, ...trial1Words];
    shuffleArray(trial1Stimuli);
    currentTrial1Index = 0;
    showNextTrial1Stimulus();
}

function showNextTrial1Stimulus() {
    let feedback = document.getElementById('trial1-feedback');
    if (feedback) feedback.remove();
    if (currentTrial1Index >= trial1Stimuli.length) {
        document.querySelector('.trial1').classList.add('hidden');
        showTrial1Complete();
        return;
    }
    const stim = trial1Stimuli[currentTrial1Index];
    const container = document.getElementById('stimulusContainer1');
    if (stim.src) {
        container.innerHTML = `<img src="${stim.src}" alt="Design image" style="max-width:100%;max-height:350px;display:block;margin:auto;">`;
    } else if (stim.word) {
        container.innerHTML = `<span class="practice-word">${stim.word}</span>`;
    }
    trial1StimulusStart = Date.now();
}

function showTrial1Complete() {
    let completeDiv = document.getElementById('trial1-complete');
    if (!completeDiv) {
        completeDiv = document.createElement('div');
        completeDiv.id = 'trial1-complete';
        completeDiv.className = 'instructions';
        completeDiv.innerHTML = `<h2>Trial 1 Completed!</h2><p>You have finished the first trial.<br>Click Next to continue.</p><button onclick="sendTrial1DataAndContinue()">Next</button>`;
        document.querySelector('main').appendChild(completeDiv);
    }
    completeDiv.style.display = 'block';
}

function sendTrial1DataAndContinue() {
    // Send only trial 1 data
    const trial1Data = trialData.filter(t => t.trial === 1);
    const computedScores = computeIATScores(trial1Data.concat(trialData.filter(t => t.trial === 2))); // for completeness
    sendDataToGoogleSheets({
        section: 'trial1',
        trialData: trial1Data,
        computedScores,
        timestamp: Date.now()
    });
    startTrial2();
}

// --- Trial 2 (Incongruent Block) ---
let trial2Stimuli = [];
let currentTrial2Index = 0;
let trial2StimulusStart = 0;

function startTrial2() {
    // Hide trial 1 completed screen if present
    const trial1Complete = document.getElementById('trial1-complete');
    if (trial1Complete) trial1Complete.style.display = 'none';
    document.querySelector('.trial1').classList.add('hidden');
    document.querySelector('.trial2').classList.remove('hidden');
    document.querySelector('.experiment-title').textContent = 'Trial 2';
    document.getElementById('trial2-instructions').style.display = 'block';
    document.getElementById('trial2-content').style.display = 'none';
    trial2Stimuli = [...trial2Images, ...trial2Words];
    shuffleArray(trial2Stimuli);
    currentTrial2Index = 0;
    // Set up the Begin Trial 2 button
    document.getElementById('trial2-begin').onclick = function() {
        document.getElementById('trial2-instructions').style.display = 'none';
        document.getElementById('trial2-content').style.display = 'flex';
        showNextTrial2Stimulus();
    };
}

function showNextTrial2Stimulus() {
    let feedback = document.getElementById('trial2-feedback');
    if (feedback) feedback.remove();
    if (currentTrial2Index >= trial2Stimuli.length) {
        document.querySelector('.trial2').classList.add('hidden');
        showTrial2Complete();
        return;
    }
    const stim = trial2Stimuli[currentTrial2Index];
    const container = document.getElementById('stimulusContainer2');
    if (stim.src) {
        container.innerHTML = `<img src="${stim.src}" alt="Design image" style="max-width:100%;max-height:350px;display:block;margin:auto;">`;
    } else if (stim.word) {
        container.innerHTML = `<span class="practice-word">${stim.word}</span>`;
    }
    trial2StimulusStart = Date.now();
}

function showTrial2Complete() {
    let completeDiv = document.getElementById('trial2-complete');
    if (!completeDiv) {
        completeDiv = document.createElement('div');
        completeDiv.id = 'trial2-complete';
        completeDiv.className = 'instructions';
        completeDiv.innerHTML = `<h2>Trial 2 Completed!</h2><p>You have finished the second trial.<br>The next page is a post-task questionnaire that will ask you some basic information about your demographics and experience with design.<br><br>Click Continue to proceed.</p><button onclick="sendTrial2DataAndContinue()">Continue</button>`;
        document.querySelector('main').appendChild(completeDiv);
    }
    completeDiv.style.display = 'block';
}

function sendTrial2DataAndContinue() {
    // Send only trial 2 data
    const trial2Data = trialData.filter(t => t.trial === 2);
    const computedScores = computeIATScores(trialData);
    sendDataToGoogleSheets({
        section: 'trial2',
        trialData: trial2Data,
        computedScores,
        timestamp: Date.now()
    });
    hideTrial2CompleteAndShowPostTask();
}

function hideTrial2CompleteAndShowPostTask() {
    document.getElementById('trial2-complete').style.display = 'none';
    showPostTask();
}

// Ensure only one key handler is active and handles all logic
if (!window._iatKeyListenerAttached) {
    document.addEventListener('keydown', handleKeyPress);
    window._iatKeyListenerAttached = true;
}

function handleKeyPress(event) {
    // Practice 1 logic
    if (document.querySelector('.practice1') && !document.querySelector('.practice1').classList.contains('hidden')) {
        if (event.key === 'e' || event.key === 'i') {
            const current = practiceImages[currentPracticeImageIndex];
            const userLabel = event.key === 'e' ? 'EAST' : 'WEST';
            if (userLabel === current.label) {
                currentPracticeImageIndex++;
                showNextPracticeImage();
            } else {
                let feedback = document.getElementById('practice1-feedback');
                if (!feedback) {
                    feedback = document.createElement('div');
                    feedback.id = 'practice1-feedback';
                    feedback.style.color = 'red';
                    feedback.style.fontWeight = 'bold';
                    feedback.style.textAlign = 'center';
                    feedback.style.marginBottom = '0.5em';
                    feedback.textContent = '✗ incorrect, please try again';
                    const container = document.getElementById('practice1-content');
                    container.insertBefore(feedback, container.firstChild);
                } else {
                    feedback.textContent = '✗ incorrect, please try again';
                }
            }
        }
    }
    // Practice 2 logic
    if (document.querySelector('.practice2') && !document.querySelector('.practice2').classList.contains('hidden')) {
        if (event.key === 'e' || event.key === 'i') {
            const current = practiceWords[currentPracticeWordIndex];
            const userLabel = event.key === 'e' ? 'GOOD' : 'BAD';
            if (userLabel === current.label) {
                currentPracticeWordIndex++;
                showNextPracticeWord();
            } else {
                let feedback = document.getElementById('practice2-feedback');
                if (!feedback) {
                    feedback = document.createElement('div');
                    feedback.id = 'practice2-feedback';
                    feedback.style.color = 'red';
                    feedback.style.fontWeight = 'bold';
                    feedback.style.textAlign = 'center';
                    feedback.style.marginBottom = '0.5em';
                    feedback.textContent = '✗ incorrect, please try again';
                    const container = document.getElementById('practice2-content');
                    container.insertBefore(feedback, container.firstChild);
                } else {
                    feedback.textContent = '✗ incorrect, please try again';
                }
            }
        }
    }
    // Trial 1 logic
    if (document.querySelector('.trial1') && !document.querySelector('.trial1').classList.contains('hidden')) {
        if (event.key === 'e' || event.key === 'i') {
            const stim = trial1Stimuli[currentTrial1Index];
            let correct = false;
            let userLabel = null;
            let correctLabel = null;
            let stimulusType = stim.src ? 'image' : 'word';
            if (stim.src) {
                correct = (event.key === 'e' && stim.label === 'EAST') || (event.key === 'i' && stim.label === 'WEST');
                userLabel = event.key === 'e' ? 'EAST' : 'WEST';
                correctLabel = stim.label;
            } else if (stim.word) {
                correct = (event.key === 'e' && stim.label === 'GOOD') || (event.key === 'i' && stim.label === 'BAD');
                userLabel = event.key === 'e' ? 'GOOD' : 'BAD';
                correctLabel = stim.label;
            }
            // Record data
            trialData.push({
                trial: 1,
                stimulusType,
                stimulus: stim.src ? stim.src : stim.word,
                correctLabel,
                userKey: event.key,
                userLabel,
                correct,
                rt: Date.now() - trial1StimulusStart
            });
            if (correct) {
                currentTrial1Index++;
                showNextTrial1Stimulus();
            } else {
                let feedback = document.getElementById('trial1-feedback');
                if (!feedback) {
                    feedback = document.createElement('div');
                    feedback.id = 'trial1-feedback';
                    feedback.style.color = 'red';
                    feedback.style.fontWeight = 'bold';
                    feedback.style.textAlign = 'center';
                    feedback.style.marginBottom = '0.5em';
                    feedback.textContent = '✗ incorrect, please try again';
                    const container = document.getElementById('stimulusContainer1').parentElement;
                    container.insertBefore(feedback, container.firstChild);
                } else {
                    feedback.textContent = '✗ incorrect, please try again';
                }
            }
        }
    }
    // Trial 2 logic
    if (document.querySelector('.trial2') && !document.querySelector('.trial2').classList.contains('hidden')) {
        if (event.key === 'e' || event.key === 'i') {
            const stim = trial2Stimuli[currentTrial2Index];
            let correct = false;
            let userLabel = null;
            let correctLabel = null;
            let stimulusType = stim.src ? 'image' : 'word';
            if (stim.src) {
                correct = (event.key === 'e' && stim.label === 'EAST') || (event.key === 'i' && stim.label === 'WEST');
                userLabel = event.key === 'e' ? 'EAST' : 'WEST';
                correctLabel = stim.label;
            } else if (stim.word) {
                correct = (event.key === 'e' && stim.label === 'BAD') || (event.key === 'i' && stim.label === 'GOOD');
                userLabel = event.key === 'e' ? 'BAD' : 'GOOD';
                correctLabel = stim.label;
            }
            // Record data
            trialData.push({
                trial: 2,
                stimulusType,
                stimulus: stim.src ? stim.src : stim.word,
                correctLabel,
                userKey: event.key,
                userLabel,
                correct,
                rt: Date.now() - trial2StimulusStart
            });
            if (correct) {
                currentTrial2Index++;
                showNextTrial2Stimulus();
            } else {
                let feedback = document.getElementById('trial2-feedback');
                if (!feedback) {
                    feedback = document.createElement('div');
                    feedback.id = 'trial2-feedback';
                    feedback.style.color = 'red';
                    feedback.style.fontWeight = 'bold';
                    feedback.style.textAlign = 'center';
                    feedback.style.marginBottom = '0.5em';
                    feedback.textContent = '✗ incorrect, please try again';
                    const container = document.getElementById('stimulusContainer2').parentElement;
                    container.insertBefore(feedback, container.firstChild);
                } else {
                    feedback.textContent = '✗ incorrect, please try again';
                }
            }
        }
    }
}

function showPostTask() {
    document.querySelector('.trial2').classList.add('hidden');
    document.querySelector('.post-task').classList.remove('hidden');
    document.querySelector('.experiment-title').textContent = 'Post-Task Questionnaire';
}

function computeTrialSummary(trialData, trialNumber) {
    const trials = trialData.filter(t => t.trial === trialNumber);
    const correct = trials.filter(t => t.correct).length;
    const incorrect = trials.length - correct;
    const percentCorrect = trials.length ? (correct / trials.length) * 100 : 0;
    const avgRT = trials.length ? Math.round(trials.reduce((sum, t) => sum + t.rt, 0) / trials.length) : 0;
    return { correct, incorrect, percentCorrect, avgRT };
}

function submitData() {
    const preTask = collectPreTaskData();
    const participant = collectParticipantData();
    const trial1 = computeTrialSummary(trialData, 1);
    const trial2 = computeTrialSummary(trialData, 2);

    // Compose a flat payload for one row per participant, using local time for all timestamps
    const payload = {
        section: "summary",

        // Pre-task
        preTaskTimestamp: new Date().toLocaleString(),
        confidence: preTask.confidence,
        familiarity: preTask.familiarity,
        culturalInfluence: preTask.culturalInfluence,

        // Trial 1 summary
        trial1Timestamp: new Date().toLocaleString(),
        trial1_correct: trial1.correct,
        trial1_incorrect: trial1.incorrect,
        trial1_percentCorrect: trial1.percentCorrect,
        trial1_avgRT: trial1.avgRT,

        // Trial 2 summary
        trial2Timestamp: new Date().toLocaleString(),
        trial2_correct: trial2.correct,
        trial2_incorrect: trial2.incorrect,
        trial2_percentCorrect: trial2.percentCorrect,
        trial2_avgRT: trial2.avgRT,

        // Post-task
        postTaskTimestamp: new Date().toLocaleString(),
        culturalID: participant.culturalID,
        designExposure: participant.designExposure,
        formalDesignEducation: participant.formalDesignEducation,
        designEducationWhere: participant.designEducationWhere,
        easierBlock: participant.easierBlock,
        blockReflection: participant.blockReflection,
        influencedByCulture: participant.influencedByCulture
    };

    sendDataToGoogleSheets(payload);

    document.querySelector('.post-task').classList.add('hidden');
    document.querySelector('.thank-you').classList.remove('hidden');
    document.querySelector('.experiment-title').textContent = 'Thank you!';
}

function updateSliderValue(slider) {
    const value = slider.value;
    const wrapper = slider.parentElement;
    const valueDisplay = wrapper.querySelector('.slider-value');
    valueDisplay.textContent = value;
    
    // Calculate the position of the thumb
    const min = slider.min;
    const max = slider.max;
    const percentage = (value - min) / (max - min);
    const thumbPosition = percentage * 100;
    
    // Update the position of the value display
    valueDisplay.style.left = `${thumbPosition}%`;
}

function startImagePractice() {
    // Hide instructions and show practice content
    document.getElementById('practice1-instructions').style.display = 'none';
    document.getElementById('practice1-content').style.display = 'flex';
    
    // Reset image index and show first image
    currentPracticeImageIndex = 0;
    showNextPracticeImage();
}

function computeIATScores(trialData) {
    const congruent = trialData.filter(t => t.trial === 1 && t.correct);
    const incongruent = trialData.filter(t => t.trial === 2 && t.correct);

    const meanRT_congruent = congruent.reduce((a, b) => a + b.rt, 0) / congruent.length;
    const meanRT_incongruent = incongruent.reduce((a, b) => a + b.rt, 0) / incongruent.length;

    // Standard deviation of all correct RTs
    const allRTs = trialData.filter(t => t.correct).map(t => t.rt);
    const meanRT = allRTs.reduce((a, b) => a + b, 0) / allRTs.length;
    const sdRT = Math.sqrt(allRTs.reduce((a, b) => a + Math.pow(b - meanRT, 2), 0) / allRTs.length);

    // D-score
    const dScore = (meanRT_incongruent - meanRT_congruent) / sdRT;

    return {
        dScore,
        meanRT_congruent,
        meanRT_incongruent,
        accuracy_congruent: congruent.length / 20,
        accuracy_incongruent: incongruent.length / 20
    };
}

// Google Sheets Integration deployed
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx96CDdhJBbE6U_tT0KC7eZNUyeAtGcDGUe7BfRZG_s8BAoDR6zwUq8XYYnG1Tb_rbbMA/exec';

// Flattens nested objects (e.g., participantData, preTaskData) into a single-level object
function flattenObject(obj, prefix = '', res = {}) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            flattenObject(obj[key], prefix + key + '_', res);
        } else {
            res[prefix + key] = obj[key];
        }
    }
    return res;
}

// Append data to the spreadsheet
async function sendDataToGoogleSheets(payload) {
    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        // You won't get a readable response in no-cors mode, but the data will be sent
        console.log('Data likely sent successfully (no-cors mode)');
    } catch (error) {
        console.error('Error sending data:', error);
    }
}

function collectParticipantData() {
    // Collects participant metadata from the post-task questionnaire
    const getVal = name => {
        const el = document.querySelector(`[name="${name}"]`);
        return el ? (el.type === 'checkbox' ? el.checked : el.value) : '';
    };
    return {
        culturalID: getVal('culturalID'),
        designExposure: getVal('designExposure'),
        formalDesignEducation: getVal('formalDesignEducation'),
        designEducationWhere: getVal('designEducationWhere'),
        easierBlock: getVal('easierBlock'),
        blockReflection: getVal('blockReflection'),
        influencedByCulture: getVal('influencedByCulture'),
        // Add more fields as needed
    };
}

function collectPreTaskData() {
    // Collects pre-task questionnaire data
    const getVal = name => {
        const el = document.querySelector(`[name="${name}"]`);
        return el ? (el.type === 'checkbox' ? el.checked : el.value) : '';
    };
    return {
        confidence: getVal('confidence'),
        familiarity: getVal('familiarity'),
        culturalInfluence: getVal('culturalInfluence'),
        // Add more fields as needed
    };
}

function doPost(e) {
  // ... your logic ...
  return ContentService
    .createTextOutput(JSON.stringify({status: "success"}))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function doOptions(e) {
  return ContentService
    .createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function sendTrial(trial) {
  // trial is a flat object, e.g.:
  // {
  //   section: 'trial',
  //   trial: 1,
  //   stimulusType: 'image',
  //   stimulus: 'East1',
  //   correctLabel: 'EAST',
  //   userKey: 'e',
  //   userLabel: 'EAST',
  //   correct: true,
  //   rt: 529,
  //   timestamp: Date.now()
  // }

  fetch(GOOGLE_SHEETS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(trial)
  })
  .then(res => res.json())
  .then(data => {
    console.log("Trial sent:", data);
  })
  .catch(error => {
    console.error("Error sending trial data:", error);
  });
}

