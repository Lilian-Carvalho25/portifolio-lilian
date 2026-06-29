import ScrollRevealComponent from "../ScrollReveal/ScrollReveal";
import "./AwardCard.css";
import { useTheme } from "../../ThemeContext";

// eslint-disable-next-line react/prop-types
const AwardCard = ({ medalType, title, description }) => {

    const { theme } = useTheme();

    const getMedalIcon = (type) => {
        switch(type) {
            case 'gold':
                return 'medal-gold.svg';
            case 'silver':
                return 'medal-silver.svg';
            case 'bronze':
                return 'medal-bronze.svg';
            default:
                return 'medal-gold.svg';
        }
    };

    const getMedalColor = (type) => {
        switch(type) {
            case 'gold':
                return '#FFD700';
            case 'silver':
                return '#C0C0C0';
            case 'bronze':
                return '#CD7F32';
            default:
                return '#FFD700';
        }
    };

    return(
        <article className={`award-card ${theme.text === 'black' ? 'light-theme' : ''}`} style={{ background: theme.NavBackground, border: theme.border }}>
            <ScrollRevealComponent />
            <span className="sparkle"></span>
            <span className="sparkle"></span>
            <span className="sparkle"></span>
            <span className="sparkle"></span>
            <div className="medal-wrapper">
                <img src={getMedalIcon(medalType)} alt={`Medalha ${medalType}`} className="medal-icon" />
            </div>
            <h3 style={{ color: theme.text }}>{title}</h3>
            <p style={{ color: theme.text }}>{description}</p>
        </article>
    );
};

export default AwardCard;
