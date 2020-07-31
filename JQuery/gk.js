$(document).ready(function(){
    let quesArray = [".MOV extension refers usually to what kind of file",
                    "OS computer abbreviation usually means",
                    "Which of the following is not written by MUNSHI PREMCHAND",
                    "Greenland is under the rule of",
                    "Who invented BALLPOINT PEN",
                    "Entomology is the science that studies",
                    "Eritrea which became the 182nd member of the UN in 1993, is in the continent of",
                    "Aam Admi Bima Yogana was launched on :",
                    "Mahatma Gandhi laid down four preconditions for a Satyagrahi to fulfill - namely:",
                    "Kya Nikku pagal h ?"];
    
    let aArray = ["Image File","Order of significance","Goban","Turkey","Biro Brothers","Behaviour of human being","Africa","November 14, 2011","Observe perfect Chastity, Adopt Poverty, Follow truth and Cultivated Fearlessness.","Yes"];
    
    let bArray = ["Animation/movie file","open software","Godan","Denmark","Waterman Brothers","Insects","Australia","March 5, 2009","Observe perfect Chastity, Gain Money, Follow truth and Cultivated Fearlessness.","No"];
    
    let cArray = ["Audio File","Operating System","Guide","Germany","Bicc Brothers","The formatio of rocks","Europe","March 10, 2008","Observe perfect Chastity, Adopt Poverty, Follow truth and Cultivated Power.","Don't Know"];
    
    let dArray = ["MS Office document","Optical Sensor","Manasorovar","Portugal","Write Brothers","The origin and history of technical and scientific terms","Asia","October 2, 2007","Observe perfect Chastity, Gain Money, Follow truth and Cultivated Power.","Bhot zyada pagal h"];
    
    let correctArray = ["Animation/movie file","Operating System","Guide","Denmark","Biro Brothers","Insects","Africa","October 2, 2007","Observe perect Chastity, Adopt Poverty, Follow truth and Cultivated Fearlessness.","Bhot zyada pagal h"];
    
    
    let time = 0;
    let globalVar,answer, i =0;
    
    let a = $(`<input type = "radio" id = "one" class = "option" name = "select"> &nbsp <label for = "one" id = "opt1"></label> </input><br>`);
    $(a).appendTo("#sopt");
    let b = $(`<input type = "radio" id = "two" class = "option" name = "select"> &nbsp <label for = "two" id = "opt2"></label> </input><br>`)
    $(b).appendTo("#sopt");
    let c = $(`<input type = "radio" id = "three" class = "option" name = "select"> &nbsp <label for = "three" id = "opt3"></label> </input><br>`);
    $(c).appendTo("#sopt");
    let d = $(`<input type = "radio" id = "four" class = "option" name = "select"> &nbsp <label for = "four" id = "opt4"></label> </input><br>`);
    $(d).appendTo("#sopt");
    $("#time").text(`00 : ${time++}`);
    
    let clock = setInterval(() => {
        $("#time").text(`00 : ${time++}`);
        if(time === 60){
            time = 0;
            i++;
            if(i === 10){
                end();
            }
            globalVar = requestAnimationFrame(ques);
        }
    },1000);
    
    let ques = function(){
        setTimeout( () => { $("#score").css("border","none")}, 1000);
        
        $("#one").prop("checked",false);
        $("#two").prop("checked",false);
        $("#three").prop("checked",false);
        $("#four").prop("checked",false);
        $("question").text("");
        $("#question").text(quesArray[i]);
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
    }
    
    globalVar = requestAnimationFrame(ques);
    
    let button = $(`<button id = "btn">NEXT</button>`);
    $(button).appendTo("#frame");
    
    button.click( () => {
        
        let demo = $(".option");
        for(const j of demo){
            if(j.checked){
                answer = j.value;
                break;
            }
        }
    
        if(answer === correctArray[i]){
            $("#span").text(parseInt($("#span").text()) + 5);
        }
        else{
            $("#score").css("border","5px solid red");
        }
       
    
        time = 0;
        i++;
        if (i === 10){
            end();
        }
        globalVar = requestAnimationFrame(ques);
    });
    
    function end(){
        cancelAnimationFrame(globalVar);
        clearInterval(clock);
        setTimeout( () => {  alert(`Your Score is : ${$("#span").text()}`);} , 1000);
    }
    
    });