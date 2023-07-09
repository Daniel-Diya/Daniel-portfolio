'strict mode';
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
// const see_more = document.querySelectorAll(".see_more_profession");
// console.log(see_more);
// const more = document.querySelectorAll(".more");

// see_more.forEach((see) =>
//   see.addEventListener("click", function () {
//     console.log(see);

//     for (let i = 0; i < more.length; i++)
//       if (i < more[i].length - 1) {
//         more[i].textContent = "Less";
//       }
//   })
// );

// hamburger menu

const hamburger = document.querySelector(".header__main-ham-menu");
const close = document.querySelector(".header__main-ham-menu-close");
const links = document.querySelector(".links_item");

hamburger.addEventListener('click', function(){
  close.style.display = "block";
links.classList.add('listed')
hamburger.style.opacity = '0'
hamburger.classList.add('hidden')

})
close.addEventListener('click', function(){
    links.classList.remove('listed')
    close.style.display = "none";
    hamburger.style.opacity = '1'
    hamburger.classList.remove('hidden')

})

const navlinks = document.querySelectorAll(".navlinks");

  navlinks.forEach((navs) => {
    navs.addEventListener("click", function () {
      close.style.display = "none";
      links.classList.remove('listed')
      hamburger.style.opacity = '1'
      hamburger.classList.remove('hidden')
      navlinks.forEach((navs) => {
        navs.classList.remove("ActiveNav");
      });
      navs.classList.add("ActiveNav");
    });
  })



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
