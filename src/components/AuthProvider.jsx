import { PropTypes } from "prop-types";
import { createContext, useState } from "react";
import app from "../Utility/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log(result);
            setUser(result.user)
            toast("You have logged in Successfully!")
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const userInfo = {
        user,
        loading,
        setUser,
        createUser,
        signInWithGoogle,
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;