import "./Home.css";

const Home = () => {
    return(
        <>
        <header>
        <a href="#" className="logo">Lilian<span>.dev</span></a>
        <ul className="navbar">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#about-me">Sobre mim</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#container-contact">Contato</a></li>
        </ul>

        <div className="menu-btn">
            <div>
                <img src="bx-menu.svg" id="menu-icon" alt="" className="bx-x"></img>
            </div>
        </div>
    </header>

    
        </>
    )
}

export default Home