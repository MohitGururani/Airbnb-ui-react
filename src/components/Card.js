import star from "../images/Star.png";
function Card(props) {
  console.log(props);
  return (
    <div className="card">
      {props.item.openSpots===0 && <div className="card--badge">SOLD OUT</div>}
      <img src={`../images/${props.item.coverImage}`} alt="katte" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="grey">({props.item.stats.reviewCount}) •</span>
        <span className="grey">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--title">
        <span className="bold">From {props.item.price} </span>/person
      </p>
    </div>
  );
}

export default Card;
