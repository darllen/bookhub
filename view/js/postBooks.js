const btn = document.querySelector('#save');

btn.addEventListener('click', () => {
    //capturar dados do formulário
    const book = getForm();


    // enviar os dados para api
    postForm(book);
});

function getForm(){
    const inputTitle = document.querySelector('#title');
    const inputAuthor = document.querySelector('#input2');
    const inputPublisher = document.querySelector('#input3');
    const inputReleaseYear = document.querySelector('#input4');
    const inputTypeList = document.querySelector('#input5');

    if (inputTitle.value == null || inputTypeList.value == null){
        return
    };

    const book = {
        title: inputTitle.value,
        author: inputAuthor.value,
        publisher: inputPublisher.value,
        releaseYear: inputReleaseYear.value,
        typeList: inputTypeList.value
    };

    return book;
};

async function postForm(book){
    const response = await fetch('http://localhost:8080/create',  {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });

    if(response.status === 201){
        cleanInputs();
        alert("Livro cadastrado!");
        window.location.href = 'index.html';
    }else {
        console.log('Erro ao add livro')
    };

};


function cleanInputs(){
    inputTitle = document.querySelector('#title') = '';
    inputAuthor = document.querySelector('#input2') = '';
    inputPublisher = document.querySelector('#input3') = '';
    inputReleaseYear = document.querySelector('#input4') = '';
    inputTypeList = document.querySelector('#input5') = '';
}
