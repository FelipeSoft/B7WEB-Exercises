function myFunction(){
    if (window.scrollY > 0){
        document.querySelector(".btnScroll").style.display = 'flex';
    } else {
        document.querySelector(".btnScroll").style.display = 'none';
    };
};

function voltarInicio(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};
