const signImageFilePath = "../translationIndividualSigns/";

//We use Object.fromEntries(), map() and split() functions to create object containing key-value pairs for each character and its corresponding image path.
export const charToSignImageMapping = Object.fromEntries(
  "abcdefghijklmnopqrstuvwxyz".split('').map(char => [char, `${signImageFilePath}${char}.png`])
);

export function mapCharactersToImages(inputText) {
    const characters = inputText.toLowerCase().split('').filter(char => /[a-z]/);

    const signLanguageImages = characters.map((char, index) => (
        charToSignImageMapping[char] || ''
    ));
    return signLanguageImages;
}