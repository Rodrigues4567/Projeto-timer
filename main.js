
let iniciarBtn = document.querySelector('.iniciar-btn');
let pausarBtn = document.querySelector('.pausar-btn');
let zerarBtn = document.querySelector('.zerar-btn');

let segundos = 0;
let minutos = 0;
let horas = 0;
let interval; // Variável global

iniciarBtn.addEventListener('click', iniciaTimer = () => {
    clearInterval(interval);
    interval = setInterval(() => {
        timer()
    }, 1000);
})

pausarBtn.addEventListener('click', pausaTimer = () => {
    clearInterval(interval);
})

zerarBtn.addEventListener('click', zerarTimer = () => {
    clearInterval(interval);
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.querySelector('.timer').innerHTML = `00:00:00`;
})

const zeroAEsquerda = (num) => {
    if (num < 10) {
        return `0${num}`
    }
    return num
}

const timer = () => {
    segundos++
    if (segundos == 60) {
        minutos++
        segundos = 0
        if (minutos == 60) {
            minutos = 0
            horas++
        }
    }
    document.querySelector('.timer').innerHTML = `${zeroAEsquerda(horas)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundos)}`;
}