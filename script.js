const CountryBtn = document.getElementById("search");
let CountryInput = document.getElementById("country");

CountryBtn.addEventListener("click", () => {
  let countryName = CountryInput.value;
  let searchURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(searchURL)
    .then((response) => response.json())
    .then((data) => {
      information.innerHTML = 
      `
      <h2>${data[0].name.common}</h2>
      <img src="${data[0].flags.svg}" class="country-flag">  
        <div class="wrapper">
            <div class="data">
                <p>Capital:</p>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data">
                <p>Continent:</p>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data">
                <p>Population:</p>
                <span>${data[0].population.toLocaleString()}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data">
                <p>Currency:</p>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data">
                <p>Language:</p>
                <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
            </div>
        </div>
        `;
    }).catch(() => {
        if(countryName.length === 0) {
            information.innerHTML = `<h3>Please type a country name</h3>`
        } else {
            `<h3>Please type a valid country name</h3>`
        }
    })
});
