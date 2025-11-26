import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function TypewriterText() {
  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "React Developer", "Laravel Dev", "Database Architect"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 40,
    delaySpeed: 2000,
  });

  return (
    <span className="text-xl md:text-2xl font-medium text-white">
      {text}
      <Cursor cursorColor="#FFD54A" />
    </span>
  );
}
