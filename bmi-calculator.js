// калькулятор 
function bioCflculator(weidght, height) {
    var bai = weidght / (height * height);
    return Math.round(bai);

}

var bai = bioCflculator(65, 1.8);
console.log(bai);