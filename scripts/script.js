const Reach = document.querySelector(".ReachOut");

const overlay = document.querySelector(".overlay");
const form = document.querySelector(".REACH-OUT-NOW");
console.log(Reach, overlay, form);

Reach.addEventListener("click", function () {
  form.style.display = "block";
  overlay.style.display = "inline-flex";
});

overlay.addEventListener("click", function () {
  form.style.display = "none";
  overlay.style.display = "none";
});

const navlinks = document.querySelectorAll(".navlinks");
console.log(
  navlinks.forEach((navs) => {
    navs.addEventListener("click", function () {
      navlinks.forEach((navs) => {
        navs.classList.remove("ActiveNav");
      });
      navs.classList.add("ActiveNav");
    });
  })
);

// let sectionss = document.querySelectorAll("scrollchange");
// console.log(sections);
// console.log(
//   (window.onscroll = () => {
//     sections.forEach((secs) => {
//       let top = window.scrollY;
//       let offset = secs.offsetTop;
//       let height = secs.offsetHeight;
//       let id = secs.getAttribute("href");

//       if (top >= offset && top < offset + height) {
//         navlinks.forEach((navs) => {
//           navs.classList.add("ActiveNav");
//           // document
//           //   .querySelector("ul li a [href*= " + id + "]")
//           //   .classList.add(".ActiveNav");
//         });
//       } else {
//         // document
//         // .querySelector('ul li a[href*=' + id + ']')
//         // .classList.add(".ActiveNav");
//         navs.classList.remove("ActiveNav");
//         // document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//       }
//     });
//   })
// );

// header nav a[href*=' + id + ']').

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };

// navLinks.forEach((link) => {
//   const section = document.querySelector(link.getAttribute("href"));
//   if (
//     section.offsetTop <= fromTop &&
//     section.offsetTop + section.offsetHeight > fromTop
//   ) {
//     link.classList.add("active");
//   } else {
//     link.classList.remove("active");
//   }
// });




