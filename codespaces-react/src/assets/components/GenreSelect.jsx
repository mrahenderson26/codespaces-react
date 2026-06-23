import { useState } from "react"
import "./GenreSelect.css"

export default function GenreSelect({ genres = [] }) {
    const [input, setInput] = useState("")
    const [filteredGenres, setFilteredGenres] = useState(genres)
    const [selectedGenre, setSelectedGenre] = useState(null)
    const [showDropdown, setShowDropdown] = useState(false)

    // Filtra las opciones mientras escribes
    const handleInputChange = (e) => {
        const value = e.target.value
        setInput(value)
        setShowDropdown(true)

        if (value.trim() === "") {
            setFilteredGenres(genres)
        } else {
            const filtered = genres.filter(genre =>
                genre.toLowerCase().includes(value.toLowerCase())
            )
            setFilteredGenres(filtered)
        }
    }

    // Selecciona un género al hacer click
    const handleSelectGenre = (genre) => {
        setSelectedGenre(genre)
        setInput(genre)
        setShowDropdown(false)
    }

    // Busca al presionar enter
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            if (filteredGenres.length > 0 && input.trim() !== "") {
                const matching = filteredGenres.find(g =>
                    g.toLowerCase() === input.toLowerCase()
                )
                if (matching) {
                    setSelectedGenre(matching)
                    setShowDropdown(false)
                }
            }
        }
    }

    // Limpia la selección
    const handleClear = () => {
        setInput("")
        setSelectedGenre(null)
        setShowDropdown(false)
        setFilteredGenres(genres)
    }

    return (
        <div className="genre-select-container">
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Busca un género..."
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    onFocus={() => setShowDropdown(true)}
                    className="genre-input"
                />
                {input && (
                    <button onClick={handleClear} className="clear-btn">
                        ✕
                    </button>
                )}
            </div>

            {showDropdown && filteredGenres.length > 0 && (
                <ul className="dropdown-list">
                    {filteredGenres.map((genre, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelectGenre(genre)}
                            className={selectedGenre === genre ? "active" : ""}
                        >
                            {genre}
                        </li>
                    ))}
                </ul>
            )}

            {showDropdown && filteredGenres.length === 0 && input.trim() !== "" && (
                <div className="no-results">No se encontraron resultados</div>
            )}

            {selectedGenre && (
                <div className="display-selected">
                    <p>Género seleccionado: <strong>{selectedGenre}</strong></p>
                </div>
            )}
        </div>
    )
}
