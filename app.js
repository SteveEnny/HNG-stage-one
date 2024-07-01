const outline_lists = document.querySelector(".outline-lists");
const btn_toggle = document.querySelector(".toggle-list");
const outline_list = document.querySelectorAll(".outline-list");
const goals_list = document.querySelectorAll(".goal-lists");
const check_list = document.querySelector(".check-list");

/// Toggle Outline Goals
btn_toggle.addEventListener("click", function () {
  outline_lists.classList.toggle("show-goals");
  btn_toggle.querySelector(".down-arrowdown").classList.toggle("show-dropdown");
  btn_toggle.querySelector(".down-arrowup").classList.toggle("hide-dropdown");
});

function show_goals() {
  goals_list.forEach((el, index) => {
    outline_list[index].style.background = "#FFFF";
    outline_list[index].dataset.active = "false";
    if (el.classList.contains("show-goals")) {
      el.classList.remove("show-goals");
    }
  });
}

outline_list.forEach((el, index) => {
  if (index === 0) {
    outline_list[index].style.background = "rgb(241 245 249)";
    el.dataset.active = "true";
  }
  el.addEventListener("click", function () {
    show_goals();
    el.style.background = "rgb(241 245 249)";
    el.dataset.active = "true";
    el.querySelector(".goal-lists").classList.add("show-goals");
  });
});

// Date Functionalies..
const date = new Date();
const day = date.getUTCDate();
const month = date.getUTCMonth();
const year = date.getUTCFullYear();
const hour = date.getUTCHours();
const min = date.getUTCMinutes();
const labelDate = document.querySelector(".date-day");
const time = document.querySelector(".time");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

labelDate.textContent = `${daysOfWeek[day]}-${months[month]}-${year}`;
time.textContent = `-${hour} : ${min}`;

// Mobile Dropdown menu functionality
const nav_dropDown = document.querySelector(".nav-dropdown");

nav_dropDown.addEventListener("click", function () {
  console.log("working");
  console.log(document.querySelector(".nav-links-mobile").classList);
  document
    .querySelector(".nav-links-mobile")
    .classList.toggle("show-mobile-nav");
});
