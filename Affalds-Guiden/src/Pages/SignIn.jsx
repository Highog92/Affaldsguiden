import SignUpPageStyle from "./Styles/SignUpPage.module.scss"
import { Link } from 'react-router-dom';
import { Button } from "../Components/Button/Button";
import logo from '../assets/Svgs/Logo.svg'

export function SignUpPage() {

    async function handleSignup(event) {
        
        // Denne linje gør at siden ikke opdatere når man trykker på submit
        event.preventDefault()

        // Nødvendige variabler for at kunne oprette en bruger. 
        const is_Active = 1;
        const org_idValue = 1;
        const refresh_tokenValue = "1234";
        // 2 for at lave som kunde
        const groupsValue = 1;


        let url = "http://localhost:3000/users"

        let body = new URLSearchParams()
        body.append('firstname', event.target.firstname.value)
        body.append('lastname', event.target.lastname.value)
        body.append('email', event.target.email.value)
        body.append('password', event.target.password.value)


        body.append("is_active", is_Active);
        body.append("org_id", org_idValue);
        body.append("refresh_token", refresh_tokenValue);
        body.append("groups", groupsValue);

        console.log(body);

        let options = {
            method: "POST",
            body: body

        }

        try {
            let res = await fetch(url, options)
            let data = await res.json()
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }




    return (
        <section className={SignUpPageStyle.SignUp}>
            <figure>
                <figcaption>
                    <img src={logo} alt="Affaldsguiden" />
                    <h2>Affaldsguiden</h2>
                </figcaption>

                <p>Opret en bruger på Affaldsguiden</p>
                <p>for at anmelde stationer</p>
                <Link to="/login">
                    <Button
                        text={"Har du ikke en bruger? Klik her"}
                        bgColor={"var(--darkGreen"}
                    />
                </Link>

            </figure>

            <form onSubmit={(event) => handleSignup(event)}>
                <h1>Sign Up</h1>
                <p>Indtast dine informationer for at oprette en bruger</p>
                <label htmlFor="firstname">Firstname
                    <input name="firstname" type="text" />
                </label>
                <label htmlFor="lastname">Lastname
                    <input name="lastname" type="text" />
                </label>
                <label htmlFor="email">Email
                    <input name="email" type="email" />
                </label>
                <label htmlFor="password">Password
                    <input name="password" type="password" />
                </label>
                <input value="Sign up" type="submit" className={SignUpPageStyle.submit} />
            </form>
            
        </section >
    )
}
