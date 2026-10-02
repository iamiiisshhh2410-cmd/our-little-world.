document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // PASSWORD PAGE
    // =========================================

    const passwordPage = document.getElementById("passwordPage");
    const passwordInput = document.getElementById("lovePassword");
    const unlockButton = document.getElementById("unlockButton");
    const passwordError = document.getElementById("passwordError");


    function unlockSurprise() {

        if (passwordInput.value === "1907") {

            passwordError.textContent = "okayyy, you can come in now ♡";

            passwordPage.style.transform = "translateX(-100%)";
            passwordPage.style.opacity = "0";

            setTimeout(function () {
                passwordPage.style.display = "none";
            }, 900);

        } else {

            passwordError.textContent = "nooo chotu 😭 try again ♡";

            passwordInput.value = "";
            passwordInput.focus();

        }
    }


    unlockButton.addEventListener("click", unlockSurprise);


    passwordInput.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {
            unlockSurprise();
        }

    });


    // =========================================
    // GET ALL PAGES
    // =========================================

    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");
    const page4 = document.getElementById("page4");
    const page5 = document.getElementById("page5");
    const page6 = document.getElementById("page6");
    const page7 = document.getElementById("page7");
    const page8 = document.getElementById("page8");
    const page9 = document.getElementById("page9");


    // =========================================
    // PAGE 1 → PAGE 2
    // =========================================

    page1.addEventListener("click", function () {

        page1.style.transform = "translateX(-100%)";
        page2.style.transform = "translateX(0)";

    });


    // =========================================
    // PAGE 2 → PAGE 3
    // =========================================

    window.openBouquet = function (number) {

        page2.style.transform = "translateX(-100%)";
        page3.style.transform = "translateX(0)";

    };


    // =========================================
    // PAGE 3 → PAGE 4
    // =========================================

    page3.addEventListener("click", function () {

        page3.style.transform = "translateX(-100%)";
        page4.style.transform = "translateX(0)";

    });


    // =========================================
    // PAGE 4 → PAGE 5
    // =========================================

    page4.addEventListener("click", function () {

        page4.style.transform = "translateX(-100%)";
        page5.style.transform = "translateX(0)";

    });


    // =========================================
    // PAGE 5 → PAGE 6
    // =========================================

    page5.addEventListener("click", function () {

        page5.style.transform = "translateX(-100%)";
        page6.style.transform = "translateX(0)";

    });


    // =========================================
    // PAGE 6 - MY FAV PICS OF U
    // =========================================

    const favSlides = document.querySelectorAll("#page6 .fav-slide");

    let currentFavSlide = 0;


    favSlides.forEach(function (slide, index) {

        const photoCard = slide.querySelector(".fav-photo-card");


        photoCard.addEventListener("click", function (e) {

            e.stopPropagation();


            // PHOTO 6 → PAGE 7

            if (index === favSlides.length - 1) {

                page6.style.transform = "translateX(-100%)";
                page7.style.transform = "translateX(0)";

                return;
            }


            // HIDE CURRENT PHOTO

            favSlides[currentFavSlide].classList.remove("active");


            // NEXT PHOTO

            currentFavSlide++;


            // SHOW NEXT PHOTO

            favSlides[currentFavSlide].classList.add("active");

        });

    });


    // =========================================
    // PAGE 7 → PAGE 8
    // =========================================

    page7.addEventListener("click", function () {

        page7.style.transform = "translateX(-100%)";
        page8.style.transform = "translateX(0)";

    });


    // =========================================
    // PAGE 8 - HOW WELL DO U KNOW US?
    // =========================================

    const quizIntro = document.getElementById("quizIntro");
    const quizStartBtn = document.getElementById("quizStartBtn");

    const quizBox = document.getElementById("quizBox");
    const quizProgress = document.getElementById("quizProgress");
    const quizQuestion = document.getElementById("quizQuestion");
    const quizOptions = document.getElementById("quizOptions");
    const quizReaction = document.getElementById("quizReaction");
    const quizNextBtn = document.getElementById("quizNextBtn");

    const quizResult = document.getElementById("quizResult");
    const resultScore = document.getElementById("resultScore");
    const resultTitle = document.getElementById("resultTitle");
    const resultMessage = document.getElementById("resultMessage");


    // =========================================
    // PAGE 8 / PAGE 9 BUTTONS
    // =========================================

    const openLettersBtn = document.getElementById("openLettersBtn");
    const finalScoreBtn = document.getElementById("finalScoreBtn");
    const screenshotMessage = document.getElementById("screenshotMessage");


    // =========================================
    // YOUR PERSONAL QUESTIONS ❤️
    // =========================================

    const questions = [

        {
            question: "Okayyy first one 👀... on the first night we met, what did you tell me your friend took you to? 😭😂",

            options: [
                "A club",
                "A house party",
                "A dance bar",
                "A concert"
            ],

            answer: 2,

            correctReaction:
                "CORRECTTT 😭😂 I obviously remember THAT storyyy",

            wrongReaction:
                "CHIKNEEEE 😭💀 how can you forget what you told me that night??"
        },


        {
            question: "What are my favourite flowers? 🌻❤️",

            options: [
                "Roses 🌹",
                "Sunflowers 🌻",
                "Tulips 🌷",
                "Lilies 🤍"
            ],

            answer: 1,

            correctReaction:
                "YASSSS 🌻🥹❤️ sunflowers foreverrrr",

            wrongReaction:
                "EXCUSE MEEE??? 😭🌻 SUNFLOWERSSSS chikneee"
        },


        {
            question: "What's my dream destination to go to WITH YOU? 🥹✈️❤️",

            options: [
                "Switzerland 🇨🇭",
                "Bali 🌴",
                "Paris 🇫🇷",
                "Greece 🇬🇷"
            ],

            answer: 3,

            correctReaction:
                "GREECEEEE WITH YOUUU 😭🇬🇷❤️ one dayyyy",

            wrongReaction:
                "NOOO 😭😭 Greece with YOUUU chikneee 🇬🇷❤️"
        },


        {
            question: "How did we talk for the VERY first time? 🥹❤️",

            options: [
                "On text 💬",
                "On a call 📞",
                "Video call 👀",
                "In person"
            ],

            answer: 1,

            correctReaction:
                "YESSSS 😭📞❤️ our first calllll",

            wrongReaction:
                "BABYYYY 😭 it was a CALLLL 📞❤️"
        },


        {
            question: "Andddd how long was our first call? 👀📞❤️",

            options: [
                "Around 30 mins",
                "Around 1 hour",
                "Almost 2 HOURS",
                "Almost 4 hours"
            ],

            answer: 2,

            correctReaction:
                "ALMOST 2 HOURSSS 😭❤️ and look at us nowww",

            wrongReaction:
                "2 HOURS CHIKNEEEE 😭😭 how do you not remember???"
        },


        {
            question: "What do I miss the MOST because of this stupid long distance? 🥹🫂",

            options: [
                "Holding your hand",
                "Your hugggggs",
                "Just being around you",
                "Literally ALL OF IT 😭❤️"
            ],

            answer: 3,

            correctReaction:
                "EXACTLYYY 😭🫂❤️ literally everythingggg",

            wrongReaction:
                "ALL OF ITTTT 😭❤️ I miss everything about being with youuu"
        },


        {
            question: "FINAL QUESTION 😌❤️... are you stuck with me forever?",

            options: [
                "YESSSSS ❤️",
                "Obviously 😭❤️",
                "Unfortunately yes 😂",
                "All of the above 😭❤️"
            ],

            answer: 3,

            correctReaction:
                "CORRECT ANSWER 😌😂❤️ no escaping nowww",

            wrongReaction:
                "WRONGGG 😭😂 you're stuck with me foreverrrr"
        }

    ];


    // =========================================
    // QUIZ VARIABLES
    // =========================================

    let currentQuestion = 0;
    let score = 0;
    let answered = false;


    // =========================================
    // START QUIZ
    // =========================================

    quizStartBtn.addEventListener("click", function (e) {

        e.stopPropagation();

        quizIntro.style.display = "none";
        quizBox.style.display = "block";

        showQuestion();

    });


    // =========================================
    // SHOW QUESTION
    // =========================================

    function showQuestion() {

        answered = false;

        quizNextBtn.style.display = "none";
        quizReaction.textContent = "";

        const q = questions[currentQuestion];


        quizProgress.textContent =
            "QUESTION " +
            (currentQuestion + 1) +
            " / " +
            questions.length;


        quizQuestion.textContent = q.question;

        quizOptions.innerHTML = "";


        q.options.forEach(function (option, index) {

            const button = document.createElement("button");

            button.classList.add("quiz-option");

            button.textContent = option;


            button.addEventListener("click", function (e) {

                e.stopPropagation();

                checkAnswer(index, button);

            });


            quizOptions.appendChild(button);

        });

    }


    // =========================================
    // CHECK ANSWER
    // =========================================

    function checkAnswer(selectedIndex, selectedButton) {

        if (answered) {
            return;
        }


        answered = true;


        const q = questions[currentQuestion];

        const buttons =
            document.querySelectorAll("#quizOptions .quiz-option");


        // CORRECT ANSWER

        if (selectedIndex === q.answer) {

            selectedButton.classList.add("correct");

            quizReaction.textContent =
                q.correctReaction;

            score++;

        }


        // WRONG ANSWER

        else {

            selectedButton.classList.add("wrong");

            buttons[q.answer].classList.add("correct");

            quizReaction.textContent =
                q.wrongReaction;

        }


        // DISABLE OPTIONS

        buttons.forEach(function (button) {

            button.disabled = true;

        });


        quizNextBtn.style.display = "block";

    }


    // =========================================
    // NEXT QUESTION
    // =========================================

    quizNextBtn.addEventListener("click", function (e) {

        e.stopPropagation();


        currentQuestion++;


        if (currentQuestion < questions.length) {

            showQuestion();

        }

        else {

            showResult();

        }

    });


    // =========================================
    // FINAL RESULT
    // =========================================

    function showResult() {

        quizBox.style.display = "none";
        quizResult.style.display = "block";


        resultScore.textContent =
            score + " / " + questions.length;


        // PERFECT SCORE

        if (score === questions.length) {

            resultTitle.textContent =
                "DAMNNN CUTTUUU 😭❤️";

            resultMessage.textContent =
                "okay fineeee... you REALLY do know us 🥹❤️ boyfriend privileges officially retained 😂";

        }


        // GOOD SCORE

        else if (score >= 5) {

            resultTitle.textContent =
                "OKAYYY NOT BAD 😭❤️";

            resultMessage.textContent =
                "I'll accept this performance 😌😂 butttt we definitely need some revision sessions together ❤️";

        }


        // LOW SCORE

        else {

            resultTitle.textContent =
                "CHIKNEEEE??? 🤨😭";

            resultMessage.textContent =
                "questionable performance fr 😭💀 but you're cute so I'll let it slide... for now 😂❤️";

        }

    }


    // =========================================
    // PAGE 8 → PAGE 9
    // =========================================

    if (openLettersBtn) {

        openLettersBtn.addEventListener("click", function (e) {

            e.stopPropagation();

            page8.style.transform = "translateX(-100%)";
            page9.style.transform = "translateX(0)";

            // START PAGE 9 FROM TOP
            page9.scrollTop = 0;

        });

    }


    // =========================================
    // PAGE 9 - OPEN WHEN LETTERS
    // =========================================

    const envelopes =
        document.querySelectorAll("#page9 .envelope");

    const letterPopup =
        document.getElementById("letterPopup");

    const closeLetter =
        document.getElementById("closeLetter");

    const letterTitle =
        document.getElementById("letterTitle");

    const letterMessage =
        document.getElementById("letterMessage");


    // =========================================
    // LETTER MESSAGES 💌
    // =========================================

    const letters = {

        miss: {

            title: "you miss me 🥹",

            message: `
                <p>
                    Hiiiii cuttuuuuu 🥹❤️ I knowww you miss me.
                    And trust me, I'm probably somewhere missing you
                    just as much... or more because obviously I'm the
                    clingier one 😭😂.
                </p>

                <p>
                    I know this long distance thing is sooo annoying sometimes.
                    I wish I could just teleport to you, give you the tightest
                    hug ever and sit next to you doing absolutely nothing.
                </p>

                <p>
                    So until I can actually do that, imagine me squeezing
                    you in one BIGGG hugggg 🫂❤️. Thoda aur wait kar baby...
                    we'll get our hug soon.
                </p>

                <p>
                    I miss youuuuu too. Always. ❤️
                </p>
            `
        },


        bad: {

            title: "you're having a bad day 🌧️",

            message: `
                <p>
                    Heyyy my loveee 🥹❤️ if you're reading this because
                    today was shitty, then first of all... come hereee 🫂.
                </p>

                <p>
                    You don't always have to have everything figured out.
                    Some days are just bad days and that's okay.
                    Please don't be too hard on yourself, chikneee.
                </p>

                <p>
                    I wish I was there so I could listen to all your
                    complaints, annoy you until you smile and then force
                    you into a hug 😭❤️.
                </p>

                <p>
                    Whatever happened today, tomorrow is another day.
                    And no matter what, you've still got me beside you.
                    Alwayssss. ❤️
                </p>
            `
        },


        fight: {

            title: "we had a kalesh 😭",

            message: `
                <p>
                    Okayyyy so clearly something happened 😭😂.
                    Maybe I'm mad at you, maybe you're mad at me,
                    maybe BOTH of us are being idiots right now.
                </p>

                <p>
                    But listen... no matter how much we fight or irritate
                    each other, I never want you to doubt how much
                    I love you.
                </p>

                <p>
                    Thoda kalesh toh humara compulsory hai apparently 💀,
                    but at the end of it I still want YOU.
                    Not some perfect version of us. Just us.
                </p>

                <p>
                    So come here, stop being annoying and let's fix it 😭❤️.
                    And yes maybe I'll still argue a little bit first
                    because obviously 😂.
                </p>
            `
        },


        sleep: {

            title: "you can't sleep 🌙",

            message: `
                <p>
                    Hiiii sleepy baby 🌙❤️ why are you still awakeeee?
                </p>

                <p>
                    Put the phone down after reading this, close your eyes
                    and imagine I'm right next to you.
                    No long distance, no screen, nothing.
                </p>

                <p>
                    Just me annoying you for five minutes and then
                    cuddling into you like I belong there 😭🫂.
                </p>

                <p>
                    Stop thinking about everything for tonight.
                    Kal dekhenge baaki sab.
                    Right now just rest, chikneee.
                </p>

                <p>
                    Goodnightttt my loveee. I love you sooo much. ❤️
                </p>
            `
        },


        reassurance: {

            title: "you need reassurance 🫂",

            message: `
                <p>
                    Baby, if your brain is being stupid and making you
                    overthink us right now... stoppp 😭❤️.
                </p>

                <p>
                    I choose you. Even when we're far away.
                    Even when we're irritated with each other.
                    Even when things aren't perfect.
                </p>

                <p>
                    You mean sooo much more to me than I probably manage
                    to say properly. You're such a huge part of my life now,
                    and I genuinely want you there for everything that's
                    still to come.
                </p>

                <p>
                    So no overthinking okayyy?
                    Tujhi kaleshi bayko isn't going anywhere 😌❤️.
                </p>
            `
        },


        love: {

            title: "you forget how much I love you ❤️",

            message: `
                <p>
                    EXCUSE MEEE??? You needed a reminder??? 😭❤️
                </p>

                <p>
                    I LOVEEEE YOUUUU cuttuuuuu.
                    Like stupid amounts. Annoying amounts.
                    Clingy amounts 😂❤️.
                </p>

                <p>
                    I love your voice, your hugs, your smile,
                    holding your hand, our stupid conversations,
                    our random calls, our kalesh and even all the
                    tiny boring moments in between.
                </p>

                <p>
                    And out of literally everyone,
                    somehow YOU became my person. 🥹❤️
                </p>

                <p>
                    So if you ever forget again, come back here and
                    read this as many times as you need.
                    I love youuuuuu my chikneeee. Alwayssss. 🫂❤️
                </p>
            `
        }

    };


    // =========================================
    // OPEN LETTER
    // =========================================

    envelopes.forEach(function (envelope) {

        envelope.addEventListener("click", function (e) {

            e.stopPropagation();


            const letterName =
                envelope.getAttribute("data-letter");


            const selectedLetter =
                letters[letterName];


            if (!selectedLetter) {
                return;
            }


            letterTitle.textContent =
                selectedLetter.title;


            letterMessage.innerHTML =
                selectedLetter.message;


            letterPopup.style.display = "flex";

        });

    });


    // =========================================
    // CLOSE LETTER
    // =========================================

    if (closeLetter) {

        closeLetter.addEventListener("click", function (e) {

            e.stopPropagation();

            letterPopup.style.display = "none";

        });

    }


    // =========================================
    // CLICK OUTSIDE LETTER TO CLOSE
    // =========================================

    if (letterPopup) {

        letterPopup.addEventListener("click", function (e) {

            if (e.target === letterPopup) {

                letterPopup.style.display = "none";

            }

        });

    }


    // =========================================
    // PAGE 9 → FINAL SCORE SCREEN 📸
    // =========================================

    if (finalScoreBtn) {

        finalScoreBtn.addEventListener("click", function (e) {

            e.stopPropagation();


            // CLOSE LETTER POPUP JUST IN CASE
            if (letterPopup) {
                letterPopup.style.display = "none";
            }


            // MOVE PAGE 9 BACK OFF SCREEN
            page9.style.transform = "translateX(100%)";


            // BRING PAGE 8 BACK
            page8.style.transform = "translateX(0)";


            // SHOW ONLY HIS SCORE CARD
            quizIntro.style.display = "none";
            quizBox.style.display = "none";
            quizResult.style.display = "block";


            // HIDE "I MADE SOMETHING ELSE..." BUTTON
            // SO THERE IS NO LOOP
            if (openLettersBtn) {
                openLettersBtn.style.display = "none";
            }


            // SHOW SCREENSHOT MESSAGE
            if (screenshotMessage) {
                screenshotMessage.style.display = "block";
            }


            // SCORE IS NOT RESET,
            // SO HIS REAL SCORE STAYS THE SAME ❤️

            page8.scrollTop = 0;

        });

    }


});