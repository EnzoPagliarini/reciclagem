"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  const [mensagem, setMensagem] = useState("")

  const handleDrop = (item, tipo) => {
    if (item === tipo) {
      setMensagem("Acertou! Bom descarte!")
    } else {
      setMensagem("Lixeira errada! Tente de novo.")
    }
  }

  return (
    <section className="conteudo">
      <h2>Por que descartar corretamente?</h2>
      <p>O descarte incorreto do lixo eletrônico causa sérios danos ambientais e à saúde humana.</p>

      <h3>Impactos</h3>
      <ul>
        <li>Contaminação do solo e da água.</li>
        <li>Risco à saúde devido a metais pesados.</li>
      </ul>

      <h3>Passos para descartar</h3>
      <ol>
        <li>Separe seus eletrônicos antigos.</li>
        <li>Leve até um ponto de coleta autorizado.</li>
        <li>Evite jogar no lixo comum.</li>
      </ol>

      <button onClick={() => router.push("/descarte")}>Saiba Mais</button>
      <button onClick={() => window.open("/contato", "_blank")}>Entre em Contato</button>

      <div style={{ marginTop: 30 }}>
        <h3>Jogo: Descarte Certo</h3>
        <p>Arraste os itens para as lixeiras corretas.</p>
        <div>
          <button onClick={() => handleDrop("eletronico", "eletronico")}>Celular</button>
          <button onClick={() => handleDrop("plastico", "eletronico")}>Garrafa</button>
        </div>
        <p>{mensagem}</p>
      </div>
    </section>
  )
}
