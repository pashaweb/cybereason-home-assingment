import "./globals.css";
import { useDataApiHook } from "./hooks/data-api.hook";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function App() {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";

  const { loading, error, data } = useDataApiHook(usersUrl, []);

  return (
    <>
      <style>!styleMacroReplace!</style>
      <div className='app dark'>
        {loading ? <div>Loading...</div> : null}
        {error !== null ? <div>Error</div> : null}
        {data.length !== 0 ? (
          <div>
            <Table >
              <TableCaption>A list of users.</TableCaption>
              <TableHeader className='bg-blue-900 text-blue-100'>
                <TableRow>
                  <TableHead className='w-[100px] text-blue-100'>ID</TableHead>
                  <TableHead className="text-blue-100">Name</TableHead>
                  <TableHead className="text-blue-100">UserName</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className='font-medium'>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
