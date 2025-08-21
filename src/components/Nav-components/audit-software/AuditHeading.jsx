import Button from "@/app/_components/Button";
import ChangingText from "@/app/_components/ChangingText";
import FadeUpAnimation from "@/app/_components/FadeUpAnimation";
import TryButton from "@/app/_components/TryButton";
import BookAnDemo from "@/Components-1/UI/BookAnDemoBtn";
import Link from "next/link";

const changingText = [
  "results",
  "clarity",
  "confidence",
  "assurance",
  "efficiency",
  "accuracy",
];

export default function AuditHeading() {
  return (
    <FadeUpAnimation className="text-center lg:w-3/4 mx-auto py-10 mb-10 flex flex-col items-center justify-center gap-2 relative z-30 framer-motion-container animation-container">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Background pattern.svg')",
          opacity: 0.1,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <ChangingText
        headingText="Audit Portal"
        changingText={changingText}
        speed={3000}
        colorOftext="text-orange-500"
      />

      <div className="flex justify-center gap-4 relative z-20">
        <Link href={'#'}>
         <Button
           type="secondary"
           className="w-full h-full"
           style={{
             backgroundColor: "rgba(232, 132, 12, 0.08)",
             color: "#e8840c",
             borderColor: "#e8840c"
           }}
         >
           Early Adopter
         </Button>
        </Link>
        <BookAnDemo />
      </div>
    </FadeUpAnimation >
  );
}
