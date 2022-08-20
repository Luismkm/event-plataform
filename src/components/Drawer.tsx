import { useSidebarDrawer } from "../context/SidebarDrawerContext";
import { Lesson } from "./Lesson";

export function Drawer() {
  const { setIsMenuLessonsActive } = useSidebarDrawer()

  return (
    <>
     {/*  SIDERBAR  < 1280 PX */}
      <div className="drawer drawer-end absolute h-[100%] max-h-[100%] w-screen z-10 xl:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side !max-h-[100%]">
          <label 
            htmlFor="my-drawer-4" 
            className="drawer-overlay" 
            onClick={() => setIsMenuLessonsActive(false)}>
            </label>
          <aside className="menu p-4 overflow-y-auto bg-gray-700 text-base-content h-[100%] max-h-screen border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
              Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8 w-[320px] px-6">
              <Lesson
                key=""
                title="Abertura do evento Ignite labs"
                slug=""
                availabletAt={new Date()}
                type="live"
              />
            </div>
          </aside>
        </div>
      </div>

      {/*  SIDERBAR  1280 > PX */}
      <aside className="menu p-4 overflow-y-auto bg-gray-700 text-base-content h-[100%] max-h-screen border-l border-gray-600 hidden xl:block">
          <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
            Cronograma de aulas
          </span>
          <div className="flex flex-col gap-8 w-[320px] px-2">
            <Lesson
              key=""
              title="Abertura do evento Ignite labs"
              slug=""
              availabletAt={new Date()}
              type="live"
            />

            <Lesson
              key=""
              title="Abertura do evento Ignite labs"
              slug=""
              availabletAt={new Date()}
              type="live"
            />
          </div>
        </aside>
    </>
  )
}