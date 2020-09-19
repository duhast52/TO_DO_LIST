let close = document.getElementsByClassName("close");
let list = document.querySelector('ul');
let addBtn = document.querySelector('.addBtn');


list.addEventListener('click', ev => {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
});


addBtn.addEventListener('click', () => {
    let li = document.createElement("li");
    let inputValue = document.querySelector("#myInput").value;
    let inputText = document.createTextNode(inputValue);
    li.append(inputText);
    if (typeof inputValue == 'undefined' || !inputValue || inputValue.length === 0 || inputValue === "" || !/[^\s]/.test(inputValue) || /^\s*$/.test(inputValue) || inputValue.replace(/\s/g, "") === "") {
        document.querySelector("#myInput").placeholder = "Поле не может быть пустым";
    } else {
        document.querySelector("#myUL").append(li);
    }

    document.querySelector("#myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.append(txt);
    li.append(span);

    for (i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function() {
            let div = this.parentElement;
            div.style.display = "none";
        });
    }
});