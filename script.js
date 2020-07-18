
function place(param) {
    document.form.textshow.value += param;
}

function clean() {
    document.form.textshow.value = '';
}

function calculate() {
    document.form.textshow.value = eval(document.form.textshow.value);
}

function back() {
    let str = document.form.textshow.value;
    let lengthStr = document.form.textshow.value.length;
    let newStr = str.slice(0, lengthStr - 1);
    document.form.textshow.value = newStr;
}