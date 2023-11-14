import '../styles/skills.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Skills = ({onFormDataChangeSkills}) => {
    const [formSkillsData, setFormData] = useState({
        skills: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formSkillsData,
            [name]: value,
        });
        onFormDataChangeSkills({ ...formSkillsData, [name]: value });

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formSkillsData.skills) {
            alert('Please fill in all required fields.');
            return;
        }

    };
    Skills.propTypes = {
        onFormDataChangeSkills: PropTypes.func.isRequired,

    };
    return (
        <div className='skills-container'>
            <div className='skills-title'>
                <h2 className='skills-icon' >
                    <FontAwesomeIcon icon={faScrewdriverWrench} size="lg" style={{ color: "#ED7D31", }} /> Skills</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    className='skills-input'
                    type="text"
                    name="skills"
                    placeholder='Technolohy or Language'
                    value={formSkillsData.skills}
                    onChange={handleChange}
                />
            </form>

        </div>
    );
};

export default Skills;
