import styles from './Buttons.module.scss';

const Button = (props) => {
    return (
    <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.action}>
        {props.children}
        </button>
    </div>
    );
};

export default Button;