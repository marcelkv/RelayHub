import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  query,
  where,
  addDoc,
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

export async function addRelayToDB(newRelay: Partial<Relay>): Promise<Relay> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const relayWithUID = {
    ...newRelay,
    uid: user.uid,
  };

  const docRef = await addDoc(relaysCollection, relayWithUID);
  return { id: docRef.id, ...relayWithUID } as Relay;
}

export async function deleteRelayFromDB(id: string): Promise<void> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const relayDoc = doc(db, 'relays', id);
  await deleteDoc(relayDoc);
}

export async function isRelayNameUniqueInDB(name: string): Promise<boolean> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const q = query(
    relaysCollection,
    where('uid', '==', user.uid),
    where('name', '==', name)
  );
  const querySnapshot = await getDocs(q);

  return querySnapshot.empty;
}
