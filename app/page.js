import Link from 'next/link';
import { Play } from 'lucide-react';

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden font-mono">
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-black/60 z-10"></div>
         <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50" src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-997-large.mp4" />
      </div>
      <div className="relative z-20 text-center space-y-6">
        <div className="inline-block border border-green-500 px-4 py-1 rounded-full text-green-500 text-xs tracking-widest uppercase animate-pulse">
           System Online // V5.0
        </div>
        <h1 className="text-6xl font-bold tracking-tighter">AGI <span className="text-green-500">1</span></h1>
        <Link href="/dashboard" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-black font-bold px-8 py-4 rounded mt-8 transition-all">
           ENTER SYSTEM <Play size={18} />
        </Link>
      </div>
    </div>
  );
}
