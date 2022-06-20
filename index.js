const textRes = document.querySelector('span');
/*
const payment = async () =>{ 
    await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(response => {return response.json()})
    .then(data => {
        console.log(data);
        var res = data[1].body;
        console.log(res)
        return textRes.innerText=res;
    })
    .catch(err => {console.log('error' + err)});
}
*/
const storeManagement = async () =>{ 
    await fetch(
        "./default-data.json",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(response => {return response.json()})
    .then(data => {
        console.log(data);
        var resultCustomer = data.customers;
        resultCustomer.reduce(
            (acc, cur ) => {
                var cusName = cur.name.firstname;
                var cusNameCount = cur.name.lastname;
                if (acc[cusNameCount] == null) {
                    acc[cusNameCount] = [];
                    acc[cusNameCount].push(cusName)
                }
                else{"error";}
                console.log(acc)
                return /*textRes.innerHTML=*/acc;
            }, 
        {});
    })
    

    .catch(err => console.log('error:' + err));
}

storeManagement()

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


