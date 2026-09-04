'use client';
import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

const modes = ['BUILD','IMPROVE','LAB','PPT','NOTES','PRACTICE','ASSESS','AUDIT','MAP','PACE','PRODUCTION'];

export default function Home() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat();
  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput('');
  }
  return <div className="shell">
    <aside className="side"><div className="brand">HANK</div><div className="sub">SHULL CHEMISTRY AGENT</div><div className="mode">Modes</div><div className="modes">{modes.map(m=><button className="modebtn" key={m} onClick={()=>setInput(m+': ')}>{m}</button>)}</div></aside>
    <main className="main"><header className="top"><h1>Hank</h1><p>Your SHULL Chemistry curriculum & production assistant.</p></header>
      <section className="chat">{messages.length===0&&<div className="msg assistant">I’m Hank. Tell me what you want to build, improve, audit, or plan. I’ll use the SHULL Chemistry standards and source files as the authority.</div>}
      {messages.map((m:any)=><div key={m.id} className={'msg '+(m.role==='user'?'user':'assistant')}>{m.parts?.filter((p:any)=>p.type==='text').map((p:any)=>p.text).join('')||m.content||''}</div>)}</section>
      <div className="composer"><form onSubmit={submit}><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="e.g. Build a practice set for Unit 1 Section 1.4..."/><button className="send" disabled={status==='streaming'}>Send</button></form><div className="hint">Hank follows the SHULL source-priority system and labels provisional recommendations rather than inventing confirmed curriculum.</div></div>
    </main></div>;
}
