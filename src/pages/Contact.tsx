import { Button } from "@/src/components/Button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import * as React from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get a free quote or book your service today. We respond quickly to all inquiries.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/3 space-y-12"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're ready to transform your property. Reach out via phone, email, or our online form.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Call or Text</h3>
                    <a href="tel:+15551234567" className="text-muted-foreground hover:text-secondary transition-colors text-lg">(555) 123-4567</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Email</h3>
                    <a href="mailto:info@lucalandscaping.com" className="text-muted-foreground hover:text-secondary transition-colors text-lg">info@lucalandscaping.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Service Area</h3>
                    <p className="text-muted-foreground text-lg">Serving Suburban Neighborhoods</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Business Hours</h3>
                    <p className="text-muted-foreground text-lg">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground text-lg">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-2/3"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-border/50 p-8 md:p-12">
                <h2 className="text-2xl font-heading font-bold text-primary mb-8">Request a Free Quote</h2>
                
                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center">
                    <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-lg">Thank you for reaching out. We will get back to you shortly with your quote.</p>
                    <Button 
                      className="mt-6 bg-secondary hover:bg-secondary/90 text-white" 
                      onClick={() => setIsSuccess(false)}
                    >
                      Send Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-primary">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          required 
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-primary">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          required 
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-primary">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          required 
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-semibold text-primary">Service Needed</label>
                        <select 
                          id="service" 
                          required 
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow"
                        >
                          <option value="">Select a service...</option>
                          <option value="power-washing">Power Washing</option>
                          <option value="house-washing">House Washing</option>
                          <option value="lawn-mowing">Lawn Mowing</option>
                          <option value="car-detailing">Car Detailing</option>
                          <option value="mulching">Mulching</option>
                          <option value="window-cleaning">Window Cleaning</option>
                          <option value="multiple">Multiple Services</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="address" className="text-sm font-semibold text-primary">Property Address</label>
                      <input 
                        type="text" 
                        id="address" 
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow"
                        placeholder="123 Main St, City, State"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-primary">Additional Details</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow resize-none"
                        placeholder="Tell us more about your project..."
                      ></textarea>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-lg h-14 bg-secondary hover:bg-secondary/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Get Instant Quote"}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
