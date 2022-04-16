import './BoxColor.css'


function BoxColor(props) {
    const{r, g, b} = props
  return (
    <div className='boxcolor-container' boxcolor-container>
      {r >= 255 ? (
        <div className="boxcolor-red">
          <p>
            rgb(255,0,0) #ff0000
          </p>
        </div>
      ) : (
        <div className="boxcolor-green">
          <p>
            rgb(128,255,0)  #80ff00
          </p>
        </div>
      )}
    </div>
  );
}

export default BoxColor;
