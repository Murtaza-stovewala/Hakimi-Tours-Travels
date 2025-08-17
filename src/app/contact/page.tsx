import ContactForm from '@/components/contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Get in Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We are here to help you plan your sacred journey. Reach out to us with your questions.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
            <h2 className="font-headline text-2xl font-semibold">Contact Information</h2>
            <p className="mt-2 text-muted-foreground">Find us at our office or contact us via phone or email.</p>
             <Card className="mt-6">
                <CardContent className="pt-6 space-y-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Our Office</h3>
                            <p className="text-muted-foreground">Pragati Apartment, Khatiwala Tank, Near Post Office, Indore, India</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Phone</h3>
                            <a href="tel:+918085211718" className="text-muted-foreground block hover:text-primary transition-colors">80852 11718</a>
                            <a href="tel:+919826011718" className="text-muted-foreground block hover:text-primary transition-colors">98260 11718</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <a href="mailto:inquiries@hakimitravels.com" className="text-muted-foreground hover:text-primary transition-colors">inquiries@hakimitravels.com</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Instagram className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Instagram</h3>
                            <a href="https://www.instagram.com/hakimi_tours_and_travels" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">@hakimi_tours_and_travels</a>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className='mt-6 rounded-lg overflow-hidden shadow-md'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.9137374875642!2d75.85639605177245!3d22.69939494470303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcfe3d2ad5cb%3A0xc075644e5a30c477!2sIndia%20Post%20Office%20Khatiwala%20Tank!5e0!3m2!1sen!2sin!4v1754935299854!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
