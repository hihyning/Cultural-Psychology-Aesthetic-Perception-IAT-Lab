// Visual design images: filenames are assumed to be in ./images/
const eastImages = [
    "East1.jpg", "East2.jpg", "East3.jpg", "East4.jpg", "East5.jpg",
    "East6.jpg", "East7.jpg", "East8.jpg", "East9.jpg", "East10.jpg"
];

const westImages = [
    "West1.jpg", "West2.jpg", "West3.jpg", "West4.jpg", "West5.jpg",
    "West6.jpg", "West7.jpg", "West8.jpg", "West9.jpg", "West10.jpg"
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
