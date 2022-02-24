import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    const strong = document.createElement('strong');
    strong.innerHTML = gera.geraNovoCpf();
    cpfGerado.appendChild(strong);
})();
