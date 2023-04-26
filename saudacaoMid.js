function saudacao(nome){
    return function(req, res, next){
        console.log(`Seja bem vindo ${nome}.`);
        next()
    }
}//funcao que retorna uma funcao middleware

module.exports = saudacao