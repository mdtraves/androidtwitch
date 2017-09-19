// mrm741tf1n7sw3j566hwcmktdxsiwm

$(document).ready(function () {
  
          $('#userOutput').click(function(event) {
          var term = $('#userInput').val();
         
            url = "https://api.twitch.tv/kraken/streams/" + term + "?client_id=mrm741tf1n7sw3j566hwcmktdxsiwm";
  
    
            $.getJSON(url, function(dat) {
    
            if (dat.stream) {
                
                $("#logo").html("");
                $("#name").html("");
                $("#status").html("");
      
                $("#logo").html('<img src='+ dat.stream.channel.logo+' />');
                $("#name").html(dat.stream.channel.name);
                $("#status").html(dat.stream.stream_type);
                            }
            else {
                $("#logo").html("");
                $("#name").html("");
                $("#status").html("");
                
                $("#name").html("Channel is off-air");
                 }
                
        });
    })
    $('#userInput').keydown(function(event) {
        if (event.keyCode == '13') {
            $("#userOutput").click();
            }
        else {
            //do nothing :)
        }
    });
});
