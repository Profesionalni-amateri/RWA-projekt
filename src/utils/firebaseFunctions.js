import { collection, getDocs, orderBy, query} from "firebase/firestore";
import { firestore } from "../firebase.js";

export const getAllItems = async () => {
    const items = await getDocs(
      query(collection(firestore, "beers"), orderBy("id", "desc"))
    );
  
    return items.docs.map((doc) => doc.data());
};