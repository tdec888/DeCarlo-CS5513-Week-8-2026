import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "@/src/lib/firebase/clientApp";

import { updateRestaurantImageReference } from "@/src/lib/firebase/firestore";

// Replace the two functions below
async function handleRestaurantImage(target) {
  const image = target.files ? target.files[0] : null;
  if (!image) {
    return;
  }

  const imageURL = await updateRestaurantImage(id, image);
  setRestaurantDetails({ ...restaurantDetails, photo: imageURL });
}

export async function updateRestaurantImage(restaurantId, image) {
  try {
    if (!restaurantId) {
      throw new Error("No restaurant ID has been provided.");
    }

    if (!image || !image.name) {
      throw new Error("A valid image has not been provided.");
    }

    const publicImageUrl = await uploadImage(restaurantId, image);
    await updateRestaurantImageReference(restaurantId, publicImageUrl);

    return publicImageUrl;
  } catch (error) {
    console.error("Error processing request:", error);
  }
}

async function uploadImage(restaurantId, image) {
  const filePath = `images/${restaurantId}/${image.name}`;
  const newImageRef = ref(storage, filePath);
  await uploadBytesResumable(newImageRef, image);

  return await getDownloadURL(newImageRef);
}
// Replace the two functions above
