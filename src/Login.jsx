import { Link, useNavigate } from "react-router-dom";
import styles from "./Pay.module.css";
function Login() {
    const navigate = useNavigate();

    //Redirect to pay page
    function handleSubmit(e) {
        e.preventDefault(); //Prevent page from reloading
        navigate("/Pay");
    }
    return(
        <>
            <div className={styles.LoginDiv}>
                <form className={styles.LoginForm} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter username" required/>
                    <input type="password" placeholder="Enter password" required/>
                    <input type="submit" value="SignIn"/>
                    <a href="#"> Forgot password </a>
                </form>
                <p> Don't have an account? 
                    <Link to ='/Register'>
                        Sign Up 
                    </Link>
                </p>
            </div>
        </>
    );
}

export default Login;