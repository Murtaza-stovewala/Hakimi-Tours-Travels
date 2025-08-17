import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const schedules = [
    {
        title: "KUN 9N / 10D (Ex-Mumbai)",
        dates: [
            { month: "AUG", days: "23, 30" },
            { month: "SEP", days: "13, 20, 27" },
            { month: "OCT", days: "4, 11, 18, 25" },
            { month: "NOV", days: "1, 8, 15, 22, 29" },
            { month: "DEC", days: "6, 13, 20, 27" },
        ]
    },
    {
        title: "KUN 10N / 11D (Ex-Mumbai)",
        dates: [
            { month: "AUG", days: "19, 25" },
            { month: "SEP", days: "9, 16, 22, 29" },
            { month: "OCT", days: "7, 14, 21, 28" },
            { month: "NOV", days: "4, 11, 18, 25" },
            { month: "DEC", days: "2, 9, 16, 23, 30" },
        ]
    },
    {
        title: "KUN 8 Nights (MISR 2 Nights)",
        dates: [
            { month: "AUG", days: "29" },
            { month: "SEP", days: "12, 18" },
        ]
    },
    {
        title: "KUN 9 Nights (MISR 1 Night)",
        dates: [
            { month: "AUG", days: "24" },
            { month: "SEP", days: "6, 15, 24, 30" },
            { month: "OCT", days: "6, 14, 24, 30" },
            { month: "NOV", days: "6, 14, 23, 30" },
            { month: "DEC", days: "5, 15, 24, 31" },
        ]
    }
]


export default function SchedulePage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Tour Schedule</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Find a date that works for you. All tours depart from Mumbai or Ahmedabad.
                </p>
                <p className="text-sm text-muted-foreground">Schedule – August to December 2025</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {schedules.map(schedule => (
                    <Card key={schedule.title} className="bg-card shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline">{schedule.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {schedule.dates.map((date, index) => (
                                <div key={date.month}>
                                    <div className="flex items-baseline">
                                        <p className="w-16 font-bold text-primary">{date.month}:</p>
                                        <p className="text-muted-foreground">{date.days}</p>
                                    </div>
                                    {index < schedule.dates.length - 1 && <Separator className="my-2" />}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>

             <div className="text-center mt-16">
                 <h2 className="font-headline text-2xl font-semibold">Notes</h2>
                <p className="text-muted-foreground mt-2">Limited seats available – advance booking recommended.</p>
                <p className="text-muted-foreground">Packages are all-inclusive and cover all major expenses.</p>
             </div>
        </div>
    );
}