import Card from "./Card";
const colors = [
  "bg-red-400",
  "bg-orange-400",
  "bg-yellow-400",
  "bg-green-400",
  "bg-blue-400",
  "bg-purple-400",
  "bg-main",
];
function C() {
  return (
    <div className="bg-red-100 flex justify-center items-center">
      {colors.map((v, i) => {
        return <Card color={v} key={i} />;
      })}
    </div>
  );
}
export default C;
