navigator.mediaDevices.getUserMedia({video:true}).then(function(mediaStream){
    const video = document.getElementById("video");
    video.srcObject = mediaStream;
    video.play();

})


document.getElementById("capture").addEventListener('click', function(e){

    var canvas      = document.querySelector("#video");
    canvas.width    = video.videoWidth;
    canvas.height   = video.videoHeight;
    var context     = canvas.getContext('2d');

    context.drawImage(video, 0, 0);



})