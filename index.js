function enviaMsg(event) {
    event.preventDefault();
    let msgEnviar = document.getElementById("send").value;

    if (msgEnviar !==""){
      const chat = document.getElementById("chat"); 

      const novaMsg =document.createElement("div");
      novaMsg.classList.add("user-message")

      let pUser = document.createElement("p"); 
      pUser.classList.add("msg-user");
      pUser.innerHTML = "<strong>Você diz:</strong>";

      let pMessage = document.createElement("p");
      pMessage.classList.add("msg-chat");
      pMessage.textContent = msgEnviar;

      novaMsg.appendChild(pUser); 
      novaMsg.appendChild(pMessage);

      chat.appendChild(novaMsg); 
      chat.scrollTop = chat.scrollHeight;
    }
    document.getElementById("send-message").reset();
    document.getElementById("send").focus();
  }
  document.getElementById("send-message").addEventListener("submit", enviaMsg); 