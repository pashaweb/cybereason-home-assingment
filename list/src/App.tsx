import style from "./App.css?raw";

export type Item = {
  id: number;
  name: string;
};

export type AppProps = {
  items: Item[];
};

function App(props: AppProps) {
  const { items } = props;

  return (
    <>
      <style>{style}</style>
      <div className='app'> yarn create vite
        <h1>Items lits</h1>
        <ul className='items'>
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.id}</strong>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
