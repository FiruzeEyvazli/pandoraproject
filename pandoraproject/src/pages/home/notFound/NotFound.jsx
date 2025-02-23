import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404</h1>
            <h2 style={styles.subheading}>Səhifə tapılmadı</h2>
            <p style={styles.text}>Axtardığınız səhifə mövcud deyil və ya silinib.</p>
            <Link to="/" style={styles.button}>Əsas səhifəyə qayıt</Link>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
    },
    heading: {
        fontSize: "80px",
        fontWeight: "bold",
        color: "#ff4d4d",
    },
    subheading: {
        fontSize: "30px",
        fontWeight: "bold",
    },
    text: {
        fontSize: "18px",
        color: "#666",
    },
    button: {
        marginTop: "20px",
        display: "inline-block",
        padding: "10px 20px",
        fontSize: "18px",
        color: "#fff",
        backgroundColor: "#007bff",
        textDecoration: "none",
        borderRadius: "5px",
    },
};

export default NotFound;
