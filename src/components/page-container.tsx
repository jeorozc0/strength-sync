import { ReactNode } from "react";
import { PageHeader } from "./page-header";

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#000] w-full px-2">
      <PageHeader />
      {children}
    </div>
  );
}
