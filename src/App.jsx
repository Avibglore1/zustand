import './App.css'
import { Button } from '@/components/ui/button';
import {Card, CardContent} from "@/components/ui/card";
import { useStore } from "./store/useStore";
import { useUsers } from './api/useUsers';
function App() {
   const {count,increment} = useStore();
    const {data, isLoading,error} = useUsers();
  return (
    <div className='p-6 space-y-4'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <Card className="shadow-md border rounded-xl">
        <CardContent className="p-4">
          <p>Count : {count}</p>
          <Button variant="default" onClick={increment}>Increment</Button>
        </CardContent>
      </Card>
      <Card className="shadow-md border rounded-xl">
        <CardContent className="p-4">
          <h2 className='text-lg font-semibold'>Users</h2>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error.message}</p>}

          {data?.map(user=>(
            <p key={user.id}>{user.name}</p>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default App
