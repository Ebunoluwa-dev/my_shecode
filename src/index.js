let now = new Date();
console.log(now);
let h2 = document.querySelector("#date");
h2.innerHTML = now;
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  console.log(searchInput.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("button", search);

let apiKey = "5abfacb2719eefc2eddc5948beae3973";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=5abfacb2719eefc2eddc5948beae3973";

function showTemperature(response) {
  console.log(response);
}

axios.get(`${apiUrl}`).then(showTemperature);
