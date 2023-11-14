import '../styles/contacts.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Contacts = ({onFormDataChangeContacts}) => {
    const [formContactsData, setFormData] = useState({
        address: '',
        email: '',
        phonenumber: '',
        portfolio: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formContactsData,
            [name]: value,
        });
        onFormDataChangeContacts({ ...formContactsData, [name]: value });

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formContactsData.address || !formContactsData.email || !formContactsData.phonenumber || !formContactsData.portfolio) {
            alert('Please fill in all required fields.');
            return;
        }

    };
    Contacts.propTypes = {
        onFormDataChangeContacts: PropTypes.func.isRequired,

    };
    return (
        <div className='contacts-container'>
            <div className='contacts-title'>
                <h2 className='contacts-icon' >
                    <FontAwesomeIcon icon={faAddressBook} size="lg" style={{ color: "#ED7D31", }} /> Contacts</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    className='contacts-input'
                    type="text"
                    name="address"
                    placeholder='address'
                    value={formContactsData.address}
                    onChange={handleChange}
                />
                   <input
                    className='contacts-input'
                    type="text"
                    name="email"
                    placeholder='email'
                    value={formContactsData.email}
                    onChange={handleChange}
                />
                   <input
                    className='contacts-input'
                    type="text"
                    name="phonenumber"
                    placeholder='phonenumber'
                    value={formContactsData.phonenumber}
                    onChange={handleChange}
                />
                   <input
                    className='contacts-input'
                    type="text"
                    name="portfolio"
                    placeholder='portfolio'
                    value={formContactsData.portfolio}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default Contacts;
