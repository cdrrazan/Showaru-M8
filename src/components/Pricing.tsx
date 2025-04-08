
import { CheckCircle, X, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlanFeature {
  name: string;
  included: boolean;
  details?: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  buttonText: string;
  popular?: boolean;
  features: PlanFeature[];
}

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 flex flex-col h-full relative ${plan.popular ? 'border-2 border-accent' : ''}`}>
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-primary">{plan.price}</span>
          {plan.price !== "Free" && <span className="text-primary/70 ml-1">/month</span>}
        </div>
        <p className="text-primary/80 mb-6">{plan.description}</p>
      </div>
      <div className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            {feature.included ? (
              <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
            ) : (
              <X className="text-primary/40 flex-shrink-0 mt-1" size={20} />
            )}
            <div className="flex items-center gap-1">
              <span className={feature.included ? "text-primary" : "text-primary/40"}>
                {feature.name}
              </span>
              {feature.details && (
                <div className="relative group">
                  <HelpCircle size={14} className="text-secondary/60 cursor-help" />
                  <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-white shadow-lg rounded text-xs text-primary/80 hidden group-hover:block z-10">
                    {feature.details}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Button
        className={`w-full ${plan.popular ? 'bg-accent hover:bg-accent/90' : 'bg-secondary hover:bg-secondary/90'} text-white`}
      >
        {plan.buttonText}
      </Button>
    </div>
  );
};

const Pricing = () => {
  const plans: PricingPlan[] = [
    {
      name: "Free",
      price: "Free",
      description: "Perfect for trying out Showaru",
      buttonText: "Get Started",
      features: [
        { name: "1 Landing Page", included: true, details: "Create one fully functional landing page" },
        { name: "Default Theme Only", included: true, details: "Access to our standard theme with limited customization" },
        { name: "Basic Analytics", included: true, details: "View page visits and basic conversion metrics" },
        { name: "Custom Domain", included: false, details: "Can only use Showaru subdomain" },
        { name: "Custom Branding", included: false, details: "Showaru branding appears on your page" },
        { name: "Team Collaboration", included: false, details: "Only one user account allowed" }
      ]
    },
    {
      name: "Basic",
      price: "$5",
      description: "Great for small businesses",
      buttonText: "Choose Basic",
      popular: true,
      features: [
        { name: "5 Landing Pages", included: true, details: "Create up to five different landing pages" },
        { name: "2 Custom Themes", included: true, details: "Choose from and customize two premium themes" },
        { name: "Custom Domain", included: true, details: "Connect your own domain name" },
        { name: "Advanced Analytics", included: true, details: "Detailed conversion tracking and visitor insights" },
        { name: "Custom Branding", included: false, details: "Showaru branding appears on your pages" },
        { name: "Team Collaboration", included: false, details: "Only one user account allowed" }
      ]
    },
    {
      name: "Premium",
      price: "$15",
      description: "For businesses that need more",
      buttonText: "Choose Premium",
      features: [
        { name: "Unlimited Pages", included: true, details: "Create as many landing pages as you need" },
        { name: "5 Custom Themes", included: true, details: "Choose from and customize five premium themes" },
        { name: "Custom Domain", included: true, details: "Connect multiple custom domain names" },
        { name: "Advanced Analytics", included: true, details: "Detailed conversion tracking, A/B testing, and visitor insights" },
        { name: "Custom Branding", included: true, details: "No Showaru branding on your pages" },
        { name: "Team Collaboration", included: true, details: "Up to 5 team members can work on your pages" }
      ]
    }
  ];

  return (
    <section id="pricing" className="section bg-background py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Simple, Transparent Pricing</h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Choose the plan that works best for your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        <div className="mt-12 text-center text-primary/70">
          <p>All plans include a 14-day free trial. No credit card required to try.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
