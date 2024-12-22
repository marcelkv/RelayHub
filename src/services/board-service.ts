import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  writeBatch,
  serverTimestamp,
  updateDoc,
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

export async function fetchBoard(boardId: string): Promise<Board> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const boardRef = doc(db, 'boards', boardId);
  const boardSnap = await getDoc(boardRef);

  if (!boardSnap.exists()) {
    throw new Error(`Board with ID ${boardId} does not exist`);
  }

  const boardData = boardSnap.data();
  return {
    id: boardId,
    uid: boardData.uid,
    name: boardData.name,
    model: boardData.model,
    createdAt: boardData.createdAt.toDate(),
    updatedAt: boardData.updatedAt.toDate(),
  } as Board;
}

export async function fetchPinConfigsForBoard(
  boardId: string
): Promise<PinConfig[]> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  try {
    const q = query(
      pinConfigsCollection,
      where('uid', '==', user.uid),
      where('boardId', '==', boardId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        uid: data.uid,
        mode: data.mode,
        boardId: data.boardId,
        pinNumber: data.pinNumber,
        relayId: data.relayId,
        relayName: data.relayName,
      } as PinConfig;
    });
  } catch (error) {
    console.error('Error fetching pinConfigs:', error);
    throw error;
  }
}

export async function addBoardWithPinsToDB(
  name: string,
  model: string,
  numberPins: number
): Promise<Board> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  if (numberPins <= 0) {
    throw new Error('Number of pins must be greater than 0');
  }

  const batch = writeBatch(db);
  const boardRef = doc(collection(db, 'boards'));
  const boardData = {
    uid: user.uid,
    name: name,
    model: model,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  batch.set(boardRef, boardData);

  for (let i = 1; i <= numberPins; i++) {
    const pinConfigRef = doc(collection(db, 'pinConfigs'));
    const pinConfigData: Partial<PinConfig> = {
      uid: user.uid,
      pinNumber: i,
      mode: 'input',
      boardId: boardRef.id,
    };

    batch.set(pinConfigRef, pinConfigData);
  }

  await batch.commit();

  const savedBoardSnap = await getDoc(boardRef);

  if (!savedBoardSnap.exists()) {
    throw new Error('Failed to retrieve the created board');
  }

  const savedBoardData = savedBoardSnap.data();
  return {
    id: boardRef.id,
    uid: savedBoardData.uid,
    name: savedBoardData.name,
    model: savedBoardData.model,
    createdAt: savedBoardData.createdAt.toDate(),
    updatedAt: savedBoardData.updatedAt.toDate(),
  } as Board;
}

export async function updatePinConfigModeAndRelayInDB(
  pinConfig: PinConfig,
  relays: Relay[]
): Promise<void> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  if (!pinConfig.id) {
    throw new Error('PinConfig ID is missing');
  }

  if (!pinConfig.boardId) {
    throw new Error('Board ID is missing in PinConfig');
  }

  const pinConfigRef = doc(db, 'pinConfigs', pinConfig.id);
  const boardRef = doc(db, 'boards', pinConfig.boardId);
  const batch = writeBatch(db);

  batch.update(pinConfigRef, {
    mode: pinConfig.mode,
    relayName: pinConfig.relayName,
    relayId: pinConfig.relayId,
  });

  relays.forEach(relay => {
    if (!relay.id) {
      throw new Error('Relay ID is missing');
    }
    const relayRef = doc(db, 'relays', relay.id);
    batch.update(relayRef, {
      boardId: relay.boardId,
    });
  });

  batch.update(boardRef, {
    updatedAt: serverTimestamp(),
  });

  await batch.commit();
}

export async function deleteBoardFromDB(boardId: string): Promise<void> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const boardRef = doc(db, 'boards', boardId);
  const pinConfigsQuery = query(
    collection(db, 'pinConfigs'),
    where('boardId', '==', boardId),
    where('uid', '==', user.uid)
  );
  const relaysQuery = query(
    collection(db, 'relays'),
    where('boardId', '==', boardId),
    where('uid', '==', user.uid)
  );

  const batch = writeBatch(db);

  try {
    const pinConfigsSnapshot = await getDocs(pinConfigsQuery);
    pinConfigsSnapshot.forEach(doc => {
      batch.delete(doc.ref);
    });

    const relaysSnapshot = await getDocs(relaysQuery);
    relaysSnapshot.forEach(doc => {
      batch.update(doc.ref, { boardId: null });
    });

    batch.delete(boardRef);
    await batch.commit();
  } catch (error) {
    console.error('Error deleting board and associated data:', error);
    throw new Error('Failed to delete the board.');
  }
}
