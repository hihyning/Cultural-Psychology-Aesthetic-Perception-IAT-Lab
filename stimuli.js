// Visual design images: filenames are assumed to be in ./images/
const eastImages = [
    "Visual Stimuli/East/East1.png", "Visual Stimuli/East/East2.png", "Visual Stimuli/East/East3.png", 
    "Visual Stimuli/East/East4.png", "Visual Stimuli/East/East5.png", "Visual Stimuli/East/East6.png", 
    "Visual Stimuli/East/East7.png", "Visual Stimuli/East/East8.png", "Visual Stimuli/East/East9.png", 
    "Visual Stimuli/East/East10.png"
];

const westImages = [
    "Visual Stimuli/West/West11.png", "Visual Stimuli/West/West12.png", "Visual Stimuli/West/West13.png", 
    "Visual Stimuli/West/West14.png", "Visual Stimuli/West/West15.png", "Visual Stimuli/West/West16.png", 
    "Visual Stimuli/West/West17.png", "Visual Stimuli/West/West18.png", "Visual Stimuli/West/West19.png", 
    "Visual Stimuli/West/West20.png"
];

// Word stimuli
const goodWords = [
    "love", "joy", "harmony", "peace", "respect",
    "community", "beauty", "kindness", "growth", "hope"
];

const badWords = [
    "hate", "pain", "isolation", "conflict", "shame",
    "ugly", "cruelty", "failure", "anger", "fear"
];

// Utility function to shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export { eastImages, westImages, goodWords, badWords, shuffle };
