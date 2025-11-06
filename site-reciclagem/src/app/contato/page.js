export default function ContatoPage() {
  return (
    <section className="conteudo">
      <h2>Entre em Contato</h2>
      <form>
        <label>Nome: </label>
        <input type="text" required />
        <br/>
        <br/>
        <label>Email: </label>
        <input type="email" required />
        <br/>
        <br/>
        <label>Mensagem: <br/></label>
        <textarea rows="4"></textarea>
        <br/>
        <br/>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}