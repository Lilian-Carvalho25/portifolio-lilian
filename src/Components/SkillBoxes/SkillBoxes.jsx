import ScrollRevealComponent from "../ScrollReveal/ScrollReveal";
import "./SkillBoxes.css";
import { useTheme } from "../../ThemeContext";

// eslint-disable-next-line react/prop-types
const SkillBoxes = ({ImgSkill, AltSkill, NameSkill}) => {

    const { theme } = useTheme();

    return(
        <article className="box-skills" style={{ background: theme.NavBackground, border: theme.border }}>
            <ScrollRevealComponent />
            <img src={ImgSkill} alt={AltSkill} />
            <p style={{ color: theme.text }}>{NameSkill}</p>
        </article>
    );
};

export default SkillBoxes;

