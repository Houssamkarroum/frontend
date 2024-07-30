// types.ts
import { Timestamp } from 'firebase/firestore';

type Feedback = {
  id: string;         // Make sure 'id' is included here
  author: string;
  feedback: string;
  role: string;
  rating: number;
  datetime: string;   // Changed to string to match ISO format after conversion
};

export type { Feedback };
