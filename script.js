document.getElementById('uploadBtn').addEventListener('click', function() {
    // Aciona o input de arquivo
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    let file = event.target.files[0];
    
    if (file) {
        // Iniciar a barra de carregamento após o usuário selecionar uma imagem
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
            // Mostrar tela de erro
            document.getElementById('loadingContainer').style.display = 'none';
            document.getElementById('errorScreen').style.display = 'block';
        }
    }, 1000); // Intervalo de 1 segundo entre os "updates"
}
