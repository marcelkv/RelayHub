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
  onSnapshot,
} from 'firebase/firestore';
import app from '../../firebaseConfig.ts';
import { getAuth } from 'firebase/auth';
import { Board } from '../types/board.ts';
import { PinConfig } from '../types/pin-config.ts';

const db = getFirestore(app);
const boardsCollection = collection(db, 'boards');
const pinConfigsCollection = collection(db, 'pinConfigs');

export async function fetchBoards(): Promise<Board[]> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const q = query(boardsCollection, where('uid', '==', user.uid));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      uid: data.uid,
      model: data.model,
      name: data.name,
      updatedAt: data.updatedAt.toDate(),
      createdAt: data.createdAt.toDate(),
    } as Board;
  });
}

export async function fetchPinConfigsForBoard(
  boardId: string
): Promise<PinConfig[]> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const pinConfigsRef = collection(db, 'pinConfigs');

  try {
    const q = query(
      pinConfigsRef,
      where('uid', '==', user.uid),
      where('boardId', '==', boardId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        mode: data.mode,
        boardId: data.boardId,
        pinNumber: data.pinNumber,
        relayId: data.relayId,
      } as PinConfig;
    });
  } catch (error) {
    console.error('Error fetching pinConfigs:', error);
    throw error;
  }
}

export async function addBoardToDB(newBoard: Partial<Board>): Promise<Board> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const boardWithUID = {
    ...newBoard,
    uid: user.uid,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const docRef = await addDoc(boardsCollection, boardWithUID);
  return { id: docRef.id, ...boardWithUID } as Board;
}

export async function updateBoardInDB(
  id: string,
  updates: Partial<Board>
): Promise<void> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const boardDoc = doc(db, 'boards', id);
  const updatedData = { ...updates, updatedAt: new Date() };

  await updateDoc(boardDoc, updatedData);
}

export async function deleteBoardFromDB(id: string): Promise<void> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const boardDoc = doc(db, 'boards', id);
  await deleteDoc(boardDoc);
}

export async function addPinConfigToDB(
  newPinConfig: Partial<PinConfig>
): Promise<PinConfig> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const docRef = await addDoc(pinConfigsCollection, newPinConfig);
  return { id: docRef.id, ...newPinConfig } as PinConfig;
}

export async function updatePinConfigInDB(
  id: string,
  updates: Partial<PinConfig>
): Promise<void> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const pinConfigDoc = doc(db, 'pinConfigs', id);
  await updateDoc(pinConfigDoc, updates);
}

export async function deletePinConfigFromDB(id: string): Promise<void> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const pinConfigDoc = doc(db, 'pinConfigs', id);
  await deleteDoc(pinConfigDoc);
}

export function onBoardChange(
  id: string,
  onUpdate: (updatedBoard: Board) => void
): () => void {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const boardDoc = doc(db, 'boards', id);

  return onSnapshot(boardDoc, docSnapshot => {
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();

      const updatedBoard: Board = {
        id: docSnapshot.id,
        uid: data.uid,
        model: data.model,
        name: data.name,
        updatedAt: data.updatedAt.toDate(),
        createdAt: data.createdAt.toDate(),
      };

      onUpdate(updatedBoard);
    } else {
      console.error('Board not found');
    }
  });
}
