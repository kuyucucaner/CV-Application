import '../styles/education.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Education = ({onFormDataChangeEducation}) => {
    const [formEducationData, setFormData] = useState({
        school: '',
        degree: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formEducationData,
            [name]: value,
        });
        onFormDataChangeEducation({ ...formEducationData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formEducationData.school || !formEducationData.degree) {
            alert('Please fill in all required fields.');
            return;
        }

    };
    Education.propTypes = {
        onFormDataChangeEducation: PropTypes.func.isRequired,

    };
    return (
        <div className='education-container'>
            <div className='education-title'>
                <h2 className='education-icon' >
                    <FontAwesomeIcon icon={faAward} size="lg" style={{ color: "#ED7D31", }} /> Education</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    className='education-input'
                    type="text"
                    name="school"
                    placeholder='School'
                    value={formEducationData.school}
                    onChange={handleChange}
                />
                   <input
                    className='education-input'
                    type="text"
                    name="degree"
                    placeholder='Degree'
                    value={formEducationData.degree}
                    onChange={handleChange}
                />
            </form>

        </div>
    );
};

export default Education;
