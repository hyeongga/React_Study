import Card from "./components/Card";
import cardData from "./cardData.json";

function App() {
  return (
    <div className="grid grid-cols-4 gap-8 py-8 justify-items-center">
      {cardData.map((v, i) => {
        return <Card key={i} symbol={v.symbol} score={v.score} />;
      })}
    </div>
  );
}
export default Appcard;
