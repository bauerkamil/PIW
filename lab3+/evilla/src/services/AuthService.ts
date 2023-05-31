import { GithubAuthProvider, GoogleAuthProvider, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "./firebaseinit";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        return response.user;
    } catch (err) {
        console.error(err);
    }
}

export const signInWithGithub = async (): Promise<User | null> => {
    try {
        const response = await signInWithPopup(auth, githubProvider);
        return response.user;
    } catch (err) {
        console.error(err);
    }

    return null;
}

export const signInWithEmail = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const registerWithEmail = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
}


export const signOut = () => {
    return auth.signOut();
}