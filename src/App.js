import { useState } from 'react'

export default function App() {
  const [nomeNovoJogo, setNomeNovoJogo] = useState('')
  const [jogos, setJogos] = useState([])

  function clicouParaAdicionarJogo() {
    const novoJogos = [
      ...jogos,
      nomeNovoJogo
    ]

    setJogos(novoJogos)
  }

  return (
    <div className="bg-black h-screen flex justify-center">
      <div className="w-8/12 text-white">
        <h1 className="text-xl font-bold text-white text-center p-3">
          gg.gg
        </h1>
        <input
          placeholder="digite o nome do jogo"
          className="w-full bg-transparent text-white border border-white px-3 rounded-md"
          value={nomeNovoJogo}
          onChange={(evento) => setNomeNovoJogo(evento.target.value)}
        />
        <div
          className="text-sm mt-3 text-right cursor-pointer hover:underline"
          onClick={() => clicouParaAdicionarJogo()}
        >
          adicionar jogo +
        </div>
        {
          jogos.map(jogo => (
            <div key={jogo} className="text-black p-5 bg-white rounded-md mt-3">
              {jogo}
            </div>
          ))
        }
      </div>
    </div>
  )
}