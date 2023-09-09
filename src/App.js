import AppArrow from './AppArrow';
import Greetings from './Greetings/Greetings';
import GreetingsArrow from './Greetings/GreetingsArrow';
function App() {
  return (
    <div>
    <Greetings name="Janek" />
    <Greetings name="Janek2" />
    <Greetings name="Janek3" />
    <GreetingsArrow name="Tomek" />
    </div>
  );
}

export default App;
