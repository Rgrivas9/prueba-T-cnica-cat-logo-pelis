"use strict";
const form = document.querySelector("form");
form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    let index = 0;
    for (const image of ev.target[0].files) {
        const formData = new FormData();
        index++;
        formData.append("url", image);
        await fetch(`http://localhost:8080/api/v1/shows/${index}`, {
            method: "PUT",
            body: formData,
        });
    }
    console.log('Finito💚');
});
