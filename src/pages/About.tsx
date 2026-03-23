import { Link } from "react-router-dom";
import { Button } from "@/src/components/Button";
import { CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are a local, luxury home service company dedicated to making your property look its absolute best.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="font-bold text-primary font-heading text-lg">"The best service company we've ever hired."</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Our Commitment to Excellence</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Luca Landscaping & Auto Detailing was founded on a simple principle: provide premium, detail-oriented services that homeowners can rely on. We understand that your home and vehicle are significant investments, and we treat them with the utmost care and respect.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We serve suburban neighborhoods with a focus on quality, reliability, and customer satisfaction. Our team uses professional-grade equipment and proven techniques to ensure a flawless finish every time.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {[
                  "Fully Insured",
                  "Satisfaction Guaranteed",
                  "Professional Equipment",
                  "Detail-Oriented Staff",
                  "Transparent Pricing",
                  "Fast Response Times"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-foreground font-medium">{point}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-8">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white" asChild>
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
