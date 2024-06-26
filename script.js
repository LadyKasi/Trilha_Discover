function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if (html.classList.contains('light')) {
        // se tiver no light mode adcionar a imagem light
        img.setAttribute('src', './assets/Avatar (1).png')
    } else {
        //se tiver no light mode mostrar imagem normal
        img.setAttribute("src", "./assets/avatar Dark.png")
    }

    //Desafio: Mudar a frase
    if (html.classList.contains('light')) {
        img.setAttribute('alt', 'Foto de Karoline, usando óculos e cobrindo levemente um sorriso.')
    } else {
        img.setAttribute('alt', 'Ainda foto de karoline, usando óculos e cobrindo levemente um sorriso só que agora em preto e branco.')
    }
}