import React from "react"
import { graphql } from "gatsby"

const Conductor = ({ data }) => {
  const cities = data.allContentfulCity.nodes
  console.log(data)
  return (
    <section>
      <div className="m-6">
        <h1 className="text-5xl mb-8">Maneja con DiDi Conductor</h1>
        <p>Elige tus horarios y obten ganancias</p>
        <button>Descarga DiDi conductor</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
        {cities.map(city => (
          <div>
            <a href={"/" + city.slug} className="text-blue-500">
              <p>{city.name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Conductor

export const query = graphql`
  query {
    allContentfulCity(filter: { country: { code: { eq: "mx" } } }) {
      nodes {
        name
        slug
        image {
          gatsbyImageData(width: 400)
          description
        }
        country {
          code
        }
      }
    }
  }
`
