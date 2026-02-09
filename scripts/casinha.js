function paralax(){
    const casinha = document.querySelector('.casinha');

    window.addEventListener('scroll',
        function(){
            let scroll = window.scrollY;

            casinha.style.backgroundPositionY = scroll * 0.7 + 'px';
        }
    );
}