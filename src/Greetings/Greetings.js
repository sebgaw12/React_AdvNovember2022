function Greetings(props) {
  console.log(props)

  return (
    <h1>Hi! {props.name}</h1>
  );
}

export default Greetings;
