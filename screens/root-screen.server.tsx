import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeatureCard from "@/containers/root/feature-card.server";
import { ArrowRight, BookOpen, Brain, Plus, TrendingUp } from "lucide-react";
import Link from "next/link";

const RootScreen = () => {
  return (
    <main className="px-4 py-16">
      <section className="w-full h-[80vh] flex flex-col gap-4 justify-center items-center">
        <h1 className="h1">
          Your Personal German <br /> Vocabulary Inventory 🇩🇪
        </h1>
        <p className="text-center mt-4">
          Build and maintain your own curated collection of German words 📝.
          Keep track of what you&apos;ve learned, <br />
          refresh your memory, and never lose sight of your vocabulary progress.
        </p>

        <Button className="mt-8">
          Get Started
          <ArrowRight />
        </Button>
      </section>

      <section className="pb-8">
        <div className="w-full flex justify-center items-center flex-wrap gap-4">
          <FeatureCard
            title="Personal Inventory 📦"
            description="Create your own organized collection of German vocabulary.
                Categorize by verbs, adjectives, and nouns with articles (der,
                die, das) for easy reference and review."
            Icon={BookOpen}
          />

          <FeatureCard
            title="Refresh Your Memory 🧠"
            description="Keep your vocabulary fresh with interactive practice sessions.
                    Test yourself on articles, translations, and word forms to
                    maintain what you've learned."
            Icon={Brain}
          />
          <FeatureCard
            title="Track Your Growth 📈"
            description="Watch your personal vocabulary inventory grow over time. Keep
                    track of what you know and identify words that need more
                    practice."
            Icon={TrendingUp}
          />
        </div>
      </section>

      <section className="container mx-auto">
        <Card className="bg-primary text-primary-foreground border-0">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-balance">
                Start Building Your Vocabulary Inventory 🚀
              </h3>
              <p className="text-lg text-primary-foreground/90 text-pretty leading-relaxed">
                Take control of your German learning journey. Add words you
                encounter, organize them your way, and refresh your knowledge
                whenever you need.
              </p>
              <Link href="/vocabulary">
                <Button size="lg" variant="secondary" className="mt-4">
                  <Plus className="mr-2 h-5 w-5" />
                  Add Your First Word ✨
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default RootScreen;
