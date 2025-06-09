import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Something went wrong!",
          description: "Failed to send your message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error!",
        description:
          "Could not reach the server. Please check your connection.",
        variant: "destructive",
      });
      console.error("Error sending message:", error);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ishasakhujaa@gmail.com",
      link: "mailto:ishasakhujaa@gmail.com",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/ishasakhuja",
      link: "https://github.com/ishasakhuja",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ishasakhuja",
      link: "https://linkedin.com/in/ishasakhuja",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2">
            Contact
          </h2>
          <h3 className="text-4xl font-bold mb-6">
            Let's Build Something Great Together
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively looking for exciting opportunities. If you have a role
            or project where my skills can contribute, let’s connect and create
            impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-8">
              <h4 className="text-2xl font-semibold mb-6">Send a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-semibold mb-6">Get in Touch</h4>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-border/50 bg-card/50 hover:bg-card/80 transition-colors"
                >
                  <CardContent className="p-6">
                    <a
                      href={info.link}
                      className="flex items-center space-x-4 hover:text-blue-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg text-white">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6">
                <h5 className="font-semibold mb-2">Location</h5>
                <p className="text-muted-foreground">Delhi, India</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Available for remote work worldwide
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
