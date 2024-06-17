let second = document.querySelector(".second");
let minute = document.querySelector(".minute");
let hour = document.querySelector(".hour");
let day = document.querySelector(".day");

let countdown = new Date("September 30 ,2024 11:59:59").getTime();

let x = setInterval(() => {
  let now = new Date().getTime();
  let interval = countdown - now;

  let newDays = Math.floor(interval / (1000 * 60 * 60 * 24));
  let newHours = Math.floor(
    (interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let newMinutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
  let newSeconds = Math.floor((interval % (1000 * 60)) / 1000);

  newSeconds < 10
    ? (second.innerHTML = `0${newSeconds}`)
    : (second.innerHTML = newSeconds);

  newMinutes < 10
    ? (minute.innerHTML = `0${newMinutes}`)
    : (minute.innerHTML = newMinutes);

  newHours < 10
    ? (hour.innerHTML = `0${newHours}`)
    : (hour.innerHTML = newHours);

  newDays < 10 ? (day.innerHTML = `0${newDays}`) : (day.innerHTML = newDays);

  if (countdown - new Date().getTime() < 0) {
    clearInterval(x);
    hour.innerHTML = day.innerHTML = minute.innerHTML = second.innerHTML = "00";
  }
}, 1000);

//
