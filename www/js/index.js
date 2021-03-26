document.addEventListener('deviceready', init, false);
var btn_sum;
var field_input;
var nextReset = false;

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
        nextReset = true;
        document.getElementById("in").value = sum()
    })
}

function sum() {
    try {
        console.log("Ich berechne: " + field_input.value + " und komme auf das Ergebnis: " + eval(field_input.value));
        return eval(field_input.value)
    } catch (error) {
        console.log("Irgendwas ist komisch :/")
    }
    return "ERROR"
}

function addHandler(btn, num) {
    btn.addEventListener("click", function () {
        if (nextReset) {
            field_input.value = ""
            nextReset = false;
        }
        field_input.value += "" + num
    })
}