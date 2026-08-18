const botoes = document.qurySelectorAll('button')

botoes.forEach(botao => {
    botao.addEventListener('click', curtir)
    let curtiu = false

    function curtir() {
        let curtidas = botao.querySelector('span')

if (curtiu == false) {
    curtiu = true
    curtidas.textContent++
    botao.style.backgroundColor = 'pink'
}else{
    curtiu=false
    curtidas.textContent--
    botao.style.backgroundColor = 'lightgray'
}


        curtidas.textContent++
    }
})