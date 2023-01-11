// Kosullarla Calismak Bolum Sonu Egzersizi:

/* 
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA  90-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49

2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et
3- ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun :)
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/


let SADICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>`

let SMILEICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-upside-down-fill" viewBox="0 0 16 16">
<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5zM4.285 6.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM10 8c-.552 0-1 .672-1 1.5s.448 1.5 1 1.5 1-.672 1-1.5S10.552 8 10 8z"/>
</svg>`


let examScore = prompt("Lutfen notunuzu giriniz");
let examResult;
let info = document.querySelector("#info")



if (!(isNaN(examScore)))

    if (examScore <= 100 && examScore >= 90) {
        examResult = `${SMILEICON} AA`
        info.classList.add("text-primary")
    }
    else if (examScore >= 85 && examScore < 90) {
        examResult = `${SMILEICON} BA`
        info.classList.add("text-primary")
    }
    else if (examScore >= 80 && examScore < 85) {
        examResult = `${SMILEICON} BB`
        info.classList.add("text-primary")
    }
    else if (examScore >= 75 && examScore < 80) {
        examResult = `${SMILEICON} CB`
        info.classList.add("text-primary")
    }
    else if (examScore >= 70 && examScore < 75) {
        examResult = `${SMILEICON} CC`
        info.classList.add("text-primary")
    }
    else if (examScore >= 65 && examScore < 70) {
        examResult = `${SMILEICON} DC`
        info.classList.add("text-primary")
    }
    else if (examScore >= 60 && examScore < 65) {
        examResult = `${SMILEICON} DD`
        info.classList.add("text-primary")
    }
    else if (examScore >= 50 && examScore < 60) {
        examResult = `${SMILEICON} FD`
        info.classList.add("text-primary")
    }
    else if (examScore < 50 && examScore >= 0) {
        examResult = `${SADICON} FF`
        info.classList.add("text-danger")
    } 
    else {
        examResult = "yanlis puan girdiniz"
    }

else {
    examResult = "lutfen bir sayi giriniz"
}
    
info.innerHTML = examResult