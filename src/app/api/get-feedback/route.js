// app/api/get-feedback/route.js
import fs from 'fs';
import path from 'path';

export async function GET() {
    const feedbackFilePath = path.join(process.cwd(), 'src', 'data', 'feedback.json');

    // Read existing feedback data
    let feedbackData;
    try {
        feedbackData = JSON.parse(fs.readFileSync(feedbackFilePath, 'utf8'));
    } catch (err) {
        feedbackData = [];
    }

    return new Response(JSON.stringify(feedbackData), {
        headers: { 'Content-Type': 'application/json' },
    });
}
