let buttons = document.querySelectorAll(".Button");
let ResultBox = document.getElementById("Result");

let string = "";
let operators = ["+", "-", "*", "/", "%"];

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.innerText === "AC") {
            string = "";
            ResultBox.value = "";
        }

        else if (btn.dataset.action === "del") {
            string = string.slice(0, -1);
            ResultBox.value = string;
        }

        else if (btn.innerText === "=") {
            if (!string) return;
            try {
                string = eval(string).toString();
                ResultBox.value = string;
            } catch {
                ResultBox.value = "Error";
                string = "";
            }
        }

        else {
            let lastChar = string.slice(-1);
            if (operators.includes(lastChar) && operators.includes(btn.innerText)) return;

            string += btn.innerText;
            ResultBox.value = string;
        }
    });
});
