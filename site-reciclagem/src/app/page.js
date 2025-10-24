"use client"
import Image from "next/image";
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
      <h2>Descarte Eletrônico Consciente</h2>
      <p>Você já parou para pensar onde vai parar aquele celular antigo, o controle remoto quebrado ou o notebook que não liga mais?</p>
      <p>O lixo eletrônico é um dos que mais crescem no mundo e o que menos é descartado da forma correta. Quando jogados no lixo comum, esses equipamentos liberam substâncias tóxicas que poluem o solo, os rios e colocam em risco a saúde das pessoas.</p>
      <b>Descartar corretamente não é apenas uma escolha: é um dever com o planeta e com as próximas gerações</b>
      <h3>Impactos</h3>
      <ul>
        <li>Contaminação do solo e da água.</li>
        <li>Risco à saúde devido a metais pesados.</li>
      </ul>

      <section>
            <h2>Por que devemos fazer o descarte correto?</h2>
            <section>Devemos descartar o lixo eletrônico corretamente para proteger o meio ambiente, a nossa saúde e dos animais.
            <h3>Impactos ambientais</h3>
                <ul>
                <li>O lixo eletrônico contém substâncias tóxicas, como chumbo, mercúrio, cádmio e arsênio, que contaminam o solo e a água. </li>
                <li>descarte inadequado em aterros sanitários contribui para a poluição do solo e para a emissão de gases tóxicos. </li>
                <li>O lixo eletrônico descartado em locais inadequados pode contaminar lençóis freáticos, rios e lagos. </li>
                <h3> Impactos na saúde </h3>
                <li>Os metais pesados e produtos químicos presentes no lixo eletrônico podem causar problemas de saúde graves, incluindo doenças respiratórias, câncer e problemas neurológicos.</li>
                </ul>
            </section>
      </section> 
      <section>
            <h2>Pontos de coleta</h2>
            <p>pontos de coleta de lixo eletrônico na cidade de São Paulo</p>
            <section>
                <ul>
                <li>Parque Ibirapuera – Av. Pedro Álvares Cabral, s/n</li>
                <li>Parque Trianon – Rua Peixoto Gomide, 949</li>
                <li>Parque Prefeito Mario Covas – Avenida Paulista, 1853</li>
                <li>Parque da Independência – Avenida Nazareth, s/n</li>
                <li>Parque do Cordeiro Martin Luther King – Rua Breves, 968</li>
                <li>Parque Lina e Paulo Raia – Rua Volkswagen, s/n</li>
                <li>Parque Buenos Aires - Av Angélica, 1.500</li> 
                <li>Parque do Povo – Av. Henrique Chamma, 420</li>
                <li>Parque da Aclimação – Rua Muniz de Souza, 1.119</li>
                <li>Parque Burle Marx – Av. D Helena Pereira de Moraes, 200</li>
                <li>Parque Piqueri – R. Tuiuti, 515</li>
                <li>Parque do Carmo – Av. Afonso de Sampaio e Sousa, 951 - Itaquera</li>
                <li>Parque Vila Guilherme /Trote – Rua São Quirino, 905</li>
                
                <button onClick={() => router.push("/descarte")}>Saiba Mais</button>
            </ul>
            </section>
        </section>
        
        

      <button onClick={() => window.open("/contato", "_blank")}>Entre em Contato</button>

      <section style={{ marginTop: 30 }}>
        <h3>Jogo: Descarte Certo</h3>
        <p>Arraste os itens para as lixeiras corretas.</p>
        <section>
          <button onClick={() => handleDrop("eletronico", "eletronico")}>Celular</button>
          <button onClick={() => handleDrop("plastico", "eletronico")}>Garrafa</button>
        </section>
        <p>{mensagem}</p>
      </section>
    </section>
  )
}
