export function SplineSlot() {
  const sceneUrl = process.env.NEXT_PUBLIC_SPLINE_SCENE_URL;
  if(!sceneUrl) return null;

  return <section className="linen bg-cream px-6 py-12 md:px-8 lg:py-16">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 shadow-luxury">
      <iframe
        title="Aeterna ambient motion scene"
        src={sceneUrl}
        loading="lazy"
        className="h-[420px] w-full border-0 md:h-[560px]"
        allow="autoplay; fullscreen; xr-spatial-tracking"
      />
    </div>
  </section>;
}
