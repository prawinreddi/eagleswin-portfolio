"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Featured() {
  const collections = [
    {
      title: "Mens Essentials",
      image: "/images/stylehub/mens-collection.png",
      link: "/stylehub/shop?category=mens",
    },
    {
      title: "Womens Elegance",
      image: "/images/stylehub/womens-collection.png",
      link: "/stylehub/shop?category=womens",
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4">Curated Edits.</h2>
            <p className="text-stone-500 uppercase tracking-widest text-sm">Explore our signature lines.</p>
          </div>
          <Link href="/stylehub/collections" className="inline-block mt-6 md:mt-0 pb-1 border-b border-black text-sm uppercase tracking-widest hover:text-stone-500 hover:border-stone-500 transition-colors">
            View All Collections
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative aspect-[4/5] overflow-hidden bg-stone-100"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/20" />
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-2xl font-medium tracking-tight mb-4">{collection.title}</h3>
                <Link 
                  href={collection.link}
                  className="bg-white text-black px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-stone-200 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
