import loginStyle from './Styles/LoginPage.module.scss'
import { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { Button } from '../Components/Button/Button';
import { Link } from 'react-router-dom';
import logo from '../assets/Svgs/Logo.svg'
// Taget fra tidligere opgave

export function Login() {

  // Feedback på om man har logget ind 
  const [message, setMessage] = useState()


  const { userData, setUserData } = useContext(UserContext)
  console.log(userData);

  async function handleSignup(event) {

    event.preventDefault()

    let url = "http://localhost:3000/login"

    let body = new URLSearchParams()
    body.append('username', event.target.username.value)
    body.append('password', event.target.password.value)

    console.log(body);

    let options = {
      method: "POST",
      body: body
    }

    try {
      let res = await fetch(url, options)
      let data = await res.json()
      setUserData(data.user)
      setMessage("Yay, du har logget ind :)")  // Feedbacket på om man er logget ind

    } catch (err) {

      setMessage("Prøv lige igen, noget gik galt") // Feedbacket på at noget er tastet forkert
      console.log(err);
    }

  }


  return (
    <section className={loginStyle.login}>

      <figure>
        <figcaption>
          <img src={logo} alt="Affaldsguiden" />
          <h2>Affaldsguiden</h2>
        </figcaption>

        <p>Log ind på Affaldsguiden</p>
        <p>for at anmelde stationer</p>
        <Link to="/signin">
          <Button
            text={"Har du ikke en bruger? Klik her"}
            bgColor={"var(--darkGreen"}
          />
        </Link>

      </figure>

      <form onSubmit={(event) => handleSignup(event)}>
        <h2>Login Page</h2>
        <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
        <label htmlFor="">Username
          <input name="username" type="text" />
        </label>

        <label htmlFor="">Password
          <input name="password" type="password" />
        </label>
        <input value="Login" type="submit" className={loginStyle.submit} />

        {/* Den visuelle del af feedbacket */}
        <p>{message}</p>
      </form>


    </section>
  )
}
