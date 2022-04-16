import './Random.css';

function Random(props) {
  const { min, max } = props;
  return (
    <div className="random-item">
      {max < 7 ? (
        <p>
          Random value between {min} and {max} = {Math.floor(Math.random() * 6)}
        </p>
      ) : (
        <p>
          
          Random value between {min} and {max} =
          {Math.floor(Math.random() * 100)}
        </p>
      )}
    </div>
  );
}

export default Random;
