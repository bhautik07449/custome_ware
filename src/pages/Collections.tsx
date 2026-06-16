import { Card } from '../components/ui/Card';

export default function Collections() {
  return (
    <div className="max-w-7xl mx-auto px-grid-margin py-xl fade-in">
      <div className="text-center mb-2xl">
        <h1 className="font-headline-md text-headline-lg font-bold mb-md text-on-surface ">Curated Collections</h1>
        <p className="font-body-md text-body-lg text-on-surface-variant max-w-2xl mx-auto  ">
          Explore our exclusive, themed apparel collections designed to inspire your next custom creation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {[
          { title: 'Cyberpunk 2077', desc: 'Neon brights and futuristic prints.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=60' },
          { title: 'Minimalist Core', desc: 'Clean lines and subtle elegance.', img: 'https://images.unsplash.com/photo-1434389678369-182cb11f26a5?w=600&auto=format&fit=crop&q=60' },
          { title: 'Vintage Wash', desc: 'Retro vibes with faded perfection.', img: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&auto=format&fit=crop&q=60' },
          { title: 'Streetwear Drop 1', desc: 'Bold graphics for urban expression.', img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&auto=format&fit=crop&q=60' },
          { title: 'Eco Naturals', desc: 'Organic tones and sustainable fabrics.', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&auto=format&fit=crop&q=60' },
          { title: 'Athleisure Pro', desc: 'Performance gear meets street style.', img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&auto=format&fit=crop&q=60' },
        ].map((collection, i) => (
          <Card key={i} interactive className="overflow-hidden group " style={{ animationDelay: `${(i + 1) * 100}ms` }}>
            <div className="aspect-[4/3] bg-surface-container overflow-hidden">
              <img src={collection.img} alt={collection.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-lg">
              <h3 className="font-headline-md text-[20px] font-bold mb-xs text-on-surface">{collection.title}</h3>
              <p className="font-body-md text-on-surface-variant">{collection.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
