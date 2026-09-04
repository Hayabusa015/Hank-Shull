import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'Hank — SHULL Chemistry Agent',description:'SHULL Chemistry curriculum and production agent'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
