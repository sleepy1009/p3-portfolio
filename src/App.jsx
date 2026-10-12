import { useEffect, useState } from 'react';
import Background from './components/layout/Background';
import SideBand from './components/layout/SideBand';
import VerticalTitle from './components/layout/VerticalTitle';
import MenuList from './components/layout/MenuList';
import Profile from './sections/Profile';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import { MENU_ITEMS } from './data/menu';
import useMenuNavigation from './hooks/useMenuNavigation';
import Shards from './components/fx/Shards';
import CommandHint from './components/controls/CommandHint';
import CursorFX from './components/fx/CursorFX';
import QualityButton from './components/controls/QualityButton';

const SECTIONS = {
  profile: Profile,
  skills: Skills,
  projects: Projects,
  certificates: Certificates,
  contact: Contact,
};

export default function App() {
  const [activeId, setActiveId] = useState(MENU_ITEMS[0].id);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useMenuNavigation(MENU_ITEMS, activeId, setActiveId);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirstLoad(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const active = MENU_ITEMS.find((item) => item.id === activeId);
  const Section = SECTIONS[active.section];

  return (
    <div className={`relative h-screen w-screen overflow-hidden `}>
      <Background />
      <Shards />
      <SideBand />
      <VerticalTitle />

      <MenuList items={MENU_ITEMS} activeId={activeId} onSelect={setActiveId} />

      <main
        className="absolute inset-y-0 right-0 z-10 overflow-x-hidden overflow-y-auto"
        style={{ left: 'var(--content-left)' }}
      >
        <div className="intro-content flex min-h-full items-start px-[2.4vw] pb-10 pt-[6vh]">
          <div key={activeId} className="animate-sharp-enter w-full">
            <Section isFirstLoad={isFirstLoad} />
          </div>
        </div>
      </main>

      <CommandHint />
      <QualityButton />
      <CursorFX />
    </div>
  );
}