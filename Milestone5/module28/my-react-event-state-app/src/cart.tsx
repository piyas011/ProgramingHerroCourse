export default function Cart() {
  let counter = 0;

  const handelClick = () => {
    counter++;
  };

  return (
    <div>
      <h2>Shopping Cart </h2>
      <p>Items in tha Cart : {counter} </p>
      <button onClick={handelClick}>Add</button>
    </div>
  );
}
