import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";

import { IVillaInfo } from "../common/interfaces/IVillaInfo";
import { firestore } from "./firebaseinit";

const VILLAS_TABLE_NAME = "villas"

export const getAllVillas = async (): Promise<IVillaInfo[]> => {
    const villasRef = collection(firestore, VILLAS_TABLE_NAME);
    const querySnapshot = await getDocs(villasRef);
    const villas = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() } as IVillaInfo));

    return villas;
}

export const getVillaById = async (id: string): Promise<IVillaInfo | undefined> => {
    const villasRef = collection(firestore, VILLAS_TABLE_NAME);
    const villasQuery = query(villasRef, where("__name__", "==", id));
    const querySnapshot = await getDocs(villasQuery);
    const doc = querySnapshot.docs[0];

    if (!doc) {
        return undefined;
    }

    return { id: doc.id, ...doc.data() } as IVillaInfo;
}

export const addVilla = async (villa: IVillaInfo) => {
    const villasRef = collection(firestore, VILLAS_TABLE_NAME);
    delete villa.id;
    await addDoc(villasRef, villa);
}

export const updateVilla = async (id: string, villa: IVillaInfo) => {
    const villaRef = doc(firestore, VILLAS_TABLE_NAME, id);
    delete villa.id;
    await updateDoc(villaRef, { ...villa });
}