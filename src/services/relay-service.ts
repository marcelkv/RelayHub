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

  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      uid: data.uid,
      name: data.name,
      state: data.state === true || data.state === 'true',
      maxOnTime_s: data.maxOnTime_ms ?? undefined,
      turnedOnAt: data.turnedOnAt ? data.turnedOnAt.toDate() : undefined,
    } as Relay;
  });
}

export async function updateRelayStateFromDB(
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

export async function updateRelayConfigFromDB(
  id: string,
  newName: string,
  newMaxOnTime_s: number
): Promise<void> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const relayDoc = doc(db, 'relays', id);
  await updateDoc(relayDoc, { name: newName, maxOnTime_s: newMaxOnTime_s });
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
