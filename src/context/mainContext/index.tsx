import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface IMainContext {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  scrollToTop: () => void;
}

interface IMainContextProvider {
  children: ReactNode;
}

export const MainContext = createContext({} as IMainContext);

export function MainContextProvider({ children }: IMainContextProvider) {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <MainContext.Provider value={{
      setShowMenu, showMenu, scrollToTop
    }}>
      {children}
    </MainContext.Provider>
  );
}
