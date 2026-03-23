import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
