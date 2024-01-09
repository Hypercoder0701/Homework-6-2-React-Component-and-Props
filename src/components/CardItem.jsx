function CardItem(props) {
  return (
    <div className="carditem-div-style">
      <img src={props.imgsrc} alt="" />
      <div className="carditem-second-div-style">
        <span>{props.number}</span>
        <div className="for-active">{props.title}</div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default CardItem;
