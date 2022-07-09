const DEFUALT_FORMAT = "seconds";

const countDown = () => {
  var countDownDate = new Date("July 12, 2022 01:44:00 UTC").getTime();

  const daysElement = document.querySelector(".days");
  const hoursElement = document.querySelector(".hours");
  const minutesElement = document.querySelector(".minutes");
  const secondsElement = document.querySelector(".seconds");

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let formattedDay = days.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    let formattedHours = hours.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    let formattedMinutes = minutes.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    let formattedSeconds = seconds.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    // Time calculations for days, hours, minutes and seconds

    displayTimeLeft(
      formattedDay,
      formattedHours,
      formattedMinutes,
      formattedSeconds
    );

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      var element = document.getElementById("counDown");
      element.classList.add("visually-hidden");
    }
  }, 1000);

  function displayTimeLeft(d, h, m, s) {
    daysElement.textContent = d;
    hoursElement.textContent = h;
    minutesElement.textContent = m;
    secondsElement.textContent = s;
  }
};

countDown();
