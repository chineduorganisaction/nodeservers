var generateColor = (string_length, password) => {
    var color_character = "0123456789abcdef";
    var inputName = `${password}0123456789`;
    var hex = "#";
    var colorAdd = "";
    var passwordGenerated = "";
    for (let i = 0; i < parseInt(string_length); i++) {
        colorAdd = colorAdd + color_character[Math.floor(
            Math.random() * color_character.length
        )];
        passwordGenerated = passwordGenerated + inputName[Math.floor(
            Math.random() * inputName.length
        )];

    }
    var color = hex + colorAdd;
    console.log(color)
    document.body.style.backgroundColor=color;
    return textRes.innerHTML = `${color}; password: ${passwordGenerated}`;
}

const textRes = document.querySelector('span');