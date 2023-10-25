const btn = document.querySelectorAll(".btn button");
const submit = document.querySelector("submit");
const Star = document.getElementById("Star");
const card = document.getElementById("First");
const hide = document.getElementById("Second");

btn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        removeSelectedClasses()
        selected = e.target.textContent
        e.target.classList.add("selected")
    })
})

submit-btn.addEventListener("click", (e) => {
    if (selected === "") {
        addButtonErrors()
        setTimeout(() => {
            removeButtonErrors()
        }, 3000);
        return
    }

    Star.textContent = `You selected ${selected} out of 5`
    card.classList.add("Second");
    hide.classList.remove("Second");
})