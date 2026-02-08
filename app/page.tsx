import { Cover } from '@/components/sections/Cover';
import { Origin } from '@/components/sections/Origin';
import { Powers } from '@/components/sections/Powers';
import { Builder } from '@/components/sections/Builder';
import { TeamPlayer } from '@/components/sections/TeamPlayer';
import { SideQuests } from '@/components/sections/SideQuests';
import { Human } from '@/components/sections/Human';
import { FinalPanel } from '@/components/sections/FinalPanel';

export default function Home() {
  return (
    <>
      <main className="bg-[#F8F7F4] min-h-screen">
        <Cover />
        <Origin />
        <Powers />
        <Builder />
        <TeamPlayer />
        <SideQuests />
        <Human />
      </main>
      <FinalPanel />
    </>
  );
}
