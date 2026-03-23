import { Link } from "react-router-dom";
import { Button } from "@/src/components/Button";
import { motion } from "motion/react";

export function Gallery() {
  const categories = [
    {
      title: "Driveway Power Washing",
      before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop&grayscale=true",
      after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "House Washing",
      before: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&grayscale=true",
      after: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Lawn Mowing",
      before: "https://images.unsplash.com/photo-1592424001806-b6043c2171fa?q=80&w=2070&auto=format&fit=crop&grayscale=true",
      after: "https://images.unsplash.com/photo-1592424001806-b6043c2171fa?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Car Detailing",
      before: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop&grayscale=true",
      after: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Window Cleaning",
      before: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop&grayscale=true",
      after: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Before & After Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See the dramatic transformations we deliver for our clients' homes and vehicles.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {categories.map((category, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">{category.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                    <img src={category.before} alt={`${category.title} Before`} className="w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-sm backdrop-blur-sm">
                      Before
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                    <img src={category.after} alt={`${category.title} After`} className="w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg">
                      After
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Ready for your transformation?</h2>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white" asChild>
              <Link to="/contact">Book Your Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
