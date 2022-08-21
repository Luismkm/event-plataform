import { useParams } from "react-router-dom";
import { Drawer } from "../components/Drawer";
import { Header } from "../components/Header";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <>
      <Header />
      <div className="flex xl:mt-[4.7rem] max-w-[1536px] mx-auto relative">
        <main className="flex flex-1">
          { slug 
            ? <Video lessonSlug={slug} /> 
            : <div className="flex-1" />
          }
        </main>
        <Drawer />
      </div>
    </>
  )
}