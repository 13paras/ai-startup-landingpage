import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="relative flex h-[492px] items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[800px]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/* Planet */}
      <div className="absolute left-1/2 top-1/2 size-64 md:size-96 -translate-x-1/2 -translate-y-1/2 rounded-full border-white/20 bg-purple-500 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(183,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* End Planet */}
      {/* Start Ring 1 */}
      <div className="absolute left-1/2 top-1/2 size-[344px] md:size-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white opacity-20">
        <div className="absolute left-0 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-full top-1/2 inline-flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white">
          <div className="size-2 rounded-full bg-white"></div>
        </div>
      </div>
      {/* End Ring 1 */}
      {/* Start Ring 2 */}
      <div className="absolute left-1/2 top-1/2 size-[444px] md:size-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-r-white/20"></div>
      {/* End Ring 2 */}
      <div className="container absolute left-1/2 top-1/2 size-[544px] md:size-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full border-white opacity-20">
      {/* Start Ring 3 */}
        <div className="absolute left-0 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-full top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
      </div>
      {/* End Ring 3*/}
      <div className="container relative mt-10">
        <h1 className="bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-clip-text text-center text-8xl font-semibold tracking-tighter text-transparent md:text-[168px] md:leading-none">
          AI SEO
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-center text-lg text-white/70 md:text-xl">
          Elevate your sites visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="mt-5 flex justify-center">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </section>
  );
};
