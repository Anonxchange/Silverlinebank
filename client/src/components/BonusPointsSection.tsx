import creditCardImg from "@assets/generated_images/Credit_card_promotional_image_7d54721a.png";

export default function BonusPointsSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative h-64 md:h-96 overflow-hidden rounded-md mb-8">
          <img 
            src={creditCardImg} 
            alt="Choice Privileges credit cards" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground" data-testid="text-bonus-points">
            Earn up to 60,000 bonus points
          </h2>
        </div>
      </div>
    </section>
  );
}
