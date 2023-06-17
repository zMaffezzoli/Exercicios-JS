var vezes = 0;

function Trocar_cor(){
    if(vezes % 2 == 0){
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
        document.getElementsByTagName("h1")[0].style.color = "white";
        document.getElementsByTagName("button")[0].style.color = "white";
        document.getElementsByTagName("button")[0].style.borderColor = "white";
        vezes += 1;
    }else{
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        document.getElementsByTagName("h1")[0].style.color = "black";
        document.getElementsByTagName("button")[0].style.color = "black";
        document.getElementsByTagName("button")[0].style.borderColor = "black";
        vezes += 1;
    };
};