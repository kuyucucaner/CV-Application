import '../styles/personel.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Personel = ({ setSelectedImagePath, onFormDataChangePersonal }) => {
    const [formPersonalData, setFormData] = useState({
        firstName: '',
        lastName: '',
        profession: '',
        description: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formPersonalData,
            [name]: value,
        });
        onFormDataChangePersonal({ ...formPersonalData, [name]: value });

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formPersonalData.firstName || !formPersonalData.lastName || !formPersonalData.profession || !formPersonalData.description) {
            alert('Please fill in all required fields.');
            return;
        }

    };
    const handleImageChange = (event) => {
        const path = URL.createObjectURL(event.target.files[0]);
        setSelectedImagePath(path);
    };
    Personel.propTypes = {
        setSelectedImagePath: PropTypes.func.isRequired,
        onFormDataChangePersonal: PropTypes.func.isRequired,

    };
    return (
        <div className='personal-container'>
            <div className='personal-title'>
                <h2 className='personal-icon' >
                    <FontAwesomeIcon icon={faAddressCard} size="lg" style={{ color: "#ED7D31", }} /> Personel Data</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    className='personal-input'
                    type="text"
                    name="firstName"
                    placeholder='First Name'
                    value={formPersonalData.firstName}
                    onChange={handleChange}
                />
                <input
                    className='personal-input'
                    type="text"
                    name="lastName"
                    placeholder='Last Name'
                    value={formPersonalData.lastName}
                    onChange={handleChange}
                />
                <input
                    className='personal-input'
                    type="text"
                    name="profession"
                    placeholder='Profession'
                    value={formPersonalData.profession}
                    onChange={handleChange}
                />
                <input
                    className='personal-input'
                    type="text"
                    name="description"
                    placeholder='Description'
                    value={formPersonalData.description}
                    onChange={handleChange}
                />
                <input className='personal-input'
                    type="file"
                    accept=".jpg, .jpeg, .png"  
                     onChange={handleImageChange} />

                <br />
            </form>
        </div>
    );
};

export default Personel;
