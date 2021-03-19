const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/1.jpg" },
  { name: "Voluptatem", image: "images/2.jpg" },
  { name: "Explicabo", image: "images/3.jpg" },
  { name: "Rchitecto", image: "images/4.jpg" },
  { name: " Beatae", image: "images/5.jpg" },
  { name: " Vitae", image: "images/6.jpg" },
  { name: "Rchitecto", image: "images/4.jpg" },
  { name: " Beatae", image: "images/5.jpg" },
  { name: " Vitae", image: "images/6.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/sw.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }