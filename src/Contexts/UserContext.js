import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config'
import toast from 'react-hot-toast';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const updateUserProfile = (username, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: username, photoURL: photo
        })
    }

    const userSignIn = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const handleForgetPass = (userEmail) => {
        if (!userEmail) {
            toast('Please enter your email!')
            return
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                toast('Password reset email sent')
            })
            .catch(error => {
                console.log('error', error);
            })
    }


    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [])

    const AuthInfo = {
        user,
        signInWithGoogle,
        signInWithGithub,
        createUser,
        updateUserProfile,
        userSignIn,
        handleForgetPass,
        logOut
    };
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;