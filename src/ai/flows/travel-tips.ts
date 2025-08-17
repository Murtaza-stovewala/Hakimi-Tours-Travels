// src/ai/flows/travel-tips.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating travel tips specific to a Ziyarat package.
 *
 * - getTravelTips - A function that takes a Ziyarat package name as input and returns AI-generated travel tips.
 * - TravelTipsInput - The input type for the getTravelTips function.
 * - TravelTipsOutput - The return type for the getTravelTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TravelTipsInputSchema = z.object({
  packageName: z.string().describe('The name of the Ziyarat package.'),
});
export type TravelTipsInput = z.infer<typeof TravelTipsInputSchema>;

const TravelTipsOutputSchema = z.object({
  travelTips: z.string().describe('AI-generated travel tips for the specified Ziyarat package.'),
});
export type TravelTipsOutput = z.infer<typeof TravelTipsOutputSchema>;

export async function getTravelTips(input: TravelTipsInput): Promise<TravelTipsOutput> {
  return travelTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'travelTipsPrompt',
  input: {schema: TravelTipsInputSchema},
  output: {schema: TravelTipsOutputSchema},
  prompt: `You are a travel expert specializing in Ziyarat journeys. Provide helpful and specific travel tips for the following Ziyarat package: {{{packageName}}}.  These tips should help the user be better prepared for their journey. Be specific and concise.`,
});

const travelTipsFlow = ai.defineFlow(
  {
    name: 'travelTipsFlow',
    inputSchema: TravelTipsInputSchema,
    outputSchema: TravelTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
