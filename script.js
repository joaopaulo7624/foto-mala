document.getElementById('uploadBtn').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    let file = event.target.files[0];
    
    if (file) {
        iniciarCarregamento();
    }
});

function iniciarCarregamento() {
    document.getElementById('uploadBtn').style.display = 'none';
    document.getElementById('loadingContainer').style.display = 'block';

    let progressBar = document.getElementById('progressBar');
    let statusMessage = document.getElementById('statusMessage');
    let progress = 0;
    let interval = setInterval(function() {
        progress += 10;
        progressBar.style.width = progress + '%';

        if (progress === 30) {
            statusMessage.innerText = 'Por favor, aguarde...';
        } else if (progress === 60) {
            statusMessage.innerText = 'Tivemos uma pequena dificuldade técnica!';
        } else if (progress === 90) {
            statusMessage.innerText = 'Tentando de novo... Isso pode levar alguns segundos.';
        }

        if (progress >= 100) {
            clearInterval(interval);
            document.getElementById('loadingContainer').style.display = 'none';

            // Animação para a tela de erro
            const errorScreen = document.getElementById('errorScreen');
            errorScreen.style.opacity = 0;
            errorScreen.style.display = 'block';

            // Transição de animação suave
            setTimeout(() => {
                errorScreen.style.opacity = 1;
            }, 10);
        }
    }, 1000);
}
