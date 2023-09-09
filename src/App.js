import AppArrow from './AppArrow';
import Greetings from './Greetings/Greetings';
import GreetingsArrow from './Greetings/GreetingsArrow';
import GreetingsClass from './Greetings/GreetingsClass';
function App() {
  return (
    <div>
    <Greetings name="Janek" />
    <Greetings name="Janek2" />
    <Greetings name="Janek3" />
    <GreetingsArrow name="Tomek" />
    <GreetingsClass name="Agata" />
    </div>
  );
}

export default App;
