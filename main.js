// ------------Scroll-----------------
// let el = document.querySelector(".scroller");
// let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// window.addEventListener("scroll", ()=> {
//     let scrollTop = document.documentElement.scrollTop;
//     el.style.width = `${(scrollTop / height) * 100}%`
// })
// ------------------------------------------------------

// -------------------Hangman------------------
// // Letters
// const letters = "abcdefghijklmnopqrstuvwxyz";
// // Get Array From Letters
// let lettersArray = Array.from(letters);
// // Select Letters Container
// let lettersContainer = document.querySelector(".letters");
// // Generate Letters
// lettersArray.forEach((letter) => {
//     // Create Span
//     let span = document.createElement("span");
//     // Create Letter Text Node
//     let theLetter = document.createTextNode(letter);
//     // Append The Letter To Span
//     span.appendChild(theLetter);
//     // Add Class To Span
//     span.className = "letter-box";
//     // Append Span To The Letters Container
//     lettersContainer.appendChild(span);
// });
// // Object Of Words + Categories
// const words = {
//     programming: [
//         "php",
//         "javascript",
//         "go",
//         "scala",
//         "fortran",
//         "r",
//         "mysql",
//         "python",
//     ],
//     movies: [
//         "Prestige",
//         "Inception",
//         "Parasite",
//         "Intersteller",
//         "Whiplash",
//         "Memento",
//         "Coco",
//         "Up",
//     ],
//     people: [
//         "Albert Einstein",
//         "Hitchcock",
//         "Alexander",
//         "Cleopatra",
//         "Ammar Mohamed",
//     ],
//     countries: ["Egypt", "Syria", "Palestine", "Yemen", "Bahrein", "Qatar"],
// };

// // Get Random Property
// let allKeys = Object.keys(words);
// // ------------Random Number Depends On Keys Length
// let randomPropNum = Math.floor(Math.random() * allKeys.length);
// // --------------Category
// let randomPropName = allKeys[randomPropNum];
// // -------------Category Words
// let randomPropValue = words[randomPropName];
// // -------------Random Number Depend On Words
// let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
// // -------------The Choosen Word
// let randomValueValue = randomPropValue[randomValueNumber];
// // Set Category Info
// document.querySelector(".game-info .category span").innerHTML = randomPropName;

// // Select Letters Guess Element
// let letterGuessContainer = document.querySelector(".letters-guess");
// // Convery Choosen Word To An Array
// let lettersAndSpace = Array.from(randomValueValue);
// // Create Spans Depending on Word
// lettersAndSpace.forEach((letter) => {
//     // Create Empty Span
//     let emptySpan = document.createElement("span");
//     // If Letter Is Space
//     if (letter === " ") {
//         // Add Class To The Span
//         emptySpan.className = "has-space";
//     }
//     // Append Span To The Letters Guess Container
//     letterGuessContainer.appendChild(emptySpan);
// });

// // Select Guess Spans
// let guessSpans = document.querySelectorAll(".letters-guess span");
// // Set Wrong Attempts
// let wrongAttempts = 0;
// // Select The Draw Element
// let theDraw = document.querySelector(".hangman-draw");

// // Handle Clicking On Letters
// document.addEventListener("click", (e) => {
//     // Set The Choosen Status
//     let theStatus = false;

//     if (e.target.className === "letter-box") {
//         e.target.classList.add("clicked");
//         // Get Clicked Letter
//         let theClickedLetter = e.target.innerHTML.toLowerCase();
//         // The Choosen Word
//         let theChoosenWord = Array.from(randomValueValue.toLowerCase());
//         theChoosenWord.forEach((wordLetter, wordIndex) => {
//             // Check If The Clicked Letter Equal To A Letter in The Choosen Word
//             if (theClickedLetter == wordLetter) {
//                 // Set Status To Correct
//                 theStatus = true;
//                 // Loop On All Guess Spans
//                 guessSpans.forEach((span, spanIndex) => {
//                     if (wordIndex === spanIndex) {
//                         span.innerHTML = theClickedLetter;
//                     }
//                 });
//             }
//         });
//         // Outsice Loop
//         // If Letter Is Wrong
//         if (theStatus !== true) {
//             // Increase The Wrong Attempts
//             wrongAttempts++;
//             // Add Class Wrong To The Draw Element
//             theDraw.classList.add(`wrong-${wrongAttempts}`);
//             // Play Failure Sound
//             document.getElementById("fail").play();
//             if (wrongAttempts === 8) {
//                 lettersContainer.classList.add("finished");
//                 endGame();
//             }
//         } else {
//             document.getElementById("success").play();
//         }
//     }
// });

// // End Game Function
// let endGame = function () {
//     // Create Popup Div
//     let div = document.createElement("div");
//     let txt = document.createTextNode(
//         `Game Over, The Word Is ${randomValueValue}`
//     );
//     div.appendChild(txt);
//     div.className = "popup";
//     document.body.appendChild(div);
// };

// let congratulations = function () {
//     // Create Popup Div
//     let div = document.createElement("div");
//     let txt = document.createTextNode(`Contgratulaions`);
//     div.appendChild(txt);
//     div.className = "popup";
//     document.body.appendChild(div);
// };
// -----------------------------------------------------------

// ---------------------------Tooltip------------------------------
// ----------------------------------------------------------------
// -------------------------Animated Wavy Background------------------------
// -------------------------------------------------------------------
// -------------------------Burger Icon----------------------
// -------------------------------------------------------
// ------------------------Animate Width-------------------------
// let section = document.querySelector(".three")
// let spans = document.querySelectorAll(".progress span")
// window.onscroll = function(){
//     if(window.scrollY >= section.offsetTop) {
//         spans.forEach((span) => {
//             span.style.width = span.dataset.width;
//         })
//     }
// }
// -----------------------------------------------------

// /---------------------Count Input------------------------
// let count = document.querySelector(".count");
// let progress = document.querySelector(".progress");
// let input = document.querySelector("input");
// let div = document.querySelector("div");
// let maxLength = input.getAttribute("maxlength");

// count.innerHTML = maxLength
// input.oninput = function() {
//     count.innerHTML = maxLength - this.value.length
//     count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero")
//     // Set The Progress
//     progress.style.width = `${(this.value.length * 100) / maxLength}%`
// ----------------------------------------------------------------------

// ------------------------------Countdown Timer-------------------------

// let countDownDate = new Date("Jan 10, 2024 23:59:59").getTime()
// let counter = setInterval(() => {
//     // Get Date Now
//     let dateNow = new Date().getTime()
//     // Get The Difference Between Now And Countdown Date
//     let dateDiff = countDownDate - dateNow;
//     // Get Time Units
//     let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
//     let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) /( 1000 * 60 * 60));
//     let minutes = Math.floor(dateDiff % (1000 * 60 * 60) /( 1000 * 60));
//     let seconds = Math.floor(dateDiff % (1000 * 60) /( 1000));
//     document.querySelector(".days").innerHTML = days
//     document.querySelector(".hours").innerHTML = hours
//     document.querySelector(".minutes").innerHTML = minutes
//     document.querySelector(".seconds").innerHTML = seconds

//     if(dateDiff == 0) {
//         clearInterval(counter)
//     }
// }, 1000);
// --------------------------------------------------------------
// --------------------------Image Slider----------------------------

// Get Slider Items
let sliderImages = Array.from(
    document.querySelectorAll(".slider-container img")
);
// Get Number Of Slides
let slidesCount = sliderImages.length;
// Set Current Slider
let currentSlide = 1;
// Slider Number Element
let slideNumberElement = document.getElementById("slide-number");
// Pervious And Next Buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
// Handle Click On Previous And Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
// Create The Main UL Element
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");
// Create List Items Based On Slides Count
for (let i = 1; i <= slidesCount; i++) {
    // Creat Li
    let paginationItem = document.createElement("li");
    // Set Custom Attribute
    paginationItem.setAttribute("data-index", i);
    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));
    // Append Items To The Main Ul
    paginationElement.appendChild(paginationItem);
}
// Add The Created Ul Element To The Page
document.getElementById("indicators").appendChild(paginationElement);
// Get The New Created Ul
let paginationCreatedUl = document.getElementById("pagination-ul");
// Get Pagination Items
let paginationBullets = Array.from(
    document.querySelectorAll("#pagination-ul li")
);
// Loop Through All Bullets Items
for(let i =0; i < paginationBullets.length; i++){
    paginationBullets[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    }
}
// Trigger The Checker Funcion
theChecker();

// Next Slide Function
function nextSlide() {
    if(nextButton.classList.contains("disabled")){
        return false;
    }else {
        currentSlide++;
        theChecker();
    }
}

// Previous Slide Function
function prevSlide() {
    if(prevButton.classList.contains("disabled")){
        return false;
    }else {
        currentSlide--;
        theChecker();
    }
}

// Create The Checker Function
function theChecker() {
    // Set The Slide Number
    slideNumberElement.textContent = `Slide # ${currentSlide} of ${slidesCount}`;
    // Remove All Active Classes
    removeAllActive();
    // Set Active Class On Current Slider
    sliderImages[currentSlide - 1].classList.add("active");
    // Set Active Class On Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");
    // Check If The Current Slide Is The First
    if (currentSlide == 1) {
        // Add Disabled Class On Prev Button
        prevButton.classList.add("disabled");
    } else {
        // Add Disabled Class On Prev Button
        prevButton.classList.remove("disabled");
    }

    // Check If The Current Slide Is The Last
    if (currentSlide == slidesCount) {
        // Add Disabled Class On Next Button
        nextButton.classList.add("disabled");
    } else {
        // Add Disabled Class On Next Button
        nextButton.classList.remove("disabled");
    }
}

// Remove All Active Classes From Images And Bullets
function removeAllActive() {
    // Loop Through Images
    sliderImages.forEach((img) => {
        img.classList.remove("active");
    });
    // Loop Through Pagination Bullets
    paginationBullets.forEach((bullet) => {
        bullet.classList.remove("active");
    });
}

