import AppDashboard from '@/components/AppDashboard';
import Header from '@/components/Header';
import { getConfig } from '@/lib/config';

export const dynamic = "force-dynamic";

export default async function Home() {
  const cfg = await getConfig("apps");

  return (
    <main>
      <Header />
      <AppDashboard cfg={cfg} />
    </main>
  );
}
