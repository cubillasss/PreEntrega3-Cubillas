const txtPlace = document.querySelector("#txtPlace");
const btnSearch = document.querySelector("#btnSearch");
const cardTable = document.querySelector("#cardTable");
const baseUrl = 'http://api.weatherapi.com/v1';

btnSearch.addEventListener('click', async() => {
    await searchData();
});

const searchData = async() => {
    const response = await fetch(baseUrl+`/current.json?key=78eb8d2357be4c9983a223504232707&lang=es&q=${txtPlace.value}`);
    const weather = await response.json();
    writeWeather(weather);
    txtPlace.value = "";
}

const writeWeather = (info) => {
    const newCard = document.createElement("div");
    const newImg = document.createElement("img");
    const countryCity = document.createElement("h5");
    const cardBody = document.createElement("div");
    const cardText = document.createElement("p");

    const country = info.location.country;
    const city = info.location.name;
    const weatherIcon = info.current.condition.icon;
    const weatherText = info.current.condition.text;
    const weatherHumidity = info.current.humidity;
    const weatherTempC = info.current.temp_c;

    newImg.src = "https:" + weatherIcon;
    newImg.class = "card-img-top";

    countryCity.innerHTML = `${country}, ${city}`;

    cardText.innerHTML = `El clima esta: ${weatherText}, La humedad es de: ${weatherHumidity}%, La temperatura es de: ${weatherTempC}°C`;
    cardText.class = "card-text";

    cardBody.class = "card-body";

    newCard.style.backgroundColor = "white";
    newCard.style.width = "18rem";
    newCard.setAttribute("class", "bootstrap-select");

    newCard.appendChild(newImg);
    newCard.appendChild(countryCity);
    newCard.appendChild(cardBody);
    cardBody.appendChild(cardText);
    cardTable.appendChild(newCard);
}