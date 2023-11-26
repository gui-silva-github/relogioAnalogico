// Pegando a data do dia

let data = document.querySelector('.data');

// Pegando o digital (mostrar na tela)

let digitalElement = document.querySelector('.digital');

// Pegando os segundos desse digital 

let sElement = document.querySelector('.p_s');

// Pegando os minutos desse digital 

let mElement = document.querySelector('.p_m');

// Pegando as horas desse digital

let hElement = document.querySelector('.p_h');

// Fazendo umma função para pegar a data 

function updateDate(){

    let now = new Date();

    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    data.innerHTML = `${day}/${month+1}/${year}`;

}

// Fazendo uma função para pegar a atualização do relógio digital

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixeZero(hour)}:${fixeZero(minute)}:${fixeZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;

    let mDeg = ((360 / 60) * minute) - 90;

    mElement.style.transform = `rotate(${mDeg}deg)`;

    let hDeg = ((360 / 12) * hour) - 90;

    hElement.style.transform = `rotate(${hDeg}deg)`;
}

// Fazendo uma função que vai sobrescrever a supracitada para colocar o 0 atrás de um número menor do que 10

function fixeZero(time){
    return time < 10 ? `0${time}` : time;
}

// Definindo os intervalos em que cada função deverá ser executada, nesse caso 1 seg e instanciando ela, para não dar delay

setInterval(updateDate, 1000);
updateDate();

setInterval(updateClock, 1000);
updateClock();
