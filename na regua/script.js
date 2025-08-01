let inscricoes = [];

function salvarInscricao() {
    const nome = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;

    if (!nome || !cpf || !!email || !whatsapp) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const inscricao = {nome, cpf, email, whatsapp};
    inscricoes.push(inscricao);
    document.getElementById('formulario').reset();
    alert('Inscrição realizada com sucesso!');
}

function downloadInscricao() {
    let conteudo = inscricoes.map(inscricao =>
     'Nome: ${inscricao.nome}\nCPF: ${inscricao.cpf}\nEmail: ${inscricao.email}\nWhatsapp: ${inscricao.whatsapp}\n'
    ).join('\n');

    const Blob = new Blob({conteudo}, { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'inscricao.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

}