"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  const [mensagem, setMensagem] = useState("")

  const handleDrop = (e, tipoLixeira) => {
    e.preventDefault()
    const item = e.dataTransfer.getData("tipo")

    if (item === tipoLixeira) {
      setMensagem("✅ Acertou! Bom descarte!")
    } else {
      setMensagem("❌ Lixeira errada! Tente de novo.")
    }
  }

  const handleDragStart = (e, tipo) => {
    e.dataTransfer.setData("tipo", tipo)
  }

  const allowDrop = (e) => {
    e.preventDefault()
  }

  return (
    <section className="conteudo" style={{ textAlign: "center", marginTop: 40 }}>
      <h2>Por que descartar corretamente?</h2>
      <p>O descarte correto do lixo eletrônico é essencial para proteger o meio ambiente e a saúde humana. Equipamentos como celulares, computadores, pilhas, baterias e televisores contêm substâncias químicas e metais pesados — como chumbo, mercúrio e cádmio — que, quando descartados de forma inadequada, podem causar sérios danos ambientais e comprometer a qualidade de vida das pessoas.</p>

      <h2>Impactos</h2>
      <h4>Contaminação ambiental:</h4>
      <ul style={{ display: "inline-block", textAlign: "left" }}>
        <li>Liberação de substâncias tóxicas e metais pesados.</li>
        <li>Poluição do solo, da água e do ar.</li>
      </ul>
      <h4>Danos aos ecossistemas:</h4>
      <ul style={{ display: "inline-block", textAlign: "left" }}>
        <li>Contaminação de lençóis freáticos.</li>
        <li>Prejuízos às plantações e aos animais.</li>
        <li>Desequilíbrio nos ecossistemas locais.</li>
      </ul>
      <h4>Riscos à saúde humana:</h4>
      <ul style={{ display: "inline-block", textAlign: "left" }}>
        <li>Exposição a metais como chumbo, mercúrio e cádmio.</li>
        <li>Possibilidade de doenças respiratórias e neurológicas.</li>
        <li>Aumento do risco de câncer em casos de exposição prolongada.</li>
      </ul>

      <h3>Passos para descartar</h3>
      <ol style={{ display: "inline-block", textAlign: "left" }}>
        <li><b>Separe seus eletrônicos antigos:</b> antes de jogar fora, verifique se o equipamento realmente não pode ser reutilizado ou consertado.</li>
        <li><b>Leve até um ponto de coleta autorizado:</b> muitos municípios, empresas e lojas de eletrônicos possuem locais específicos para o recolhimento de resíduos eletrônicos.</li>
        <li><b>Evite jogar no lixo comum:</b> o lixo eletrônico requer tratamento especial para que seus componentes sejam reciclados ou descartados de forma segura.</li>
      </ol>

      <div style={{ marginTop: 40 }}>
        <h3>♻️ Jogo: Descarte Certo</h3>
        <p>Arraste os itens para as lixeiras corretas.</p>

        <div style={{ display: "flex", justifyContent: "center", gap: 30, marginTop: 20 }}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/186/186239.png"
              alt="Celular"
              width={70}
              draggable
              onDragStart={(e) => handleDragStart(e, "eletronico")}
              style={{ cursor: "grab" }}
            />
            <p>Celular</p>
          </div>

          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/824/824188.png"
              alt="Garrafa"
              width={70}
              draggable
              onDragStart={(e) => handleDragStart(e, "plastico")}
              style={{ cursor: "grab" }}
            />
            <p>Garrafa</p>
          </div>
        </div>

        {/* Lixeiras */}
        <div style={{ display: "flex", justifyContent: "center", gap: 80, marginTop: 50 }}>
          <div
            onDrop={(e) => handleDrop(e, "eletronico")}
            onDragOver={allowDrop}
            style={{
              width: 100,
              height: 100,
              border: "3px dashed #0070f3",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
              alt="Lixeira Eletrônico"
              width={60}
            />
            <p>Eletrônicos</p>
          </div>

          <div
            onDrop={(e) => handleDrop(e, "plastico")}
            onDragOver={allowDrop}
            style={{
              width: 100,
              height: 100,
              border: "3px dashed #e63946",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/5995/5995933.png"
              alt="Lixeira Plástico"
              width={60}
            />
            <p>Plástico</p>
          </div>
        </div>

        <p style={{ marginTop: 30, fontWeight: "bold" }}>{mensagem}</p>
      </div>

      <div style={{ marginTop: 50 }}>
        <button onClick={() => router.push("/descarte")}>Saiba Mais</button>
        <button onClick={() => window.open("/contato", "_blank")} style={{ marginLeft: 10 }}>
          Entre em Contato
        </button>
      </div>
    </section>
  )
}
