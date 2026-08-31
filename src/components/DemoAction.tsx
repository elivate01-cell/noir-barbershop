import { createContext, useContext, useEffect, useState, type ButtonHTMLAttributes, type ReactNode } from 'react';

const DEMO_MESSAGE = 'Demo action — contact functionality is disabled in this preview.';

const DemoActionContext = createContext<(() => void) | null>(null);

export function DemoActionProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => setVisible(false), 4000);
    return () => window.clearTimeout(timer);
  }, [visible]);

  const showNotice = () => {
    setVisible(false);
    window.requestAnimationFrame(() => setVisible(true));
  };

  return (
    <DemoActionContext.Provider value={showNotice}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-md border border-brass-700 bg-ink-900 px-4 py-3 text-center text-sm text-stone-200 shadow-xl transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        {visible ? DEMO_MESSAGE : ''}
      </div>
    </DemoActionContext.Provider>
  );
}

export function DemoAction({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const showNotice = useContext(DemoActionContext);
  return <button type="button" onClick={showNotice ?? undefined} {...props}>{children}</button>;
}
