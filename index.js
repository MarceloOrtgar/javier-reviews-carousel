const boton = document.querySelector("#random-btn");
const name = document.querySelector("#name");
const job = document.querySelector("#job");
const image = document.querySelector("#image");
const opinion = document.querySelector("#opinion");

console.log(name);
console.log(image);
console.log(job);
console.log(opinion);

boton.addEventListener("click", (e) => {
  
    console.log(name.textContent)
  
    if (name.textContent === "name retraro 4") {
    name.textContent = "name retraro 1";
    image.src = "retrato-1.jpg";
    job.textContent = "job retraro 1";
    opinion.textContent = "opinion retrato 1";
  } else if (name.textContent === "name retraro 1") {
    name.textContent = "name retraro 2";
    image.src = "retrato-2.jpg";
    job.textContent = "job retraro 2";
    opinion.textContent = "opinion retrato 2";
  } else if (name.textContent === "name retraro 2") {
    name.textContent = "name retraro 3";
    image.src = "retrato-3.jpg";
    job.textContent = "job retraro 3";
    opinion.textContent = "opinion retrato 3";
  } else {
    name.textContent = "name retraro 4";
    image.src = "retrato-4.jpg";
    job.textContent = "job retraro 4";
    opinion.textContent = "opinion retrato 4";
  }
});
