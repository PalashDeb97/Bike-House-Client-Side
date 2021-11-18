import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [admin, setAdmin] = useState(false);

    const [bookingSuccess, setBookingSuccess] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();



    // Handle Name
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    // Handle Email
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Handle Password
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Handle Register
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(email, password);

        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('');
                setUserName();
                setBookingSuccess(true);
                // save user database 
                saveUser(email, name, 'POST');
            })
            .catch((error) => {
                setError(error.message);
            })

    };

    // Display Name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
        .then(() => {})
    };

    // Handle Login
    const handleLogIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
    };





    // google login
    const logInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user);
            // save user database 
            saveUser(user.email, user.displayName, 'PUT');
        })
        .finally(() => setIsLoading(false));
    };



    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[])





    // admin 
    useEffect( () => {
        fetch(`https://intense-peak-26637.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email] )


    // log out
    const logOut = () => {
        signOut(auth)
            .then(() => {})
            .finally(() => setIsLoading(false));
    }








    // database user save 
    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('https://intense-peak-26637.herokuapp.com/users',{
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    

    
    return {
        user,
        isLoading,
        error,
        name,
        admin,
        bookingSuccess,
        setBookingSuccess,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegister,
        handleLogIn,
        logInWithGoogle,
        logOut
    }
}

export default useFirebase;