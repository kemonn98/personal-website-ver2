import { ExternalLink } from 'lucide-react'

const products = [
  {
    name: 'SuperApp',
    description: 'All-in-one workspace for design systems and component libraries. Sync Figma to code, keep docs in one place.',
    url: '#',
    tag: 'Figma · Design systems',
  },
  {
    name: 'Flowbitz',
    description: 'Lightweight flow and automation for design teams. Connect tools without the bloat.',
    url: '#',
    tag: 'Automation · Plugins',
  },
  {
    name: 'AutoLayers',
    description: 'Figma plugin to auto-organize layers, naming conventions, and structure. Less hand work, more consistency.',
    url: '#',
    tag: 'Figma plugin',
  },
  {
    name: 'Font Scanner',
    description: 'Scan and audit font usage across projects. Find duplicates, weights, and licensing at a glance.',
    url: '#',
    tag: 'Typography · Tool',
  },
]

export function Products() {
  return (
    <section id="products" className="section scroll-snap-section flex items-center">
      <div className="site-wrap">
        <p className="label mb-8">Products & plugins</p>
        <ul className="space-y-0">
          {products.map((product) => (
            <li key={product.name} className="py-5 first:pt-0">
              <a href={product.url} className="group block">
                <h3 className="text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors inline-flex items-center gap-1.5">
                  {product.name}
                  <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{product.tag}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {product.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
