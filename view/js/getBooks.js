
const divReadBooks = document.querySelector('#body-card-readBooks');
const divWishList = document.querySelector('#body-card-wishList');

async function consultaLivros () {
    const retorno = await fetch('http://localhost:8080')
    const livros = await retorno.json()

    console.log(livros)
    preencheTela(livros);
}

function preencheTela(lista){
    lista.forEach(livro => {
        const livroHTML = `
            <div class="element">
                <div class="info-book">
                    <h3>> ${livro.title}</h3>
                    <p>${livro.publisher} - ${livro.author} - ${livro.releaseYear}</p>
                </div>
                <div class="action-buttons">
                    <button id="edit"></button><br>
                    <button id="delete"></button>
                </div>
            </div>
            `
        if (livro.typeList == 'readBook'){
            divReadBooks.innerHTML += livroHTML;
        } else if (livro.typeList == 'wishList') {
            divWishList.innerHTML += livroHTML;
        };
    });

}

consultaLivros();
