let speaksEnglish = true;
// let population; // I honestly do not understand why this creates a bug but not the
// other variable such as 'speaksEnglish' and isIsland
let isIsland = false;
let countryName = prompt('What country do you suggest I live in?');
if (speaksEnglish && population < 50 && !isIsland) {
    console.log(`You should live in ${countryName} :)`);
} else {
    console.log(`${countryName} does not meet your criteria :(`);
}