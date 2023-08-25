import React from 'react'
import './index.css'

export default function Main() {
    return (
        <div>
            <div className="container">
                <div>
                    <h1>
                    Prova Final 2°etapa
                    </h1>
                </div>
                <button className='button'>CLick here!</button>
                <div>
                    <h1>Categoria</h1>
                    <p className="text1"></p>
                </div>
                <div>
                    <h1>Dificuldade</h1>
                    <p className="text2"></p>
                </div>
            </div>
        </div>
    )
}
function Request(){
    const valor = fetch('https://opentdb.com/api.php?amount=30&category=15').then(games=>{
        games.json().then(categorias=>{
            var btn=document.querySelector('.button')
            btn.addEventListener('click', ()=>{
                var texto = document.querySelector('.text1')
                var texto2 = document.querySelector('.text2')
                texto=categorias.data.games[Math.floor(Math.random()*100)].url
                legenda()

            })

        })
    })
}
function legenda(){
    fetch('https://opentdb.com/api.php?amount=30&category=15').then(legenda=> legenda.json()
    .then(dados=>{
        var legenda = texto
        var legenda2 =  texto2
        legenda.innerHTML = `${dados.category}`
        legenda2.innerHTML = `${dados.difficulty}`
    })
    )
}
Request()
