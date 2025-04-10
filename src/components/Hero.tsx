
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-white py-32 md:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Build amazing landing pages instantly!
            </h1>
            <p className="text-lg md:text-xl text-primary/80 max-w-xl">
              Create professional landing pages in minutes from our wide range of customizable themes and get online fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={"https://showaru.app.rsynk.com/users/sign_up"}>
                <Button
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
                  Get Started Free
                </Button>
              </a>
              <a href={"https://showaru.app.rsynk.com/users/sign_in"}>
                <Button variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg">
                  View Demo
                </Button>
              </a>
            </div>
            <div className="pt-6 text-sm text-primary/70">
              No credit card required • 14-day free trial • Cancel anytime
            </div>
          </div>
          <div className="lg:w-1/2 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <img
                src="./images/main.png"
                alt="Person building a landing page with Showaru"
                className="rounded-lg scale-125 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
