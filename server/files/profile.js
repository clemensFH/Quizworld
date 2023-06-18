const xhr = new XMLHttpRequest();
xhr.onload = function () {
    if(xhr.status === 200) {
        const user = JSON.parse(xhr.responseText)
        const heading = document.getElementById("username")
        heading.innerHTML = user.name
    }
};
xhr.open("GET", "/profile")
xhr.send();