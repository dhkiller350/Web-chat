// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV-dPFlz4WGUJUKPhX3h6EgXbrikGvBlU",
  authDomain: "web-chat-f9ef3.firebaseapp.com",
  projectId: "web-chat-f9ef3",
  storageBucket: "web-chat-f9ef3.firebasestorage.app",
  messagingSenderId: "518443256339",
  appId: "1:518443256339:web:ca1293a53b4eab6e318de6",
  measurementId: "G-J8VHMT783F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database(app);

// Reference to the "messages" node in the database
const messagesRef = db.ref("messages");

// Elements
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

// Listen for new messages
messagesRef.on("child_added", (snapshot) => {
  const message = snapshot.val();
  const messageElement = document.createElement("div");
  messageElement.textContent = message.text;
  messagesDiv.appendChild(messageElement);

  // Auto-scroll to the latest message
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

// Send a new message
sendButton.addEventListener("click", () => {
  const text = messageInput.value.trim();
  if (text) {
    messagesRef.push({ text });
    messageInput.value = "";
  }
});
