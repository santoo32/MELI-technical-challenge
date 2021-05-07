import React from 'react'
import './noResults.scss'
import NoResultsIcon from '../../assets/ic_NoResults.png';

function NoResults() {
    return (
        <div className="no-results-container">
        <img
          className="no-results-image"
          alt="No se encontraron resultados"
          src={NoResultsIcon}
        />
        <div className="help-data">
          <span className="title">No hay publicaciones que coincidan con tu búsqueda.</span>
          <ul className="tips-list">
            <li>Revisá la ortografía de la palabra.</li>
            <li>Utilizá palabras más genéricas o menos palabras.</li>
          </ul>
        </div>
      </div>
    )
}

export default NoResults
