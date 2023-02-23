$(function () {
  $("#chat-btn").on("click", () => {
    $("#chat-btn").toggleClass("animate-bounce");
    $("#chat-container").slideToggle(500);
  });

  $("#menu-btn").on("click", () => {
    $("#menu").toggleClass("flex");
    $("#menu").toggleClass("hidden");
  });
  // Listen for the form submission event
  $("#chat-form").submit(function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input text from the form
    var input_text = $("#chat-input").val();
    //Add Sent message to Chat Box
    $("#chat-log").append(
      '<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">\
              <div>\
                <div\
                  class="bg-cyan-500 text-white p-3 rounded-l-lg rounded-br-lg"\
                >\
                  <p class="text-sm">' +
        input_text +
        '</p>\
                </div>\
              </div>\
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>\
            </div>'
    );
    // Send a POST request to the Flask API
    $.ajax({
      url: "http://localhost:5000/api",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ text: input_text }),
      success: function (response) {
        // Add the chatbot's response to the chat log
        var response_text = response[1]["response"];
        var query = response[0]["input"];
        $("#chat-log").append(
          '<div class="flex w-full mt-2 space-x-3 max-w-xs">\
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">\
                  <img src="./assets/maya.jpg" alt="" />\
                </div>\
                <div>\
                  <div class="bg-green-400 p-3 rounded-r-lg rounded-bl-lg">\
                    <p class="font-bold text-sm">Maya</p>\
                    <p class="text-sm">' +
            response_text +
            "</p>\
                  </div>\
                </div>\
              </div>"
        );
        // Clear the input field
        $("#chat-input").val("");
      },
    });
  });
});
