import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ISidebarDrawerProviderProps {
  children: ReactNode;
}

const SidebarDrawerContext = createContext({} as any);

export function SidebarDrawerProvider({ children }: ISidebarDrawerProviderProps) {
  const [isMenuLessonsActive, setIsMenuLessonsActive] = useState(false)
  
  return (
    <SidebarDrawerContext.Provider value={{isMenuLessonsActive, setIsMenuLessonsActive}}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)