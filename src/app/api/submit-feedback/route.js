import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
    const feedbackData = await req.json();
    const filePath = path.join(process.cwd(), 'src', 'data', 'feedback.json');

    try {
        const data = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '[]';
        const feedbacks = JSON.parse(data);
        feedbacks.push(feedbackData);
        fs.writeFileSync(filePath, JSON.stringify(feedbacks, null, 2));
        return NextResponse.json({ message: 'Feedback submitted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error saving feedback', error }, { status: 500 });
    }
}
