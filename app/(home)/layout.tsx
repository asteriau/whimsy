import type { ReactNode } from "react";

export default function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-8">
      {children}
    </div>
  );
}
