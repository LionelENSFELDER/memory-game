import ConfettiExplosion from "react-confetti-explosion";

interface ConfettiProps {
  onComplete: () => void;
}

const Confetti = ({ onComplete }: ConfettiProps) => {
  return (
    <ConfettiExplosion
      id="confetti"
      className="absolute inset-x-0 top-20 h-5"
      duration={3000}
      height={"200vh"}
      width={4000}
      particleCount={200}
      particleSize={10}
      force={1}
      onComplete={() => {
        onComplete();
      }}
    />
  );
};

export default Confetti;
