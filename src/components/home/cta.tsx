import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h3 className="h4 md:h3 max-w-xl text-center mb-8">
            Let&apos;s embark on the journey of turning concepts into concrete
            achievements. Your ideas, my commitment!
          </h3>
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
