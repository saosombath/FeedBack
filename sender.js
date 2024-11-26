//bot token
var telegram_bot_id = "7816321172:AAFQ9EHE1QnJToXZuzDmOds8h26rY4ydLCw";
//chat id
var chat_id = -4514368996;
var message;
var ready = function () {
    message = document.getElementById("message").value;
    message = "\nមតិ ===>   " +"' " + message+" '";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    // document.getElementById("name").value = "";
    // document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};
const scrollRevealOption = {
    origin: "bottom",
    distance: "10px",
    duration: 1000,
  };
  
  ScrollReveal().reveal("img", {
    ...scrollRevealOption,
    origin: "bottom",
  });
  ScrollReveal().reveal(".text-white", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".btn", {
    ...scrollRevealOption,
    delay: 700,
  });
  $(document).ready(function(){
    $("#btn").click(function(){
      alert("សូមអរគុណ! សូមសំណាងល្អ!🙏");
    });
  });

$("#btn").ready( function() {
    alert("សូមបញ្ជេញមតិនិងការស្នើរសុំរបស់អ្នកប្រកបដោយក្រមសីលធម៌");
});
