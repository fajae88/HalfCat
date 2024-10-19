const tabs = document.querySelectorAll('.tab-btn1');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}

const currentActiveTab = document.querySelector('.tab-btn1.active');
tabClicked(currentActiveTab);



function loadVideo(videoSrc) {
    // Seleciona o elemento de vídeo
    const videoPlayer = document.getElementById('video-player');

    // Pausa o vídeo atual (caso esteja tocando)
    videoPlayer.pause();

    // Atualiza a fonte do vídeo para o novo arquivo
    videoPlayer.src = videoSrc;

    // Recarrega o vídeo com a nova fonte e inicia a reprodução
    videoPlayer.load();
    videoPlayer.play();
}


