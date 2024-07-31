import { NextResponse } from 'next/server';
import { db } from '../firebase';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { Feedback } from './types'; // Adjust the path as necessary

export async function GET() {
  try {
    const feedbacksCollection = collection(db, 'feedbacks');
    const feedbacksSnapshot = await getDocs(feedbacksCollection);
    const feedbacks: Feedback[] = feedbacksSnapshot.docs.map(doc => {
      const data = doc.data() as DocumentData;
      return {
        id: doc.id,  // Make sure to include 'id' here
        author: data.author,
        feedback: data.feedback,
        role: data.role,
        rating: data.rating,
        datetime: data.datetime.toDate().toISOString(), // Convert Firestore Timestamp to ISO string
      };
    });
    return NextResponse.json(feedbacks, { status: 200 });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    return NextResponse.json({ message: 'Error fetching feedback', error: (error as any).message }, { status: 500 });
  }
}
