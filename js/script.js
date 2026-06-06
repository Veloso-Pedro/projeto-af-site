/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: Nome do tema escolhido
Aluno 1: Pedro Veloso Santiago Lima - RA: 251170
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

const btnTopo = document.getElementById('btnTopo');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        btnTopo.classList.add('mostrar');
    } else {
        btnTopo.classList.remove('mostrar');
    }
});

btnTopo.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const btnTema = document.getElementById('btnTema');

btnTema.addEventListener('click', function () {
    document.body.classList.toggle('tema-escuro');

    if (document.body.classList.contains('tema-escuro')) {
        btnTema.textContent = 'Tema Claro';
    } else {
        btnTema.textContent = 'Mudar Tema';
    }
});

const formContato = document.getElementById('formContato');

if (formContato) {

    formContato.addEventListener('submit', function (event) {

        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem).');
        } else {
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);


            formContato.reset();
        }
    });
}