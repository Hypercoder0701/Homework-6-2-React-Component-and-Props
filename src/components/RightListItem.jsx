function RightListItem(props) {
  return (
    <div className={`rightlistitem-div-style ${props.className} `}>
      <span className="for-active">{props.title}</span>
      <p>{props.description}</p>
    </div>
  );
}

export default RightListItem;
