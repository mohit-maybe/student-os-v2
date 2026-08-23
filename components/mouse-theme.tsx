"use client";

import { useEffect } from "react";

export default function MouseTheme() {
  useEffect(() => {
    const root = document.documentElement;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const cursor = document.createElement("div");
    cursor.setAttribute("aria-hidden", "true");
    cursor.className = "student-cursor";
    document.body.appendChild(cursor);

    const move = (event: PointerEvent) => {
      root.style.setProperty("--mouse-x", `${event.clientX}px`);
      root.style.setProperty("--mouse-y", `${event.clientY}px`);

      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(".group, [data-card]");
      if (target) {
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--card-mx", `${event.clientX - rect.left}px`);
        target.style.setProperty("--card-my", `${event.clientY - rect.top}px`);
      }
    };

    const over = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("a, button, input, textarea, select, .group, [data-card]");
      document.body.classList.toggle("cursor-active", Boolean(target));
      document.body.classList.toggle("cursor-card", Boolean((event.target as HTMLElement | null)?.closest(".group, [data-card]")));
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      cursor.remove();
      document.body.classList.remove("cursor-active", "cursor-card");
    };
  }, []);

  return <div aria-hidden="true" className="mouse-spotlight" />;
}
