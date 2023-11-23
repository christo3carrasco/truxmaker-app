import { doc, setDoc,getDoc, addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./Firebase";

export const createUserApi = async(user) => {
     await addDoc(collection(db, 'USERS'),user);
}
export const getUserByIdApi = async(userId) => {
     try {
          const userRef = query(collection(db, 'USERS'), where("id", "==", userId));
          const userSnap = await getDocs(userRef);
          const userData = userSnap.docs[0].data();
          return userData;
      } catch (error) {
          console.error("Error al obtener el usuario:", error);
          throw new Error("Error al obtener el usuario");
      }
} 