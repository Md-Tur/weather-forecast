const API_KEY = `8fa82ea1e48cc085bfb73250e16bc673`;
const searchTemparature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;

}

const displayTemparature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temparature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    // set weather icon
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src', url);
}