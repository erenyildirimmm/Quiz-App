function Question(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Question.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Question("1-Hangi IF karşılaştırma satırı doğrudur?",{a: "if i = 5 ", b: "if i = 5 then", c: "if i == 5 then", d: "if (i == 5)"}, "d"),
    new Question("2-Hangi if satırı 5’e eşit değilse’nin kontrolünü yapar?",{a: "if (i <> 5)", b: "if (i != 5)", c: "if i =! 5 then", d: "if i <> 5"}, "b"),
    new Question("3-Hangi For deyimi doğrudur?",{a: "for i = 1 to 5", b: "for (i <= 5; i++)", c: "for (i = 0; i <= 5; i++)", d: "for (i = 0; i <= 5)"}, "c"),
    new Question("4-Hangisi .net paket yönetim uygulamasıdır.",{a: "Node.js", b: "nuet", c: "Npm", d: "Hiçbiri"},  "b"),
    new Question("5-Hangisi doğru dizi tanımlamadır?.",{a: "var colors = [“red”, “green”, “blue”]", b: "var colors = (1:”red”, 2:”green”, 3:”blue”) ", c: "var colors = 1 = (“red”), 2 = (“green”), 3 = (“blue”) ", d: "var colors = “red”, “green”, “blue”Formun Altı"}, "a"),
    new Question("6-Hangisi 7.25 sayısını en yakın tamsayıya yuvarlar?",{a: "round(7.25)", b: "Math.rnd(7.25) ", c: "Math.round(7.25) ", d: "rnd(7.25)"}, "c"),
    new Question("7-Hangisi ile X ve Y’nin en yüksek değeri bulunur?",{a: "ceil(x, y)", b: "Math.max(x, y)", c: "Math.ceil(x, y) ", d: "top(x, y)"}, "b"),
    new Question("8-Hangisi ile bit html elemanına tıklama olayı gerçekleşir?",{a: "onclick", b: "onmouseclick ", c: "onchange", d: "onmouseover"}, "a"),
    new Question("9-Bir isim ve bir değere sahip olan sırasız özellik koleksiyonuna ne denir ?",{a: "String", b: "Serileştirilmiş Nesne (Serialized Object)", c: "Nesne (Object)", d: "Hiçbiri"}, "d"),
    new Question("10-encerede (window) görüntülenen içeriği temsil eden özellik hangisidir?",{a: "window", b: "frame", c: "document", d: "content"}, "a"),
]

function Quiz(sorular) {
    this.sorular = sorular;
    this.sorularIndex = 0;
    this.dogruCevapSayisi = 0;
}

Quiz.prototype.soruGetir = function()  {
    return this.sorular[this.sorularIndex]
}