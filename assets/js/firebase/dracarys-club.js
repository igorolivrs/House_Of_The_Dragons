import app from './app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';


export async function subscribeToDracarysClub(subscription) {
    const db = getFirestore(app);
    const dracarysClubColletion = collection(db, 'dracarys-club');
    const docRef = await addDoc(dracarysClubColletion, subscription);
    return docRef.id;
}