import React, { useEffect, useState } from 'react'

interface Address {

    city: string;
}

interface User {
    name: string;
    email: string;
    address: Address;
}


const UserProfile = () => {

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users/1').
        then(response => response.json()).then((data: User) => setUser(data));


    }, []);



    return (
        <div>
            <h2>User Profile</h2>

            {user ? (

                <div>

                    <p><strong>Name:</strong>{user.name}</p>
                    <p><strong>Email:</strong>{user.email}</p>
                    <p><strong>City:</strong>{user.address.city}</p>

                </div>

            ) : (
                <p>Loading...</p>
            )}

        </div>
    )
}

export default UserProfile
