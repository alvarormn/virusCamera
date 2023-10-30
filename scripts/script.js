// Verificar si el navegador es compatible con la API de MediaDevices
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) { 
    // Obtener acceso a la cámara
    navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: "environment" } }
    }).then(function(stream) {
        var video = document.getElementById('video');
        video.srcObject = stream;
        video.play();
    }).catch(function(error) {
        console.error('Error al obtener acceso a la cámara', error);
    });


    // Tomar foto
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');
    var snapButton = document.getElementById('snap');
    snapButton.addEventListener('click', function() {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
    });
} else {
    console.error('La API de MediaDevices no es compatible con este navegador');
}