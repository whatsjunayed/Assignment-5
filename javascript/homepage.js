// Set Time section
const today = new Date();
const date = today.toDateString().split(" ");

document.getElementById("day").innerText = date[0] + " ,";
document.getElementById("month-year").innerText =
  date[1] + " " + date[2] + " " + date[3];

let currentHour = today.getHours();
let currentmunite = today.getMinutes();
let currentsecond = today.getSeconds();
let period = "";

//set am or pm
if (currentHour >= 12) {
  period = "PM";
  if (currentHour > 12) {
    currentHour -= 12;
  }
} else {
  period = "AM";
  if (currentHour === 0) {
    currentHour = 12;
  }
}

// Random color seciton

document
  .getElementById("color-container")
  .addEventListener("click", function () {
    const aColor = Math.floor(Math.random() * 256);
    const bColor = Math.floor(Math.random() * 256);
    const cColor = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${aColor},${bColor},${cColor})`;
  });

//complete button functionality

const btn = document.querySelectorAll(".content .btn");
document.getElementById("more-left").innerText = btn.length;
for (let button of btn) {
  button.addEventListener("click", function () {
    alert("Board updated Successfully");
    button.classList.add("btn-disable");
    const totalAssignment = parseInt(
      document.getElementById("total-assignment").innerText
    );
    document.getElementById("total-assignment").innerText = totalAssignment + 1;

    const moreLeft = parseInt(document.getElementById("more-left").innerText);
    document.getElementById("more-left").innerText = moreLeft - 1;
    button.setAttribute("disabled", "true");
    moreLeft == 1 &&
      alert("congrates!!! You have completed all the current task");

    const parentTitle = button.parentNode.parentNode;

    const title = parentTitle.querySelector(".content-title").innerText;

    const activity = document.getElementById("all-activity");
    const updateContent = document.createElement("p");
    updateContent.innerText = `You have completed the task ${title} at ${currentHour}:${currentmunite}:${currentsecond} ${period}`;
    activity.appendChild(updateContent);
    updateContent.classList.add("activity-style");
  });
}

//clear history functionality

document.getElementById("clear-history").addEventListener("click", function () {
  const allActivity = document.getElementById("all-activity");
  const activity = allActivity.querySelectorAll("p");

  for (const p of activity) {
    allActivity.removeChild(p);
  }
});
