import { DesignerProvider } from '../context/DesignerContext';
import DesignerHeader from '../components/designer/DesignerHeader';
import DesignerSidebar from '../components/designer/DesignerSidebar';
import DesignerCanvas from '../components/designer/DesignerCanvas';
import DesignerProperties from '../components/designer/DesignerProperties';
import DesignerFooter from '../components/designer/DesignerFooter';

export default function Designer() {
  return (
    <DesignerProvider>
      <div className="fixed inset-0 flex flex-col w-full bg-background overflow-hidden overscroll-none">
        <DesignerHeader />
        
        <main className="flex-1 flex overflow-hidden pt-[64px] md:pt-[72px] pb-[136px] md:pb-[90px] relative">
          <DesignerSidebar />
          <DesignerCanvas />
          <DesignerProperties />
        </main>

        <DesignerFooter />
      </div>
    </DesignerProvider>
  );
}