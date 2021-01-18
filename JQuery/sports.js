$(document).ready(function () {
  let quesArray = [
    "Who is the first Indian woman to win an Asian Games gold in 400m run ?",
    "What is the new name of Feroz Shah Kotla ground?",
    "Which of the following region has won the Ranji Trophy tournament 2019?",
    "Which of the following trophy/ is not related to Cricket in India",
    "Who got FIFA Best Player 2019 Award?",
    "Which of the following is not matched correctly?",
    "Who has won the Rajiv Gandhi Khel Ratna Award 2019?",
    " As per BCCI's new annual contract which of the following player is NOT in the grade A+ category?",
    "When was the first Common wealth Games held ?",
    "In which sports is the participant called pugilist",
  ];

  let aArray = [
    "M.L.Valsamma",
    "Arun Jaitley Stadium",
    "Saurashtra",
    "Syed Mushtaq Ali Trophy",
    "Neymar",
    "Pankaj Advani: Billiards",
    "Sakshi Malik",
    "Virat Kohli",
    "1930",
    "Sprinter",
  ];

  let bArray = [
    "P.T. Usha",
    "Sheila Dikshit Stadium",
    " Mumbai",
    "Deodhar Trophy",
    " L. Messi",
    " Anjali Bhagwat: Shooting",
    "Bajrang Punia",
    " Rohit Sharma",
    "1934",
    "Boxing",
  ];

  let cArray = [
    "Kamaljit Sandhu",
    "Gautam Gambhir Stadium",
    "Vidarbha",
    "Duleep Trophy",
    "C. Ronaldo",
    "Muhammed Anas Yahiya: Boxing",
    "Mirabai Chanu",
    "Jasprit Bumrah",
    "1938",
    "Wrestling",
  ];

  let dArray = [
    "K.Malleshwari",
    "Ajit Wadekar Stadium",
    "Rajasthan",
    "Santosh Trophy",
    "Luka Mordic",
    "Deepa Malik: Athletics",
    "None of the above",
    "Shikhar Dhawan",
    "1948",
    "Javelin throw",
  ];

  let correctArray = [
    "Kamaljit Sandhu",
    "Arun Jaitley Stadium",
    "Vidarbha",
    "Santosh Trophy",
    " L. Messi",
    "Muhammed Anas Yahiya: Boxing",
    "Bajrang Punia",
    "Shikhar Dhawan",
    "1930",
    "Boxing",
  ];

  let time = 0;
  let globalVar,
    answer,
    i = 0;

  let a = $(
    `<input type = "radio" id = "one" class = "option" name = "select"> &nbsp <label for = "one" id = "opt1"></label> </input><br>`
  );
  $(a).appendTo("#sopt");
  let b = $(
    `<input type = "radio" id = "two" class = "option" name = "select"> &nbsp <label for = "two" id = "opt2"></label> </input><br>`
  );
  $(b).appendTo("#sopt");
  let c = $(
    `<input type = "radio" id = "three" class = "option" name = "select"> &nbsp <label for = "three" id = "opt3"></label> </input><br>`
  );
  $(c).appendTo("#sopt");
  let d = $(
    `<input type = "radio" id = "four" class = "option" name = "select"> &nbsp <label for = "four" id = "opt4"></label> </input><br>`
  );
  $(d).appendTo("#sopt");
  $("#time").text(`00 : ${time++}`);

  let clock = setInterval(() => {
    $("#time").text(`00 : ${time++}`);
    if (time === 60) {
      time = 0;
      i++;
      if (i === 10) {
        end();
      }
      globalVar = requestAnimationFrame(ques);
    }
  }, 1000);

  let ques = function () {
    setTimeout(() => {
      $("#score").css("border", "none");
    }, 1000);

    $("#one").prop("checked", false);
    $("#two").prop("checked", false);
    $("#three").prop("checked", false);
    $("#four").prop("checked", false);
    $("question").text("");
    $("#question").text(quesArray[i]);
    $("#opt1").text("");
    $("#opt1").text(aArray[i]);
    $("#one").attr("value", aArray[i]);
    $("#opt2").text("");
    $("#opt2").text(bArray[i]);
    $("#two").attr("value", bArray[i]);
    $("#opt3").text("");
    $("#opt3").text(cArray[i]);
    $("#three").attr("value", cArray[i]);
    $("#opt4").text("");
    $("#opt4").text(dArray[i]);
    $("#four").attr("value", dArray[i]);
  };

  globalVar = requestAnimationFrame(ques);

  let button = $(`<button id = "btn">NEXT</button>`);
  $(button).appendTo("#frame");

  button.click(() => {
    let demo = $(".option");
    for (const j of demo) {
      if (j.checked) {
        answer = j.value;
        break;
      }
    }
    if (answer === correctArray[i]) {
      $("#span").text(parseInt($("#span").text()) + 5);
    } else {
      $("#score").css("border", "5px solid red");
    }

    time = 0;
    i++;
    if (i === 10) {
      end();
    }
    globalVar = requestAnimationFrame(ques);
  });

  function end() {
    cancelAnimationFrame(globalVar);
    clearInterval(clock);
    setTimeout(() => {
      alert(`Your Score is : ${$("#span").text()} out of 50`);
    }, 1000);
  }
});
