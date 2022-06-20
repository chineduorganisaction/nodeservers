var testRes = document.querySelector("p");
var url = "127.0.0.1:8000";
fetch(url,
    {
        method: 'GET',
        headers: {
            "Content-Type": "text/html"
        }
    }
)
.then(res => {
    return res.text();
})
.then(data => {
    console.log(data);
    testRes.innerText = data;
})