function Card(props) {
  return (
    <div className="mx-2">
      <div className={`${props.color} px-10 py-10`}></div>
    </div>
  );
}
export default Card;
