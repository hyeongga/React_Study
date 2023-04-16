import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen p-12 grid grid-cols-3">
      <Card cardName="A" color="bg-red-100" />
      <Card cardName="A" color="bg-red-200" />
      <Card cardName="A" color="bg-red-300" />
      <Card cardName="A" color="bg-red-400" />
      <Card cardName="A" color="bg-red-500" />
      <Card cardName="A" color="bg-red-600" />
    </div>
  );
}

export default App;
