const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')


app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(saudacao('Pauloa'))//node automaticamente reconhece como funca middleware

app.use('/opa', (req, res, next) => {
    console.log('Antes');
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''

    // req.on('data', function(parte){
    //     corpo += parte
    // })

    // req.on('end', function(){
    //     res.send(corpo)
    // })
    res.send(JSON.stringify(req.body))
})

//Dois pontos quer dizer que esse ':id' pode ser alterado 
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.get('/opa', (req, res, next) => {
    console.log('durante');
    res.json({
        data: [
            { id: 7, name: 'ana', position: 1 },
            { id: 12, name: 'Carlos', position: 2 },
            { id: 17, name: 'Bia', position: 3 }
        ],
        count: 3,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()

    // res.json({
    //     name: 'iPad 32Gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    //res.send('<h1>Estou bem</h1><br><br><h2>Isto é HTML</h2>')
})


app.use('/opa', (req, res) => {
    console.log('Depois');

})


app.listen(3000, () => {
    console.log('Backend executando...');
})