
import './IdCard.css'
function IdCard(props) {
const {firstName, lastName, gender, birth, height, picture} = props;
  
  return (
    <>
        
      <div className="idcard-container">
        <img className='idcard-profile-pic' src={picture} alt="profile-pic" />
        <div className="idcard-details">
            <strong>First name</strong>: {firstName}<br />
            <strong>Last name</strong>: {lastName}<br />
            <strong>Gender</strong>: {gender}<br />
            <strong>Height</strong>: {height}<br />
            <strong>Birth</strong>: {birth.toDateString()}<br />
            
        </div>
      </div>
    </>
  );
}

export default IdCard;