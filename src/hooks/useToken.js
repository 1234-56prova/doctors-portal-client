import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useToken = () => {
    const [user] = useAuthState(auth);
    const [token, setToken] = useState('');
    // console.log(user);
    useEffect(() => {
        if (user) {
        
      
        const email = user?.user?.email;
        const currentUser = { email: email };
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
                
            })  }
    }, [user])
    return [token];

}

export default useToken;