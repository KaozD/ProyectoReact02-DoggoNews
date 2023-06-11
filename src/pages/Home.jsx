import ListPosts from "../componentes/ListPosts"
import ListCategorias from "../componentes/ListCategorias"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategorias />
      <ListPosts url={"/posts"} />
    </main>
  )
}

export default Home
