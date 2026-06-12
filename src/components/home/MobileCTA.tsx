import { Link } from 'react-router-dom';

export default function MobileCTA() {
  return (
    <section className="px-md py-3xl text-center md:hidden">
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-md">Ready to start?</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-xl">Join over 10,000+ creators making their mark.</p>
      <Link to="/designer" className="inline-block w-full bg-primary text-on-primary py-xl rounded-xl font-label-md text-headline-md shadow-lg active:scale-95 transition-all">
        Launch Designer
      </Link>
    </section>
  );
}
