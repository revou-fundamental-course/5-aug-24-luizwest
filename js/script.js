// Ini JavaScript

console.log('linked success');

function formValidate(){
    let inputWeight = document.getElementById('inputWeight').value;
    let inputHeight = document.getElementById('inputHeight').value;
    console.log(`Isi inputan berat badan : ${inputWeight}`);
    console.log(`Isi inputan tinggi badan : ${inputHeight}`);
    if(inputWeight == '' || inputHeight == ''){
        alert('Inputan berat badan kosong!');
    } else {
        console.log(inputWeight * inputHeight);
        let convertCmToM = inputHeight * 100;
        let resultPow = Math.pow(convertCmToM, 2);
        console.log(inputWeight/resultPow);
    }
    console.log('form submitted');

}