import { NextResponse } from 'next/server';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Feedback } from './types'; // Adjust the path as necessary

export async function GET() {
  try {
    const feedbacksCollection = collection(db, 'feedbacks');
    const feedbacksSnapshot = await getDocs(feedbacksCollection);
    const feedbacks = feedbacksSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Feedback[];
    // Convert Firestore Timestamps to ISO strings
    feedbacks.forEach(feedback => {
      (feedback as any).datetime = feedback.datetime.toDate().toISOString();
    });
    return NextResponse.json(feedbacks, { status: 200 });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    return NextResponse.json({ message: 'Error fetching feedback', error: (error as any).message }, { status: 500 });
  }
}
