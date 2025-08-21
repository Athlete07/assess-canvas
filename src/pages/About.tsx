import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Shield, Award, ArrowRight, Heart, Lightbulb, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Scientific Officer",
    bio: "PhD in Psychology with 15+ years in assessment design"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Product",
    bio: "Former Google PM specializing in user experience"
  },
  {
    name: "Dr. James Thompson",
    role: "Research Director",
    bio: "Published researcher in psychometrics and data science"
  },
  {
    name: "Lisa Park",
    role: "Head of Design",
    bio: "Award-winning UX designer focused on accessibility"
  }
];

const values = [
  {
    icon: Heart,
    title: "User-Centric",
    description: "Every decision we make prioritizes user experience and value"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is protected with enterprise-grade security"
  },
  {
    icon: Lightbulb,
    title: "Evidence-Based",
    description: "All assessments are grounded in scientific research"
  },
  {
    icon: Globe,
    title: "Accessible",
    description: "Tools that work for everyone, regardless of ability or background"
  }
];

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                AssessmentPro
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're on a mission to democratize personal and professional growth through 
              scientifically-backed assessments that provide actionable insights for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that self-awareness is the foundation of personal growth. Our platform 
                provides access to professional-grade assessments that were once only available 
                to corporations and institutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By making these tools accessible to everyone, we're empowering individuals to 
                make informed decisions about their careers, health, relationships, and personal development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">1M+</h3>
                  <p className="text-muted-foreground">Users Empowered</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">300+</h3>
                  <p className="text-muted-foreground">Assessment Tools</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className="text-center hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Story</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                AssessmentPro was founded in 2020 by a team of psychologists, data scientists, and 
                technology leaders who recognized a gap in the market. While high-quality assessments 
                existed in academic and corporate settings, they were largely inaccessible to individuals 
                seeking personal growth.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our founders, having worked at leading assessment companies and research institutions, 
                understood the power of well-designed psychological instruments. They set out to create 
                a platform that would democratize access to these tools while maintaining the highest 
                standards of scientific rigor.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, we're proud to serve over 1 million users worldwide, from students and professionals 
                to organizations and researchers. Our commitment to evidence-based assessment design and 
                user-centric experience continues to drive innovation in the personal development space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Led by experts in psychology, technology, and design, our team is passionate about 
              creating meaningful assessment experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join over 1 million users who have discovered insights about themselves through our assessments.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;