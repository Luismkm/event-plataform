import classNames from "classnames";
import { List, X } from "phosphor-react";
import { useSidebarDrawer } from "../context/SidebarDrawerContext";
import { Logo } from "./Logo";

export function Header() {
  const {isMenuLessonsActive, setIsMenuLessonsActive} = useSidebarDrawer()
  
  function handleMenuToggle(){
    setIsMenuLessonsActive(!isMenuLessonsActive)
    console.log(isMenuLessonsActive)
  }

  return (
    <>
      <header className={classNames('w-full py-5 lg:pl-5 flex bg-gray-700 border-b border-gray-600 justify-between xl:items-center xl:justify-center xl:fixed z-20 xl:top-0 xl:left-0')}>
        <Logo />
        <div className="flex items-center mr-6 xl:hidden">
          <span className="mr-2">Aulas</span>
          <div className="drawer-content">
            <label 
              htmlFor="my-drawer-4"
              onClick={() => {handleMenuToggle()}}
            >
              { isMenuLessonsActive ? <X size={32} color="#81D8F7" /> : <List size={32} color="#81D8F7" /> }
            </label>
          </div> 
        </div>
      </header>
    </>
  )
}