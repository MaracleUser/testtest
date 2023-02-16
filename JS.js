num = 0;
function change() {
    if (num == 1) {
        hi.innerHTML = "test2";
        num = 0;
    }
    else if (num == 3) {
        hi.innerHTML = "func2";
        num = 0;
    }
    else{
        hi.innerHTML = "change";
        num = 1;
    }
}

function change2() {
    num = 3;
    change();
}