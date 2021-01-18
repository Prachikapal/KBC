$(document).ready(function () {
  let quesArray = [
    "Which movie has become the first Bollywood film to go plastic-free?",
    "Which Bollywood personality has launched an online platform called ‘Pravasi Rojgar’ to help migrants find job opportunities?",
    "First Indian to win a Oscar award is",
    "What are John Abraham and Akshay Kumar's professions in Garam Masala?",
    " Who played Superman in the Hindi version of the film in 1987?",
    "Who is the singer of song 'Bulleya'",
    "Dhadak is the remake of which marathi movie ?",
    "Who is the director of 'Bahubali'",
    "Which upcoming movie stars Alia Bhatt and Ranbir kapoor ?",
    "Who is playing Kapil dev's role in movie '83'",
  ];

  let aArray = [
    "War",
    "Nana Patekar",
    "Bhanu Athaiya",
    "Reporter",
    "Rajesh Khanna",
    "Amit Mishra",
    "Kassav",
    "S.S Rajamouli",
    "Golmaal 5",
    "Akshay Kumar",
  ];

  let bArray = [
    "Dream Girl",
    "Nawazuddin Siddiqui",
    "AR Rahman",
    "Photographers",
    "Dharmendra",
    "Arijit Singh",
    "Sairat",
    "Sanjay Leele Bhansali",
    "Toofan",
    "Ranbir Kapoor",
  ];

  let cArray = [
    "Mission Mangal",
    "Sonu Sood",
    "Rasul Pookutty",
    "Professors",
    "Rajender",
    "Mohit Chauhan",
    "Dhurala",
    "Anurag Kashyap",
    "Radhe",
    "Ranveer Singh",
  ];

  let dArray = [
    "Coolie No. 1",
    "Amitabh Bachchan",
    "None of the above",
    "Lawyers",
    "Puneet Issar",
    "kk",
    "Hirkani",
    "S.Shankar",
    "Brahmastra",
    "Shahid Kapoor",
  ];

  let correctArray = [
    "Coolie No. 1",
    "Sonu Sood",
    "Bhanu Athaiya",
    "Photographers",
    "Puneet Issar",
    "Amit Mishra",
    "Sairat",
    "S.S Rajamouli",
    "Brahmastra",
    "Ranveer Singh",
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
