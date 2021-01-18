$(document).ready(function () {
  let quesArray = [
    "The members of the Rajya Sabha are elected by",
    "The power to decide an election petition is vested in the",
    "The present Lok Sabha is the",
    "The minimum age to qualify for election to the Lok Sabha is",
    "The pension of a high court judge is charged to the",
    "The president can dissolve the Lok Sabha on",
    "The Objectives Resolution which laid down the main objectives to guide the deliberations of the Assembly was moved by",
    "The members of the Rajya Sabha are elected for a term",
    "Who was the President of the Constitutional Committee and played an important role in drafting the Constitution?",
    " Who prevailed in the 1977 elections and ended Indira Gandhi’s emergency rule?",
  ];

  let aArray = [
    "the people",
    "Parliament",
    "14th Lok Sabha",
    "25 years",
    "Consolidated Fund of India",
    "advice of the chief justice of India",
    "Sardar Patel",
    "determined by the state legislative assembly of a state",
    "Mahatma Gandhi",
    "Atal Bihari Vajpayee",
  ];

  let bArray = [
    "Lok Sabha",
    "High courts",
    "15th Lok Sabha",
    "21 years",
    "Consolidated Fund of the state where he last served",
    "advice of the prime minister",
    "Jawaharlal Nehru",
    "of four years",
    "Jawaharlal Nehru",
    "Morarji Desai",
  ];

  let cArray = [
    "elected members of the legislative assembly",
    "Supreme Court",
    "16th Lok Sabha",
    "18 years",
    "Consolidated Funds of the different states where he has served",
    "recommendation of Lok Sabha",
    "K.M. Munshi",
    "of six years",
    "I.K. Gujral",
    "Charan Singh",
  ];

  let dArray = [
    "elected members of the legislative council",
    "Election Commission",
    "17th Lok Sabha",
    "35 years",
    "Contingency Fund of India",
    "recommendation of the Rajya Sabha",
    "B.R. Ambedkar",
    "None of the above",
    "Dr. B.R. Ambedkar",
    "Lal Bahudar Shastri",
  ];

  let correctArray = [
    "elected members of the legislative assembly",
    "High courts",
    "17th Lok Sabha",
    "25 years",
    "Consolidated Fund of India",
    "advice of the prime minister",
    "Jawaharlal Nehru",
    "of six years",
    "Dr. B.R. Ambedkar",
    "Morarji Desai",
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
