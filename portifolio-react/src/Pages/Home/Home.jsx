import ProjectBox from "../../Components/ProjectBox/ProjectBox";
import "./Home.css";
import { Link } from "react-router-dom"

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

        <div className="container-emphasis">
        <section className="home">
            <div className="home-text">
                <span>Software Developer</span>
                <h1>Lilian Carvalho</h1>
                <p>Olá, seja bem vindo(a)! Tenho 18 anos, sou desenvolvedora full-stack Jr e moro em São Paulo. Fique a vontade para conhecer melhor o meu trabalho. </p>
                <div className="main-bnt">
                    <a href="Lilian-Carvalho-Santos-Ribeiro.pdf" className="bnt" download>Baixar CV</a>
                    <a href="#portfolio" className="bnt two">Meus projetos</a>
                </div>
            </div>
            <div className="share">
                <p>Minhas redes:</p>
                <div className="social" id="about-me">
                    <a href="https://www.linkedin.com/in/lilian-carvalho25/" target="_blank" rel="noreferrer"><img src="icon-linkedin.svg" alt="" width="27px"></img></a>
                    <a href="https://github.com/Lilian-Carvalho25" target="_blank" rel="noreferrer"><img src="icon-github.svg" alt="" width="27px"></img></a>
                    <a href="https://linktr.ee/lilian.csribeiro" target="_blank" rel="noreferrer"><img src="icon-linktree.png" alt="" width="28px"></img></a>
                </div>
            </div>
        </section>
        <div className="home-img">
            <img src="foto-destaque.png" alt=""></img>
        </div>
    </div>

    <section className="container-about-me">
        <img src="sobre-mim.png" alt="" className="about-mee"></img>
        <article className="about-me">
            <h4>Quem sou eu?</h4>
            <h2>Lilian Carvalho, desenvolvedora Full-stack Jr.</h2>
            <p id="skills">Cursei desenvolvimento web pelo Senac no ínicio deste ano, e hoje curso Desenvolvimento web Java pelo instituto Proa. Entre as minhas soft skills destaco a minha comunicação efetiva, proatividade, resolução de conflitos etc.</p>
        </article>
    </section>

    <section className="container-skills">
        <h2>Minhas Skills</h2>
        <div className="skills">
            <article className="box-skills">
                <div className="description">
                    <img src="icon-front.svg" alt=""></img>
                    <h3>Front-end</h3>
                    <p>HTML, CSS, Javascript, Bootstrap, React e TypeScript.</p>
                </div>
            </article>

            <article className="box-skills">
                <div className="description">
                    <img src="icon-back-end.svg" alt=""></img>
                    <h3>Back-end</h3>
                    <p>PHP e Java.</p>
                </div>
            </article>

            <article className="box-skills">
                <div className="description">
                    <img src="icon-banco-de-dados.svg" alt=""></img>
                    <h3>Banco de dados</h3>
                    <p id="portfolio">SQL.</p>
                </div>
            </article>
        </div>
    </section>

    <section className="container-portfolio">
        <h4>Hora de navegar em</h4>
        <h2>Meus projetos</h2>
        <div className="portfolio">
            <ProjectBox ImgProject={"projeto-nutriacess.png"} NameProject={"NutriAcess"} DescriptionProject={"A Nutriacess é uma plataforma desenvolvida com o objetivo de democratizar o acesso a consultas nutricionais de forma acessível."} SkillsProject1={"Figma"} SkillsProject2={"React"} SkillsProject3={"Typescript"} SkillsProject4={"MySQL"} SkillsProject5={"Node"} SiteProject={"http://nutriacess.com.br/"} GithubProject={"https://github.com/Lilian-Carvalho25/front-nutriacess"} GithubProject2={"https://github.com/NutriAcess/NutriAcess_Back-end"} FigmaProject={"https://www.figma.com/file/FNNHvyBxXBNVziRP1AKOd8/Nutriacess%2Fdesktop?type=design&node-id=0%3A1&mode=design&t=pyNbpWf6XgsbzeO5-1"}/>
            
            <ProjectBox ImgProject={"projeto-brasa-divina.png"} NameProject={"Brasa divina"} DescriptionProject={"Brasa divina é um exemplo de site para uma pizzaria real. Nele, o usuário tem a opção de selecionar opções prontas, ou montar sua própria pizza."} SkillsProject1={"Figma"} SkillsProject2={"HTML/CSS"} SkillsProject3={"JS"} SkillsProject4={"MySQL"} SkillsProject5={"PHP"} SiteProject={"http://brasa-divina.x10.mx/index.php"} GithubProject={"https://github.com/AfroGlow/PlataformaAfroGlow?tab=readme-ov-file"} GithubProject2={null}  FigmaProject={"https://www.figma.com/file/cTKmShxHOqdVNfJ2HXuXdy/Brasa-Divina?type=design&node-id=0%3A1&mode=design&t=GIjG3NN5jcoHcEhc-1"}/>

            <ProjectBox ImgProject={"projeto-afroglow.png"} NameProject={"AfroGlow"} DescriptionProject={"A AfroGlow visa fortalecer a autoestima de crianças com cabelos afro, proporcionando autoestima e um forte sentimento de pertencimento."} SkillsProject1={"Figma"} SkillsProject2={"React/CSS"} SkillsProject3={"Bootstrap"} SkillsProject4={"Java/Spring"} SkillsProject5={"SQL"} SiteProject={"https://www.afroglow.com.br/"} GithubProject={"https://github.com/AfroGlow/PlataformaAfroGlow?tab=readme-ov-file"} GithubProject2={"https://github.com/AfroGlow/BackendAfroGlow"} FigmaProject={"https://www.figma.com/file/tmMpKY6U0T90iErD8FBUMQ/AfroGlow?type=design&node-id=111%3A3&mode=design&t=f3EANUKr8BZomecZ-1"}/>
        </div>
        <article className="all-projects">
            <Link to="/all-projects" className="bnt-all">Todos os projetos <img src="arrow-right.svg" alt="" width="10px"></img></Link>
        </article>
    </section>

    <section className="container-contact" id="container-contact">
        <h4>Ficou interessado(a)?</h4>
        <h2>Entre em contato</h2>
        <div className="contact">
            <article className="box-contact">
                <img src="icon-emaill.svg" alt=""></img>
                <h3>E-mail:</h3>
                <a href="mailto:liliancarvalho.developer@gmail.com">Clique aqui</a>
            </article>
            <article className="box-contact">
                <img src="icon-linkedinn.svg" alt=""></img>
                <h3>LinkedIn:</h3>
                <a href="https://www.linkedin.com/in/lilian-carvalho25/" target="_blank" rel="noreferrer">Lilian Carvalho</a>
            </article>
        </div>
    </section>
        </>
    )
}

export default Home