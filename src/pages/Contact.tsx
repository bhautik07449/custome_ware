import { Card } from '../components/ui/Card';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-grid-margin py-xl fade-in flex flex-col md:flex-row gap-xl">
      <div className="flex-1 space-y-md ">
        <h1 className="font-headline-md text-headline-lg font-bold text-on-surface">Get in Touch</h1>
        <p className="font-body-md text-on-surface-variant max-w-md">
          We'd love to hear from you. Whether you have a question about an order, need design assistance, or just want to say hi.
        </p>
        
        <div className="pt-lg space-y-md">
          <div className="flex items-center gap-md">
            <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </div>
            <div>
              <p className="font-label-md font-bold text-on-surface">Email Us</p>
              <p className="font-body-sm text-on-surface-variant">support@customwear.com</p>
            </div>
          </div>
          <div className="flex items-center gap-md">
            <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">call</span>
            </div>
            <div>
              <p className="font-label-md font-bold text-on-surface">Call Us</p>
              <p className="font-body-sm text-on-surface-variant">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-md">
            <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
            </div>
            <div>
              <p className="font-label-md font-bold text-on-surface">Location</p>
              <p className="font-body-sm text-on-surface-variant">123 Design Avenue, Tech City, TC 90210</p>
            </div>
          </div>
        </div>
      </div>

      <Card className="flex-1 p-xl  ">
        <form className="space-y-md">
          <div className="grid grid-cols-2 gap-md">
            <div className="space-y-xs">
              <label className="font-label-sm text-on-surface">First Name</label>
              <input type="text" className="w-full bg-surface border border-outline-variant rounded-lg p-sm outline-none focus:ring-2 focus:ring-secondary" />
            </div>
            <div className="space-y-xs">
              <label className="font-label-sm text-on-surface">Last Name</label>
              <input type="text" className="w-full bg-surface border border-outline-variant rounded-lg p-sm outline-none focus:ring-2 focus:ring-secondary" />
            </div>
          </div>
          <div className="space-y-xs">
            <label className="font-label-sm text-on-surface">Email Address</label>
            <input type="email" className="w-full bg-surface border border-outline-variant rounded-lg p-sm outline-none focus:ring-2 focus:ring-secondary" />
          </div>
          <div className="space-y-xs">
            <label className="font-label-sm text-on-surface">Message</label>
            <textarea rows={5} className="w-full bg-surface border border-outline-variant rounded-lg p-sm outline-none focus:ring-2 focus:ring-secondary resize-none" />
          </div>
          <button type="button" className="w-full bg-secondary text-on-secondary py-md rounded-lg font-label-md hover:brightness-110 active:scale-95 transition-all">
            Send Message
          </button>
        </form>
      </Card>
    </div>
  );
}
