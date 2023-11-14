import '../styles/experience.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Experience = ({ onFormDataChangeExperience }) => {
    const [formExperienceData, setFormData] = useState({
        position: '',
        company: '',
        startDate: '',
        endDate: '',
        occupation: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formExperienceData,
            [name]: value,
        });
        onFormDataChangeExperience({ ...formExperienceData, [name]: value });

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formExperienceData.position
            || !formExperienceData.company
            || !formExperienceData.startDate
            || !formExperienceData.endDate
            || !formExperienceData.occupation) {
            alert('Please fill in all required fields.');
            return;
        }
    };
    Experience.propTypes = {
        onFormDataChangeExperience: PropTypes.func.isRequired,

    };
    return (
        <div className='experience-container'>
            <div className='experience-title'>
                <h2 className='experience-icon' >
                    <FontAwesomeIcon icon={faBriefcase} size="lg" style={{ color: "#ED7D31", }} /> Work Experience</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    className='experience-input'
                    type="text"
                    name="position"
                    placeholder='Position'
                    value={formExperienceData.position}
                    onChange={handleChange}
                />
                <input
                    className='experience-input'
                    type="text"
                    name="company"
                    placeholder='Company'
                    value={formExperienceData.company}
                    onChange={handleChange}
                />
                <input
                    className='experience-input'
                    type="date"
                    name="startDate"
                    value={formExperienceData.startDate}
                    onChange={handleChange}
                />          
               <input
                    className='experience-input'
                    type="date"
                    name="endDate"
                    value={formExperienceData.endDate}
                    onChange={handleChange}
                />
                <input
                    className='experience-input'
                    type="text"
                    name="occupation"
                    placeholder='Occupation'
                    value={formExperienceData.occupation}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default Experience;
