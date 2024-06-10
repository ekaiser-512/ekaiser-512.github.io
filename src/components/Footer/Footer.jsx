import "./Footer.css"

const Footer = () => {
    const socials = [
        { href: "https://www.linkedin.com/in/emily-kaiser512/", name: "LinkedIn", desc: "LinkedIn link" }
    ];

    return (
        <footer id = "contact">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Call me, beep me</h4>
                    <p>ekaiser@indeed.com</p>
                    <p> phone: not your business, friend</p>
                </div>
                <div className="social-links">
                        {socials.map((item, index) => (
                            <a key={index} href={item.href} aria-label={item.desc}>{item.name}</a>
                        ))}
                    </div>
            </div>
            <div className = "footer-bottom">
                <p>&copy; 2024 My Portfolio. All rights reserved unless you want to catch these hands</p>
            </div>
        </footer>
    )
}
export default Footer;