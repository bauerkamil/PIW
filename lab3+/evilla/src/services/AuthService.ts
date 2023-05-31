import { GithubAuthProvider, GoogleAuthProvider, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "./firebaseinit";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInWithGoogle = async (): Promise<User | null> => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        return response.user;
    } catch (err) {
        console.error(err);
    }

    return null;
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

export const signInWithEmail = async (email: string, password: string): Promise<User | null> => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return response.user;
    } catch (err) {
        console.error(err);
    }

    return null;
}

export const registerWithEmail = async (email: string, displayName: string, password: string): Promise<User | null> => {
    let user = null;
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);

        if (auth.currentUser) {
            await updateProfile(auth.currentUser, { displayName })
        }
        return auth.currentUser;
    } catch (err) {
        console.error(err);
    }

    return null;
}


export const signOut = async (): Promise<void> => {
    await auth.signOut();
}