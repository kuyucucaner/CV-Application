
import './App.css'
import Header from './components/header'
import Personel from './components/personel'
import Experience from './components/experience'
import Skills from './components/skills'
import Education from './components/education'
import Contacts from './components/contacts'
import Cv from './components/cv'
import { useState } from 'react';

function App() {
  const [selectedImagePath, setSelectedImagePath] = useState(null);
  const [formPersonalData, setFormPersonalData] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    description: '',
  });
  const [formExperienceData, setFormDataExperience] = useState({
    position: '',
    company: '',
    startDate: '',
    endDate: '',
    occupation: '',
  });
  const [formSkillsData, setFormSkillsData] = useState({
    skills: '',
  });
  const [formEducationData, setFormEducationData] = useState({
    school: '',
    degree: '',
  });
  const [formContactsData, setFormContactsData] = useState({
    address: '',
    email: '',
    phonenumber: '',
    portfolio: ''
  });
  const handleFormPersonalDataChange = (newFormData) => {
    setFormPersonalData(newFormData);
  };
  const handleFormExperienceDataChange = (newFormData) => {
    setFormDataExperience(newFormData);
  };
  const handleFormSkillsDataChange = (newFormData) => {
    setFormSkillsData(newFormData);
  };
  const handleFormEducationDataChange = (newFormData) => {
    setFormEducationData(newFormData);
  };
  const handleFormContactsDataChange = (newFormData) => {
    setFormContactsData(newFormData);
  };
  return (
    <>
      <Header />
      <div className='left-side'>
        <Personel setSelectedImagePath={setSelectedImagePath} onFormDataChangePersonal={handleFormPersonalDataChange} />
        <Experience onFormDataChangeExperience={handleFormExperienceDataChange} />
        <Skills onFormDataChangeSkills={handleFormSkillsDataChange} />
        <Education onFormDataChangeEducation={handleFormEducationDataChange} />
        <Contacts onFormDataChangeContacts={handleFormContactsDataChange} />
      </div>
      <Cv selectedImagePath={selectedImagePath} formContactsData={formContactsData} formEducationData={formEducationData} formExperienceData={formExperienceData} formPersonalData={formPersonalData} formSkillsData={formSkillsData} />
    </>
  )
}

export default App
