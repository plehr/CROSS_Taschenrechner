document.addEventListener('deviceready', onDeviceReady, false);
var btn_sum;
var field_input;

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    init();
}
function init() {
    field_input = document.getElementById("in")
    btn_sum = document.getElementById("btn_sum")
    for (let index = 0; index < 10; index++)
        addHandler(document.getElementById("btn_" + index), index)
    addHandler(document.getElementById("btn_dot"), ",")
    addHandler(document.getElementById("btn_add"), "+")
    addHandler(document.getElementById("btn_sub"), "-")
    addHandler(document.getElementById("btn_mul"), "*")
    addHandler(document.getElementById("btn_div"), "/")

    btn_sum.addEventListener("click", function () {
        document.getElementById("in").value = sum()
    })
}
function sum() {
    //TODO add sum function with eval
}
function addHandler(btn, num) {
    btn.addEventListener("click", function () {
        field_input.value += "" + num
    })
}