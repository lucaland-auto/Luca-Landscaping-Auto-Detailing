import { Link } from "react-router-dom";
import { Button } from "@/src/components/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      title: "Power Washing",
      description: "Professional pressure washing for driveways, patios, and walkways. We remove years of built-up dirt, oil stains, and grime to reveal the original surface.",
      price: "$100 – $250",
      img: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?q=80&w=2070&auto=format&fit=crop",
      features: ["Driveways", "Patios", "Walkways", "Decks"]
    },
    {
      title: "House Washing",
      description: "Safe soft washing to remove dirt, algae, and grime. We use low-pressure techniques to protect your siding while effectively cleaning the exterior.",
      price: "$200 – $500",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      features: ["Vinyl Siding", "Brick", "Stucco", "Wood"]
    },
    {
      title: "Lawn Mowing",
      description: "Clean professional mowing that keeps lawns sharp and healthy. We use commercial-grade equipment for a perfect cut every time.",
      price: "$70",
      img: "https://images.unsplash.com/photo-1592424001806-b6043c2171fa?q=80&w=2070&auto=format&fit=crop",
      features: ["Weekly/Bi-weekly", "Trimming included", "Clipping removal", "Pattern mowing"]
    },
    {
      title: "Lawn Edging",
      description: "Sharp lawn edges for a professional looking yard. We create clean lines along sidewalks, driveways, and garden beds.",
      price: "$40 (Add-on)",
      img: "https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2072&auto=format&fit=crop",
      features: ["Sidewalks", "Driveways", "Garden Beds", "Curbs"]
    },
    {
      title: "Mulching",
      description: "Fresh mulch installation to upgrade landscaping. Protects plant roots, retains moisture, and instantly boosts curb appeal.",
      price: "$150 – $500",
      note: "Customer provides mulch delivery.",
      img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2070&auto=format&fit=crop",
      features: ["Bed preparation", "Weed barrier option", "Even spreading", "Clean edges"]
    },
    {
      title: "Car Detailing",
      description: "Full interior and exterior detailing to restore your vehicle. We bring the luxury detail shop directly to your driveway.",
      price: "Starting at $120",
      img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop",
      features: ["Hand wash", "Interior vacuum", "Wax protection", "Stain removal"]
    },
    {
      title: "Window Cleaning",
      description: "Professional window cleaning for crystal clear views. We clean both interior and exterior glass, plus screens and tracks.",
      price: "$100 – $300",
      img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop",
      features: ["Interior/Exterior", "Screen cleaning", "Track wiping", "Streak-free guarantee"]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive exterior cleaning, lawn care, and auto detailing solutions tailored for your property.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-block bg-secondary/10 text-secondary font-semibold px-4 py-1.5 rounded-full text-sm">
                    {service.price}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  {service.note && (
                    <p className="text-sm font-medium text-amber-600 bg-amber-50 p-3 rounded-md border border-amber-200">
                      Note: {service.note}
                    </p>
                  )}
                  
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-foreground font-medium">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                      <Link to="/contact">Book This Service <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Not sure what you need?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for a free, no-obligation quote. We'll assess your property and recommend the best services for your budget.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white" asChild>
            <Link to="/contact">Get a Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
