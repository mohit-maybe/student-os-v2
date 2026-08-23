"use client";

import Link from "next/link";
import { ArrowUpRight, Bell, Check, ChevronRight, ClipboardCheck, GraduationCap, LayoutDashboard, Users } from "lucide-react";
import { useState } from "react";

const schedule = [
  ["08:10", "Morning assembly", "All students"],
  ["09:00", "Class 12 · Physics", "Room 204"],
  ["11:15", "Attendance review", "12-A · 31/34"],
  ["13:20", "Parent meeting", "3 appointments"],
];
const stats = [["Attendance", "94.2%", "this month"], ["Present today", "1,184", "of 1,247"], ["Open tasks", "18", "across school"]];

export default function Home() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [activeRow, setActiveRow] = useState(2);

  function move(e: React.PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    setPointer({ x: ((e.clientX - r.left) / r.width - .5) * 2, y: ((e.clientY - r.top) / r.height - .5) * 2 });
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1ea] text-[#172018]">
      <style jsx global>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}@keyframes pulse{0%,100%{opacity:.35;transform:scale(.85)}50%{opacity:1;transform:scale(1)}}@keyframes shine{0%{transform:translateX(-140%) skewX(-12deg)}55%,100%{transform:translateX(420%) skewX(-12deg)}}.dash-float{animation:float 6s ease-in-out infinite}.live{animation:pulse 2.2s ease-in-out infinite}.shine{animation:shine 5s ease-in-out infinite}@media(prefers-reduced-motion:reduce){.dash-float,.live,.shine{animation:none}}`}</style>
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <header className="flex h-[78px] items-center justify-between border-b border-[#d9d4c9]">
          <Link href="/" className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-[10px] bg-[#172018] text-[#f4f1ea]"><GraduationCap size={18}/></span><span className="text-[15px] font-bold tracking-[-.03em]">Student OS</span></Link>
          <nav className="hidden items-center gap-8 text-[13px] font-medium text-[#62685f] sm:flex"><a href="#why" className="transition hover:text-[#172018]">Why Student OS</a><a href="#workflow" className="transition hover:text-[#172018]">Workflow</a><Link href="/login" className="flex items-center gap-1.5 text-[#172018]">Sign in <ArrowUpRight size={14}/></Link></nav>
          <Link href="/login" className="rounded-full bg-[#172018] px-4 py-2.5 text-[13px] font-semibold text-[#f4f1ea] sm:hidden">Sign in</Link>
        </header>

        <section className="grid gap-14 py-16 lg:grid-cols-[.93fr_1.07fr] lg:items-center lg:gap-20 lg:py-24">
          <div className="max-w-[650px]">
            <div className="mb-7 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#6f746c]"><span className="h-px w-8 bg-[#9a9d96]"/> School operations, rebuilt</div>
            <h1 className="text-[52px] font-semibold leading-[.94] tracking-[-.065em] sm:text-[68px] lg:text-[82px]">The school day,<span className="block text-[#5d684f]">finally in one place.</span></h1>
            <p className="mt-8 max-w-[560px] text-[17px] leading-8 text-[#62685f] sm:text-[19px]">Student OS gives administrators, teachers and students one shared system for the work that actually happens every day.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/login" className="group flex items-center gap-2 rounded-full bg-[#172018] px-5 py-3.5 text-[13px] font-bold text-[#f4f1ea] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(23,32,24,.18)]">Open the workspace <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5"/></Link><a href="#workflow" className="rounded-full border border-[#cfc9bd] px-5 py-3.5 text-[13px] font-bold transition hover:-translate-y-0.5 hover:bg-white">See the workflow</a></div>
            <div className="mt-10 flex items-center gap-3 text-xs text-[#777b73]"><span className="flex -space-x-1.5"><span className="size-7 rounded-full border-2 border-[#f4f1ea] bg-[#d5c7ae]"/><span className="size-7 rounded-full border-2 border-[#f4f1ea] bg-[#aab39c]"/><span className="size-7 rounded-full border-2 border-[#f4f1ea] bg-[#89928c]"/></span>Designed around real school workflows, not generic productivity.</div>
          </div>

          <div className="relative [perspective:1200px]" onPointerMove={move} onPointerLeave={() => setPointer({x:0,y:0})}>
            <div className="pointer-events-none absolute -inset-20 rounded-full bg-[#b8c1a8] opacity-30 blur-3xl transition-transform duration-500" style={{transform:`translate(${pointer.x*18}px,${pointer.y*18}px)`}}/>
            <div className="absolute -inset-5 rounded-[34px] border border-[#ded9cf]"/>
            <div className="dash-float relative overflow-hidden rounded-[26px] border border-[#cfc9bd] bg-[#fbfaf7] shadow-[0_25px_70px_rgba(35,39,32,.10)] transition-transform duration-150 ease-out will-change-transform" style={{transform:`rotateX(${pointer.y*-2.8}deg) rotateY(${pointer.x*3.5}deg) translate3d(${pointer.x*3}px,${pointer.y*3}px,0)`}}>
              <div className="shine pointer-events-none absolute top-0 z-20 h-full w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent"/>
              <div className="flex h-12 items-center justify-between border-b border-[#ded9cf] px-5"><div className="flex items-center gap-2 text-xs font-bold"><LayoutDashboard size={15}/> School workspace</div><div className="flex items-center gap-3 text-[#777b73]"><Bell size={15}/><span className="live size-2 rounded-full bg-[#71815d]"/></div></div>
              <div className="grid md:grid-cols-[175px_1fr]">
                <aside className="hidden border-r border-[#ded9cf] p-4 md:block"><p className="px-2 pb-3 text-[9px] font-bold uppercase tracking-[.16em] text-[#92958e]">Today</p><div className="space-y-1 text-[12px]"><div className="rounded-lg bg-[#e8e6de] px-3 py-2.5 font-semibold">Overview</div>{["Attendance","Classes","Students","Reports"].map(x=><div key={x} className="px-3 py-2.5 text-[#6e736b] transition hover:translate-x-1 hover:text-[#172018]">{x}</div>)}</div></aside>
                <div className="p-5 sm:p-7">
                  <div className="flex items-end justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#8b8f87]">Monday · 24 August</p><h2 className="mt-1 text-xl font-bold tracking-[-.04em]">Good morning, Admin.</h2></div><span className="hidden rounded-full border border-[#d8d3c8] px-3 py-1.5 text-[10px] font-semibold text-[#747970] sm:block">Live school data</span></div>
                  <div className="mt-6 grid grid-cols-3 gap-2.5">{stats.map(([label,value,note])=><div key={label} className="group rounded-xl border border-[#ded9cf] bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(35,39,32,.07)]"><p className="text-[9px] font-bold uppercase tracking-[.1em] text-[#90938c]">{label}</p><p className="mt-2 text-lg font-bold tracking-[-.04em]">{value}</p><p className="mt-0.5 text-[9px] text-[#898d85]">{note}</p></div>)}</div>
                  <div className="mt-5 rounded-xl border border-[#ded9cf] bg-white"><div className="flex items-center justify-between border-b border-[#e8e4dc] px-4 py-3"><div className="flex items-center gap-2 text-xs font-bold"><ClipboardCheck size={14}/> Today&apos;s flow</div><span className="text-[9px] font-bold uppercase tracking-[.12em] text-[#8b8f87]">4 items</span></div><div className="divide-y divide-[#eeeae3]">{schedule.map(([time,title,detail],i)=><button key={time} type="button" onMouseEnter={()=>setActiveRow(i)} onFocus={()=>setActiveRow(i)} className={`group flex w-full items-center gap-3 px-4 py-3 text-left transition duration-300 ${activeRow===i?"bg-[#f5f6f0]":"bg-white"}`}><span className={`w-10 text-[10px] font-bold ${activeRow===i?"text-[#5d684f]":"text-[#969a92]"}`}>{time}</span><span className={`grid size-6 place-items-center rounded-full transition ${activeRow===i?"scale-110 bg-[#dfe5d6] text-[#526045]":"bg-[#edf0e8] text-[#657155]"}`}><Check size={12}/></span><div className="min-w-0 flex-1"><p className="truncate text-[11px] font-semibold">{title}</p><p className="text-[9px] text-[#92958e]">{detail}</p></div><ArrowUpRight size={12} className={`transition ${activeRow===i?"opacity-100":"opacity-0"}`}/></button>)}</div></div>
                  <div className="mt-4 flex items-center justify-between rounded-xl bg-[#172018] px-4 py-3 text-[#f4f1ea] transition hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(23,32,24,.18)]"><div className="flex items-center gap-2"><Users size={14}/><span className="text-[10px] font-semibold">12-A attendance is ready for review</span></div><ArrowUpRight size={14}/></div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 hidden rounded-2xl border border-[#d1ccc0] bg-[#f8f6f1]/90 px-4 py-3 shadow-lg backdrop-blur transition-transform duration-300 sm:block" style={{transform:`translate(${pointer.x*-5}px,${pointer.y*-5}px)`}}><p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#8a8f84]">Live</p><p className="mt-1 text-xs font-semibold">School data synced</p></div>
          </div>
        </section>

        <section id="why" className="border-t border-[#d9d4c9] py-16 lg:py-20"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#7d8279]">01 · The idea</p><h2 className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[-.05em] sm:text-4xl">Less software. More school.</h2></div><div className="grid gap-px overflow-hidden rounded-2xl border border-[#d9d4c9] bg-[#d9d4c9] sm:grid-cols-3">{[["01","One workspace","Attendance, academics and communication without five disconnected tools."],["02","Role-aware","The admin, teacher and student each see the work that belongs to them."],["03","Useful signals","Everyday activity becomes information a school can actually act on."]].map(([n,t,d])=><div key={n} className="group bg-[#f8f6f1] p-6 transition hover:bg-white sm:p-7"><span className="text-[10px] font-bold text-[#899080]">{n}</span><h3 className="mt-12 text-[17px] font-bold tracking-[-.03em] transition group-hover:translate-x-1">{t}</h3><p className="mt-2 text-[13px] leading-6 text-[#70756c]">{d}</p></div>)}</div></div></section>
        <section id="workflow" className="border-y border-[#d9d4c9] py-14"><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#7d8279]">02 · One workflow</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">From a new class to a clear record.</h2></div><p className="max-w-md text-sm leading-6 text-[#70756c]">The product follows the rhythm of a school instead of forcing the school to learn a new rhythm.</p></div><div className="mt-10 grid gap-2 md:grid-cols-5">{["Create class","Invite teacher","Enroll students","Mark attendance","See the record"].map((item,i)=><div key={item} className="group relative rounded-xl border border-[#d9d4c9] bg-[#f8f6f1] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_30px_rgba(35,39,32,.07)]"><span className="text-[10px] font-bold text-[#8b9185]">0{i+1}</span><p className="mt-7 text-sm font-bold transition group-hover:translate-x-1">{item}</p>{i<4&&<ArrowUpRight className="absolute right-4 top-4 text-[#aaa89f] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={14}/>}</div>)}</div></section>
        <footer className="flex flex-col gap-4 py-8 text-xs text-[#7b8078] sm:flex-row sm:items-center sm:justify-between"><span>Student OS · v2</span><span>Built for the people who keep a school moving.</span></footer>
      </div>
    </main>
  );
}
