export default function ContatoPage() {
  return (
    <section className="conteudo">
      <h2>Entre em Contato</h2>
      <form>
        <label>Nome:</label>
        <input type="text" required />

        <label>Email:</label>
        <input type="email" required />

        <label>Mensagem:</label>
        <textarea rows="4"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
