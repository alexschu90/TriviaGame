$("#question-content").hide(); 

$("#game-start").click(function(){
    $("#game-start").hide(); 
    $("#question-content").show();
    intervalID;
  });

  $("#result-page").hide(); 



var time = 60;

var intervalID = setInterval(countdown, 1000); 


var correct = 0; 
var incorrect = 0; 
var unanswered = 0; 

function countdown() {

    time--;

    $("#display-time").html("TIME REMAINING: " + time + " seconds");

    if (time === 0) {
        clearInterval(intervalID);
        $("#question-content").hide(); 
        $("#result-page").show();
        
        
        if ($('input[value=option3]:checked').length > 0) {
          correct += 1; 
          $("#correct").text("Correct Answers: " + correct);
        }
            else if ($('input[value=option1]:checked').length > 0 || $('input[value=option2]:checked').length > 0 || $('input[value=option4]:checked').length > 0) {
            incorrect += 1;
            $("#incorrect").text("Incorrect Answers: " + incorrect);
            } 
                else {
                unanswered += 1;
                $("#unanswered").text("Unanswered: " + unanswered);  
                }
      
                
        if ($('input[value=option8]:checked').length > 0) {
          correct += 1; 
          $("#correct").text("Correct Answers: " + correct);
        }
            else if ($('input[value=option5]:checked').length > 0 || $('input[value=option6]:checked').length > 0 || $('input[value=option7]:checked').length > 0) {
            incorrect += 1;
            $("#incorrect").text("Incorrect Answers: " + incorrect);
            } 
                else {
                unanswered += 1;
                $("#unanswered").text("Unanswered: " + unanswered);  
                }
      
                
        if ($('input[value=option9]:checked').length > 0) {
          correct += 1; 
          $("#correct").text("Correct Answers: " + correct);
        }
            else if ($('input[value=option10]:checked').length > 0 || $('input[value=option11]:checked').length > 0 || $('input[value=option12]:checked').length > 0) {
            incorrect += 1;
            $("#incorrect").text("Incorrect Answers: " + incorrect);
            } 
                else {
                unanswered += 1;
                $("#unanswered").text("Unanswered: " + unanswered);  
                }
      
                
        if ($('input[value=option16]:checked').length > 0) {
          correct += 1; 
          $("#correct").text("Correct Answers: " + correct);
        }
            else if ($('input[value=option13]:checked').length > 0 || $('input[value=option14]:checked').length > 0 || $('input[value=option15]:checked').length > 0) {
            incorrect += 1;
            $("#incorrect").text("Incorrect Answers: " + incorrect);
            } 
                else {
                unanswered += 1;
                $("#unanswered").text("Unanswered: " + unanswered);  
                }

    }
  }



