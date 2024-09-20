"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface UserData {
  email: string;
  username: string;
}

interface SectionUserContextType {
  data: UserData | null;
}

const SectionUserContext = createContext<SectionUserContextType | undefined>(
  undefined,
);

export const SectionUserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await fetch(`/api/auth/profile`, {
          method: "GET",
          credentials: "include",
        });

        const userData: UserData = await res.json();
        setData(userData);
      } catch {
        setData(null);
      }
    };

    fetchData();
  }, []);

  const value = useMemo(() => ({ data }), [data]);

  return (
    <SectionUserContext.Provider value={value}>
      {children}
    </SectionUserContext.Provider>
  );
};

export const useSections = (): SectionUserContextType => {
  const context = useContext(SectionUserContext);
  if (!context) {
    throw new Error("useSections must be used within a SectionUserProvider");
  }

  return context;
};
