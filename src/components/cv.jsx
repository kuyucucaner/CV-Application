import '../styles/cv.css'
import PropTypes from 'prop-types';

const Cv = ({ selectedImagePath, formPersonalData, formExperienceData, formSkillsData, formEducationData , formContactsData}) => {
  return (
    <aside className="cv-right-side">
      <div className="cv-container">


        <div className="cv-personal-data">
          <div className="left">
            {formPersonalData.firstName ? (
              <p className='cv-first-name'>{formPersonalData.firstName}</p>
            ) : (
              <p className='cv-first-name'>Empty</p>
            )}
            {formPersonalData.lastName ? (
              <p className='cv-last-name'>{formPersonalData.lastName}</p>
            ) : (
              <p className='cv-last-name'>Empty</p>
            )}
            {formPersonalData.profession ? (
              <p className='cv-profession'>{formPersonalData.profession}</p>
            ) : (
              <p className='cv-profession'>Empty</p>
            )}
            {formPersonalData.description ? (
              <p className='cv-description'>{formPersonalData.description}</p>
            ) : (
              <p className='cv-description'>Empty</p>
            )}
          </div>
          <div className="right">
            <img className='cv-image' src={selectedImagePath} alt="picture"
            />
          </div>
        </div>


        <div className="cv-experience">
          <h2 className='cv-experience-title'>Experience</h2>
          {formExperienceData.position ? (
            <p className='cv-position'>{formExperienceData.position}</p>
          ) : (
            <p className='cv-position'>Empty</p>
          )}
          <div className="cv-job-info">
            {formExperienceData.company ? (
              <p className='cv-company'>{formExperienceData.company}</p>
            ) : (
              <p className='cv-company'>Empty</p>
            )}
            {formExperienceData.startDate ? (
              <p className='cv-start-date'>{formExperienceData.startDate}</p>
            ) : (
              <p className='cv-start-date'>Empty</p>
            )}
            {formExperienceData.endDate ? (
              <p className='cv-end-date'>{formExperienceData.endDate}</p>
            ) : (
              <p className='cv-end-date'>Empty</p>
            )}            </div>
          {formExperienceData.occupation ? (
            <p className='cv-occupation'>{formExperienceData.occupation}</p>
          ) : (
            <p className='cv-occupation'>Empty</p>
          )}
        </div>


        <div className="cv-education-skills">
          <div className="cv-education">
            <h2 className='cv-education-title'>Education</h2>
            {formEducationData.school ? (
              <p className='cv-school'>{formEducationData.school}</p>
            ) : (
              <p className='cv-school'>Empty</p>
            )}
            {formEducationData.degree ? (
              <p className='cv-degree'>{formEducationData.degree}</p>
            ) : (
              <p className='cv-degree'>Empty</p>
            )}
          </div>
          <div className="cv-skills">
            <h2 className='cv-skills-title'>Skills</h2>
            <ul className='cv-skills-list'>
              {formSkillsData.skills ? (
                <li className='cv-occupation'>{formSkillsData.skills}</li>
              ) : (
                <li className='cv-occupation'>Empty</li>
              )}
            </ul>
          </div>
        </div>



        <div className="cv-contacts">
          <h2 className='cv-contacts-title'>Contact Information</h2>
          <div className="cv-first-line">
          {formContactsData.address ? (
              <p className='cv-contacts-address'>{formContactsData.address}</p>
            ) : (
              <p className='cv-contacts-address'>Empty</p>
            )}
                {formContactsData.portfolio ? (
              <p className='cv-contacts-portfolio'>{formContactsData.portfolio}</p>
            ) : (
              <p className='cv-contacts-portfolio'>Empty</p>
            )}
          </div>
          <div className="cv-second-line">
          {formContactsData.email ? (
              <p className='cv-contacts-email'>{formContactsData.email}</p>
            ) : (
              <p className='cv-contacts-email'>Empty</p>
            )}
             {formContactsData.phonenumber ? (
              <p className='cv-contacts-phone'>{formContactsData.phonenumber}</p>
            ) : (
              <p className='cv-contacts-phone'>Empty</p>
            )}
          </div>
        </div>
      </div>
    </aside>

  );

};
Cv.propTypes = {
  selectedImagePath: PropTypes.string,

};
Cv.propTypes = {
  formPersonalData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    profession: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
Cv.propTypes = {
  formSkillsData: PropTypes.shape({
    skills: PropTypes.string,
  }).isRequired,
};
Cv.propTypes = {
  formContactsData: PropTypes.shape({
    address: PropTypes.string,
    email: PropTypes.string,
    phonenumber: PropTypes.string,
    portfolio: PropTypes.string,
  }).isRequired,
};
Cv.propTypes = {
  formEducationData: PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
  }).isRequired,
};
Cv.propTypes = {
  formExperienceData: PropTypes.shape({
    position: PropTypes.string,
    company: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    occupation: PropTypes.string,
  }).isRequired,
};
export default Cv;

