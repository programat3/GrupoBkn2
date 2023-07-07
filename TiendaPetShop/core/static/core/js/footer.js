$(document).ready(function() {
    $.ajax({
      url: "../footer.html",
      success: function(data) {
        $("footer").html(data);
      }
    });
  });