window.onload=function(){
	var id=document.getElementsByClassName("message")[0];
	id.style.display="none"; 
	id=document.getElementsByClassName("send")[0];
	id.style.display="none";    
};

function showChatBox(obj){
	var chat_box_id=document.getElementById("chat_box_id");
	var id=document.getElementsByClassName("message")[0];
	var chat_box_header_id=document.getElementById("chat_box_header_id");
	var chat_box_body_id=document.getElementById("chat_box_body_id");
	var chat_box_footer_id=document.getElementById("chat_box_footer_id");
	var name=document.getElementById("name");
	id.style.display="inline"; 
	id=document.getElementsByClassName("send")[0];
	id.style.display="inline";  
	chat_box_id.style.display="block";
	chat_box_id.classList.add("chat_box");
	chat_box_header_id.classList.add("chat_box_header");
	chat_box_footer_id.classList.add("chat_box_footer");
	name.innerHTML=obj.getElementsByClassName("friend_name")[0].innerHTML;
}

function closeBox(obj){
	obj.style.display="none";
}