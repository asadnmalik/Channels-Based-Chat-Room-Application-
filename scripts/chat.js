// Handle all our chats.

// 1. Adding new chats (documents)
// 2. Setting up real-time listeners to get new chats + update automatically
// 3. Updating the username
// 4. Updating the room

class Chatroom {
    constructor(username, room) {
        this.username = username;
        this.room = room;
        this.chats = db.collection('chats') //we are storing the reference to the chats collection
        this.unsub;
    }

    // 1. Add new chats/docs
    async addChat(message) {
        const now = new Date();
        const chat = {
            //represent the document. 
            message: message, 
            username: this.username, 
            room: this.room, 
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        const response = await this.chats.add(chat)

        //scroll to bottom whenever chat is rendered
        updateScroll();
        
        return response
    }

    // 2. Setting up real-time listeners to get new chats + update automatically
    getChats(callback) {
        this.unsub = this.chats
            .where('room','==', this.room) 
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        // update the UI (do something)
                        callback(change.doc.data())
                    }
                })
            })
    }

    // 3. Updating the username
    updateName(username) {
        this.username = username
        // save this username to the local storage 
        localStorage.setItem('username', username)
        currentUsername.innerText = "Your current username is " + localStorage.username;
    }

    // 4. Updating the room
    updateRoom(room) {
        this.room = room;
        // console.log(room)
        if (this.unsub) {
            this.unsub();
        }
    }
}
