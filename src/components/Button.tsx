import React from "react";

const Button = (props: React.PropsWithChildren) => {
  return (
    <button
      type="button"
      className="relative py-2 rounded-lg px-3 font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[0px_0px_12px_#8c45ff"
    >
      <div className="absolute inset-0 ">
        <div className="border border-white/20 absolute inset-0 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]  "></div>
        <div className="border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)] rounded-lg "></div>
        <div className="shadow-[0_0_10px_rgb(140,69,255,.7)_inset] absolute inset-0 rounded-lg"></div>
      </div>
      <span>{props.children}</span>
    </button>
  );
};

export default Button;