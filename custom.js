$(document).ready(function()
{
var obj = [];
 

$("#btn_id").click(function(){addMessage()})
$("#btn_uadd").click(function(){Useradd()})
var x=0
var active_tab=0;
function Useradd()
{

  tmp = {
    'id':x,
    'name': $("#user_id").val(),
    'message': []
};
      obj.push(tmp);

   

    var userDiv= document.createElement("a")
    userDiv.setAttribute("class","list-group-item list-group-item-action border-0")
    
    var userDiv1=document.createElement("div")
    userDiv1.setAttribute("class","d-flex align-items-start") 
    userDiv1.value=obj[x].id
    userDiv1.onclick=function() 
    {active_tab=userDiv1.value ,list()};
    userDiv1.innerText=$("#user_id").val()
    userDiv.appendChild(userDiv1)
    
    document.getElementById("us_div").appendChild(userDiv);
    
    x++
    console.log(obj)


}

function addMessage(){

  obj[active_tab].message.push($("#msj_txt").val());
 list()
}

function list(){

  document.getElementById("div_msg").innerHTML=""
  for(i=0;i< obj[active_tab].message.length; i++)
{

  var dOne= document.createElement("div")
  dOne.setAttribute("class","chat-message-right mb-4")
  var dTwo=document.createElement("div")
  dTwo.setAttribute("class","flex-shrink-1 bg-light rounded py-2 px-3 mr-3")
  dTwo.innerText=obj[active_tab].message[i]
  var dTh=document.createElement("div")
  dTh.setAttribute("class","font-weight-bold mb-1")
  dTh.innerText=""
  dTwo.appendChild(dTh)
  dOne.appendChild(dTwo)
  
 document.getElementById("div_msg").appendChild(dOne);


}
  
}



});

