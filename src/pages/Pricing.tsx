import { Link } from "react-router-dom";
import { Button } from "@/src/components/Button";
import { Check, X } from "lucide-react";
import { motion } from "motion/react";

export function Pricing() {
  const packages = [
    {
      name: "Bronze Package",
      price: "$120",
      description: "Essential cleaning for a fresh look.",
      features: [
        { name: "Exterior wash", included: true },
        { name: "Tire cleaning", included: true },
        { name: "Interior vacuum", included: true },
        { name: "Interior wipe down", included: false },
        { name: "Window cleaning", included: false },
        { name: "Tire shine", included: false },
        { name: "Wax protection", included: false },
        { name: "Deep interior cleaning", included: false },
        { name: "Carpet vacuum", included: false },
        { name: "Full exterior detailing", included: false },
        { name: "Deep stain removal", included: false },
        { name: "Luxury finish", included: false },
      ]
    },
    {
      name: "Silver Package",
      price: "$180",
      description: "A thorough clean inside and out.",
      popular: true,
      features: [
        { name: "Exterior wash", included: true },
        { name: "Tire cleaning", included: true },
        { name: "Interior vacuum", included: true },
        { name: "Interior wipe down", included: true },
        { name: "Window cleaning", included: true },
        { name: "Tire shine", included: true },
        { name: "Wax protection", included: false },
        { name: "Deep interior cleaning", included: false },
        { name: "Carpet vacuum", included: false },
        { name: "Full exterior detailing", included: false },
        { name: "Deep stain removal", included: false },
        { name: "Luxury finish", included: false },
      ]
    },
    {
      name: "Gold Package",
      price: "$250",
      description: "Premium protection and deep cleaning.",
      features: [
        { name: "Exterior wash", included: true },
        { name: "Tire cleaning", included: true },
        { name: "Interior vacuum", included: true },
        { name: "Interior wipe down", included: true },
        { name: "Window cleaning", included: true },
        { name: "Tire shine", included: true },
        { name: "Wax protection", included: true },
        { name: "Deep interior cleaning", included: true },
        { name: "Carpet vacuum", included: true },
        { name: "Full exterior detailing", included: false },
        { name: "Deep stain removal", included: false },
        { name: "Luxury finish", included: false },
      ]
    },
    {
      name: "Platinum Package",
      price: "$350+",
      description: "The ultimate luxury detailing experience.",
      features: [
        { name: "Exterior wash", included: true },
        { name: "Tire cleaning", included: true },
        { name: "Interior vacuum", included: true },
        { name: "Interior wipe down", included: true },
        { name: "Window cleaning", included: true },
        { name: "Tire shine", included: true },
        { name: "Wax protection", included: true },
        { name: "Deep interior cleaning", included: true },
        { name: "Carpet vacuum", included: true },
        { name: "Full exterior detailing", included: true },
        { name: "Deep stain removal", included: true },
        { name: "Luxury finish", included: true },
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Car Detailing Packages</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect level of care for your vehicle. We bring the luxury detail shop directly to your driveway.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {packages.map((pkg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border ${pkg.popular ? 'border-secondary shadow-xl scale-105 z-10' : 'border-border shadow-sm'} bg-white p-8`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-secondary px-4 py-1 text-sm font-bold text-white uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-primary">{pkg.name}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{pkg.description}</p>
                </div>
                
                <div className="mb-8 flex items-baseline text-5xl font-extrabold text-primary">
                  {pkg.price}
                </div>
                
                <ul className="mb-8 flex-1 space-y-4">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-secondary shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/30 shrink-0" />
                      )}
                      <span className={feature.included ? "text-foreground font-medium" : "text-muted-foreground line-through"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  size="lg" 
                  className={`w-full ${pkg.popular ? 'bg-secondary hover:bg-secondary/90 text-white' : 'bg-primary hover:bg-primary/90 text-white'}`} 
                  asChild
                >
                  <Link to="/contact">Book {pkg.name}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              * Prices may vary based on vehicle size and condition. A final quote will be provided before service begins.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
