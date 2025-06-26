let dayElement = document.getElementById("day");
let dateElement = document.getElementById("date");
let raport = document.getElementById("raport");
let degree = document.getElementById("degree");

let months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let city = "Algiers";
let apiKey = "88f0694e09754257881192629252606";

// Fetch weather (current or historical)
function getWeather(cityName, selectedDate = null) {
  let url;

  if (selectedDate) {
    url = `http://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${cityName}&dt=${selectedDate}`;
  } else {
    url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let weather = selectedDate ? data.forecast.forecastday[0].day : data.current;
      let condition = weather.condition.text;
      let temperature = weather.avgtemp_c || weather.temp_c;

      degree.textContent = `${temperature}°C`;
      raport.textContent = condition;

      let date = selectedDate ? new Date(selectedDate) : new Date(data.location.localtime);
      dayElement.textContent = weekdays[date.getDay()];
      dateElement.textContent = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    })
    .catch(error => {
      console.log("Error fetching weather:", error);
      degree.textContent = "--";
      raport.textContent = "No data";
    });
}

// Initial load
getWeather(city);

// Handle calendar day click and active toggle
document.querySelectorAll(".day").forEach(dayDiv => {
  dayDiv.addEventListener("click", () => {
    // Remove active class from all days
    document.querySelectorAll(".day").forEach(d => d.classList.remove("active"));

    // Add active class to clicked day
    dayDiv.classList.add("active");

    // Get clicked date info
    let day = dayDiv.dataset.day;
    let monthYear = document.querySelector(".month h2").textContent; // e.g., "June, 2025"
    let [monthName, year] = monthYear.replace(",", "").split(" ");
    let month = months.indexOf(monthName) + 1;

    // Format date to YYYY-MM-DD
    let formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    getWeather(city, formattedDate);
  });
});
