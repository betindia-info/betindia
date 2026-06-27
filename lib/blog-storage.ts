import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

// Upload images for the blog CMS to Firebase Storage and return a public
// download URL to persist on the post/section. Runs client-side as the
// signed-in admin, so Storage rules must allow authenticated writes under
// blog/ (see storage.rules).

const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

/** Upload an image file and resolve to its public download URL. */
export async function uploadBlogImage(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) {
    throw new Error("Please choose an image file.");
  }
  if (file.size > MAX_BYTES) {
    throw new Error("Image is larger than 5 MB.");
  }

  // Unique, readable path: blog/<timestamp>-<sanitised-name>
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const path = `blog/${Date.now()}-${safeName}`;

  const snapshot = await uploadBytes(ref(storage, path), file, {
    contentType: file.type,
  });
  return getDownloadURL(snapshot.ref);
}
