import read_Pdf_File from "./index.js";

read_Pdf_File()
.then(
    data => {
        var splitData = /([.,\n])/gm;
        var splittedData = data.split(splitData);
        console.log(data);
        return splittedData;
    }
)
.catch(err => console.error(err))
