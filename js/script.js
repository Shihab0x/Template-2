let p = document.getElementById("desc");
let h = document.getElementById("title");
let img = document.getElementById("training");
let ul = document.getElementsByClassName("choose");
let cell = document.getElementsByClassName("time");
let btns = document.getElementsByClassName("class");
let link = document.querySelectorAll("a.nav-link");
let nav = document.getElementsByClassName("navbar")[0];
let section = document.querySelectorAll("section");

console.log(link);


link.forEach((el) => {
  el.onclick = function () {
    let scr = document.getElementById(this.getAttribute("data-scroll"))
    setTimeout(() => {
      scrollTo(0, scr.offsetTop)
    }, 0);
  }
})
onscroll = () => {
  section.forEach((el, i) => {
    link[i].classList.remove("active")
    if(el.offsetTop-200 < scrollY && scrollY < el.nextElementSibling.offsetTop-199) {
    console.log() 
    link[i].classList.add("active")
  }
  })
}


























let classes = [
  {
    s: "./images/training-image-01.jpg",
    h: "first training class",
    p: "phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.",
  },
  {
    s: "./images/training-image-02.jpg",
    h: "second training class",
    p: "integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    s: "./images/training-image-03.jpg",
    h: "third training class",
    p: "fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.",
  },
  {
    s: "./images/training-image-04.jpg",
    h: "fourth training class",
    p: "pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum commodo et.",
  },
];

addEventListener("scroll", function (e) {
  if (scrollY > this.screen.height) {
    nav.classList.add("bg-w");
  } else {
    nav.classList.remove("bg-w");
  }
});

for(let i = 0; i < btns.length; i++) {
      btns[i].onclick = function() {
    for(let j = 0; j < btns.length; j++) {
    img.src = classes[i].s;
    h.textContent = classes[i].h;
    p.textContent = classes[i].p;
      btns[j].classList.remove("active");
    };
    btns[i].classList.add("active");
  };
};

for(let i = 0; i < ul.length; i++) {
  ul[i].onclick = function(e) {
    e.preventDefault();
    for(let j = 0; j < cell.length; j++) {
      cell[j].classList.remove("active");
      if(j < ul.length) {
        ul[j].classList.remove("active");
      }
    }
    ul[i].classList.add("active");
    cell[ul[i].getAttribute("data-one")].classList.add("active");
    cell[ul[i].getAttribute("data-two")].classList.add("active");
  }
}
