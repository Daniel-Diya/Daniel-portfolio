// const Reach = document.querySelector(".ReachOut");

// const overlay = document.querySelector(".overlay");
// const form = document.querySelector(".REACH-OUT-NOW");
// console.log(Reach, overlay, form);

// Reach.addEventListener("click", function () {
//   form.style.display = "block";
//   overlay.style.display = "inline-flex";
// });

// overlay.addEventListener("click", function () {
//   form.style.display = "none";
//   overlay.style.display = "none";
// });

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

const see_more = document.querySelectorAll(".see_more_profession");
console.log(see_more);
const more = document.querySelectorAll(".more");

see_more.forEach((see) =>
  see.addEventListener("click", function () {
    console.log(see);

    for (let i = 0; i < more.length; i++)
      if (i < more[i].length - 1) {
        more[i].textContent = "Less";
      }
  })
);

// if (index < objects.length - 1) {
//   objects[index + 1].classList.add('active');
// }

// for (et i = 0; i < see_more.length; i++)
// for (let i = 0; i < more.length; i++)
// console.log(see_more[i]); {
// see_more[i].addEventListener('click', function(){
// more[i].textContent = 'Less'
// })
// }
// hamburger menu
const hamburger = document.querySelector(".header__main-ham-menu");
const close = document.querySelector(".header__main-ham-menu-close");
const links = document.querySelector(".links_item");

hamburger.addEventListener("click", function () {
  close.style.display = "block";
  links.style.display = "block";
  hamburger.style.display = "none";
});
close.addEventListener("click", function () {
  close.style.display = "none";
  links.style.display = "none";
  hamburger.style.display = "block";
});
// links.addEventListener('click', function(){
//   if (close.style.display = 'block') {
//     links.style.display = 'none';
//     hamburger.style.display = 'block'
//     close.style.display ='none';
//   }
// })

const button = document.querySelector(".contact_send");
console.log(button);
const textarea_contact = document.querySelector(".contact_message");
console.log(textarea_contact.textContent);
console.log(
button.addEventListener("click", function (e) {
  e.preventDefault();
  if (textarea_contact === "") {
  console.log(  textarea_contact.style.border = "2px solid red");
  console.log(error);
  } 
}));