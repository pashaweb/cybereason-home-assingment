import styles from "./App.module.css";
import { useDataApiHook } from "./table/data-api.hook";
function App() {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";

  const { loading, error, data } = useDataApiHook(usersUrl, []);

  return (
    <>
      Loading: {loading.toString()} Error: {error} Data: {data.length}
      <style>!styleMacroReplace!</style>
      <div className={styles.logo}>Hi from Vite!</div>
      {loading ? <div className={styles.logo}>Loading...</div> : null}
      {error !== null ? <div className={styles.logo}>Error</div> : null}
      <div>
        List
        <ul>
          {data.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
