import HeroSection from '@/components/homepage/hero-section';
import JsonLd from '@/components/json-ld';
import { Footer } from '@/components/footer';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lasitha Gimhan',
    jobTitle: 'Full Stack Developer',
    url: 'https://diliniliyanage.me',
    sameAs: [
      'https://github.com/dilini-liyanage',
      'https://www.linkedin.com/in/diliniliyanage',
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="flex h-screen flex-col justify-center dark:bg-background">
        <HeroSection />
        <Footer />
      </div>
    </>
  );
}
