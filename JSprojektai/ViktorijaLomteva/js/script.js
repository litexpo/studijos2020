(function() {
  /* ------------------------- */
  /*  SIDE NAVIGATION (ASIDE)  */
  /* ------------------------- */

  // Declare variables
  const toggleColors = document.querySelector(".menu-toggle-colors");
  const btnAddToCart = document.querySelector(".btn-card");

  // Function to remove class
  function removeMainMenuClass() {
    let subnav = document.querySelectorAll(".subnav");
    for (let i = 0; i < subnav.length; i++) {
      subnav[i].classList.remove("active");
    }
  }
  // Event listeners for toggle menu
  document.querySelector(".menu-toggle-title").addEventListener("click", function() {
    removeMainMenuClass();
    document.querySelector(".subnav-title").classList.add("active");
  });
  document.querySelector(".menu-toggle-nav").addEventListener("click", function() {
     removeMainMenuClass();
    document.querySelector(".subnav-nav").classList.add("active");
  });
  document.querySelector(".menu-toggle-about").addEventListener("click", function() {
    removeMainMenuClass();
    document.querySelector(".subnav-about").classList.add("active");
  });
  document.querySelector(".menu-toggle-gallery").addEventListener("click", function() {
    removeMainMenuClass();
    document.querySelector(".subnav-gallery").classList.add("active");
  });
  document.querySelector(".menu-toggle-resume").addEventListener("click", function() {
    removeMainMenuClass();
    document.querySelector(".subnav-resume").classList.add("active");
  });
  document.querySelector(".menu-toggle-contacts").addEventListener("click", function() {
    removeMainMenuClass();
    document.querySelector(".subnav-contacts").classList.add("active");
  });
  document.querySelector(".menu-toggle-footer").addEventListener("click", function() {
    removeMainMenuClass();
    document.querySelector(".subnav-footer").classList.add("active");
  });
  toggleColors.addEventListener("click", function() {
    removeMainMenuClass();
    document.querySelector(".subnav-colors").classList.add("active");
  });

  
  /******** ADD TO CART *********/

  // Function to appear the button
  function showCart() {
    btnAddToCart.classList.add("displayBlock");
  }
  // Event listener to set timeout
  toggleColors.addEventListener("click", function() {
    setTimeout(showCart, 1000);
  });
  // Count clicks
  let count = 1;
  function clicked() {
    return count++;
  }
  // Show number on click
  btnAddToCart.addEventListener("click", function() {
    const countSave = document.querySelector(".saved-templates");
    countSave.classList.add("displayBlock");
    countSave.textContent = clicked();
  });

  // Function to check if cart is not empty
  function ifCount() {
    if (count <= 1) {
      alert("You have nothing to buy or preview yet");
    }
  }
  // Event listeners to alert notification if cart is empty
  document.querySelector(".btn-preview").addEventListener("click", ifCount);
  document.querySelector(".btn-buy").addEventListener("click", ifCount);


  /* ------------------------- */
  /*       MAIN SECTION        */
  /* ------------------------- */

  /******** DECLARATION *********/
  // NAVIGATION
  const navFirst = document.getElementById("nav-first");
  const navSecond = document.getElementById("nav-second");
  // third nav elements
  const thirdMenuIcon = document.getElementById("third-nav-icon");
  const thirdNavMenu = document.getElementById("third-nav-menu");
  // POP-UP GALLERY SECTION
  const popUpSection = document.querySelector(".pop-up");


  /******** FUNCTIONS *********/
  // Functions to remove classes in Main section
  function removeNavClasses() {
    let element = document.querySelectorAll(".nav-element");
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("displayBlock");
    }
  }
  function removeTitleClasses() {
    let element = document.querySelectorAll(".title-element");
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("displayBlock");
    }
  }
  function removeAboutClasses() {
    let element = document.querySelectorAll(".about-element");
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("displayBlock");
    }
  }
  function removeGalleryClasses() {
    let element = document.querySelectorAll(".gallery-element");
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("displayBlock");
    }
  }
  function removeResumeClasses() {
    let element = document.querySelectorAll(".resume-element");
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("displayBlock");
    }
  }
  function removeContactClasses() {
    let element = document.querySelectorAll(".contact-element");
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("displayBlock");
    }
  }
  function removeFooterClasses() {
    let element = document.querySelectorAll(".footer-element");
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("displayBlock");
    }
  }

  // Function to toggle third navigation menu
  let showMenu = false;
  function toggleMenu() {
    if (!showMenu) {
      thirdMenuIcon.classList.add("close");
      thirdNavMenu.classList.add("show");

      showMenu = true;
    } else {
      thirdMenuIcon.classList.remove("close");
      thirdNavMenu.classList.remove("show");

      showMenu = false;
    }
  }


  // Event listeners to remove and add classes
  // NAVIGATION
  document.getElementById("btn-nav-first").addEventListener("click", function() {
    removeNavClasses();
    navFirst.classList.add("displayBlock");
  });
  document.getElementById("btn-nav-second").addEventListener("click", function() {
    removeNavClasses();
    navSecond.classList.add("displayBlock");
  });
  document.getElementById("btn-nav-third").addEventListener("click", function() {
    removeNavClasses();
    thirdMenuIcon.classList.add("displayBlock");
    thirdMenuIcon.style.cursor = "pointer";
  });

  // Event listener to third navigation toggle
  thirdMenuIcon.addEventListener("click", toggleMenu);

  // TITLE
  document.getElementById("btn-title-first").addEventListener("click", function() {
    removeTitleClasses();
    document.querySelector(".title-1").classList.add("displayBlock");
  });
  document.getElementById("btn-title-second").addEventListener("click", function() {
    removeTitleClasses();
    document.querySelector(".title-2").classList.add("displayBlock");
  });

  // ABOUT
  document.getElementById("btn-about-first").addEventListener("click", function() {
    removeAboutClasses();
    document.getElementById("about-columns-1").classList.add("displayBlock");
  });
  document.getElementById("btn-about-second").addEventListener("click", function() {
    removeAboutClasses();
    document.getElementById("about-columns-2").classList.add("displayBlock");
  });
  document.getElementById("btn-about-third").addEventListener("click", function() {
    removeAboutClasses();
    document.getElementById("about-columns-3").classList.add("displayBlock");
  });

  // GALLERY
  document.getElementById("btn-gallery-first").addEventListener("click", function() {
    removeGalleryClasses();
    document.querySelector(".main__gallery--1").classList.add("displayBlock");
  });
  document.getElementById("btn-gallery-second").addEventListener("click", function() {
    removeGalleryClasses();
    document.querySelector(".main__gallery--2").classList.add("displayBlock");
  });
  document.getElementById("btn-gallery-third").addEventListener("click", function() {
    removeGalleryClasses();
    document.querySelector(".main__gallery--3").classList.add("displayBlock");
  });

  // RESUME
  document.getElementById("btn-resume-first").addEventListener("click", function() {
    removeResumeClasses();
    document.querySelector(".main__resume--first").classList.add("displayBlock");
  });
  document.getElementById("btn-resume-second").addEventListener("click", function() {
    removeResumeClasses();
    document.querySelector(".main__resume--second").classList.add("displayBlock");
  });
  document.getElementById("btn-resume-third").addEventListener("click", function() {
    removeResumeClasses();
    document.querySelector(".main__resume--third").classList.add("displayBlock");
  });

  // CONTACTS
  document.getElementById("btn-contacts-first").addEventListener("click", function() {
    removeContactClasses();
    document.querySelector(".contacts--first").classList.add("displayBlock");
  });
  document.getElementById("btn-contacts-second").addEventListener("click", function() {
    removeContactClasses();
    document.querySelector(".contacts--second").classList.add("displayBlock");
  });
  document.getElementById("btn-contacts-third").addEventListener("click", function() {
    removeContactClasses();
    document.querySelector(".contacts--third").classList.add("displayBlock");
  });

  // FOOTER
  document.getElementById("btn-footer-first").addEventListener("click", function() {
    removeFooterClasses();
    document.querySelector(".footer--first").classList.add("displayBlock");
  });
  document.getElementById("btn-footer-second").addEventListener("click", function() {
    removeFooterClasses();
    document.querySelector(".footer--second").classList.add("displayBlock");
  });
  document.getElementById("btn-footer-third").addEventListener("click", function() {
    removeFooterClasses();
    document.querySelector(".footer--third").classList.add("displayBlock");
  });

  

  /******** COLORS *********/

  // Declare variables
  let themeColor = document.getElementsByClassName("color-change");
  // Event for random main color on page load
  window.onload = randomColor();
  // Function to pick random color
  function randomColor() {
    // Define random colors
    colors = ["#101d2c", "brown", "#3b3b98", "#2c8a6b", "#a3274a"];
    const random = Math.floor(Math.random() * colors.length);
    // Loop throgh colors
    for (let i = 0; i < colors.length; i++) {
      // Loop throgh elements to change colors
      for (let j = 0; j < themeColor.length; j++) {
        themeColor[j].style.background = colors[random];
      }
      // Loop throgh main title section (prevent coloring)
      let themeMain = document.querySelectorAll(".color-change-main");
      for (let k = 0; k < themeMain.length; k++) {
        themeMain[k].style.background = colors[random];
      }
    }
  }
  // Function to change main color (except main title section)
  function changeThemeColor(color) {
    for (let i = 0; i < themeColor.length; i++) {
      themeColor[i].style.background = color;
    }
  }

  // Event listeners to change main color
  document.querySelector(".theme-color-dark-blue").addEventListener("click", function() {
    changeThemeColor("#101d2c");
  });
  document.querySelector(".theme-color-red").addEventListener("click", function() {
    changeThemeColor("brown");
  });
  document.querySelector(".theme-color-blue").addEventListener("click", function() {
    changeThemeColor("#3b3b98");
  });
  document.querySelector(".theme-color-green").addEventListener("click", function() {
    changeThemeColor("#2c8a6b");
  });
  document.querySelector(".theme-color-pink").addEventListener("click", function() {
    changeThemeColor("#a3274a");
  });

  // Custom color picker
  // Event listener to change the color
  window.addEventListener("load", startup, false);
  // Function to set the color
  function startup() {
    let colorPicker = document.getElementById("color-picker");
    colorPicker.addEventListener("input", update, false);
    colorPicker.select();
  }
  // Function to update the color
  // Event object
  function update(e) {
    for (let i = 0; i < themeColor.length; i++) {
      themeColor[i].style.background = e.target.value;
    }
  }

  /******** POP-UP *********/

  // Show Pop-up
  document.getElementById("btn-title-pic").addEventListener("click", showPopUp);
  // Close Pop-up
  document.getElementById("closeBtn").addEventListener("click", closePopUp);
  // Click outside of Pop-up
  window.addEventListener("click", clickOutside);

  // Function to show Pop-up
  function showPopUp() {
    popUpSection.style.display = "block";
  }
  // Function to close Pop-up
  function closePopUp() {
    popUpSection.style.display = "none";
  }
  // Function to close on outside click
  function clickOutside(e) {
    if (e.target == popUpSection) popUpSection.style.display = "none";
  }

  // Function to change main image source
  function changeImgSrc(el) {
    let title = document.querySelectorAll(".title-element");
    for (let i = 0; i < title.length; i++) {
      title[i].style.background = "";
      title[i].style.backgroundImage = 'url("../img/img-' + el + '.jpeg")';
    }
  }
  // Function to set main title color
  function setMainColors() {
    let darkItem = document.querySelectorAll(".darker-item");
    for (let i = 0; i < darkItem.length; i++) {
      darkItem[i].classList.add("text-darker");
    }
  }
  // Function to reset main title color
  function resetMainColors() {
    let darkItem = document.querySelectorAll(".darker-item");
    for (let i = 0; i < darkItem.length; i++) {
      darkItem[i].classList.remove("text-darker");
    }
  }

  // Event listeners to change background image from Pop-up
  document.querySelector(".bg-img-1").addEventListener("click", function() {
    closePopUp();
    changeImgSrc(1);
    setMainColors();
  });
  document.querySelector(".bg-img-2").addEventListener("click", function() {
    closePopUp();
    changeImgSrc(2);
    setMainColors();
  });
  document.querySelector(".bg-img-3").addEventListener("click", function() {
    closePopUp();
    changeImgSrc(3);
    resetMainColors();
  });
  document.querySelector(".bg-img-4").addEventListener("click", function() {
    closePopUp();
    changeImgSrc(4);
    resetMainColors();
  });
  document.querySelector(".bg-img-5").addEventListener("click", function() {
    closePopUp();
    changeImgSrc(5);
    setMainColors();
  });
  document.querySelector(".bg-img-6").addEventListener("click", function() {
    closePopUp();
    changeImgSrc(6);
    resetMainColors();
  });
  document.querySelector(".bg-img-7").addEventListener("click", function() {
    closePopUp();
    changeImgSrc(7);
    setMainColors();
  });
  document.querySelector(".bg-img-8").addEventListener("click", function() {
    closePopUp();
    changeImgSrc(8);
    resetMainColors();
  });
  document.querySelector(".bg-img-9").addEventListener("click", function() {
    closePopUp();
    changeImgSrc(9);
    setMainColors();
  });
})();