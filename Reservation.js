var Italy = {
    font : "'Italiana', serif",
    title : "Italian",
    Menu : ["Crémant de Limoux","Crostini","Tortelli","Coniglio alla griglia","Tiramisu"]
}
var Japan = {
    font : "'M PLUS 1 Code', sans-serif",
    title : "Japanese",
    Menu : ["Akashi-Tai Honjozo","Chawanmushi","Sashimi","Wagyu Beef","Daifuku",]
}
var France = {
    font : "'IM Fell French Canon', serif",
    title : "French",
    Menu : ["Crémant Rosé Brut Grande Cuvée","Galettes de Bretagne","Maquereaux au vin blanc","Confid de Canard","Lemon Meringue Pie"]
}

function Ganti (region) {
    A = document.getElementById("region_title");
    B = document.getElementsByClassName("Name");
    if ( region === "Italy") {
        var Cuisine = Italy;
    }
    else if ( region === "Japan") {
        var Cuisine = Japan;
    }
    else if ( region === "France") {
        var Cuisine = France;
    }

    A.innerHTML = Cuisine.title;
    A.style.fontFamily = Cuisine.font;
    for ( var i = 0 ; i < B.length ; i++ ) {
        B[i].innerHTML = Cuisine.Menu[i];
        B[i].style.fontFamily = Cuisine.font;
    }
}


function Submit() {
    var A = document.getElementsByClassName("box");
    var kondisi = true;
    for ( var i = 0 ; i < A.length ; i++ ) {
        console.log(A[i]);
        if ( A[i].value === "" ) {
            kondisi = false;
            break;
        }
    }
    if ( kondisi == true ){
        alert("Thank you for choosing us ! \n Your reservation has been booked .")
    }
}