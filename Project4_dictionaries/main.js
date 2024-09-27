function my_Dictionary() {
    var Animal = {
        Speices:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark"
    };
    document.getElementById("Dictionary").innerHTML = delete Animal.Sound;
}