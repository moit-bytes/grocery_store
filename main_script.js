var price_1 = 0;
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}
function changeColor_1(color) {
    document.getElementById('bu2').style.background = color;
    document.getElementById('bu2').style.color = 'white';
    document.getElementById('bu3').style.background = 'white';
    document.getElementById('bu3').style.color = 'black';
}
function changeColor_2(color) {
    document.getElementById('bu3').style.background = color;
    document.getElementById('bu3').style.color = 'white';
    document.getElementById('bu2').style.background = 'white';
    document.getElementById('bu2').style.color = 'black';
}

function button_click_1()
{
    var price = parseInt(document.getElementById('bu2').value, 10);
    price_1 = price;
    changeColor_1('green');
}
function button_click_2()
{
    var price = parseInt(document.getElementById('bu3').value, 10);
    price_1 = price;
    changeColor_2('green');
}
function payable()
{
    var value = parseInt(document.getElementById('number').value, 10);
    var total = price_1*value;
    var t = total.toString();
    var str = "=Rs"+t;
    document.getElementById('amount').innerHTML = str;
    document.getElementById('amount').style.color = 'green';
    document.getElementById('amount').style.fontWeight= '700';
    document.getElementById('amount').style.fontSize= '25px';
    document.getElementById('amount').style.float= 'left';
}
