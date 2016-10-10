var Errors = 0;

  function enter(event) {
    var x = event.keyCode;
    console.log(x);
    if (x == 13) {
      Speak();
  }
}

function Speak(){
//echo input
 $("#chat-area").append($("#input").val() + "<br>");

if ($("#input").val() == "what is your name?"){
   $("#chat-area").append("My name is RoboBot" + "<br>");
}
else if($("#input").val() == "what time is it?"){
 var d = new Date();

 var chanceOfJoke = Math.floor((Math.random() * 24) + 1);

 if( chanceOfJoke == 12){
   $("#chat-area").append("it is currently high noon somewhere in the world but for you its " + d +"<br>");
 }
 else{
   $("#chat-area").append("it is currently" + d +"<br>");
 }
}
else if($("#input").val() == "how old are you?"){
   $("#chat-area").append("I was born on June 25th");
}
else{
 if(Errors == 0){
     $("#chat-area").append("try asking something else" + "<br>");
     Errors++;
   }
   else if(Errors == 1){
       $("#chat-area").append("?" + "<br>");
             Errors++;
     }
     else if(Errors == 2){
         $("#chat-area").append("uh try asking something else" + "<br>");
               Errors = 0;
       }

}

}
