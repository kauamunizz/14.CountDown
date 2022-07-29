'stric mode'

const index = (() => {
    function init() {
        const anoNovo = '1 Jan 2023';
        
        setInterval (function countdown() {
            const dataAnoNovo = new Date(anoNovo);
            const dataAtual = new Date();
        
            const totalSegundos = (dataAnoNovo - dataAtual) / 1000;
            
            const dias = Math.floor(totalSegundos / 3600 / 24);
            const horas = Math.floor(totalSegundos / 3600) % 24;
            const mins = Math.floor(totalSegundos / 60) % 60;
            const segundos = Math.floor(totalSegundos) % 60;
        
            document.getElementById('dias').innerHTML = dias;
            document.getElementById('horas').innerHTML = formatarTempo(horas);
            document.getElementById('mins').innerHTML = formatarTempo(mins);
            document.getElementById('segundos').innerHTML = formatarTempo(segundos);
        }, 1000);
        
        function formatarTempo(tempo) {
            return tempo < 10 ? `0${tempo}` :tempo;
        };
    }

    return {
        init
    };

})()

index.init();

