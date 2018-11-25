$(document).ready(function() {
    $(".contact-form input, textarea").click(function() {
        $(".contact-form input, textarea").css("border-color", "transparent");
        $(this).css("border-color", "#4f6df5");
    });

    $("#nameField").on("keyup", function() {
        var $name = $(this).val().trim();
        if($name.length < 3)
        {
            $("#nameField").css("border-color", "#ff0000");
        } else {
            $("#nameField").css("border-color", "#4f6df5");
        }
    });
});