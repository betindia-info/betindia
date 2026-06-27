import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export async function uploadImage(file) {
  const fileName = `${Date.now()}-${file.name}`;

  const storageRef = ref(storage, `cms/${fileName}`);

  await uploadBytes(storageRef, file);

  return await getDownloadURL(storageRef);
}