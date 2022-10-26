import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config'
import toast from 'react-hot-toast';

// This context for authentication all over tha
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    // this state store user data
    const [user, setUser] = useState(null);
    // this state for catch user until featch user by useeffect
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // this function returns google login popup
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // this function returns github login popup
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // this function returns github login popup
    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    // verify email after create user
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    // update profile information after create user
    const updateUserProfile = (username, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: username, photoURL: photo
        })
    }

    // this function returns signin method
    const userSignIn = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // this function sent email to forget password
    const handleForgetPass = (userEmail) => {
        if (!userEmail) {
            toast.error('Please enter your email!')
            return
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                toast.promise('Password reset email sent')
            })
            .catch(error => {
                console.log('error', error);
            })
    }

    // this function return logout method
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // this is for track users activity in website
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    // this is the context value as a object
    const AuthInfo = {
        user,
        loading,
        signInWithGoogle,
        signInWithGithub,
        createUser,
        verifyEmail,
        updateUserProfile,
        userSignIn,
        handleForgetPass,
        logOut
    };
    return (
        // this is tha context provider its provide value all over tha website
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;