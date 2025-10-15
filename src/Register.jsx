import { Link, useNavigate } from "react-router-dom";
import styles from "./Pay.module.css";
function Register() {
    const navigate = useNavigate();

    //Redirect to the login page
    function handleSubmit(e) {
        e.preventDefault();
        navigate("/Login");
    }
    return(
        <>
            <div className={styles.LoginDiv}>
                <form onSubmit={handleSubmit}>
                    <h1> Sign up </h1>
                    <input type="text" placeholder="Full name" required/>
                    <input type="number" placeholder="Phone number"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Create password"/>
                    <input type="submit" value="Sign up"/>
                </form>
                <p> Already have an accout? 
                    <Link to = '/Login'> sign In </Link>
                </p>
            </div>
        </>
    );
}

export default Register;