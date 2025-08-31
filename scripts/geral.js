function mudar(){
    var imagens = ["url('img/fundo1.png')", "url('img/fundo2.png')"];
    let aleatorio = Math.floor(Math.random() * imagens.length);
    document.getElementById("fundo").style.backgroundImage = imagens[aleatorio]
}