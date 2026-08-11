const botoes = document.qurySelectorAll('button')

botoes.forEach(botao => {
    botao.addEventListener('click', curtir)

    function curtir() {
        let curtidas = document.qurySelector('span')
        curtidas.textContent++
    }
})