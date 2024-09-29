import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { Relay } from '../types/relay';
import app from '../../firebaseConfig.ts';
import { getAuth } from 'firebase/auth';

const db = getFirestore(app);
const relaysCollection = collection(db, 'relays');

export async function fetchRelays(): Promise<Relay[]> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const relaysCollection = collection(db, 'relays');
  const q = query(relaysCollection, where('uid', '==', user.uid)); // Fetch relays only for the current user
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    state: doc.data().state === true || doc.data().state === 'true',
  })) as Relay[];
}

export async function updateRelayState(
  id: string,
  newState: boolean
): Promise<void> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const relayDoc = doc(db, 'relays', id);
  await updateDoc(relayDoc, { state: newState });
}
