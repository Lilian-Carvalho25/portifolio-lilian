import ScrollRevealComponent from "../ScrollReveal/ScrollReveal";
import "./SkillBoxes.css";

// eslint-disable-next-line react/prop-types
const SkillBoxes = ({ImgSkill, AltSkill, NameSkill}) => {
    return(
        <article className="box-skills">
            <ScrollRevealComponent />
            <img src={ImgSkill} alt={AltSkill} />
            <p>{NameSkill}</p>
        </article>
    );
};

export default SkillBoxes;

