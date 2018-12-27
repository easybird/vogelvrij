import React from 'react'
import Link from 'gatsby-link';

const NotFoundPage = () => (
  <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "30vh"}}>
    <h1>Ben je verdwaalt?</h1>
    <h4>Deze pagina bestaat niet.</h4>
    <h4>Ga naar de <Link to="/">Vogelvrij Homepage</Link></h4>
  </div>
)

export default NotFoundPage
