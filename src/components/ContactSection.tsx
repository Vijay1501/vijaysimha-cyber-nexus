import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import purdueLogoUrl from '@/assets/purdue-logo.png';

export const ContactSection = () => {

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "works.vijaysimha@gmail.com",
      action: () => window.open('mailto:works.vijaysimha@gmail.com')
    },
    {
      icon: "📱",
      label: "Phone",
      value: "919-337-6260",
      action: () => window.open('tel:919-337-6260')
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/vijaynaidu19",
      action: () => window.open('https://linkedin.com/in/vijaynaidu19', '_blank')
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/Vijay912-lab",
      action: () => window.open('https://github.com/Vijay912-lab', '_blank')
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-cyber relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-secondary rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-5 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-primary mb-4 animate-glow hover:scale-105 transition-transform duration-500">
            &gt; Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full animate-pulse"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto font-mono animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Ready to collaborate on cybersecurity projects or discuss opportunities
          </p>
        </div>

        {/* Purdue Logo */}
        <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex items-center justify-center gap-4 mb-4 group cursor-pointer hover:scale-105 transition-all duration-700">
            <img 
              src={purdueLogoUrl} 
              alt="Purdue University" 
              className="h-12 w-auto animate-pulse hover:animate-bounce transition-all duration-500 group-hover:shadow-lg group-hover:scale-110"
            />
            <div className="w-1 h-12 bg-gradient-primary rounded-full animate-pulse group-hover:animate-ping transition-all duration-500"></div>
            <div className="text-left transform group-hover:translate-x-2 transition-transform duration-500">
              <p className="text-lg font-bold font-mono text-primary group-hover:text-accent transition-colors duration-500 animate-fade-in">Purdue University</p>
              <p className="text-sm font-mono text-accent group-hover:text-primary transition-colors duration-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>Cybersecurity Student</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card/50 backdrop-blur border-primary/30 shadow-neon transform hover:scale-105 transition-all duration-500 animate-fade-in hover:rotate-1 hover:shadow-2xl" style={{ animationDelay: '1.5s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-mono text-secondary mb-6 flex items-center animate-fade-in" style={{ animationDelay: '1.7s' }}>
                  <span className="text-accent mr-2 animate-pulse hover:animate-spin transition-all duration-300">&gt;</span> Contact Info
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.slice(0, 2).map((info, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-4 bg-gradient-to-r from-muted/20 to-primary/10 rounded-lg border border-primary/20 hover:border-primary/70 cursor-pointer transition-all duration-500 hover:bg-primary/10 group hover:shadow-neon transform hover:scale-105"
                      onClick={info.action}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="text-3xl mr-4 group-hover:animate-bounce transition-transform duration-300 group-hover:scale-125">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-mono text-accent mb-1">{info.label}:</p>
                        <p className="text-foreground font-mono group-hover:text-primary transition-colors duration-300 text-lg">
                          {info.value}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-primary font-mono">&gt;</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/30 shadow-neon transform hover:scale-105 transition-all duration-500 animate-fade-in hover:-rotate-1 hover:shadow-2xl" style={{ animationDelay: '1.8s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-mono text-secondary mb-6 flex items-center animate-fade-in" style={{ animationDelay: '2s' }}>
                  <span className="text-accent mr-2 animate-pulse hover:animate-spin transition-all duration-300">&gt;</span> Social Links
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.slice(2).map((info, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-4 bg-gradient-to-r from-muted/20 to-secondary/10 rounded-lg border border-secondary/20 hover:border-secondary/70 cursor-pointer transition-all duration-500 hover:bg-secondary/10 group hover:shadow-secondary-glow transform hover:scale-105 animate-fade-in hover:rotate-1"
                      onClick={info.action}
                      style={{ animationDelay: `${(index + 4) * 0.3}s` }}
                    >
                      <div className="text-3xl mr-4 group-hover:animate-bounce transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                        {info.icon}
                      </div>
                      <div className="flex-1 transform group-hover:translate-x-1 transition-transform duration-300">
                        <p className="text-sm font-mono text-accent mb-1 group-hover:text-secondary transition-colors duration-300">{info.label}:</p>
                        <p className="text-foreground font-mono group-hover:text-secondary transition-colors duration-300 text-lg">
                          {info.value}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-125">
                        <span className="text-secondary font-mono animate-pulse">&gt;</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Status and Resume Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Status Card */}
            <Card className="bg-gradient-primary p-1 rounded-lg shadow-secondary-glow transform hover:scale-105 transition-all duration-500 animate-pulse animate-fade-in hover:rotate-2" style={{ animationDelay: '2.5s' }}>
              <div className="bg-background rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold font-mono text-primary mb-3 animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '2.7s' }}>
                  &gt; Current Status
                </h3>
                <div className="flex items-center justify-center mb-3 animate-fade-in" style={{ animationDelay: '2.9s' }}>
                  <div className="w-4 h-4 bg-accent rounded-full animate-ping mr-2"></div>
                  <span className="text-accent font-mono text-lg hover:scale-105 transition-transform duration-300">Available for opportunities</span>
                </div>
                <p className="text-muted-foreground animate-fade-in hover:text-foreground transition-colors duration-300" style={{ animationDelay: '3.1s' }}>
                  Open to cybersecurity internships, research projects, and collaboration opportunities
                </p>
              </div>
            </Card>

            {/* Resume Download */}
            <Card className="bg-card/50 backdrop-blur border-primary/30 shadow-neon transform hover:scale-105 transition-all duration-500 animate-fade-in hover:-rotate-2" style={{ animationDelay: '3s' }}>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold font-mono text-secondary mb-4 animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '3.2s' }}>
                  &gt; Resume
                </h3>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-secondary-glow transition-all duration-500 font-mono transform hover:scale-110 hover:rotate-1 animate-fade-in group"
                  style={{ animationDelay: '3.4s' }}
                  onClick={() => {
                    toast("Resume download started!", {
                      description: "vijaysimha-naidu-resume.pdf"
                    });
                  }}
                >
                  <span className="group-hover:animate-bounce">&gt;</span> Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
