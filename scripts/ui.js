

// Repsonsible for rendering the UI.

// Render chat templates
// clear the list of chats (when room changes)

class ChatUI {
    constructor(list) {
        this.list = list;
    }

    clear() {
        //clearing the HTML inside the <ul>
        this.list.innerHTML = "";
    }

    render(data) {
        // this will be responsible for creating an HTML template

        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            {addSuffix: true}
        )

        const html = `
            <li class="list-group-item">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${when}</div>
            </li>
        `;

        this.list.innerHTML += html;
        updateScroll()
    }
}


//Keeep the scroll at bottom until user moves

// var scrolled = false;
function updateScroll(){

    var element = document.querySelector(".chat-list");
    element.scrollTop = element.scrollHeight;

}

// document.querySelector(".chat-list").addEventListener('scroll', function(){
//     scrolled=true;
// });