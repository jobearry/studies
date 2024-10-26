let imgSource = document.querySelector("img");
let prev = document.querySelector("#go-to-previous");
let next = document.querySelector("#go-to-next");
let i = 0;

next.addEventListener("click", function () {
  imgSource.setAttribute("src", `https://picsum.photos/id/${i++}/500/300`);
  console.log(imgSource.getAttribute("src"));
});

prev.addEventListener("click", function () {
  imgSource.setAttribute("src", `https://picsum.photos/id/${i--}/500/300`);
  console.log(imgSource.getAttribute("src"));
  if (i < 0) {
    i = 0;
  }
});
