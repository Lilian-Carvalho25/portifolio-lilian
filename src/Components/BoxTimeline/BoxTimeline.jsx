import ScrollRevealComponent from "../ScrollReveal/ScrollReveal";
import "./BoxTimeline.css";
import { useTheme } from "../../ThemeContext";

// eslint-disable-next-line react/prop-types
const BoxTimeline = ({TitleTimeline, SubtitleTimeline, DescriptionTimeline, isCurrent}) => {

    const { theme } = useTheme();

    return(
        <div className={`box-timeline ${isCurrent ? 'current-position' : ''}`} style={{ background: theme.NavBackground, color: theme.text,  border: theme.border }}>
                <ScrollRevealComponent />
                {isCurrent && <span className="current-badge">Atual</span>}
                <h4>{TitleTimeline}</h4>
                <h3>{SubtitleTimeline}</h3>
                <p>{DescriptionTimeline}</p>
        </div>
    );
};

export default BoxTimeline;

