const form = document.querySelector<HTMLFormElement>("form") as HTMLFormElement
form.addEventListener("submit", async (ev:SubmitEvent) => {
  ev.preventDefault();
   let index = 0;
  for (const image of ev.target[0].files) {
    const formData:FormData = new FormData();
    index++
    formData.append("url", image);
    await fetch(`http://localhost:8080/api/v1/shows/${index}`, {
      method: "PUT",
      body: formData,
    });
  } 
  console.log('Finito💚')
});
