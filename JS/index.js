var value=1;
		function createDiv(divId){
			var chat_box_id=document.createElement("div");
			var chat_box_header_id=document.createElement("div");
			var chat_box_body_id=document.createElement("div");
			var chat_box_footer_id=document.createElement("div");
			var indicator=document.createElement("div");
			var header_portion_1=document.createElement("div");
			var header_portion_2=document.createElement("div");
			var name=document.createElement("div");
			var close_btn=document.createElement("div");
			var message=document.createElement("input");
			var send=document.createElement("button");

			chat_box_id.setAttribute("class","div_class");
			chat_box_id.setAttribute("id","div_id"+value);
			value=value+1;
			chat_box_header_id.setAttribute("class","chat_box_header_id");
			chat_box_footer_id.setAttribute("class","chat_box_footer_id");
			header_portion_1.setAttribute("class","header_portion_1");
			header_portion_2.setAttribute("class","header_portion_2");
			indicator.setAttribute("class","indicator");
			name.setAttribute("class","name");
			name.innerHTML=divId.getElementsByClassName("friend_name")[0].innerHTML;
			// name.innerHTML=divId.innerHTML;
			close_btn.setAttribute("class","close_btn");
			close_btn.innerHTML="x";
			close_btn.setAttribute("onclick","closeChat(this)");
			chat_box_footer_id.setAttribute("class","chat_box_footer_id");
			message.setAttribute("class","message");
			message.style.display="inline";
			send.setAttribute("class","send");
			send.style.display="inline";
			send.innerHTML="Send";

			document.getElementById("chat").appendChild(chat_box_id);
			chat_box_id.appendChild(chat_box_header_id);
			chat_box_id.appendChild(chat_box_footer_id)
			chat_box_header_id.appendChild(header_portion_1);
			chat_box_header_id.appendChild(header_portion_2);
			header_portion_1.appendChild(indicator);
			header_portion_1.appendChild(name);
			header_portion_2.appendChild(close_btn);
			chat_box_footer_id.appendChild(message);
			chat_box_footer_id.appendChild(send);
		}

		function closeChat(obj){
			obj.parentNode.parentNode.parentNode.style.display="none";
		}