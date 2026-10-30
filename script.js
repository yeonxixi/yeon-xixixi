
const buttons = document.querySelectorAll(".social-btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        console.log(
            "Membuka media sosial:",
            button.innerText.trim()
        );

    });

});
