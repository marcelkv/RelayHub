import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';
import app from '../../firebaseConfig.ts';
import { getAuth } from 'firebase/auth';
import { Schedule } from '../types/schedule';

const db = getFirestore(app);
const schedulesCollection = collection(db, 'schedules');

export async function fetchSchedules(): Promise<Schedule[]> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const q = query(schedulesCollection, where('uid', '==', user.uid));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      uid: data.uid,
      name: data.name,
      timeStart: data.timeStart,
      duration: data.duration,
      relays: data.relays || [],
      days: data.days || [],
    } as Schedule;
  });
}

export async function addScheduleToDB(
  newSchedule: Partial<Schedule>
): Promise<Schedule> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const scheduleWithUID = {
    ...newSchedule,
    uid: user.uid,
  };

  const docRef = await addDoc(schedulesCollection, scheduleWithUID);
  return { id: docRef.id, ...scheduleWithUID } as Schedule;
}

export async function updateScheduleInDB(
  id: string,
  updatedSchedule: Partial<Schedule>
): Promise<void> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const scheduleDoc = doc(db, 'schedules', id);
  await updateDoc(scheduleDoc, updatedSchedule);
}

export async function deleteScheduleFromDB(id: string): Promise<void> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const scheduleDoc = doc(db, 'schedules', id);
  await deleteDoc(scheduleDoc);
}
