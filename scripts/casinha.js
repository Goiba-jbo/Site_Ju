function paralax(){
    let pImg = document.getElementById("pImg");

    window.addEventListener('scroll',
        function(){
            let valor = this.window.scrollY;
            pImg.style.backgroundPositionY = valor * 0.7 + 'px';
        }
    );
}