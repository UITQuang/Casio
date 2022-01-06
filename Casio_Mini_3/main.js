var input_screen = document.getElementById("input_screen");
var output_screen = document.getElementById("output_screen");

function display(num) {
    input_screen.value += num;
}

function result() {

    if (input_screen.value == "")
        output_screen.value = "";
    else {
        try {
            kq = eval(input_screen.value);
            if ((kq % 1 != 0) && String(kq).length > 9)
                output_screen.value = kq.toFixed(8);
            else
                output_screen.value = eval(input_screen.value);
        } catch (err) {
            alert("So sorry! Please re-enter your expression ")
        }
    }
}

function del_char() {
    input_screen.value = input_screen.value.slice(0, -1);
}

function del_string() {
    input_screen.value = "";
    output_screen.value = "";
}