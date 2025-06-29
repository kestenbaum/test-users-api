import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';

export function Provider({ children }: { children:ReactNode }) {
    const queryClient = new QueryClient();
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}