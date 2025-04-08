
import { Clock, Settings, Zap, Rocket } from "lucide-react";

const Step = ({
  number,
  title,
  description,
  icon: Icon
}: {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
      <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
        {number}
      </div>
      <div className="text-secondary mb-3">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-primary/80">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Settings,
      title: "Choose Your Template",
      description: "Browse our collection of professionally designed templates and select the one that best fits your needs."
    },
    {
      number: 2,
      icon: Zap,
      title: "Customize Your Design",
      description: "Use our intuitive live editor to customize your template with your own content, colors, and images and visualize in real time."
    },
    {
      number: 3,
      icon: Clock,
      title: "Optimize for Conversion",
      description: "Utilize built-in analytics to optimize your landing page for maximum conversions and engagement."
    },
    {
      number: 4,
      icon: Rocket,
      title: "Publish Your Landing Page",
      description: "Preview your landing page, make any final adjustments, and publish it with one click to make it live on the internet."
    }
  ];

  return (
    <section id="how-it-works" className="section bg-white py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">How It Works</h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Building your perfect landing page is easy with Showaru
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <Step
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="#get-started" className="btn-accent inline-block">Get Started Now</a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
