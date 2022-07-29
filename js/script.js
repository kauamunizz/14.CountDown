'strict mode'

const index = (() => {
    function formatarTempo(tempo) {
        return (tempo < 10 ? '0' : '') + tempo;
    }

    function countdown() {
        const anoNovo = '1 Jan 2023';
        const dataAnoNovo = new Date(anoNovo);
        const dataAtual = new Date();
        const totalSegundos = (dataAnoNovo - dataAtual) / 1000;
        const dias = Math.floor(totalSegundos / 3600 / 24);
        const horas = Math.floor(totalSegundos / 3600) % 24;
        const mins = Math.floor(totalSegundos / 60) % 60;
        const segundos = Math.floor(totalSegundos) % 60;
    
        document.querySelector('#dias').textContent = dias;
        document.querySelector('#horas').textContent = formatarTempo(horas);
        document.querySelector('#mins').textContent = formatarTempo(mins);
        document.querySelector('#segundos').textContent = formatarTempo(segundos);
        
        setTimeout(countdown, 1000);
    }

    function init() {
        countdown();
    }

    return {
        init
    };
})()

index.init();

