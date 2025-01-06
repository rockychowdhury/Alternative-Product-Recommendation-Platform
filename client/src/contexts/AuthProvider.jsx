import { useEffect, useState } from "react";
import { AuthContext } from "./Contexts";
import PropTypes from "prop-types";
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import Spinner from "../components/common/Spinner";
import axios from "axios";
import { API } from "../utils/API";
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    const handleGoggleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const profileUpdate = (info) => {
        return updateProfile(auth.currentUser, info);
    }



    const authInfo = {
        user, setUser, loading, setLoading, createNewUser, logIn, logout, handleGoggleLogin, profileUpdate, setError, error
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser?.email) {
                const user = { email: currentUser.email };
                // console.log(user);
                axios.post(`${API}/jwt`, user, {
                    withCredentials: true
                })
                    .then(res => {
                        // console.log(res.data)
                        setLoading(false);
                    }).catch(error => {
                        setLoading(false)
                    }
                    )

            } else {
                axios.post(`${API}/logout`, {}, {
                    withCredentials: true
                }).then(res => {
                    console.log(res.data)
                    setLoading(false);
                }).catch(error => {
                    setLoading(false);
                })

            }

        });
        return () => {
            unsubscribe();
        }
    }, [auth]);
    // console.log(loading, user);
    if (loading) return <Spinner></Spinner>;

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.any.isRequired,
}
export default AuthProvider;