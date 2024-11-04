function horario() {
    let agora = new Date();

    let segundos = String(agora.getSeconds()).padStart(2, '0');
    let minutos = String(agora.getMinutes()).padStart(2, '0');
    let horas = String(agora.getHours()).padStart(2, '0');

    let ordem = `${horas}:${minutos}:${segundos}`;
    document.getElementById("relogio").textContent = ordem;
}

setInterval(horario, 1000);
horario();