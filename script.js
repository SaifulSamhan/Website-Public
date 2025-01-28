async function startCapture() {
    try {
        // Meminta akses ke tampilan layar
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });

        // Meminta akses ke kamera
        const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });

        // Tampilkan stream layar di elemen video layar
        const screenVideo = document.querySelector('#screen');
        screenVideo.srcObject = screenStream;
        screenVideo.play();

        // Tampilkan stream kamera di elemen video kamera kecil
        const cameraVideo = document.querySelector('#camera');
        cameraVideo.srcObject = cameraStream;
        cameraVideo.play();
    } catch (error) {
        console.error('Gagal mengakses layar atau kamera:', error);
    }
}

startCapture();
