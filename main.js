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

// // Get Slider Items
// let sliderImages = Array.from(
//     document.querySelectorAll(".slider-container img")
// );
// // Get Number Of Slides
// let slidesCount = sliderImages.length;
// // Set Current Slider
// let currentSlide = 1;
// // Slider Number Element
// let slideNumberElement = document.getElementById("slide-number");
// // Pervious And Next Buttons
// let nextButton = document.getElementById("next");
// let prevButton = document.getElementById("prev");
// // Handle Click On Previous And Next Buttons
// nextButton.onclick = nextSlide;
// prevButton.onclick = prevSlide;
// // Create The Main UL Element
// let paginationElement = document.createElement("ul");
// paginationElement.setAttribute("id", "pagination-ul");
// // Create List Items Based On Slides Count
// for (let i = 1; i <= slidesCount; i++) {
//     // Creat Li
//     let paginationItem = document.createElement("li");
//     // Set Custom Attribute
//     paginationItem.setAttribute("data-index", i);
//     // Set Item Content
//     paginationItem.appendChild(document.createTextNode(i));
//     // Append Items To The Main Ul
//     paginationElement.appendChild(paginationItem);
// }
// // Add The Created Ul Element To The Page
// document.getElementById("indicators").appendChild(paginationElement);
// // Get The New Created Ul
// let paginationCreatedUl = document.getElementById("pagination-ul");
// // Get Pagination Items
// let paginationBullets = Array.from(
//     document.querySelectorAll("#pagination-ul li")
// );
// // Loop Through All Bullets Items
// for(let i =0; i < paginationBullets.length; i++){
//     paginationBullets[i].onclick = function() {
//         currentSlide = parseInt(this.getAttribute("data-index"));
//         theChecker();
//     }
// }
// // Trigger The Checker Funcion
// theChecker();

// // Next Slide Function
// function nextSlide() {
//     if(nextButton.classList.contains("disabled")){
//         return false;
//     }else {
//         currentSlide++;
//         theChecker();
//     }
// }

// // Previous Slide Function
// function prevSlide() {
//     if(prevButton.classList.contains("disabled")){
//         return false;
//     }else {
//         currentSlide--;
//         theChecker();
//     }
// }

// // Create The Checker Function
// function theChecker() {
//     // Set The Slide Number
//     slideNumberElement.textContent = `Slide # ${currentSlide} of ${slidesCount}`;
//     // Remove All Active Classes
//     removeAllActive();
//     // Set Active Class On Current Slider
//     sliderImages[currentSlide - 1].classList.add("active");
//     // Set Active Class On Current Pagination Item
//     paginationCreatedUl.children[currentSlide - 1].classList.add("active");
//     // Check If The Current Slide Is The First
//     if (currentSlide == 1) {
//         // Add Disabled Class On Prev Button
//         prevButton.classList.add("disabled");
//     } else {
//         // Add Disabled Class On Prev Button
//         prevButton.classList.remove("disabled");
//     }

//     // Check If The Current Slide Is The Last
//     if (currentSlide == slidesCount) {
//         // Add Disabled Class On Next Button
//         nextButton.classList.add("disabled");
//     } else {
//         // Add Disabled Class On Next Button
//         nextButton.classList.remove("disabled");
//     }
// }

// // Remove All Active Classes From Images And Bullets
// function removeAllActive() {
//     // Loop Through Images
//     sliderImages.forEach((img) => {
//         img.classList.remove("active");
//     });
//     // Loop Through Pagination Bullets
//     paginationBullets.forEach((bullet) => {
//         bullet.classList.remove("active");
//     });
// }
// -----------------------------------------------------------
// -----------------------Works Filter-------------------------
// let switcherLis = document.querySelectorAll(".switcher li");
// let imgs = Array.from(document.images);
// switcherLis.forEach((li) => {
//     li.addEventListener("click", removeActive)
//     li.addEventListener("click", manageImgs)
// })

// // Remove Active Class From All Lis And Add To The Current
// function removeActive() {
//     switcherLis.forEach((li) => {
//         li.classList.remove("active");
//         this.classList.add("active")
//     })
// };

// // Manage Imgs
// function manageImgs() {
//     imgs.forEach((img) => {
//         img.style.display = "none"
//     })
//     document.querySelectorAll(this.dataset.cat).forEach((img) => {
//         img.style.display = "inline-block"
//     })
// }
// -----------------------------------------------------
// -----------------------Quiz App-------------------------
// Select Elements
// let countSpan = document.querySelector(".quiz-info .count span");
// let bulletsSpanContainer = document.querySelector(".bullets .spans");
// let quizArea = document.querySelector(".quiz-area");
// let answersArea = document.querySelector(".answers-area");
// let submitButton = document.querySelector(".submit-button");
// let bullets = document.querySelector(".bullets");
// let resultsContainer = document.querySelector(".results");
// let countdownElement = document.querySelector(".countdown");
// // Set Options
// let currentIndex = 0;
// let rightAnswers = 0;
// let countdownInterval;

// function getQuestions() {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             let questionObject = JSON.parse(this.responseText);
//             let qCount = questionObject.length;
//             // Create Bullets And Set Questions Count
//             createBullets(qCount);
//             // Add Questions Data
//             addQuestionData(questionObject[currentIndex], qCount);
//             // Start Countdown
//             countdown(5, qCount);
//             // Click On Submit
//             submitButton.onclick = function () {
//                 // Get Right Answer
//                 let theRightAnswer = questionObject[currentIndex].right_answer;
//                 // Increase Index
//                 currentIndex++;
//                 // Check The Answer
//                 checkAnswer(theRightAnswer, qCount);
//                 // Remove Previous Question
//                 quizArea.innerHTML = "";
//                 answersArea.innerHTML = "";
//                 addQuestionData(questionObject[currentIndex], qCount);
//                 // Handle Bullets Class
//                 handleBullets();
//                 // Start Countdown
//                 clearInterval(countdownInterval);
//                 countdown(5, qCount);
//                 // Show Results
//                 showResults(qCount);
//             };
//         }
//     };
//     myRequest.open("GET", "html_questions.json");
//     myRequest.send();
// }
// getQuestions();

// function createBullets(num) {
//     countSpan.innerHTML = num;
//     for (let i = 0; i < num; i++) {
//         let theBullet = document.createElement("span");
//         if (i === 0) {
//             theBullet.className = "on";
//         }
//         bulletsSpanContainer.appendChild(theBullet);
//     }
// }

// function addQuestionData(obj, count) {
//     if (currentIndex < count) {
//         // Create h2 Question Title
//         let questionTitle = document.createElement("h2");
//         // Create Question Text
//         let questionText = document.createTextNode(obj.title);
//         questionTitle.appendChild(questionText);
//         quizArea.appendChild(questionTitle);
//         // Create The Answers
//         for (let i = 1; i <= 4; i++) {
//             // Create Main Answer Div
//             let mainDiv = document.createElement("div");
//             mainDiv.className = "answer";
//             // Create Radio Input
//             let radioInput = document.createElement("input");
//             radioInput.name = "question";
//             radioInput.type = "radio";
//             radioInput.id = `answer_${i}`;
//             radioInput.dataset.answer = obj[`answer_${i}`];
//             // Make First Option Selected
//             if (i === 1) {
//                 radioInput.checked = true;
//             }
//             // Create Label
//             let theLabel = document.createElement("label");
//             theLabel.htmlFor = `answer_${i}`;
//             let theLabelText = document.createTextNode(obj[`answer_${i}`]);
//             theLabel.appendChild(theLabelText);
//             mainDiv.appendChild(radioInput);
//             mainDiv.appendChild(theLabel);
//             answersArea.appendChild(mainDiv);
//         }
//     }
// }

// function checkAnswer(rAnswer, count) {
//     let answers = document.getElementsByName("question");
//     let theChoosenAnswer;
//     for (let i = 0; i < answers.length; i++) {
//         if (answers[i].checked) {
//             theChoosenAnswer = answers[i].dataset.answer;
//         }
//     }
//     if (rAnswer === theChoosenAnswer) {
//         rightAnswers++;
//     }
// }

// function handleBullets() {
//     let bulletsSpans = document.querySelectorAll(".bullets .spans span");
//     let arrayOfSpans = Array.from(bulletsSpans);
//     arrayOfSpans.forEach((span, index) => {
//         if (currentIndex === index) {
//             span.className = "on";
//         }
//     });
// }

// function showResults(count) {
//     let theResults;
//     if (currentIndex === count) {
//         quizArea.remove();
//         answersArea.remove();
//         submitButton.remove();
//         bullets.remove();

//         if (rightAnswers > count / 2 && rightAnswers < count) {
//             theResults = `<span class="good">Good</span> ${rightAnswers} From ${count} Are Right`;
//         } else if (rightAnswers === count) {
//             theResults = `<span class="perfect">Perfect</span> All Answers are Right`;
//         } else {
//             theResults = `<span class="bad">Failed</span> ${rightAnswers} From ${count} Are Right`;
//         }
//         resultsContainer.innerHTML = theResults;
//         resultsContainer.innerHTML = theResults;
//         resultsContainer.style.padding = "10px";
//         resultsContainer.style.backgroundColor = "white";
//         resultsContainer.style.marginTop = "10px";
//     }
// }

// function countdown(duration, count) {
//     if (currentIndex < count) {
//         let minutes, seconds;
//         countdownInterval = setInterval(() => {
//             minutes = parseInt(duration / 60);
//             seconds = parseInt(duration % 60);
//             minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
//             seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
//             countdownElement.innerHTML = `${minutes} : ${seconds}`;
//             if (--duration < 0) {
//                 clearInterval(countdownInterval);
//                 submitButton.click();
//             }
//         }, 1000);
//     }
// }
// ------------------------------------------------------
// -----------------------------Create Tabs-------------------------------
// let tabs = document.querySelectorAll(".tabs li");
// tabsArray = Array.from(tabs);
// let divs = document.querySelectorAll(".content > div");
// let tabsDiv = Array.from(divs);

// tabsArray.forEach((ele) => {
//     ele.addEventListener("click", function (e) {
//         tabsArray.forEach((ele) => {
//             ele.classList.remove("active");
//         });
//         e.currentTarget.classList.add("active");
//         tabsDiv.forEach((ele) => {
//             ele.style.display = "none";
//         });
//         document.querySelector(e.currentTarget.dataset.cont).style.display =
//             "block";
//     });
// });
// ---------------------------------------------------------
// ----------------------------Typing Speed------------------------------

// Array Of Words
// const words = [
//     "Hello",
//     "Programming",
//     "Code",
//     "Javascript",
//     "Town",
//     "Country",
//     "Testing",
//     "Youtube",
//     "Linkedin",
//     "Twitter",
//     "Github",
//     "Leetcode",
//     "Internet",
//     "Python",
//     "Scala",
//     "Destructuring",
//     "Paradigm",
//     "Styling",
//     "Cascade",
//     "Documentation",
//     "Coding",
//     "Funny",
//     "Working",
//     "Dependencies",
//     "Task",
//     "Runner",
//     "Roles",
//     "Test",
//     "Rust",
//     "Playing",
// ];

// // Setting Levels
// const lvls = {
//     Easy: 5,
//     Normal: 3,
//     Hard: 2,
// };
// // Default Level
// let defaultLevelName = "Easy"; //Change Level From Here
// let defaultLevelSeconds = lvls[defaultLevelName];
// // Catch Selectors
// let startButton = document.querySelector(".start");
// let lvlNameSpan = document.querySelector(".message .lvl");
// let secondsSpan = document.querySelector(".message .seconds");
// let theWord = document.querySelector(".the-word");
// let upcomingWords = document.querySelector(".upcoming-words");
// let input = document.querySelector(".input");
// let timeLeftSpan = document.querySelector(".time span");
// let scoreGot = document.querySelector(".score .got");
// let scoreTotal = document.querySelector(".score .total");
// let finishMessage = document.querySelector(".finish");

// // Setting Level Name + Seconds + Score
// lvlNameSpan.innerHTML = defaultLevelName;
// secondsSpan.innerHTML = defaultLevelSeconds;
// timeLeftSpan.innerHTML = defaultLevelSeconds;
// scoreTotal.innerHTML = words.length;

// // Disable Paste Event
// input.onpaste = function () {
//     return false;
// };
// // Start Game
// startButton.onclick = function () {
//     this.remove();
//     input.focus();
//     // Generate Word Function
//     genWords();
// };

// function genWords() {
//     // Get Random Word From Array
//     let randomWord = words[Math.floor(Math.random() * words.length)];
//     // Get Word Index
//     let wordIndex = words.indexOf(randomWord);
//     // Remove Word From Array
//     words.splice(wordIndex, 1);
//     // Show The Random Word
//     theWord.innerHTML = randomWord;
//     // Empty Upcoming Words
//     upcomingWords.innerHTML = "";
//     // Generate Upcoming Words
//     for (let i = 0; i < words.length; i++) {
//         let div = document.createElement("div");
//         let txt = document.createTextNode(words[i]);
//         div.appendChild(txt);
//         upcomingWords.appendChild(div);
//     }
//     // Call Start Play Function
//     startPlay();
// }

// function startPlay() {
//     timeLeftSpan.innerHTML = defaultLevelSeconds;
//     let start = setInterval(() => {
//         timeLeftSpan.innerHTML--;
//         if (timeLeftSpan.innerHTML === "0") {
//             clearInterval(start);
//             // Compare Words
//             if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
//                 // Empty Input Field
//                 input.value = "";
//                 // Increase Score
//                 scoreGot.innerHTML++;
//                 if (words.length > 0) {
//                     genWords();
//                 } else {
//                     let span = document.createElement("span");
//                     span.className = "good";
//                     let spanText = document.createTextNode("Congratultions");
//                     span.appendChild(spanText);
//                     finishMessage.appendChild(span);
//                     // Remove Upcoming Words Box
//                     upcomingWords.remove();
//                 }
//             } else {
//                 let span = document.createElement("span");
//                 span.className = "bad";
//                 let spanText = document.createTextNode("Game Over");
//                 span.appendChild(spanText);
//                 finishMessage.appendChild(span);
//             }
//         }
//     }, 1000);
// }
// ----------------------------------------------
// ------------------------Github Repos--------------------------
// let theInput = document.querySelector(".get-repos input");
// let getButton = document.querySelector(".get-button");
// let reposData = document.querySelector(".show-data");

// getButton.onclick = function () {
//     getRepos();
// };

// // Get Repos Function
// function getRepos() {
//     if (theInput.value == "") {
//         reposData.innerHTML = `<span>Please Write Github Username</span>`;
//     } else {
//         fetch(`https://api.github.com/users/${theInput.value}/repos`)
//             .then((res) => res.json())
//             .then((repos) => {
//                 // Empty The Container
//                 reposData.innerHTML = "";
//                 // Loop On Repos
//                 repos.forEach((repo) => {
//                     // Create Main Div
//                     let mainDiv = document.createElement("div");
//                     let mainSpan = document.createElement("span");
//                     let repoName = document.createTextNode(repo.name);
//                     mainSpan.appendChild(repoName);
//                     mainDiv.appendChild(mainSpan);
//                     // Create Repo Url
//                     let theUrl = document.createElement("a");
//                     let theUrlText = document.createTextNode("Visit");
//                     theUrl.appendChild(theUrlText);
//                     theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
//                     theUrl.setAttribute("target", "_blank");
//                     mainDiv.appendChild(theUrl);
//                     // Create Stars Count Span
//                     let starsSpan = document.createElement("span");
//                     let starsText = document.createTextNode(
//                         `Stars ${repo.stargazers_count}`
//                     );
//                     starsSpan.appendChild(starsText);
//                     mainDiv.appendChild(starsSpan);
//                     mainDiv.classList.add("repo-box");

//                     reposData.appendChild(mainDiv);
//                 });
//             })
//             .catch(() => {
//                 reposData.innerHTML = `<span>Please Write A Valid Github Username</span>`;
//             });
//     }
// }

// -----------------------------------------------------
// ----------------------Navigation---------------------
// let toggler = document.querySelector(".toggle");
// let nav = document.querySelector("nav");
// let close = document.querySelector(".close");
// toggler.onclick = function () {
//     nav.classList.add("open");
// };

// close.onclick = function () {
//     this.parentElement.classList.remove("open");
// };

// document.onkeyup = (e) => {
//     if (e.key === "Escape") {
//         nav.classList.remove("open");
//     }
// };
// --------------------------------------------
// ----------------Random Serial---------------------
// let btnEl = document.querySelector(".generate");
// let serialEl = document.querySelector(".serial");
// btnEl.onclick = () => {
//     let characters =
//         "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
//     let charsCount = 10;
//     let randomSerial = "";
//     for (let i = 0; i < charsCount; i++) {
//         randomSerial +=
//             characters[Math.floor(Math.random() * characters.length)];
//     }
//     serialEl.innerHTML = randomSerial;
// };
// -----------------------------------
// -------------------Currency Api--------------------
// fetch(
//     "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=c648367bd5884f219cc165fc848bcf17"
// )
//     .then((res) => {
//         let myData = res.json();
//         return myData;
//     })
//     .then((currency) => {
//         let amount = document.querySelector(".amount");
//         let egpPrice = document.querySelector(".egp span");
//         let sarPrice = document.querySelector(".sar span");
//         egpPrice.innerHTML = Math.round(amount.innerHTML * currency.rates.EGP);
//         sarPrice.innerHTML = Math.round(amount.innerHTML * currency.rates.SAR);
//     });
// ---------------------------------------------
// -------------------Increase Number--------------------
// let nums = document.querySelectorAll(".nums .num");
// let section = document.querySelector(".three");
// let started = false;
// window.onscroll = function () {
//     if (window.scrollY >= section.offsetTop) {
//         if (started === false) {
//             nums.forEach((num) => startCount(num));
//         }
//         started = true;
//     }
// };
// function startCount(el) {
//         let goal = el.dataset.goal;
//         let count = setInterval(() => {
//             el.textContent++;
//             if (el.textContent == goal) {
//                 clearInterval(count);
//             }
//         }, 2000 / goal);
//     }
// ------------------------------------------
