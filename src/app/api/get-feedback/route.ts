import { NextResponse } from 'next/server';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  try {
    const feedbacksCollection = collection(db, 'feedbacks');
    const feedbacksSnapshot = await getDocs(feedbacksCollection);
    const feedbacks = feedbacksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Convert Firestore Timestamps to ISO strings
    feedbacks.forEach(feedback => {
      feedback.datetime = (feedback as any).datetime.toDate().toISOString();
    });

    return NextResponse.json(feedbacks, { status: 200 });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    return NextResponse.json({ message: 'Error fetching feedback', error: (error as any).message }, { status: 500 });
  }
}
