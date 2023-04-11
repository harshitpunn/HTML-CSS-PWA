const citiesData = [];
let interval;

class Cities {
  constructor (cityName,country,population, countryImage) {
    this.cityName = cityName
    this.country = country
    this.population = population
    this.countryImage = countryImage
  }

  addCityData(cityDataCollection) {
    cityDataCollection.push({cityname: this.cityName, population: this.population, country: this.country, countryimage: this.countryimage})
  }

}

const randomNumber = (min, max) => { 
  return Math.floor(Math.random() * (max - min) + min);
} 
const changeImage = () => {
  console.log(citiesData[randomNumber(0,citiesData.length)])
}
const startImageInterval = () => {
  interval = setInterval(changeImage, 2000);
}

const clearImageInterval = () => {
  clearInterval(interval);
  interval = null;
}

const addCityData = (event) => {
  event.preventDefault();

  let cityName = document.getElementById('cityName').value;
  let country = document.getElementById('country').value;
  let population = document.getElementById('population').value;
  let countryImage = document.getElementById('countryImage').value;


  let cityClass = new Cities(cityName,country, population,countryImage);
  cityClass.addCityData(citiesData);

    clearImageInterval()
    startImageInterval()
}
document.getElementById('form1').addEventListener('submit', addCityData, false);
