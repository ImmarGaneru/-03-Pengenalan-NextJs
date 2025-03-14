const UserDetails = ({ user }) => {
    return (
        <div>
            <h1>User: {user.username}</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const paths = users.map(user => ({
        params: { slug: user.id.toString()}
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.slug}`);
    const user = await res.json();

    return {
        props: { user },
    };
}

export default UserDetails;