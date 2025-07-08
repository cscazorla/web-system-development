import AllClicks from './AllClicks.jsx';
import './App.css';
import Avatar from './Avatar.jsx';
import Button from './Button.jsx';
import ComplexState from './ComplexState.jsx';
import CountersUpdatingTogether from './CountersUpdatingTogether.jsx';
import ImprovedButtons from './ImprovedButtons.jsx';
import ShoppingList from './ShoppingList.jsx';

const Hello = (props) => {
  console.log(props);

  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = 'Peter';
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Avatar />
      <ShoppingList />
      <Button />
      <Button />
      <hr />
      <CountersUpdatingTogether />
      <hr />
      <ImprovedButtons />
      <hr />
      <ComplexState />
      <hr />
      <AllClicks />
    </div>
  );
};

export default App;
