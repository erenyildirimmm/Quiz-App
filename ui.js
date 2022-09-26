function UI() {
    this.btnStart = document.querySelector('.btn_start'),
    this.btnNext = document.querySelector('.next_btn'),
    this.quizBox = document.querySelector('.quiz_box'),
    this.quizText = document.querySelector('.question_text'),
    this.option_List = document.querySelector('.option_list'),
    this.score_box = document.querySelector('.score_box'),
    this.questionIndex = document.querySelector('.question_index'),
    this.btn_replay = document.querySelector('.btn_replay');
    this.btn_quit = document.querySelector('.btn_quit');
    this.timer_text = document.querySelector('.timer_text'),
    this.timer_second = document.querySelector('.timer_second'),
    this.timerLine = document.querySelector('.timerLine'),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
}

UI.prototype.soruGoster = function(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for(let answer in soru.cevapSecenekleri) {
        options +=
        `
        <div class="option">
            <span><b>${answer}</b>: ${soru.cevapSecenekleri[answer]}</span>
        </div>        `
    }

    this.quizText.innerHTML = question;
    this.option_List.innerHTML = options;

    const option = ui.option_List.querySelectorAll('.option');

    for(let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

UI.prototype.showQuestionNumber = function (questionOrder, totalQuestion) {
    let tag = `<span class="badge bg-warning"> ${questionOrder} / ${totalQuestion} </span>`;
    this.questionIndex.innerHTML = tag;
}

UI.prototype.scoreShow = function(toplamSoru, dogruCevap) {
    let tag = `Toplam <span class="total">${toplamSoru}</span> sorudan <span class="true">${dogruCevap}</span> doğru cevap verdiniz.`;
    document.querySelector('.score_text').innerHTML = tag;
}