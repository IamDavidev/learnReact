const Character = ({ name, image, species, gender }) => {
  return (
    <>
      <div className="card__container">
        <img src={image} alt="" className="card__container--image" />
        <h2 className="card__container--title">{name}</h2>
        <p>{species}</p>
        <span>{gender}</span>
      </div>
    </>
  );
};

export default Character;
