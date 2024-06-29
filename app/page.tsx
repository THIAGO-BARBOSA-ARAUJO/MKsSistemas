import { Home }  from "@/components/Home/Home";
import { QueryProvider } from '@/providers/QueryProviders'

export default function App() {
  return (
      <QueryProvider>
        <Home />
      </QueryProvider>
  );
}
