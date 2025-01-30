import PropTypes from "prop-types";

function SkillCard({ title, percent }) {
  return (
    <div className="skill-box">
      <div className="progress-container">
        <div id="progress-title">
          <p>{title}</p>
          <p id="progress-percent">{percent}%</p>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${percent}%` }}></div>
        </div>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  title: PropTypes.string,
  percent: PropTypes.number,
};

export default SkillCard;
