import loginStyle from './Styles/LoginPage.module.scss'
import { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
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
      setMessage("Du har sgu logget ind :)")  // Feedbacket på om man er logget ind

    } catch (err) {
     
      setMessage("Prøv lige igen, noget gik galt") // Feedbacket på at noget er tastet forkert
      console.log(err);
    }

  }


  return (
    <section className={loginStyle.login}>
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
