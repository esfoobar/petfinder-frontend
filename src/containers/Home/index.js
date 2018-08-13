import React from 'react';
import Hero from "../../components/Home/Hero"
import LatestPets from "../../components/Home/LatestPets"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: [
        {
          photo: "pet1",
          name: "Pepe",
          species: "Cat",
          description: "Peter is very kind, and it loves to jump over the fences and get stuck."
        },
        {
          photo: "pet2",
          name: "Neymar",
          species: "Dog",
          description: "Neymar is very kind, and it loves to throw its own fleas to people passing by."
        },
        {
          photo: "pet3",
          name: "Daniella",
          species: "Parrot",
          description: "Daniella is very kind, and it loves to sing politically-wrong songs."
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Hero />
        <LatestPets pets={this.state.pets} />
      </div>

    )
  }
}

export default Home
