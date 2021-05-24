
// Responsible for running the application

// DOM query
const chatList = document.querySelector('.chat-list');

// Update UI
const newChatForm = document.querySelector('.new-chat');

// attach an event listener on submit. 
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err))


    
    
})

// update username. 
const newNameForm = document.querySelector('.new-name')
// show notification message
const updateMsg = document.querySelector('.update-msg')

newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName)
    // reset the form
    newNameForm.reset();

    // show success/failure message to the user.
    updateMsg.innerText = `Your name was updated to ${newName}`;
    // hide the message
    setTimeout(() => updateMsg.innerText = '', 3000)

    

})


// Update the room. 
const rooms = document.querySelector('.chat-rooms');

rooms.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.tagName === "BUTTON") {
        // 1. clear the old UI
        chatUI.clear();
        // 2. update the room via updateRoom method on our chat class
        chatroom.updateRoom(e.target.getAttribute('id'));
        // 3. we will fetch all the chats of that room
        chatroom.getChats(chat => {
            chatUI.render(chat)
        })

        //4. change color of room button
        document.querySelectorAll(".btn").forEach(button =>{
            button.style.backgroundColor = "rgb(194,123,14)";
        })
        e.target.style.backgroundColor = "rgb(99, 59, 0)";
        
       
        
    }
    

})

// get username from local storage. 

localStorage.username = localStorage.username ? localStorage.username : "Guest";
const username = localStorage.username;
const currentUsername = document.querySelector(".username-msg");
currentUsername.innerText = "Your current username is " + username;

// Class Instances
const chatUI = new ChatUI(chatList);

//default channel on load
document.querySelector("#general").style.backgroundColor ="rgb(99, 59, 0)";
const chatroom = new Chatroom(username, 'general');

// Get chats
chatroom.getChats(data => {
    chatUI.render(data)
    // console.log(data)
})