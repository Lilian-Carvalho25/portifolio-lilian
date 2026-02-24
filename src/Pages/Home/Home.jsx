import ProjectBox from "../../Components/ProjectBox/ProjectBox";
import emailjs from 'emailjs-com';
import { useState, useRef } from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import ScrollRevealComponent from "../../Components/ScrollReveal/ScrollReveal";
import SkillBoxes from "../../Components/SkillBoxes/SkillBoxes";
import BoxTimeline from "../../Components/BoxTimeline/BoxTimeline";

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
                    <h4>Conheça minhas</h4>
                    <h2>Hard Skills</h2>
                    <div className="skills">
                        <div className="superior-skills">
                            <SkillBoxes ImgSkill={"icon-git.svg"} AltSkill={"Ícone do git"} NameSkill={"GIT"}/>
                            <SkillBoxes ImgSkill={"icon-html.svg"} AltSkill={"Ícone do html"} NameSkill={"HTML"}/>
                            <SkillBoxes ImgSkill={"icon-css.svg"} AltSkill={"Ícone do css"} NameSkill={"CSS"}/>
                            <SkillBoxes ImgSkill={"icon-javascript.svg"} AltSkill={"Ícone do javascript"} NameSkill={"Javascript"}/>
                            <SkillBoxes ImgSkill={"icon-react.svg"} AltSkill={"Ícone do react"} NameSkill={"React"}/>
                            <SkillBoxes ImgSkill={"icon-angular.svg"} AltSkill={"Ícone do angular"} NameSkill={"Angular"}/>
                            <SkillBoxes ImgSkill={"icon-bootstrap.svg"} AltSkill={"Ícone do bootstrap"} NameSkill={"Bootstrap"}/>
                            <SkillBoxes ImgSkill={"icon-tailwind.svg"} AltSkill={"Ícone do tailwind"} NameSkill={"Tailwind"}/>
                        </div>
                        <div className="lower-skills">
                            <SkillBoxes ImgSkill={"icon-python.svg"} AltSkill={"Ícone do python"} NameSkill={"Python"}/>
                            <SkillBoxes ImgSkill={"icon-java.svg"} AltSkill={"Ícone do java"} NameSkill={"Java"}/>
                            <SkillBoxes ImgSkill={"icon-php.svg"} AltSkill={"Ícone do php"} NameSkill={"PHP"}/>
                            <SkillBoxes ImgSkill={"icon-typescript.svg"} AltSkill={"Ícone do typescript"} NameSkill={"Typescript"}/>
                            <SkillBoxes ImgSkill={"icon-sql.svg"} AltSkill={"Ícone do sql"} NameSkill={"SQL"}/>
                            <SkillBoxes ImgSkill={"icon-aws.svg"} AltSkill={"Ícone do aws"} NameSkill={"AWS"}/>
                            <SkillBoxes ImgSkill={"icon-figma-skills.svg"} AltSkill={"Ícone do figma"} NameSkill={"Figma"}/>
                            <SkillBoxes ImgSkill={"icon-illustrator.svg"} AltSkill={"Ícone do illustrator"} NameSkill={"Illustrator"}/>
                        </div>
                    </div>
                </section>
                <section className="timeline" id="timeline">
                    <div className="timeline-title">
                        <div className="box-title-timeline">
                            <img src="icon-maletinha.png" alt="ícone de uma maleta de trabalho" />
                            <h4>Experiências</h4>
                        </div>
                        <div className="box-title-timeline">
                            <img src="icon-certificado.png" alt="ícone de um certificado" />
                            <h4>Educação</h4>
                        </div>
                    </div>
                    <div className="timeline-boxes">
                        <div className="timeline-boxes-left">
                            <BoxTimeline TitleTimeline={"2024 - Presente | Itaú Unibanco"} SubtitleTimeline={"DESENVOLVEDORA DE SOFTWARE"} DescriptionTimeline={"Início da jornada como estagiária, atuando com: Python, Django, Angular e diversos serviços AWS."} />
                            <BoxTimeline TitleTimeline={"2023 - 2023 | Djeli"} SubtitleTimeline={"CEO E CO-FUNDADORA"} DescriptionTimeline={"Atuei como CEO, representando os integrantes como porta voz da startup, além da identidade visual, e os códigos."} />
                            <BoxTimeline TitleTimeline={"2023 - 2023 | AfroGlow"} SubtitleTimeline={"PO, DESENVOLVEDORA E UI/UX"} DescriptionTimeline={"Gerenciei as tarefas do time, usamos metodologias agéis, fui dev full-stack e trabalhei na identidade visual da startup."} />
                        </div>
                        <div className="timeline-boxes-right">
                            <BoxTimeline TitleTimeline={"2024 - 2026 | Faculdade IMPACTA"} SubtitleTimeline={"A. E DESENVOLVIMENTO DE SISTEMAS"} DescriptionTimeline={"Gradução que forma profissionais aptos a projetar, analisar, desenvolver e implementar sistemas de informação."} />
                            <BoxTimeline TitleTimeline={"2023 | Instituto Proa"} SubtitleTimeline={"DESENVOLVEDOR WEB JAVA"} DescriptionTimeline={"Curso focado em empregabilidade, onde o jovem é preparado nos núcleos técnico e comportamental."} />
                            <BoxTimeline TitleTimeline={"2023 | Escola da nuvem"} SubtitleTimeline={"FUNDAMENTOS EM AWS"} DescriptionTimeline={"Tópicos projetados para fornecer uma compreensão básico dos serviços e conceitos essenciais da AWS."} />
                            <BoxTimeline TitleTimeline={"2023 | Senac"} SubtitleTimeline={"DESENVOLVEDOR WEB"} DescriptionTimeline={"Curso com o intuito de formar programadores com a capacidade de desenvolver em front e back-end"} />
                        </div>
                    </div>
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
                                <button type="submit">ENVIAR</button>
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