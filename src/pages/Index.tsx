import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionsSection from "@/components/SolutionsSection";
import ResultsSection from "@/components/ResultsSection";
import TimelineSection from "@/components/TimelineSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import ChatAssistant from "@/components/ChatAssistant";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionsSection />
      <ResultsSection />
      <TimelineSection />
      <FAQSection />
      <ContactSection />
      <ChatAssistant />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            ⚙️ <span className="font-semibold gradient-text">AI-tech</span> | Automatizando o
            presente, construindo o futuro.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2025 AI-tech Soluções. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
