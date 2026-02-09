function titulo(){
    let sumir = document.getElementById("sumir");

    window.addEventListener('scroll',
        function(){
            let valor = this.window.scrollY;
            sumir.style.opacity = (-1/300)*(valor - 300);
        }
    );
}
function descer(){
    window.scrollBy(0, 560) 
}