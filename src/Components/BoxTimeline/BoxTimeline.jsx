import ScrollRevealComponent from "../ScrollReveal/ScrollReveal";
import "./BoxTimeline.css";

// eslint-disable-next-line react/prop-types
const BoxTimeline = ({TitleTimeline, SubtitleTimeline, DescriptionTimeline}) => {
    return(
        <div className="box-timeline">
                <ScrollRevealComponent />
                <h4>{TitleTimeline}</h4>
                <h3>{SubtitleTimeline}</h3>
                <p>{DescriptionTimeline}</p>
        </div>
    );
};

export default BoxTimeline;

