import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import "./styles.css"

function Title({ name, paragrafo }) {
  // const name="Luiz Gabriel";
  let cargo = "Dev";
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{`${name} é um ${cargo} `}</h1>
      {paragrafo ? (

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quis vel iste natus libero odio! Quidem asperiores voluptas suscipit?
          Unde nam distinctio dolorem odio quibusdam,
          tenetur voluptates optio dolor perferendis eos?</p>
      ) : (
        <p> nao tem paragafo </p>
      )
          
    }

    </>
  )
}

export default Title
