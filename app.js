let input_1 = document.getElementById("inp1");
console.log(input_1);

function display(values){
    input_1.value += values;
}

function calculate(){
    input_1.value = eval(input_1.value);
}

function clearScreen(){
    input_1.value = " ";
}

function deleteLast(){
    input_1.value = input_1.value.substr(0,input_1.value.length - 1);
}



// console.log(eval('2'*'3'));