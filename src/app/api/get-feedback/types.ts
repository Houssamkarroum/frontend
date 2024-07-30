import { Timestamp } from 'firebase/firestore';

type Feedback = {
  id: string;
  author: string;
  feedback: string;
  role: string;
  rating: number;
  datetime: Timestamp; // Use Firestore's Timestamp type
};
export type { Feedback };