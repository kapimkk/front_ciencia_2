const lampada = document.getElementById('lampada')
const btnAlternar = document.getElementById('btn-alternar')
const baseUrlImg = 'https://redesigned-space-spork-4jv55wr9v664hjp7r-5502.app.github.dev/aulas/LampadaJavascript/'

// alert(lampada.src)
// alert(btnAlternar.textContent)
btnAlternar.addEventListener('click', function () {
    if (lampada.src == baseUrlImg + `lampada1.png`) {
        lampada.src = 'lampada2.png'
        btnAlternar.textContent = "Lampada Acesa!"
    } else if (lampada.src == baseUrlImg + `lampada2.png`) {
        lampada.src = 'lampada1.png'
        btnAlternar.textContent = "Lampada Apagada!"
    }


})
let click = 0
btnAlternar.addEventListener('click', function () {
    if (click == 5) {
        lampada.src = 'lampada0.png'
        btnAlternar.textContent = "Lâmpada Estourou!"
        btnAlternar.style.backgroundColor = 'red'
    }
    click++
})