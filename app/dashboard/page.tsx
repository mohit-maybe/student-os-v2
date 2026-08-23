"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart3, Bell, BookOpen, CalendarCheck2, ChevronRight, GraduationCap, LayoutDashboard, LogOut, MessageSquare, Search, Settings, Sparkles, UserCircle, UserPlus, Users, X } from "lucide-react";

const nav = [
  ["Dashboard", "Dashboard", LayoutDashboard],
  ["Classrooms", "Classrooms", BookOpen],
  ["Admission", "Admission", UserPlus],
  ["Staff", "Staff management", Users],
  ["Courses", "Courses", BookOpen],
  ["Grades", "Grades", BarChart3],
  ["Attendance", "Attendance", CalendarCheck2],
  ["AI Predictor", "AI Predictor", Sparkles],
  ["Messages", "Messages", MessageSquare],
];

const activity = [
  ["Attendance recorded", "Class 12-A · Physics", "8 min ago", "good"],
  ["Marks updated", "Class 11-B · Mathematics", "24 min ago", "neutral"],
  ["New student profiles", "12 profiles awaiting review", "1 hr ago", "warn"],
  ["Assignment submitted", "Aarav · Physics Lab", "2 hrs ago", "neutral"],
];

export default function DashboardPage() {
  const [mobileNav, setMobileNav] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#172018]">
      <div className="flex min-h-screen">
        {mobileNav && <button aria-label="Close menu" onClick={() => setMobileNav(false)} className="fixed inset-0 z-40 bg-[#172018]/30 backdrop-blur-sm lg:hidden" />}

        <aside className={`fixed inset-y-0 left-0 z-50 flex w-[250px] flex-col border-r border-[#d9d4c9] bg-[#f8f6f1] px-4 py-5 transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${mobileNav ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex items-center justify-between px-2">
            <Link href="/" className="flex items-center gap-2.5 font-bold tracking-[-.03em]"><span className="grid size-9 place-items-center rounded-[10px] bg-[#172018] text-[#f4f1ea]"><GraduationCap size={18}/></span>Student OS</Link>
            <button onClick={() => setMobileNav(false)} className="rounded-lg p-2 text-[#777b73] lg:hidden"><X size={18}/></button>
          </div>
          <div className="mt-8 px-2 text-[9px] font-bold uppercase tracking-[.18em] text-[#94978f]">Workspace</div>
          <nav className="mt-2 space-y-1">
            {nav.map(([label, desc, Icon], i) => <Link key={label} href={i === 0 ? "/dashboard" : `#${String(label).toLowerCase().replaceAll(" ", "-")}`} onClick={() => setMobileNav(false)} className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[12px] font-semibold transition ${i === 0 ? "bg-[#e3e4db] text-[#172018]" : "text-[#70756c] hover:bg-white hover:text-[#172018]"}`}><Icon size={16} strokeWidth={1.8}/><span>{desc}</span>{label === "Messages" && <span className="ml-auto grid size-5 place-items-center rounded-full bg-[#172018] text-[9px] text-white">3</span>}</Link>)}
          </nav>
          <div className="mt-auto border-t border-[#d9d4c9] pt-4">
            <Link href="#profile" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[12px] font-semibold text-[#70756c] hover:bg-white hover:text-[#172018]"><UserCircle size={17}/> Profile</Link>
            <Link href="#settings" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[12px] font-semibold text-[#70756c] hover:bg-white hover:text-[#172018]"><Settings size={17}/> Settings</Link>
            <Link href="/" className="mt-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-[12px] font-semibold text-[#8b6c67] hover:bg-[#f1e9e6]"><LogOut size={17}/> Sign out</Link>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 border-b border-[#d9d4c9] bg-[#f4f1ea]/90 backdrop-blur-xl">
            <div className="flex h-[68px] items-center gap-3 px-5 sm:px-8 lg:px-10">
              <button onClick={() => setMobileNav(true)} className="rounded-xl border border-[#d9d4c9] bg-[#f8f6f1] p-2.5 lg:hidden"><LayoutDashboard size={17}/></button>
              <div className="relative max-w-md flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969a92]" size={15}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search students, classes, reports..." className="w-full rounded-xl border border-[#d9d4c9] bg-[#f8f6f1] py-2.5 pl-9 pr-4 text-xs outline-none transition focus:border-[#929b80] focus:bg-white" /></div>
              <button className="relative rounded-xl border border-[#d9d4c9] bg-[#f8f6f1] p-2.5 transition hover:-translate-y-0.5 hover:bg-white"><Bell size={16}/><span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#687755]"/></button>
              <div className="hidden items-center gap-2.5 border-l border-[#d9d4c9] pl-4 sm:flex"><div className="grid size-8 place-items-center rounded-full bg-[#cbd1bf] text-xs font-bold">A</div><div><p className="text-[11px] font-bold">Admin</p><p className="text-[9px] text-[#888d84]">School administrator</p></div></div>
            </div>
          </header>

          <div className="mx-auto max-w-[1450px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#7d8279]">Overview · Monday, 24 August</p><h1 className="mt-2 text-[38px] font-semibold leading-none tracking-[-.055em] sm:text-[48px]">Good morning, Admin.</h1><p className="mt-3 text-sm text-[#70756c]">Here&apos;s what&apos;s happening across your school today.</p></div>
              <button className="flex w-fit items-center gap-2 rounded-xl bg-[#172018] px-4 py-3 text-xs font-bold text-[#f4f1ea] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">Quick action <ChevronRight size={14}/></button>
            </div>

            <section className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[['Attendance','92.4%','+2.1% this month',CalendarCheck2],['Students','248','12 new this week',Users],['Classes','18','3 happening now',BookOpen],['Performance','84.7%','+4.8% this term',BarChart3]].map(([label,value,change,Icon])=><div key={label as string} className="group relative overflow-hidden rounded-2xl border border-[#d9d4c9] bg-[#f8f6f1] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_35px_rgba(35,39,32,.08)]"><div className="flex items-center justify-between"><span className="text-[11px] font-semibold text-[#7b8078]">{label as string}</span><span className="grid size-9 place-items-center rounded-xl bg-[#e3e6dc] text-[#5e6b51] transition group-hover:scale-110"><Icon size={16}/></span></div><p className="mt-6 text-[30px] font-semibold tracking-[-.05em]">{value as string}</p><p className="mt-1 text-[10px] font-bold text-[#6d7a60]">{change as string}</p><div className="absolute -right-8 -top-8 size-24 rounded-full bg-[#dfe4d5]/40 blur-2xl transition group-hover:scale-150"/></div>)}
            </section>

            <section className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_.65fr]">
              <div className="rounded-2xl border border-[#d9d4c9] bg-[#f8f6f1] p-5 sm:p-6">
                <div className="flex items-center justify-between"><div><p className="text-[9px] font-bold uppercase tracking-[.17em] text-[#92968e]">Live school activity</p><h2 className="mt-1 text-lg font-bold tracking-[-.035em]">What&apos;s happening</h2></div><span className="flex items-center gap-1.5 rounded-full border border-[#d5d9cd] bg-[#eef0e9] px-2.5 py-1 text-[9px] font-bold text-[#617054]"><span className="size-1.5 rounded-full bg-[#72815f]"/> LIVE</span></div>
                <div className="mt-5 divide-y divide-[#e3ded5]">{activity.map(([title,detail,time,state],i)=><div key={title} className="group flex items-center gap-4 py-4 first:pt-1"><div className={`grid size-9 shrink-0 place-items-center rounded-xl ${state==='good'?'bg-[#e2e8dc] text-[#5f7050]':state==='warn'?'bg-[#eee6d7] text-[#8a7048]':'bg-[#e8e7e0] text-[#70766d]'} transition group-hover:scale-105`}><span className="text-xs font-bold">{i+1}</span></div><div className="min-w-0 flex-1"><p className="text-[12px] font-bold">{title}</p><p className="mt-0.5 truncate text-[10px] text-[#898e85]">{detail}</p></div><span className="text-[9px] font-medium text-[#9a9d96]">{time}</span><ChevronRight size={14} className="text-[#aaa9a1] transition group-hover:translate-x-1"/></div>)}</div>
              </div>

              <div className="rounded-2xl border border-[#d9d4c9] bg-[#172018] p-6 text-[#f4f1ea] shadow-[0_16px_40px_rgba(23,32,24,.12)]"><div className="flex items-center justify-between"><span className="grid size-10 place-items-center rounded-xl bg-white/10"><Sparkles size={17}/></span><span className="text-[9px] font-bold uppercase tracking-[.16em] text-white/50">Student OS</span></div><h2 className="mt-16 text-2xl font-semibold leading-tight tracking-[-.045em]">Turn everyday school data into useful signals.</h2><p className="mt-3 text-xs leading-6 text-white/60">Attendance, grades, classes and student activity stay connected so your team can act earlier.</p><button className="mt-7 flex items-center gap-2 rounded-xl bg-[#e5e9dc] px-4 py-3 text-[11px] font-bold text-[#172018] transition hover:-translate-y-0.5 hover:bg-white">Explore AI Predictor <ChevronRight size={14}/></button></div>
            </section>

            <section className="mt-5 grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#d9d4c9] bg-[#f8f6f1] p-6"><div className="flex items-center justify-between"><div><p className="text-[9px] font-bold uppercase tracking-[.17em] text-[#92968e]">Performance</p><h2 className="mt-1 text-lg font-bold">Academic overview</h2></div><span className="text-[10px] font-semibold text-[#8b9088]">This term</span></div><div className="mt-7 flex h-40 items-end gap-3 border-b border-[#ded9cf] px-2">{[48,65,58,78,72,91,84,94,82,88,96,90].map((h,i)=><div key={i} className="group relative flex-1"><div style={{height:`${h}%`}} className="rounded-t-md bg-[#9ca88d] transition duration-300 group-hover:bg-[#5f6d52] group-hover:opacity-90"/><span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] text-[#9b9e96]">{i+1}</span></div>)}</div><div className="mt-7 flex justify-between text-[10px] text-[#858a81]"><span>Average score</span><strong className="text-[#172018]">84.7%</strong></div></div>
              <div className="rounded-2xl border border-[#d9d4c9] bg-[#f8f6f1] p-6"><div className="flex items-center justify-between"><div><p className="text-[9px] font-bold uppercase tracking-[.17em] text-[#92968e]">Attention needed</p><h2 className="mt-1 text-lg font-bold">Review queue</h2></div><span className="grid size-7 place-items-center rounded-full bg-[#eee6d7] text-[10px] font-bold text-[#826c4a]">18</span></div><div className="mt-5 space-y-2.5">{[['12 students','Attendance below 80%','Review'],['3 classes','Attendance not submitted','Open'],['3 submissions','Assignments need grading','Grade']].map(([a,b,c])=><div key={a} className="group flex items-center justify-between rounded-xl border border-[#e1dcd3] bg-white/60 px-4 py-3 transition hover:-translate-y-0.5 hover:bg-white"><div><p className="text-[11px] font-bold">{a}</p><p className="mt-0.5 text-[9px] text-[#898e85]">{b}</p></div><button className="flex items-center gap-1 text-[9px] font-bold text-[#657155]">{c}<ChevronRight size={12} className="transition group-hover:translate-x-0.5"/></button></div>)}</div></div>
            </section>

            <footer className="flex flex-col gap-2 border-t border-[#d9d4c9] py-8 mt-10 text-[10px] text-[#858a81] sm:flex-row sm:justify-between"><span>Student OS · School workspace</span><span>One system for the work that keeps a school moving.</span></footer>
          </div>
        </section>
      </div>
    </main>
  );
}
