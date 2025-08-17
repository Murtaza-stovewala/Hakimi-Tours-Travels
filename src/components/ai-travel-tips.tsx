"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateTravelTips } from '@/app/actions';
import { Loader2, Wand2 } from 'lucide-react';

type AiTravelTipsProps = {
  packageName: string;
};

export default function AiTravelTips({ packageName }: AiTravelTipsProps) {
  const [tips, setTips] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [generated, setGenerated] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setError('');
    setTips('');
    try {
      const result = await generateTravelTips({ packageName });
      if (result.travelTips) {
        setTips(result.travelTips);
        setGenerated(true);
      } else {
        setError('Could not generate tips. Please try again.');
      }
    } catch (e) {
      setError('An error occurred. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <Card className="bg-card">
      <CardHeader>
        <div className='flex items-center gap-3'>
            <Wand2 className="h-8 w-8 text-accent" />
            <div>
                <CardTitle className="font-headline">AI-Powered Travel Tips</CardTitle>
                <CardDescription>Get personalized tips for your journey.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        {!generated && (
          <div className="text-center">
            <p className="mb-4 text-muted-foreground">
              Click the button below to get AI-generated travel advice specific to the "{packageName}" package.
            </p>
            <Button onClick={handleClick} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Tips'
              )}
            </Button>
          </div>
        )}

        {error && <p className="text-destructive text-sm">{error}</p>}
        
        {tips && (
          <div className="prose prose-sm max-w-none text-foreground/90 whitespace-pre-wrap font-body">
            {tips}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
