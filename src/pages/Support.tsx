import { Card } from '../components/ui/Card';

export default function Support() {
  return (
    <div className="max-w-5xl mx-auto px-grid-margin py-xl fade-in">
      <div className="text-center mb-2xl ">
        <h1 className="font-headline-md text-headline-lg font-bold mb-md text-on-surface">Help & Support</h1>
        <p className="font-body-md text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Find answers to common questions or reach out to our team for assistance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        {[
          { icon: 'local_shipping', title: 'Where is my order?', desc: 'Track your package and view estimated delivery dates.' },
          { icon: 'design_services', title: 'Design Guidelines', desc: 'Tips for ensuring your custom print comes out perfectly.' },
          { icon: 'assignment_return', title: 'Returns & Refunds', desc: 'Information about our policies for custom apparel.' },
          { icon: 'straighten', title: 'Sizing Guide', desc: 'Detailed measurements for all our blank garments.' },
        ].map((item, i) => (
          <Card key={i} interactive className="p-xl flex items-start gap-md " style={{ animationDelay: `${(i + 1) * 100}ms` }}>
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-secondary">
              <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
            </div>
            <div>
              <h3 className="font-headline-md text-[18px] font-bold mb-xs">{item.title}</h3>
              <p className="font-body-md text-on-surface-variant">{item.desc}</p>
              <button className="text-secondary font-label-md mt-sm hover:underline">Read more</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
