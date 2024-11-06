const getUsers = async () => {
    'use cache'
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    return response.json()
}

export default async function UsersList() {
    const users: any = await getUsers()

    return(
        <div>
            <ul>
                {users.map((user: any) => {
                    return (
                    <li key={user.id}>{user.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}