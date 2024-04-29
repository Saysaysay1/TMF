// Function to display modal with message
function displayModal(message) {
    var modal = document.getElementById("myModal");
    var modalMessage = document.getElementById("modal-message");
    modalMessage.innerHTML = message;
    modal.style.display = "block";
}

// Messages array with HTML tags and inline styles for color
var messages = [
    '<span style="color: black;">Welcome to our Friendship Day celebration!</span>',
    '<span style="color: black;">We appreciate your friendship and support!</span>',
    '<span style="color: black;">Friendship is a treasure that we cherish.</span>',
    '<span style="color: black;">Thank you for being a part of our journey.</span>',
    '<span style="color: black;">May our bond of friendship grow stronger every day.</span>',
    '<span style="color: black;">Please read my heartfelt message, you can read it by clicking the Image.</span>'
];

// Current message index
var currentIndex = 0;

// OK button functionality
var okBtn = document.getElementById("okBtn");
okBtn.onclick = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    // Proceed to the next message
    currentIndex++;
    if (currentIndex < messages.length) {
        displayModal(messages[currentIndex]);
    }
}

// Display the first message
displayModal(messages[currentIndex]);
