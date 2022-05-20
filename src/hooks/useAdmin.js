import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            const email = user?.user?.email;
        console.log(email);
        const currentUser = { email: email };
        fetch(`http://localhost:5000/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data)
            })
        }
    });
    return [admin];
}

export default useAdmin;