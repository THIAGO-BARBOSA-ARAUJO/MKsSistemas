'use client'
import { queryClient } from "@/services/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

interface QueryProvidersProps {
    children: React.ReactNode
}

export const QueryProvider = ({ children }: QueryProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>{ children }</QueryClientProvider>
  )
}
