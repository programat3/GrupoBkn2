$(document).ready(function() {
    $.ajax({
      url: "../menu.html",
      success: function(data) {
        $("nav").html(data);
      }
    });
  });