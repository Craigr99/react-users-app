const User = (props) => {
    return (
      <div className="column is-3">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.image} alt="Profile"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {props.name}
              </p>
              <p className="subtitle">
                {props.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

  export default User;