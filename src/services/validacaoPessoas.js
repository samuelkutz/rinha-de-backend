class ValidacaoPessoas {
    /**
     * Métodos de validação de apelido
     * @param {string} apelido
     * @returns {boolean}
     */
    static validaApelido(apelido){
        return typeof apelido == "string" && apelido.length <= 32;
    }
    static validaNome(nome){
        return typeof nome == "string" && nome.length <= 100;
    }


export default ValidacaoPessoas;