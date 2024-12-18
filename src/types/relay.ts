export interface Relay {
  id: string;
  uid: string;
  name: string;
  state: boolean;
  maxOnTime_s?: number;
  turnedOnAt?: Date;
  boardId?: string;
}
