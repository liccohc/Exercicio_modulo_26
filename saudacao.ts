//funcão para retornar Olá+nome
function saudacao(nome: string,): string {
    return `Olá ${nome}`;
};
const seuNome = "Pedro";
const saudacaoSeuNome = saudacao(seuNome);
console.log(saudacaoSeuNome);