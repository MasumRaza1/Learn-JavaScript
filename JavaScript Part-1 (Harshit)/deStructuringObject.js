// object destructuring

const band = {
    bandName: "led zepplin",
    famousSong :"Kaise hua",
    year: 1968
};
// const bandName = band.bandName;
// const song = band.famousSong;



const {bandName:va1, famousSong, year, ...resprops} = band;
// console.log(bandName, year);
console.log(va1, year);
console.log(resprops);