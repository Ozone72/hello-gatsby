import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Orin!" />
      <p>Congrats on not dying in 2020. Better luck in 2021.</p>
      <img
        src="https://source.unsplash.com/random/400x200"
        alt="random-unsplash"
      />
    </div>
  )
}
