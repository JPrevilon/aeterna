import { ParallaxImageFrame } from "@/components/ParallaxImageFrame";
const photos = ["/assets/photos/aeterna-interior-wide.jpeg","/assets/photos/aeterna-treatment-room.jpeg","/assets/photos/aeterna-storefront-door.jpeg"];
export function PhotoGrid() {
  return <section className="linen bg-vanilla px-6 py-12 md:px-8 lg:py-16"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{photos.map((p,i)=><ParallaxImageFrame key={p} src={p} alt={`Aeterna atmosphere ${i+1}`} sizes="(min-width: 768px) 33vw, 100vw" className={i===1 ? "h-80 md:h-[28rem]" : "h-72 md:mt-10 md:h-96"} />)}</div></section>
}
