import React from 'react';
import Link from 'next/link';

const User = ({ users }) => {
    return (
        <div>
            <h1>Daftar Pengguna</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <br/>
                    <h2>{user.username}</h2>
                    <Link href={`/users/${user.id}`}>Detail</Link>
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return {
        props: { users },
    };
}

export default User;