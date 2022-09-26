const quiz = new Quiz(sorular);
const ui = new UI();
ui.btnStart.addEventListener("click", function () {
    if (quiz.sorular.length != quiz.sorularIndex) {
        ui.quizBox.classList.add('active');
        ui.soruGoster(quiz.soruGetir());
        startTimer(20);
        startTimerLine();
        ui.btnStart.style.display = "none";
        ui.btnNext.classList.remove("show");
        ui.showQuestionNumber(quiz.sorularIndex+1, quiz.sorular.length);
    } else {
        alert("Sorularınız bitti.");
    }
    console.log(Number(ui.quizBox.style.width));
})

ui.btnNext.addEventListener("click", function() {
    if (quiz.sorular.length != quiz.sorularIndex + 1) {
        quiz.sorularIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(20);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.showQuestionNumber(quiz.sorularIndex+1, quiz.sorular.length);
        if(quiz.sorularIndex+1 == quiz.sorular.length) {
            ui.btnNext.textContent = "Testi Tamamla";
        }
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        ui.scoreShow(quiz.sorular.length, quiz.dogruCevapSayisi);
        ui.score_box.classList.add('active');
        ui.quizBox.classList.remove('active');
    }
    ui.btnNext.classList.remove("show");
})


function optionSelected(option) {
    let answer = option.querySelector("span b").textContent;
    let question = quiz.soruGetir();
    clearInterval(counter);
    clearInterval(counterLine);
    if(question.cevabiKontrolEt(answer)) {
        quiz.dogruCevapSayisi += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for(let i=0; i<ui.option_List.children.length; i++) {
        ui.option_List.children[i].classList.add('disabled');
    }
    ui.btnNext.classList.add("show");
}

ui.btn_quit.addEventListener("click", function() {
    window.location.reload();
})
ui.btn_replay.addEventListener("click", function() {
    quiz.sorularIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btnStart.click();
    ui.score_box.classList.remove('active');
})

let counter;
function startTimer(time) {
   counter =  setInterval(timer, 1000);
        function timer() {
            ui.timer_second.textContent = time;
            time--;

            if(time < 0) {
                clearInterval(counter);

                ui.timer_text.textContent = "Süre Bitti";

                let cevap = quiz.soruGetir().dogruCevap;

                for(let option of ui.option_List.children) {
                    if(option.querySelector("span b").textContent == cevap) {
                        option.classList.add("correct");
                        option.insertAdjacentHTML("beforeend", ui.correctIcon);
                    } else {
                        option.classList.add("incorrect");
                        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
                    }

                    option.classList.add("disabled");
                }

                ui.btnNext.classList.add("show");
            }
    }
}

let counterLine;
function startTimerLine() {
    let lineWidth = 0;

    counterLine = setInterval(timer, 40);

    function timer() {
        lineWidth += 1.2;
        ui.timerLine.style.width = lineWidth + "px";

        if(lineWidth > 549) {
            clearInterval(counterLine);
        }
    }
}




