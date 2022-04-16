import './Greeting.css'

function Greetings(props) {
    const {lang, children} = props;
    
    
 
  return (
    <div className="greeting-container">
    
      {lang === 'de' && <span>Hallo {children}</span> }
      {lang === 'fr' && <span>Bonjour {children} </span>}
    </div>
  )
}

export default Greetings