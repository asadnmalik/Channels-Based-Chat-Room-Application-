# Chatroom app with multiple rooms using Firebase
# Overview
With Firebase and Firestore you can easily make full stack apps using its NoSQL database that is easy to get started and user friendly.

# Demo
![demo](https://s3.gifyu.com/images/ezgifcom-gif-maker-9.gif)



# Firebase/Firestore

## Installing firebase/firestore
Visit https://firebase.google.com/ and Get Started with your google account.

Then you can add a new project. ![image](https://user-images.githubusercontent.com/77789434/120463194-17c1b600-c3b5-11eb-9aa5-02ea87192ed5.png)
Continue further and in a few minutes firebase will create your project. ![image](https://user-images.githubusercontent.com/77789434/120463339-3e7fec80-c3b5-11eb-81c4-663546e1de22.png)
You will be directed to your project's console, here you can set up an app by clicking on the Web icon. ![image](https://user-images.githubusercontent.com/77789434/120463485-62dbc900-c3b5-11eb-8aac-6d39c8c33a79.png)
Once setup, firebase will give you your configuration to use in your source code.![image](https://user-images.githubusercontent.com/77789434/120463714-a20a1a00-c3b5-11eb-8757-d3d22b6b2338.png)

## CDN
Place the below the CDN right before the end of the body tag in your HTML file.
```Javascript
    <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-firestore.js"></script>
```

## Initialization
Use your unique configuration given to you in the final step of installing firebase/firestore and place it in your javascript code and initialize firebase and firestore like this.
```Javascript
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
```
## Creating firestore database.
Once your configurations is done, now you can create your database by going to Firestore Database via the console and click Create Databse. ![image](https://user-images.githubusercontent.com/77789434/120464564-83585300-c3b6-11eb-99f8-79e6a1875841.png)
Select the region of databsase's location and your database will be setup. Now you can start making collections and documents here manually. ![image](https://user-images.githubusercontent.com/77789434/120464801-c286a400-c3b6-11eb-94a8-c483b34ab844.png)


## Usage
Visit these links to see how easily you can read, add, delete and peform multiple operations on the data using firestore. Don't be afraid its very easy to learn! Like for example for adding a data is as simple as like this 
```Javascript
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
```
More code:
https://cloud.google.com/firestore/docs/samples
https://firebase.google.com/docs/firestore/quickstart

---

# Source Code


---

## Copyright, Author
*Copyright 2021*, Asad Naveed Malik, *All rights reserved.*
