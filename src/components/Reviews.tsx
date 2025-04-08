import { Star } from "lucide-react";
interface Review {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  imageUrl: string;
}
const ReviewCard = ({
  review
}: {
  review: Review;
}) => {
  return <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img src={review.imageUrl} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h4 className="font-semibold text-primary">{review.name}</h4>
            <p className="text-sm text-primary/70">{review.role}, {review.company}</p>
          </div>
        </div>
        <div className="flex text-accent">
          {[...Array(review.rating)].map((_, i) => <Star key={i} fill="#F39C12" size={16} />)}
        </div>
      </div>
      <p className="text-primary/80">{review.content}</p>
    </div>;
};
const Reviews = () => {
  const reviews: Review[] = [{
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc",
    content: "Showaru has transformed how we create landing pages for our clients. The drag-and-drop interface is intuitive, and the templates are professionally designed. We've cut our landing page development time in half!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  }, {
    name: "David Chen",
    role: "Small Business Owner",
    company: "Chen's Bistro",
    content: "As a restaurant owner, I needed a landing page that looked professional but didn't cost a fortune. Showaru was the perfect solution - I created my site in one afternoon with no technical knowledge.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }, {
    name: "Emma Rodriguez",
    role: "Freelance Designer",
    company: "DesignHub",
    content: "I recommend Showaru to all my clients who need a landing page but don't have the budget for custom development. The customization options are extensive, and the support team is incredibly helpful.",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  }, {
    name: "Michael Thompson",
    role: "CEO",
    company: "Innovate Solutions",
    content: "Our company landing page needed a complete overhaul, but we were dreading the time and cost involved. Showaru made it painless - we now have a modern, responsive page that's driving more leads.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }];
  return <section id="reviews" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">What Our Customers Say</h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">Join thousands of satisfied customers who have transformed their online presence!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => <ReviewCard key={index} review={review} />)}
        </div>
      </div>
    </section>;
};
export default Reviews;