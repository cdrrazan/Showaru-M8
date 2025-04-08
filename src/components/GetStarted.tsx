import { Button } from "@/components/ui/button";
const GetStarted = () => {
  return <section id="get-started" className="bg-secondary py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build Your Dream Landing Page?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses who are already creating beautiful, professional landing pages with Showaru.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
            Start Your Free Trial
          </Button>
          <Button variant="outline" className="border-white hover:bg-primary hover:text-white px-8 py-6 text-lg text-slate-950">
            View Demos
          </Button>
        </div>
        <p className="mt-6 text-white/80 text-sm">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>;
};
export default GetStarted;
