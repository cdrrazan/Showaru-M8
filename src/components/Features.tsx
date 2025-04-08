
import { CheckCircle, MousePointer, Palette, Layout, Globe, Users, Shield, Zap } from "lucide-react";

const Feature = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-secondary mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-primary/80">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: MousePointer,
      title: "Live Builder",
      description: "Intuitive interface that lets you build landing pages by visualizing live changes as you edit."
    },
    {
      icon: Palette,
      title: "Customizable Themes",
      description: "Choose from a variety of professionally designed themes and customize them to match your brand."
    },
    {
      icon: Layout,
      title: "Responsive Design",
      description: "All landing pages are automatically optimized for desktop, tablet, and mobile devices."
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized code ensures your landing pages load quickly and provide a smooth user experience."
    },
    {
      icon: Globe,
      title: "Custom Domains",
      description: "Connect your own domain name or use one of our free subdomains to get online quickly."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team to build and manage your landing pages efficiently."
    },
    {
      icon: Shield,
      title: "Secure Hosting",
      description: "All landing pages are hosted on secure servers with SSL encryption and regular backups."
    },
    {
      icon: CheckCircle,
      title: "SEO Friendly",
      description: "Built-in SEO tools to help your landing page rank higher in search engine results."
    }
  ];

  return (
    <section id="features" className="section bg-background py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Powerful Features</h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Everything you need to create stunning landing pages that drive results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
