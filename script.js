const apiKey = '50b2874205f940dd90620811240605';
const baseUrl = 'http://api.weatherapi.com/v1';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('sButton');
const locationElement = document.getElementById('location');
const temp = document.getElementById('temp');
const desc = document.getElementById('desc');
const weatherIcon = document.getElementById('icon');

// Adds listener to call the getWeather function when the search button is cliked
searchButton.addEventListener('click', () => {
  const location = locationInput.value;
  if (location) {
    getWeather(location);
  }
});

//Function that retrieves data from weather API and dynamically updates the web page
function getWeather(location) {
  const url = `${baseUrl}/current.json?key=${apiKey}&q=${location}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      locationElement.textContent = data.location.name;
      temp.textContent = `${data.current.temp_f}°F`;
      desc.textContent = data.current.condition.text;
      weatherIcon.src = data.current.condition.icon;
    });
}
