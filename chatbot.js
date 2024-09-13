const bot_chatBody = document.querySelector(".bot_chat-body");
const bot_txtInput = document.querySelector("#bot_txtInput");
const bot_send = document.querySelector(".bot_send");
const bot_loadingEle = document.querySelector(".loading");
const bot_container = document.querySelector(".bot_lc_container")
const bot_btn = document.querySelector(".bot_chat_btn");

bot_send.addEventListener("click", () => renderUserMessage());

bot_txtInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        renderUserMessage();
    }
});

bot_btn.addEventListener("click", () => {
    bot_container.classList.toggle("collapse"); 
})

const renderUserMessage = () => {
    const userInput = bot_txtInput.value;
    renderMessageEle(userInput, "user");
    bot_txtInput.value = "";
    toggleLoading(false);
    setTimeout(() => {
        renderChatbotResponse(userInput);
        setScrollPosition();
        toggleLoading(true);
    }, 1000);
};

const renderChatbotResponse = (userInput) => {
    const res = getChatbotResponse(userInput.toLowerCase());
    renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
    let className = "user-message";
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add(className);
    messageEle.append(txtNode);
    bot_chatBody.append(messageEle);
    if (type !== "user") {
        className = "chatbot-message";
        messageEle.classList.add(className);
        const botResponseContainer = document.createElement("div");
        botResponseContainer.classList.add("bot-response-container");
        //adding bot logo
        const botImg = document.createElement("img");
        botImg.setAttribute("src","./Images/chatbot.jpg");
        botResponseContainer.append(botImg);
        botResponseContainer.append(messageEle);
        bot_chatBody.append(botResponseContainer);
    }
    else{
        messageEle.classList.add(className);
        bot_chatBody.append(messageEle);
    }
};


const getChatbotResponse = (userInput) => {
    return responseObj[userInput]== undefined? "Please try something else" : responseObj[userInput];
};

// allow user's view to always latest so don't have to manually scroll
const setScrollPosition = () => {
    if (bot_chatBody.scrollHeight > 0) {
        bot_chatBody.scrollTop = bot_chatBody.scrollHeight;
    }
}

// show the loading button 
const toggleLoading = (show) => bot_loadingEle.classList.toggle("hide", show);