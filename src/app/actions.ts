"use server";

import { getTravelTips } from '@/ai/flows/travel-tips';
import { z } from 'zod';

const TravelTipsInputSchema = z.object({
  packageName: z.string().describe('The name of the Ziyarat package.'),
});

const TravelTipsOutputSchema = z.object({
  travelTips: z.string().describe('AI-generated travel tips for the specified Ziyarat package.'),
});


export async function generateTravelTips(input: z.infer<typeof TravelTipsInputSchema>): Promise<z.infer<typeof TravelTipsOutputSchema>> {
  const validatedInput = TravelTipsInputSchema.safeParse(input);

  if (!validatedInput.success) {
    console.error("Invalid input for generateTravelTips:", validatedInput.error);
    return { travelTips: "Invalid package name provided." };
  }
  
  try {
    const result = await getTravelTips(validatedInput.data);
    return result;
  } catch (error) {
    console.error('Error in generateTravelTips server action:', error);
    return { travelTips: 'Sorry, we were unable to generate travel tips at this moment. Please try again later.' };
  }
}
