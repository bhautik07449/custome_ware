export interface Product {
  id: number;
  slug: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  colors: { label: string; hex: string }[];
  sizes: string[];
  images: string[];
  description: string;
  details: string[];
  care: string[];
  isNew?: boolean;
  isSoldOut?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'embroidered-heavy-hoodie',
    name: 'Embroidered Heavy Hoodie',
    sku: 'KRZ-001',
    category: 'TOPS',
    price: 185,
    colors: [
      { label: 'Carbon Black', hex: '#000000' },
      { label: 'Optic White', hex: '#ffffff' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      '/product_embroidered_hoodie.png',
      '/product_hoodie.png',
    ],
    description:
      'An architectural study in heavyweight cotton. The Embroidered Heavy Hoodie is constructed from 450gsm loopback fleece with a rigid internal collar stay and intricate metallic gold chain-stitch embroidery across the chest. Built to outlast trends and seasons.',
    details: [
      '450gsm loopback French terry cotton',
      'Gold metallic chain-stitch chest embroidery',
      'Ribbed cuffs and hem with branded tape',
      'Hidden interior pocket',
      'Oversized, drop-shoulder fit',
    ],
    care: [
      'Machine wash cold, inside out',
      'Do not tumble dry',
      'Iron on low heat, avoid embroidery',
      'Do not bleach',
    ],
    isNew: true,
  },
  {
    id: 2,
    slug: 'structured-wool-overcoat',
    name: 'Structured Wool Overcoat',
    sku: 'KRZ-002',
    category: 'OUTERWEAR',
    price: 420,
    colors: [{ label: 'Cream', hex: '#f5f5dc' }],
    sizes: ['S', 'M', 'L', 'XL'],
    images: ['/product_wool_coat.png'],
    description:
      'Precision-cut from a double-faced Italian wool blend, the Structured Wool Overcoat features sharp architectural lapels and a hidden button placket. A coat that speaks in geometry — clean, deliberate, unwavering.',
    details: [
      '80% Italian wool, 20% cashmere blend',
      'Double-faced construction for structure',
      'Hidden placket with magnetic closures',
      'Fully silk-lined interior',
      'Tailored, straight-cut silhouette',
    ],
    care: [
      'Dry clean only',
      'Store on wide-shoulder hanger',
      'Brush with soft garment brush',
      'Do not machine wash',
    ],
  },
  {
    id: 3,
    slug: 'architectural-denim',
    name: 'Architectural Denim',
    sku: 'KRZ-003',
    category: 'BOTTOMS',
    price: 210,
    colors: [
      { label: 'Onyx Black', hex: '#000000' },
      { label: 'Raw Indigo', hex: '#303030' },
    ],
    sizes: ['28', '30', '32', '34', '36'],
    images: ['/product_denim.png'],
    description:
      'Heavy 14oz selvedge denim reimagined with asymmetric seam construction and gold-toned rivets. Each pair stacks at the ankle with a signature KORZAE chain-link selvedge ID. Garment-washed for an immediate lived-in luxury.',
    details: [
      '14oz Japanese selvedge denim',
      'Asymmetric pocket placement',
      'Gold-toned YKK zipper and custom rivets',
      'KORZAE chain-link selvedge ID',
      'Slight taper through thigh and leg',
    ],
    care: [
      'Wash infrequently in cold water',
      'Turn inside out before washing',
      'Hang dry only',
      'Do not use fabric softener',
    ],
    isNew: true,
  },
  {
    id: 4,
    slug: 'signature-leather-tote',
    name: 'Signature Leather Tote',
    sku: 'KRZ-004',
    category: 'ACCESSORIES',
    price: 350,
    colors: [{ label: 'Jet Black', hex: '#000000' }],
    sizes: ['ONE SIZE'],
    images: ['/product_crossbody.png'],
    description:
      'Full-grain vegetable-tanned leather tote with a deliberately clean profile. Blind-embossed KORZAE logo on the base. Interior structured with suede lining and a hidden magnetic clasp pocket. Ages beautifully with use.',
    details: [
      'Full-grain vegetable-tanned cowhide leather',
      'Suede interior lining',
      'Blind-embossed KORZAE logo base',
      'Antique gold-tone solid brass hardware',
      'Reinforced flat bottom with metal feet',
    ],
    care: [
      'Wipe clean with dry cloth',
      'Condition with leather balm monthly',
      'Store stuffed to retain shape',
      'Keep away from prolonged sunlight',
    ],
  },
  {
    id: 5,
    slug: 'heavyweight-box-tee',
    name: 'Heavyweight Box Tee',
    sku: 'KRZ-005',
    category: 'TOPS',
    price: 85,
    colors: [
      { label: 'Carbon Black', hex: '#000000' },
      { label: 'Optic White', hex: '#ffffff' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: ['/product_tee.png'],
    description:
      'Our foundational garment. 280gsm combed cotton jersey in a boxy, structured silhouette with a subtle embroidered KORZAE monogram at the chest. The base layer of any architectural outfit.',
    details: [
      '280gsm combed ring-spun cotton jersey',
      'Embroidered KORZAE monogram chest detail',
      'Tape-reinforced shoulder seams',
      'Pre-washed for shrink resistance',
      'Boxy fit, slightly longer back hem',
    ],
    care: [
      'Machine wash warm',
      'Tumble dry low',
      'Iron on medium if needed',
      'Do not bleach',
    ],
    isNew: true,
  },
  {
    id: 6,
    slug: 'structural-cargo-pant',
    name: 'Structural Cargo Pant',
    sku: 'KRZ-006',
    category: 'BOTTOMS',
    price: 195,
    colors: [{ label: 'Charcoal', hex: '#303030' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: ['/product_trousers.png'],
    description:
      'Technical ripstop cargo trousers built for urban movement. Reinforced stress points, gold-finished hardware, and precision bartack stitching at every pocket. Where military utility meets high-street restraint.',
    details: [
      '200gsm ripstop cotton-nylon blend',
      'Six-pocket construction with hidden zip',
      'Gold-finished custom press-stud hardware',
      'Taped internal seams for durability',
      'Adjustable waistband with KORZAE engraved buckle',
    ],
    care: [
      'Machine wash cold',
      'Tumble dry low',
      'Iron on medium heat',
      'Close all zips before washing',
    ],
  },
  {
    id: 7,
    slug: 'washed-sand-hoodie',
    name: 'Washed Sand Hoodie',
    sku: 'KRZ-007',
    category: 'TOPS',
    price: 140,
    colors: [{ label: 'Washed Sand', hex: '#d4c5a9' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: ['/product_sand_hoodie.png'],
    description:
      'Garment-washed French terry in a desert sand tone that deepens with every wash. Tonal KORZAE embroidery at the cuff and a deconstructed hem finish give it a worn-in ease that feels intentional, never careless.',
    details: [
      '380gsm garment-washed loopback fleece',
      'Tonal KORZAE embroidery on cuff',
      'Deconstructed raw hem finish',
      'Split kangaroo pocket with internal zip',
      'Relaxed, slightly oversized fit',
    ],
    care: [
      'Machine wash cold',
      'Do not tumble dry',
      'Iron on low heat only',
      'Wash with similar colors',
    ],
  },
  {
    id: 8,
    slug: 'pebbled-leather-crossbody',
    name: 'Pebbled Leather Crossbody',
    sku: 'KRZ-008',
    category: 'ACCESSORIES',
    price: 210,
    colors: [{ label: 'Jet Black', hex: '#000000' }],
    sizes: ['ONE SIZE'],
    images: ['/product_crossbody.png'],
    description:
      'A minimal crossbody built from pebble-grained calfskin with clean welted edges and a signature KORZAE gold logo plaque. Adjustable chain-and-leather strap. Engineered for the essentials, nothing more.',
    details: [
      'Pebble-grained Italian calfskin leather',
      'KORZAE signature gold logo plaque',
      'Adjustable leather and gold-tone chain strap',
      'Microfiber-lined interior',
      'Concealed magnetic clasp closure',
    ],
    care: [
      'Wipe with soft damp cloth',
      'Apply leather conditioner periodically',
      'Store in dust bag when not in use',
      'Avoid contact with water and oils',
    ],
    isNew: true,
  },
];

export const categories = ['ALL', 'OUTERWEAR', 'TOPS', 'BOTTOMS', 'ACCESSORIES'];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getRelatedProducts = (product: Product, count = 4) =>
  products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, count);
