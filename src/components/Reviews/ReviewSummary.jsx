import { gemini20Flash, googleAI } from "@genkit-ai/googleai";
import { genkit } from "genkit";
import { getReviewsByRestaurantId } from "@/src/lib/firebase/firestore.js";
import { getAuthenticatedAppForUser } from "@/src/lib/firebase/serverApp";
import { getFirestore } from "firebase/firestore"; 

// Placeholder for a future AI-generated summary; no model call is made yet.
export async function GeminiSummary({ restaurantId }) {
  return (
    <div className="restaurant__review_summary">
      <p>TODO: summarize reviews</p>
    </div>
  );
}

// Shown while the summary section is waiting to render.
export function GeminiSummarySkeleton() {
  return (
    <div className="restaurant__review_summary">
      <p>✨ Summarizing reviews with Gemini...</p>
    </div>
  );
}
