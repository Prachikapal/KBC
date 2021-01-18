$(document).ready(function () {
  let quesArray = [
    "What is the full name of Shinchan ?",
    "What is the vegetable that Shinchan hates to eat ?",
    "Which was the first episode of motu patlu ?",
    "What are the three fools that run behind Kishna ?",
    "In Chota Bheem which creature was damyaan",
    "where is Hattori from ?",
    "In the episode of Adventure of mansi and Akash what did motu patlu do ?",
    "Who is oggy's sister",
    "In 'Doraemon' who is Jian's best friend",
    "In Chota Bheem Who was the willian in the episode of master of shaolin ?",
  ];

  let aArray = [
    "Shinnosuke Ogawa",
    "Beans",
    "Gilli Danda Competition",
    "monkey,donkey and mouse",
    "Rat",
    "Iga valley",
    "Motu patlu don't care about the childen",
    "Olivia",
    "Sunio",
    "Chang",
  ];

  let bArray = [
    "Shin Chan Nohara",
    "Capsicum",
    "Office Cleaning",
    "depia,dytu and fyuio",
    "Frog",
    "coga valley",
    "Patlu can not do it",
    "Monica",
    "Shizuka",
    "Kaifu",
  ];

  let cArray = [
    "Suzuki Nohara",
    "Carrot",
    "Flying Helmet",
    "sanal,bandal and fandal",
    "Snake",
    "Japan",
    "Motu patlu did something to get train",
    "Sweety",
    "Doraemon",
    "King Indravarma",
  ];

  let dArray = [
    "Shinnosuke Nohara",
    "Garlic",
    "John Bnega Don",
    "suparna,tarak and de.j",
    "Blue Whale",
    "Hiroshima",
    "John kidnapped the childen",
    "Pinky",
    "Nobita",
    "Ming",
  ];

  let correctArray = [
    "Shinnosuke Nohara",
    "Capsicum",
    "John Bnega Don",
    "suparna,tarak and de.j",
    "Snake",
    "Iga valley",
    "Motu patlu did something to get train",
    "Monica",
    "Sunio",
    "Kaifu",
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
      // $("#score").css("border","5px solid green");
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
