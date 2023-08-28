const signImageFilePath = "../translationIndividualSigns/";

//We use Object.fromEntries(), map() and split() functions to create object containing key-value pairs for each character and its corresponding image path.
export const charToSignImageMapping = Object.fromEntries(
  "abcdefghijklmnopqrstuvwxyz".split('').map(char => [char, `${signImageFilePath}${char}.png`])
);

export function mapCharactersToImages(inputText) {
    const characters = inputText.toLowerCase().split('');

    const signLanguageImages = characters
        .filter(char => /[a-z]/.test(char)) // Only include characters from 'a' to 'z'
        .map((char, index) => (
            charToSignImageMapping[char] || ''
        ));
    
    return signLanguageImages;
}