function Date(props) {
  return (
    <li className="inline-block bg-white rounded-lg shadow-md">
      <div
        className={`${
          props.day === "SUN"
            ? "bg-red-400"
            : props.day === "SAT"
            ? "bg-yellow-500"
            : "bg-blue-300"
        } rounded-t-lg px-2 py-1 text-xl text-white`} //?기준으로 참일경우 앞쪽 조건, 거짓일 경우 뒤쪽 조건
      >
        {props.date}
      </div>
      <ul className="p-2 text-lg min-h-[80px]">
        {props.todos.map((v, i) => {
          return <li className="truncate">{v}</li>;
        })}

        {/* <li>🧹 청소하기</li>
        <li>👕 빨래하기</li> */}
      </ul>
    </li>
  );
}
export default Date;
