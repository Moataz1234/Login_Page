import { useRef } from "react";
import styles from "./index.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { useLoader } from "../../store";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
    const { open, close } = useLoader();
    const phoneInput = useRef();
    const codeInput = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        open();
        e.preventDefault();
        let data = {
            user_phone: phoneInput.current.value,
            user_code: codeInput.current.value
        }
        
        // Verify (keeping your existing endpoint for now)
        let domainName = "https://support.israaosman.com";
        let endPoint = "/php/index.php/api/auth/login";
        let url = domainName + endPoint;
        
        axios.post(url, data).then((res) => {
            if (res.data.err) {
                setTimeout(() => {
                    Swal.fire({
                        icon: "error",
                        title: "Wrong Phone Number or Code",
                        timer: 1500
                    }).then(() => {
                        close()
                    })
                }, 2000);
            } else {
                setTimeout(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Login Success",
                        timer: 1500
                    }).then(() => {
                        close();
                        navigate('/');
                    })
                }, 2000);
            }
        })
    }

    const handleOtherButtons = () => {
        navigate('/404');
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h1>Login</h1>
                
                <div className={styles.socialLogin}>
                    <button onClick={handleOtherButtons} className={styles.googleBtn}>
                        <FcGoogle /> Login with Google
                    </button>
                    <button onClick={handleOtherButtons} className={styles.appleBtn}>
                        <FaApple /> Login with Apple
                    </button>
                </div>

                <div className={styles.divider}>
                    <span>or Login with</span>
                </div>

                <form onSubmit={handleSubmit}>
                    <input
                        ref={phoneInput}
                        type="tel"
                        placeholder="Phone Number"
                        // required
                    />
                    <input
                        ref={codeInput}
                        type="password"
                        placeholder="Code"
                        // required
                    />
                    
                    <div className={styles.rememberForgot}>
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link to="/404">Forgot password?</Link>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        Submit
                    </button>
                </form>

                <div className={styles.signup}>
                    Don't have an account? <Link to="/404">Signup</Link>
                </div>
            </div>
        </div>
    )
}