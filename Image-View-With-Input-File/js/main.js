// Jquery If Use
// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('#img')
//                 .attr('src', e.target.result);
//         };

//         reader.readAsDataURL(input.files[0]);
//     }
// }

var imageTigger = document.getElementById("image-tigger");
var realFile = document.getElementById("realFile");
imageTigger.addEventListener("click", () => {
    realFile.click();
}) ;

function readURL(input) {

    if(input.files && input.files[0]) {

        var imageSize = input.files[0].size / 1024;

        if(imageSize > 50) {
            return alert("Image should be less than 50 KB");
        }

        var obj = new FileReader();
        obj.onload = function(data) {
            var image = document.getElementById("img-view");
            image.src = data.target.result;
        }
        obj.readAsDataURL(input.files[0]);
    }   
}

