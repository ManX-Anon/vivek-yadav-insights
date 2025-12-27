import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";

const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/Skills"));
const Contact = lazy(() => import("../components/Contact"));

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900">
      <Navigation />
      <Hero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <About />
        <Skills />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Index;
