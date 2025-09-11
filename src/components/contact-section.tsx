import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = 'service_lo3ojqj';
      const templateId = 'template_61cvk9m';
      const publicKey = 'ALv-5S9hGoYtsR0mG';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'chandubommana27@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary">
              Let's discuss your next project or opportunity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <Card className="surface-elevated animate-fade-in hover:shadow-glow transition-smooth">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-xl sm:text-2xl">Let's Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                    I'm always interested in new opportunities, collaborations, and 
                    interesting projects. Whether you have a question or just want to 
                    say hi, feel free to reach out!
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-sm sm:text-base">Email</p>
                        <a 
                          href="mailto:chandubommana27@gmail.com"
                          className="text-primary hover:text-primary-glow transition-colors text-sm sm:text-base break-all"
                        >
                          chandubommana27@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base">Location</p>
                        <p className="text-text-secondary text-sm sm:text-base">Hyderabad, India</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base">Availability</p>
                        <p className="text-text-secondary text-sm sm:text-base">Open to opportunities</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6 border-t border-border">
                    <p className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Connect with me on:</p>
                    <div className="flex gap-3 sm:gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary/10 hover:border-primary transition-smooth h-10 w-10 sm:h-12 sm:w-12"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/chandu-bommana-070114256/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn Profile"
                        >
                          <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary/10 hover:border-primary transition-smooth h-10 w-10 sm:h-12 sm:w-12"
                        asChild
                      >
                        <a
                          href="https://github.com/chandubommana"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Profile"
                        >
                          <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="surface-elevated animate-fade-in hover:shadow-glow transition-smooth">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary/20 h-10 sm:h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary/20 h-10 sm:h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary/20 resize-none min-h-[120px] sm:min-h-[140px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange hover:bg-orange/90 text-white hover:shadow-glow transition-smooth disabled:opacity-50 h-11 sm:h-12 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}