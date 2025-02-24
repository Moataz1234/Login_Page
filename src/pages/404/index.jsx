import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.errorPage}>
            <div className={styles.logo}>MURADOV</div>
            <div className={styles.errorContent}>
                <span className={styles.four}>4</span>
                <div className={styles.animatedZero}></div>
                <span className={styles.four}>4</span>
            </div>
        </div>
    );
}
