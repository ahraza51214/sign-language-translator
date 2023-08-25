
const signImageFilePath = "../translationIndividualSigns/";

export const charToSignImageMapping = new Map();
"abcdefghijklmnopqrstuvwxyz".split('').forEach((char) => {
    charToSignImageMapping[char] = `${signImageFilePath}/${char}.png`;
});

export function mapCharactersToImages(inputText) {
    const characters = inputText.toLowerCase().split('');
    const signLanguageImages = characters.map((char, index) => (
        charToSignImageMapping[char] || ''
    ));
    return signLanguageImages;
}