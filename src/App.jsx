import Buttom from "./components/Buttom";
import Card from "./components/Card";
import Forecast from "./components/Forecast";
import Input from "./components/Input";
import Weather from "./components/Weather";

function App() {
  return (
    <main className='h-screen grid place-items-center items-center  gap-10 p-3 bg-gradient-to-b from-velvet-rose to-creamy-nile'>
      <Card style={"mb-8 "}>
        <Input />
        <Buttom />
      </Card>
      <Card style={"w-full md:w-4/12 lg:w-3/12 lg:h-fit grid grid-rows-1 self-start"}>
        <Weather />
        <Forecast />
      </Card>
    </main>
  );
}

export default App;
