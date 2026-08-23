"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap, Loader2, Sparkles } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    // Demo mode: the new UI can be explored before Supabase/auth is configured.
    // Real authentication can be wired back in once production credentials are added.
    await new Promise((resolve) => setTimeout(resolve, 650));
    if (!email.trim() || !password.trim()) {
      setError("Enter your school email and password to continue.");
      setLoading(false);
      return;
    }

    window.location.assign("/dashboard");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1ea] px-5 py-6 text-[#172018]">
      <div className="pointer-events-none fixed -right-32 -top-32 size-96 rounded-full bg-[#c9d2bb]/45 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-40 -left-32 size-96 rounded-full bg-[#ddd0b9]/35 blur-3xl" />
      <div className="mx-auto flex min-h-[calc(100vh-48px)] max-w-6xl flex-col justify-between">
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-bold tracking-[-.03em]"><span className="grid size-9 place-items-center rounded-[10px] bg-[#172018] text-[#f4f1ea]"><GraduationCap size={18}/></span>Student OS</Link>
          <Link href="/" className="text-sm font-medium text-[#777b73] transition hover:text-[#172018]">Back home</Link>
        </header>

        <section className="mx-auto w-full max-w-[440px] py-14">
          <div className="relative overflow-hidden rounded-[28px] border border-[#d5d0c6] bg-[#f9f7f2]/95 p-7 shadow-[0_30px_90px_rgba(35,39,32,.10)] backdrop-blur sm:p-9">
            <div className="absolute -right-16 -top-16 size-40 rounded-full bg-[#dce3d2]/70 blur-2xl" />
            <div className="relative mb-8"><div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-[#e2e6db] text-[#5e6c51]"><Sparkles size={18}/></div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#68765b]">School workspace</p><h1 className="mt-2 text-3xl font-semibold tracking-[-.05em]">Welcome back.</h1><p className="mt-2 text-sm leading-6 text-[#70756c]">Sign in to continue to your Student OS workspace.</p></div>
            <form onSubmit={handleSubmit} className="relative space-y-5">
              <label className="block"><span className="mb-2 block text-xs font-bold">School email</span><input required type="email" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full rounded-xl border border-[#d5d0c6] bg-[#fffdfa] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#aaa9a1] focus:border-[#899477] focus:ring-4 focus:ring-[#dfe5d6]" placeholder="you@school.edu"/></label>
              <label className="block"><span className="mb-2 block text-xs font-bold">Password</span><input required type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full rounded-xl border border-[#d5d0c6] bg-[#fffdfa] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#aaa9a1] focus:border-[#899477] focus:ring-4 focus:ring-[#dfe5d6]" placeholder="••••••••"/></label>
              {error && <p role="alert" className="rounded-xl bg-[#f3e8e3] px-4 py-3 text-sm text-[#8b5d54]">{error}</p>}
              <button disabled={loading} className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#172018] px-5 py-3.5 text-sm font-bold text-[#f4f1ea] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(23,32,24,.18)] disabled:cursor-not-allowed disabled:opacity-60">{loading?<Loader2 size={17} className="animate-spin"/>:<>Enter workspace <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></>}</button>
            </form>
            <div className="relative mt-6 border-t border-[#ded9cf] pt-5 text-center"><p className="text-[10px] leading-5 text-[#8a8e86]">Demo workspace is enabled while authentication is being connected.<br/>Any valid email and password will open the dashboard.</p></div>
          </div>
        </section>

        <footer className="pb-2 text-center text-[10px] text-[#858a81]">Student OS · v2 · School operations, rebuilt.</footer>
      </div>
    </main>
  );
}
