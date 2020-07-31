$(document).ready(() => {
    let queArray = ["Which animal never drinks water in its entire life",
        "which is the vertebrate that has two chambered heart",
        "There are _____ number of muscles in human",
        "What is the life span of RBC",
        "The number of ribs in human body is _____",
        "Which is the smallest flightless bird ?",
        "Hormones are produced by _____",
        "Which of the following is the MASTER GLAND",
        "What is the normal value of blood sugar in the body ?",
        "Which of the following carries impure blood ?"];

    let aArray = ["Kangaroo", "Fish", "638", "130 days", "23", "Kiwi", "Endocrine glands", "Thymus gland",
        "80 to 120mg/100 ml of blood", "Pulmonary artery"];

    let bArray = ["Hippopotamus", "Snake", "637", "110 days", "24", "Penguin", "Pituitary glands", "Pancreas",
        "70 to 120mg/100 ml of blood", "Pulmonary vein"];

    let cArray = ["Rat", "Blue Whale", "639", "100 days", "25", "Ostrich", "Hypothalamus", "Pineal gland",
        "90 to 120mg/100 ml of blood", "Alveoli"];

    let dArray = ["Kangaroo_rat", "Crocodile", "640", "120 days", "22", "Rhea", "Pancreas", "Pituitary gland",
        "60 to 120mg/100 ml of blood", "Aorta"];

    let correctArray = ["Kangaroo_rat","Fish","639","120 days","24","Kiwi","Endocrine glands","Pituitary gland",
                        "80 to 120mg/100 ml of blood","Pulmonary artery"];

    let time = 00;
    let i = 0;
    let opt1, opt2, opt3, opt4;
    let globalVar;

    $("#time").text(`00 : ${time}`);
    let clock = setInterval(() => {
        $("#time").text(`00 : ${time}`);
        time++;
        if (time === 60) {
            time = 00;
            i++;
            globalVar = requestAnimationFrame(ques);
        }
    }, 1000);

    


    $("#question").text(queArray[i]);
    opt1 = $(`<input type = "radio" name = "first" id = "one" class = "option">&nbsp<label for = "one" id = "opt1"></label><br>`);
    $(opt1).appendTo("#sopt");
    opt2 = $(`<input type = "radio" name = "first" id = "two" class = "option">&nbsp<label for = "two" id = "opt2"></label><br>`);
    $(opt2).appendTo("#sopt");
    opt3 = $(`<input type = "radio" name = "first" id = "three" class = "option">&nbsp<label for = "three" id = "opt3"></label><br>`);
    $(opt3).appendTo("#sopt");
    opt4 = $(`<input type = "radio" name = "first" id = "four" class = "option">&nbsp<label for = "four" id = "opt4"></label><br>`);
    $(opt4).appendTo("#sopt");

    let button = $(`<button id = "btn">NEXT</button>`);
    $(button).appendTo("#frame");

        

    function ques(){
        $("#one").prop("checked",false);
        $("#two").prop("checked",false);
        $("#three").prop("checked",false);
        $("#four").prop("checked",false);
        $("#question").text("");
        $("#question").text(queArray[i]);
        $("#opt1").text("");  
        $("#opt1").text(aArray[i]);  
        $("#one").attr("value",aArray[i]);
        $("#opt2").text("");
        $("#opt2").text(bArray[i]);
        $("#two").attr("value",bArray[i]);
        $("#opt3").text("");
        $("#opt3").text(cArray[i]);
        $("#three").attr("value",cArray[i]);
        $("#opt4").text("");
        $("#opt4").text(dArray[i]);
        $("#four").attr("value",dArray[i]);
        if (i === 10) {
            end();
            cancelAnimationFrame(globalVar);
        }
    }

    globalVar = requestAnimationFrame(ques)

   $("#btn").click(()=>{
       let demo = $(".option");
       let selectedValue;
       for(const rb of demo){
           if(rb.checked){
               selectedValue = rb.value;
               break;
           }
       }
       
       if(selectedValue === correctArray[i]){  
           let score = $("#span").text();  
           score = parseInt(score) + 5;
           $(span).text(score);
       }

       i++;
       time = 0;
       globalVar = requestAnimationFrame(ques);
   });


   function end(){
      alert("Your Score is  : " + $("#span").text());
      clearInterval(clock);
   }

});