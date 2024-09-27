import { NextResponse } from 'next/server';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const feedback = await request.json();
    feedback.datetime = Timestamp.fromDate(new Date(feedback.datetime)); // Convert to Firestore Timestamp

    await addDoc(collection(db, 'feedbacks'), feedback);

    return NextResponse.json({ message: 'Feedback submitted successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error submitting feedback:', error);
    return NextResponse.json({ message: 'Error submitting feedback', error: error.message }, { status: 500 });
  }
}