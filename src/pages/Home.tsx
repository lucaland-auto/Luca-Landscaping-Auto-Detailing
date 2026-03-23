import { Link } from "react-router-dom";
import { Button } from "@/src/components/Button";
import { CheckCircle2, Star, ArrowRight, Phone, ShieldCheck, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Home Exterior" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-tight mb-6">
              Luxury Lawn Care & Auto Detailing That Makes Your Property <span className="text-secondary">Stand Out</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Professional exterior cleaning, lawn care, and car detailing services that make homes and vehicles look brand new.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-secondary hover:bg-secondary/90 text-white" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm sm:text-base text-gray-300 font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>Local Business</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Premium Services for Your Home & Vehicle</h2>
            <p className="text-lg text-muted-foreground">We deliver meticulous attention to detail across all our services, ensuring a flawless finish every time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Power Washing", desc: "Professional pressure washing for driveways, patios, and walkways.", price: "$100 - $250", img: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?q=80&w=2070&auto=format&fit=crop" },
              { title: "House Washing", desc: "Safe soft washing to remove dirt, algae, and grime.", price: "$200 - $500", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
              { title: "Lawn Mowing", desc: "Clean professional mowing that keeps lawns sharp and healthy.", price: "$70", img: "https://images.unsplash.com/photo-1592424001806-b6043c2171fa?q=80&w=2070&auto=format&fit=crop" },
              { title: "Car Detailing", desc: "Full interior and exterior detailing to restore your vehicle.", price: "From $120", img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop" },
              { title: "Mulching", desc: "Fresh mulch installation to upgrade landscaping.", price: "$150 - $500", img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2070&auto=format&fit=crop" },
              { title: "Window Cleaning", desc: "Professional window cleaning for crystal clear views.", price: "$100 - $300", img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop" }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold font-heading text-primary">{service.title}</h3>
                    <span className="inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-semibold text-secondary">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-6 line-clamp-2">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                We Treat Your Property Like Our Own
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                When you hire Luca Landscaping & Auto Detailing, you're getting a team that cares about the details. We use professional-grade equipment and proven techniques to deliver stunning results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Reliable service",
                  "Professional equipment",
                  "Attention to detail",
                  "Affordable pricing",
                  "Local small business",
                  "Fast scheduling"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-gray-200 font-medium">{point}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
                  <Link to="/about">About Our Company</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                  alt="Professional Detailing" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary p-8 rounded-2xl shadow-2xl hidden md:block">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/90 font-medium">Satisfaction<br/>Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Trusted by Local Homeowners</h2>
            <p className="text-lg text-muted-foreground">Don't just take our word for it. See what our clients have to say about our services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Driveway looks brand new. Highly recommend. They were fast, professional, and the price was right.", author: "Michael T." },
              { text: "Incredible detailing job on my car. It looks like it just rolled off the showroom floor. Will use again.", author: "Sarah L." },
              { text: "Very professional lawn service. They show up on time and leave the yard looking immaculate every week.", author: "David R." }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border/50">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-lg text-foreground mb-6 italic">"{review.text}"</p>
                <p className="font-bold text-primary font-heading">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2072&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Transform Your Home or Car Today</h2>
          <p className="text-xl text-white/90 mb-2 max-w-2xl mx-auto">
            Ready to experience the premium difference? 
          </p>
          <p className="text-lg text-white/80 mb-10 font-medium">
            ⚠️ Limited weekly appointments available.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-white text-secondary hover:bg-gray-100" asChild>
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-white text-white hover:bg-white/10" asChild>
              <a href="tel:+15551234567" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (555) 123-4567
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
