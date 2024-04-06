// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// const btn = document.querySelector(".switch-btn");
// const video = document.querySelector(".video-container");

// btn.addEventListener("click", function () {
//   console.log("kkk");
//   if (!btn.classList.contains("slide")) {
//     console.log("aaa");
//     btn.classList.add("slide");
//     video.pause();
//   } else {
//     console.log("bbb");
//     btn.classList.remove("slide");
//     video.play();
//   }
// });

// preloader
const preloader = document.querySelector(".preloader");

document.addEventListener("DOMContentLoaded", function () {
  const vidArr = document.querySelectorAll(".myclass");
  const btnArr = document.querySelectorAll(".btnV");
  const spanArr = document.querySelectorAll(".spanBtn");

  btnArr.forEach(btn => {
    btn.addEventListener("click", () => {
      const btnID = btn.getAttribute("data-id")
      console.log("ooooo", btnID)
      spanArr.forEach(span => {
        console.log("span value ", span)
        const spanID= span.getAttribute("data-id")
        console.log("llllll", spanID)
        if (btnID === spanID) {
          console.log("aaaaa")
          span.classList.add("slide")
        }
      })
    })
  })
  // console.log("aaa")
  preloader.classList.add("hide-preloader");
});
//  console.log("kkk")

