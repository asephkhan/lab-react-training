import './Greeting.css'

function Greetings(props) {
    const {lang, children} = props;
    
    
 
  return (
    <div className="greeting-container">
    
      {lang === 'de' && <p>Hallo {children} </p>}
      {lang === 'fr' && <p>Bonjour {children} </p>}
    </div>
  )
}

export default Greetings