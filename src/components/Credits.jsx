import { useState, useRef, useEffect } from "react";

const CreditsTooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

  const creditsText = "Credits";
  const tooltipContent = (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md">
      <h4 className="text-lg font-bold">Assets Used</h4>
      <ul>
        <li>
          {`'Mario Mystery Box' (https://skfb.ly/6QUJu) by planetvfx is licensed
          under Creative Commons Attribution
          (http://creativecommons.org/licenses/by/4.0/).`}
        </li>
        <li>Asset 2 - License Information</li>
      </ul>
    </div>
  );

  useEffect(() => {
    const handleResize = () => {
      const tooltip = tooltipRef.current;
      if (tooltip) {
        const tooltipRect = tooltip.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const isBottomVisible = viewportHeight - tooltipRect.bottom > 0;
        const isRightVisible = viewportWidth - tooltipRect.right > 0;

        tooltip.style.top = isBottomVisible ? "auto" : "-100%";
        tooltip.style.bottom = isBottomVisible ? "100%" : "auto";
        tooltip.style.left = isRightVisible ? "auto" : "0";
        tooltip.style.right = isRightVisible ? "0" : "auto";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showTooltip]);

  return (
    <div className="fixed bottom-2 right-2">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative inline-block"
      >
        <span className="text-sm cursor-pointer text-slate-400	 hover:underline">
          {creditsText}
        </span>
        {showTooltip && (
          <div
            ref={tooltipRef}
            className=" bottom-10 right-5 z-11 bg-gray-800 text-slate-400	 p-4 rounded-md shadow-md"
          >
            {tooltipContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreditsTooltip;
