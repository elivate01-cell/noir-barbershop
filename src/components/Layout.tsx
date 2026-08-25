import { type ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

type LayoutProps = {
  children: ReactNode;
  currentPath: string;
  onNavigate: (to: string) => void;
};

export function Layout({ children, currentPath, onNavigate }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-ink-950">
      <Navbar currentPath={currentPath} onNavigate={onNavigate} />
      <main className="flex-1">{children}</main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
