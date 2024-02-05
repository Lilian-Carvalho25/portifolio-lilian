import ProjectBox from "../../Components/ProjectBox/ProjectBox";
import emailjs, { send } from 'emailjs-com';
import { useState, useRef } from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import ScrollRevealComponent from "../../Components/ScrollReveal/ScrollReveal";

const Home = () => {

    const ref = useRef();
    const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ubftdwf",
        "template_5uc8aer",
        ref.current,
        "v269QHhYIa7uxQKJF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };


    const { theme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const { toggleTheme } = useTheme();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

    return (
            <div>
                <ScrollRevealComponent />
                <header style={{ background: theme.NavBackground, color: theme.text }}>
                    <a href="#" className="logo" style={{ color: theme.text }}>Lilian<span>.dev</span></a>
                    <ul className={`navbar ${menuOpen ? 'open' : ''}`} style={{ background: theme.NavBackground, color: theme.text }}>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#about-me" style={{ color: theme.text }}>Sobre mim</a></li>
                        <li><a href="#skills" style={{ color: theme.text }}>Skills</a></li>
                        <li><a href="#timeline" style={{ color: theme.text }}>Educação</a></li>
                        <li><a href="#portfolio" style={{ color: theme.text }}>Portfólio</a></li>
                        <li><a href="#container-contact" style={{ color: theme.text }}>Contato</a></li>
                    </ul>
                    <div className="menu-btn" onClick={toggleMenu}>
                        <div>
                            <img src="bx-menu.svg" id="menu-icon" alt="" className="bx-x"></img>
                        </div>
                    </div>
                </header>
                <div className="container-emphasis">
                    <section className="home">
                        <div className="home-text">
                            <span>Software Developer & UI/UX designer</span>
                            <h1>Lilian Carvalho</h1>
                            <p style={{ color: theme.text }}>Olá, seja bem vindo(a)! Prepadado(a) para uma experiência arrebatadora? Prazer, sou desenvolvedora Full-stack Jr. Fique a vontade para conhecer melhor o meu trabalho. </p>
                            <div className="main-bnt">
                                <a href="Lilian-Carvalho-Santos-Ribeiro.pdf" className="bnt" download>Baixar CV</a>
                                <a href="#portfolio" className="bnt two">Meus projetos</a>
                            </div>
                        </div>
                        <div className="share">
                            <p style={{ color: theme.text }}>Minhas redes:</p>
                            <div className="social" id="about-me">
                                <a href="https://www.linkedin.com/in/lilian-carvalho25/" target="_blank" rel="noreferrer"><img src="icon-linkedin.svg" alt="" width="30px"></img></a>
                                <a href="https://github.com/Lilian-Carvalho25" target="_blank" rel="noreferrer"><img src="icon-github.svg" alt="" width="30px"></img></a>
                                <a href="https://linktr.ee/lilian.csribeiro" target="_blank" rel="noreferrer"><img src="icon-linktree.png" alt="" width="31px"></img></a>
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
                        <p id="skills">A tecnologia me encanta, e desperta os meus melhores sentimentos. Minha trajetória começou a um pouco mais de um ano, e me apaixonei completamente por esse universo. Fiz alguns cursos voltados para tecnologia, e hoje curso ADS na faculdade IMPACTA. A empatia, proatividade e a atenção aos detalhes são algumas das características que me destacam.</p>
                    </article>
                </section>
                <section className="container-skills">
                    <h2>Minhas Skills</h2>
                    <div className="skills">
                        <article className="box-skills" style={{ background: theme.skillsBackground }}>
                            <div className="description">
                                <img src="icon-front.svg" alt=""></img>
                                <h3>Front-end</h3>
                                <p>HTML, CSS, Javascript, Bootstrap, React e TypeScript.</p>
                            </div>
                        </article>
                        <article className="box-skills" style={{ background: theme.skillsBackground }}>
                            <div className="description">
                                <img src="icon-back-end.svg" alt=""></img>
                                <h3>Back-end</h3>
                                <p>PHP e Java.</p>
                            </div>
                        </article>
                        <article className="box-skills" style={{ background: theme.skillsBackground }}>
                            <div className="description">
                                <img src="icon-banco-de-dados.svg" alt=""></img>
                                <h3>Banco de dados</h3>
                                <p id="portfolio">SQL.</p>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="timeline" id="timeline">
                    <h4>Saiba mais sobre minha</h4>
                    <h2>Educação</h2>
                    <article className="container-timeline">
                        <div className="box-timeline">
                            <div className="education">
                                <div className="experiences">
                                    <i className="icons-timeline">📚</i>
                                    <div className="timeline-information">
                                        <span>2024 - 2026</span>
                                        <h3 style={{ color: theme.text }}>Análise e desenvolvimento de sistemas</h3>
                                        <p style={{ color: theme.text }}>Graduação na faculdade IMPACTA que forma profissionais aptos a projetar, analisar, desenvolver e implementar sistemas de informação.</p>
                                    </div>
                                </div>
                                <div className="experiences">
                                    <i className="icons-timeline">📚</i>
                                    <div className="timeline-information">
                                        <span>2023</span>
                                        <h3 style={{ color: theme.text }}>Desevolvedor Web Java</h3>
                                        <p style={{ color: theme.text }}>O Proa é um curso focado em empregabilidade, onde o jovem é preparado nos núcleos Técnico e Comportamental. O núcleo técnico desenvolve as competências técnicas do aluno em desenvolvimento Web Full Stack por meio de trabalho em grupo, vivências corporativas, projetos e atividades.</p>
                                    </div>
                                </div>
                                <div className="experiences">
                                    <i className="icons-timeline">📚</i>
                                    <div className="timeline-information">
                                        <span>2023</span>
                                        <h3 style={{ color: theme.text }}>Fundamentos em AWS</h3>
                                        <p style={{ color: theme.text }}>Abrangeu uma variedade de tópicos projetados para fornecer uma compreensão básica dos serviços e conceitos essenciais da AWS.</p>
                                    </div>
                                </div>
                                <div className="experiences">
                                    <i className="icons-timeline">📚</i>
                                    <div className="timeline-information">
                                        <span>2023</span>
                                        <h3 style={{ color: theme.text }}>Desenvolvedor Web</h3>
                                        <p style={{ color: theme.text }}>Programador web é um curso do Senac com o intuito de formar programadores com a capacidadade e a habilidade de estruturar em Front-end e desenvolver em Back-end, publicando aplicações web.Aqui eu tive o meu primeiro contato com programação e design, e aprendi muito.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="container-portfolio" id="portfolio">
                    <h4>Hora de navegar em</h4>
                    <h2>Meus projetos</h2>
                    <div className="portfolio">
                        <ProjectBox ImgProject={"projeto-nutriacess.png"} NameProject={"NutriAcess"} DescriptionProject={"A Nutriacess é uma plataforma desenvolvida com o objetivo de democratizar o acesso a consultas nutricionais de forma acessível."} SkillsProject1={"Figma"} SkillsProject2={"React"} SkillsProject3={"Typescript"} SkillsProject4={"MySQL"} SkillsProject5={"Node"} SiteProject={"http://nutriacess.com.br/"} GithubProject={"https://github.com/Lilian-Carvalho25/front-nutriacess"} GithubProject2={"https://github.com/NutriAcess/NutriAcess_Back-end"} FigmaProject={"https://www.figma.com/file/FNNHvyBxXBNVziRP1AKOd8/Nutriacess%2Fdesktop?type=design&node-id=0%3A1&mode=design&t=pyNbpWf6XgsbzeO5-1"} />
                        <ProjectBox ImgProject={"projeto-brasa-divina.png"} NameProject={"Brasa divina"} DescriptionProject={"Brasa divina é um exemplo de site para uma pizzaria real. Nele, o usuário tem a opção de selecionar opções prontas, ou montar sua própria pizza."} SkillsProject1={"Figma"} SkillsProject2={"HTML/CSS"} SkillsProject3={"JS"} SkillsProject4={"MySQL"} SkillsProject5={"PHP"} SiteProject={"http://brasa-divina.x10.mx/index.php"} GithubProject={"https://github.com/AfroGlow/PlataformaAfroGlow?tab=readme-ov-file"} GithubProject2={null} FigmaProject={"https://www.figma.com/file/cTKmShxHOqdVNfJ2HXuXdy/Brasa-Divina?type=design&node-id=0%3A1&mode=design&t=GIjG3NN5jcoHcEhc-1"} />
                        <ProjectBox ImgProject={"projeto-afroglow.png"} NameProject={"AfroGlow"} DescriptionProject={"A AfroGlow visa fortalecer a autoestima de crianças com cabelos afro, proporcionando autoestima e um forte sentimento de pertencimento."} SkillsProject1={"Figma"} SkillsProject2={"React/CSS"} SkillsProject3={"Bootstrap"} SkillsProject4={"Java/Spring"} SkillsProject5={"SQL"} SiteProject={"https://www.afroglow.com.br/"} GithubProject={"https://github.com/AfroGlow/PlataformaAfroGlow?tab=readme-ov-file"} GithubProject2={"https://github.com/AfroGlow/BackendAfroGlow"} FigmaProject={"https://www.figma.com/file/tmMpKY6U0T90iErD8FBUMQ/AfroGlow?type=design&node-id=111%3A3&mode=design&t=f3EANUKr8BZomecZ-1"} />
                    </div>
                    <article className="all-projects">
                        <Link to="/all-projects" className="bnt-all">Todos os projetos <img src="arrow-right.svg" alt="" width="10px"></img></Link>
                    </article>
                </section>
                <section className="container-contact" id="container-contact">
                    <h4>Ficou interessado(a)?</h4>
                    <h2>Entre em contato</h2>
                    <div className="container-secondary-contact">
                        <article>
                            <form ref={ref} onSubmit={handleSubmit} className="forms-contact">
                                <input type="text" placeholder="Nome" name="name"></input>
                                <input type="email" placeholder="Email" name="email"></input>
                                <textarea placeholder="Mensagem"name="message" rows={7}></textarea>
                                <button type="submit"value={send}>ENVIAR</button>
                                {success &&
                                "Mensagem enviada com sucesso!"}
                            </form>
                        </article>
                        <article>
                        <img src="foto-final.png" alt="lilian versão avatar"></img>
                        </article>
                    </div>
                </section>
                <div className="fixed-icon" onClick={toggleTheme} style={{ background: theme.NavBackground }}><img src="icon-moon-sun.svg" alt="icone de sol e lua" width="30px"></img></div>
                <footer className="footer">
                    <p>© Lilian Carvalho 2024. Todos os direitos reservados.</p>
                    <div className="icons-footer">
                    <a href="https://www.linkedin.com/in/lilian-carvalho25/" target="_blank" rel="noreferrer"><img src="icon-linkedin.svg" width="25px"></img> - </a>
                    <a href="https://github.com/Lilian-Carvalho25" target="_blank" rel="noreferrer"><img src="icon-github.svg" width="25px"></img> - </a>
                    <a href="mailto:liliancarvalho.developer@gmail.com" target="_blank" rel="noreferrer"><img src="icon-emaill.svg" width="25px"></img></a>
                    </div>
                </footer>
        
            </div>
    )
}

export default Home