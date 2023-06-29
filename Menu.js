function TabIn(penanda) {
    var A = document.getElementsByClassName("buttonstyle");
    A[penanda].style.paddingLeft = "20px";
    A[penanda].style.paddingRight = "20px";
    A[penanda].style.backgroundColor = 'cadetblue';
    A[penanda].style.color = 'yellow';
    A[penanda].style.borderRadius = "0px 20px 20px 0px";
    A[penanda].style.borderLeft = "none";
}

function TabOut(penanda) {
    var A = document.getElementsByClassName("buttonstyle");
    A[penanda].style.paddingLeft = "8px";
    A[penanda].style.paddingRight = "15px";
    A[penanda].style.backgroundColor = "goldenrod";
    A[penanda].style.color = 'whitesmoke';
    A[penanda].style.borderRadius = "0px 17px 17px 0px";
    A[penanda].style.borderLeft = "none";
}

var Italy = {
    Wine : {
        Name : "Crémant de Limoux",
        Description : "The Crémant Rosé Brut Grande Cuvée 1531 appears in a radiant salmon shade in glass. Vibrant and fresh, it meets the nose elegantly fragrant of white flowers, peaches and bright fruits. Also subtle hints of sweet cherries can be heard.",
        Picture : "Image/Bevarage_Italy.jpg",
    },
    Appetizer : {
        Name : "Crostini",
        Description : "Crostini are a group of Italian appetizers consisting of small pieces of toasted or grilled bread topped with a variety of flavorful toppings. Crostini are believed to have originated during the Middle Ages, when poor Italian peasants used to eat their food off of bread instead of plates",
        Picture : "Image/Appetizer_Italy.jpg"
    },
    Entree : {
        Name : "Tortelli",
        Description : "Tortelli is a variety of Italian stuffed pasta prepared in a few shapes: square, semicircular, or rounded and twisted. The pasta is popular throughout Italy, especially in Tuscany, Lombardy, and Emilia-Romagna. One of the most famous dishes featuring this pasta variety is called tortelli con zucca, where tortelli are filled with pumpkin, crushed cookies, and parmesan cheese.",
        Picture : "Image/Entree_Italy.jpg"
    },
    Main : {
        Name : "Coniglio alla griglia",
        Description : "Coniglio alla griglia is a traditional rabbit dish originating from Italy. Although there are many ways of preparing grilled rabbit, it’s usually made with a combination of rabbit that's cut into pieces, onions, garlic, red wine, rosemary, bay leaves, juniper berries, olive oil, salt, and black pepper",
        Picture : "Image/Main_Italy.jpg"
    },
    Desert : {
        Name : "Tiramisu",
        Description : "Made with a mixture of whipped egg yolks, mascarpone, sugar, cocoa, and lady fingers dipped in coffee, this specialty graces the dessert menu of practically every Italian restaurant or trattoria. If you like chocolate mousse and coffee, you'll be a fan of the texture and indulgent flavor of this classic dessert.",
        Picture : "Image/Desert_Italy.jpg"
    }
}

var Japan = {
    Wine : {
        Name : "Akashi-Tai Honjozo",
        Description : "A top quality sake and the entry point to Akashi-Tai's connoisseur range. Made with Gohyakumangoku rice milled down to just 60% of its original size, creating a delicate and complex sake with a creamy mouthfeel and tropical fruit notes.",
        Picture : "Image/Beverage_Japanese.jpg"
    },
    Appetizer : {
        Name : "Chawanmushi",
        Description : "Chawanmushi is a delicate custard-soup, its name meaning steamed in a tea cup. Each portion of the dish is ideally served in a small, lidded cup, either as an appetizer or as a part of a bigger meal. The custard usually consists of an egg mixture that can be flavored with numerous ingredients such as dashi (Japanese stock), soy sauce, mushrooms, tofu, ginko nut, or steamed shrimp.",
        Picture : "Image/Appetizer_Japan.jpg"
    },
    Entree : {
        Name : "Sashimi",
        Description : "Sashimi is a Japanese delicacy consisting of thinly sliced raw fish or shellfish (or even meat) served with soy sauce and other ingredients such as wasabi or ginger paste. Most common ingredients used in the preparation of sashimi are tuna, squid, scallop, whale, and octopus.",
        Picture : "Image/Entree_Japan.jpg"
    },
    Main : {
        Name : "Wagyu Beef",
        Description : "Wagyu is a term denoting a Japanese beef cattle breed (wa means Japanese, and gyu means cow). This breed has a genetic predisposition to create marbling of fat on the inside of muscle tissue. Average steaks have a fat cap on the outside, but Wagyu cows metabolize the fat internally and the fat remains integrated within the muscle.",
        Picture : "Image/Main_Japan.jpg"
    },
    Desert : {
        Name : "Daifuku",
        Description : "Daifuku, often referred to as daifukumochi, is a popular Japanese confectionery. It is usually shaped into small round balls, which consist of a chewy outer layer and a creamy, sweet filling. The daifuku shell is made with mochi, a glutinous ingredient created through the time-consuming process of crushing boiled or steamed rice.",
        Picture : "Image/Desert_Japan.jpg"
    }
}

var France = {
    Wine : {
        Name : "Crémant Rosé Brut Grande Cuvée",
        Description : "A full crémant rosé from Sieur d 'Arques with a range of bright fruits in the bouquet to red berries on the palate, a wonderful structure framed in a noble appearance perfect-cream perlage. The Crémant Rosé Brut Grande Cuvée 1531 appears in a radiant salmon shade in glass. Vibrant and fresh, it meets the nose elegantly fragrant of white flowers, peaches and bright fruits. Also subtle hints of sweet cherries can be heard.",
        Picture : "Image/Beverage_French.jpg"
    },
    Appetizer : {
        Name : "Galettes de Bretagne",
        Description : "Galettes de Bretagne are basically thin crépes from the Brittany region in northwestern France. These pancakes are made from buckwheat flour, then filled with various ingredients such as eggs, ham, mushrooms, and bacon. In Brittany, créperies are so popular that they outnumber cafés, and people regularly use them to consume their galettes with bits of salted butter",
        Picture : "Image/Appetizer_France.jpg"
    },
    Entree : {
        Name : "Maquereaux au vin blanc",
        Description : "Maquereaux au vin blanc is a traditional fish dish originating from France. The dish is usually made with a combination of mackerel, white wine, onions, garlic, bay leaves, coriander seeds, mustard seeds, salt, peppercorns, lemon rind, lemon juice, and parsley.",
        Picture : "Image/Entree_France.jpg"
    },
    Main : {
        Name : "Confid de Canard",
        Description : "This French classic is made by slow-roasting duck meat in its own fat. What was once used as a method of preserving meat in times before refrigeration is nowadays enjoyed as a rich and flavorful dish of its own. The meat is typically seasoned with salt, pepper, and fresh herbs and spices such as thyme, garlic, shallots, and bay leaves.",
        Picture : "Image/Main_France.jpg"
    },
    Desert : {
        Name : "Lemon Meringue Pie",
        Description : "This baked dessert is made with a base layer of shortcrust pastry that is topped with lemon custard and fluffy meringue. The custard is usually made with a combination of lemon zest and juice, sugar, egg yolks, and (sometimes) starch. The origins of this sweet treat are murky and mysterious – some credit Elizabeth Coane Goodfellow of Philadelphia as the inventor, but her 18th-century recipe mentions lemon pudding, while the meringue is used in minimal amounts, as an accent.",
        Picture : "Image/Desert_France.jpg"
    }
}

function Ganti(Region) {
    if ( Region === "Italy" ) {
        document.getElementById("body").style.backgroundImage = "url('Image/Italy.jpg')";
        document.getElementById("bookmark_Italy").style.visibility = "visible";
        document.getElementById("bookmark_Japan").style.visibility = "hidden";
        document.getElementById("bookmark_French").style.visibility = "hidden";
        var Cuisine = Italy;
    }
    if ( Region === "Japanese" ) {
        document.getElementById("body").style.backgroundImage = "url('Image/Japan.jpg')";
        document.getElementById("bookmark_Italy").style.visibility = "hidden";
        document.getElementById("bookmark_Japan").style.visibility = "visible";
        document.getElementById("bookmark_French").style.visibility = "hidden";
        var Cuisine = Japan;

    }
    if ( Region === "French" ) {
        document.getElementById("body").style.backgroundImage = "url('Image/French.jpg')";
        document.getElementById("bookmark_Italy").style.visibility = "hidden";
        document.getElementById("bookmark_Japan").style.visibility = "hidden";
        document.getElementById("bookmark_French").style.visibility = "visible";
        var Cuisine = France;
    }

    document.getElementsByClassName("Image")[0].src = Cuisine.Wine.Picture;
    document.getElementsByClassName("Image")[1].src = Cuisine.Appetizer.Picture;
    document.getElementsByClassName("Image")[2].src = Cuisine.Entree.Picture;
    document.getElementsByClassName("Image")[3].src = Cuisine.Main.Picture;
    document.getElementsByClassName("Image")[4].src = Cuisine.Desert.Picture;

    document.getElementsByClassName("Name")[0].innerHTML = Cuisine.Wine.Name;
    document.getElementsByClassName("Name")[1].innerHTML = Cuisine.Appetizer.Name;
    document.getElementsByClassName("Name")[2].innerHTML = Cuisine.Entree.Name;
    document.getElementsByClassName("Name")[3].innerHTML = Cuisine.Main.Name;
    document.getElementsByClassName("Name")[4].innerHTML = Cuisine.Desert.Name;

    document.getElementsByClassName("Description")[0].innerHTML = Cuisine.Wine.Description;
    document.getElementsByClassName("Description")[1].innerHTML = Cuisine.Appetizer.Description;
    document.getElementsByClassName("Description")[2].innerHTML = Cuisine.Entree.Description;
    document.getElementsByClassName("Description")[3].innerHTML = Cuisine.Main.Description;
    document.getElementsByClassName("Description")[4].innerHTML = Cuisine.Desert.Description;
}