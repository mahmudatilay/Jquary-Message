$(document).ready(function()
{
    let data={
            kisiler:[
                {name:"Mahmud",mesaj:"hello Nasılsınız"},
                {name:"İsmail",Mesaj:"how Are you"}
            ]
    }

    
    

   var msgVeri= data.kisiler
   
  

for(i=0;i<msgVeri.length;i++)
{
    
    
    $("#div_msg").append('<div id="divx" class="chat-message-right mb-4"><div name="divy" class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3"></div></div>')

  $(".divy").html("hello")
    
   



}
alert($(".divy").html())


});

