import './App.css'
import DisplayToggle from './assets/components/DisplayToggle'
import GenreSelect from './assets/components/GenreSelect'

function App() {
  const cinematicGenres = [
    "Acción",
    "Comedia",
    "Drama",
    "Ciencia Ficción",
    "Horror",
    "Romance",
    "Thriller",
    "Aventura",
    "Animación",
    "Documental",
    "Fantasía",
    "Misterio",
    "Crimen",
    "Histórico",
    "Musical",
    "Western",
    "Superhéroes",
    "Épica"
  ]

  return (
    <>
      <h1>My React App</h1>
      <GenreSelect genres={cinematicGenres} />
      <DisplayToggle />
    </>
  )
}

export default App
