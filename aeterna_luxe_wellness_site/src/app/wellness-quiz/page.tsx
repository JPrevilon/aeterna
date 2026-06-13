import { PageHero } from "@/components/PageHero";
import { WellnessQuiz } from "@/components/WellnessQuiz";
import { meta } from "@/lib/seo";
export const metadata = meta({title:"Wellness Quiz", description:"Find your Aeterna starting point for luxury spa rituals, skin care, body care, or consultation-first medical wellness in Hollywood, Florida.", path:"/wellness-quiz"});
export default function WellnessQuizPage(){return <><PageHero eyebrow="Ritual Finder" title="Find your Aeterna starting point." copy="Answer one simple intention and let the site route you to a recommended service or consultation."/><section className="linen bg-vanilla px-6 py-16 md:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><WellnessQuiz/></div></section></>}
