import { doc, setDoc,getDoc, addDoc, collection, query, where, getDocs, Firestore, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { arrayUnion } from '@react-native-firebase/firestore';

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
export const updateListCartsOnUser = async (userId, newCartId) => {
     try {
          const newDataUser = await getUserByIdApi(userId); 
       if (!newCartId) {
         console.log('newCartId no está definido. No se realizará la actualización.');
         return;
       }
       const userRef = await getDocs(query(collection(db, 'USERS'), where("id", "==", userId)));
       if (!userRef.empty) {
         const userDocumentId = userRef.docs[0].id;
         const newData = {
          historyCartArray:[...newDataUser.historyCartArray, newCartId],
        };
         console.log(userDocumentId, newData);
         await updateDoc(doc(db, 'USERS', userDocumentId), newData);
         console.log('Documento de usuario actualizado exitosamente');
       } else {
         console.log('No se encontró ningún usuario con ese ID.');
       }
     } catch (error) {
       console.error('Error al actualizar el documento del usuario:', error);
     }
   };

export const createCartApi = async(cart) => {
  const date = new Date(); 
  await addDoc(collection(db, 'CART'),{...cart,date:date.toString()});
};

export const getAllCarts = async() => {
  const querySnapshot = await getDocs(collection(db,'CART'));
  const resQuerySnapshot  = querySnapshot.docs.map(doc => doc.data()); 
  return resQuerySnapshot; 
};

// Options profile 
export const getUserHistoryCarts = async (userId) => {
  try {
    const userData = await getUserByIdApi(userId);
    const cartsData = await getAllCarts();
    const listHistory = [];

    userData.historyCartArray.map((el) => {
      const cartInfo = cartsData.find((cartData) => cartData.id === el);
      if (cartInfo) {
        listHistory.push(cartInfo);
      }
    });

    console.log('Firebase', listHistory);
    return listHistory;
  } catch (error) {
    console.log(error);
  }
}; 

// Cards
export const updateCardsUserApi = async (userId, card, typeUpdate) => {
  try {
       const getDataUser = await getUserByIdApi(userId); 
    if (!card) {
      console.log('Card no está definido. No se realizará la actualización.');
      return;
    }
    const userRef = await getDocs(query(collection(db, 'USERS'), where("id", "==", userId)));
    if (!userRef.empty) {
      const userDocumentId = userRef.docs[0].id;
      // Aqui solo recibe una card
      if (typeUpdate === "add" ) {        
        const newData = {
         CardsArray:[...getDataUser.CardsArray, card],
        };
        await updateDoc(doc(db, 'USERS', userDocumentId), newData);
      }
      // Aqui recibe todo el array de cards
      if (typeUpdate === "delete" ) {        
        const newData = {
         CardsArray:card,
        };
        await updateDoc(doc(db, 'USERS', userDocumentId), newData);
      }
      console.log('Documento de usuario actualizado exitosamente');
    } else {
      console.log('No se encontró ningún usuario con ese ID.');
    }
  } catch (error) {
    console.error('Error al actualizar el documento del usuario:', error);
  }
};
export const getAllCardsToUserApi = async(idUser) => {
  const getUserData = await getUserByIdApi(idUser);
  return getUserData.CardsArray;  
}