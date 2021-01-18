$(document).ready(function () {
  let radioSelect;
  let op;

  $("#btn").click(function () {
    let demo = $(".space");
    for (let j of demo) {
      if (j.checked) {
        radioSelect = j.id;
        break;
      }
    }

    if (radioSelect === "science") {
      window.location.href = "./HTML/science.html";
    } else if (radioSelect === "cartoon") {
      window.location.href = "./HTML/cartoon.html";
    } else if (radioSelect === "gk") {
      window.location.href = "./HTML/gk.html";
    } else if (radioSelect === "sports") {
      window.location.href = "./HTML/sports.html";
    } else if (radioSelect === "bollywood") {
      window.location.href = "./HTML/bollywood.html";
    } else if (radioSelect === "politics") {
      window.location.href = "./HTML/politics.html";
    }
  });
});
