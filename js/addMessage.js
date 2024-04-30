document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    var formData = new FormData(this); // Create FormData object
    
    // Send form data to server using AJAX
    fetch("/saveMessage", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        console.log(result); // Log server response
        alert("Message saved successfully!"); // Show success message
    })
    .catch(error => {
        console.error("Error:", error); // Log any errors
        alert("An error occurred while saving the message."); // Show error message
    });
});