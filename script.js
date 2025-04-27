// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

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
