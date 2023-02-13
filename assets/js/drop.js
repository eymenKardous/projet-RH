let trash = document.getElementById('trash')

function start(event) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", event.target.id);
    trash.style.height = '8vw'
}

function over(event) {
    return false;
}

function drop(event) {
    console.log(event);
    object = event.dataTransfer.getData('text/plain');
    console.log(object);
    trash.style.height = '1vw'
    trash.style.width = '1vw'
    window.location.href = "/delete/" + object
    return false;
}