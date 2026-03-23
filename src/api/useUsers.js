import { useQuery } from "@tanstack/react-query";

const fetchUsers = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if(!res.ok) throw new Error("Error fetching users");

    return res.json();
}

export const useUsers = () =>{
    return useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers
    })
}