import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function useFireStore(c) {
  const addUser = async (data) => {
    await addDoc(collection(db, c), data)
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { addUser };
}
