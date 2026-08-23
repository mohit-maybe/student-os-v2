"use client";

import { useEffect } from "react";

export default function MouseTheme() {
  useEffect(() => {
    const root = document.documentElement;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const cursor = document.createElement("div");
    cursor.className = "student-cursor";
    cursor.innerHTML = '<span class="student-cursor-ring"></span><span class="student-cursor-dot"></span><span class="student-cursor-label">OPEN</span>';
    cursor.setAttribute("aria-hidden", "true");
    document.body.appendChild(cursor);

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const render = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      root.style.setProperty("--mouse-x", `${x}px`);
      root.style.setProperty("--mouse-y", `${y}px`);
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(render);
    };

    const move = (event: PointerEvent) => {
      tx = event.clientX;
      ty = event.clientY;
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-card], .group");
      if (target) {
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--card-mx", `${event.clientX - rect.left}px`);
        target.style.setProperty("--card-my", `${event.clientY - rect.top}px`);
      }
    };

    const over = (event: PointerEvent) => {
      const element = (event.target as HTMLElement | null)?.closest<HTMLElement>("a, button, input, textarea, select, [data-card], .group");
      const card = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-card], .group");
      document.body.classList.toggle("cursor-active", Boolean(element));
      document.body.classList.toggle("cursor-card", Boolean(card));
      const label = cursor.querySelector<HTMLElement>(".student-cursor-label");
      if (label) label.textContent = card ? "VIEW" : element ? "GO" : "";
    };

    const leave = () => document.body.classList.remove("cursor-active", "cursor-card");

    raf = requestAnimationFrame(render);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("blur", leave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("blur", leave);
      cursor.remove();
      document.body.classList.remove("cursor-active", "cursor-card");
    };
  }, []);

  return <div aria-hidden="true" className="mouse-spotlight" />;
}
