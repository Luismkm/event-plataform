import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <>
      <Header />
      <div className="flex mt-[4.7rem]">
        <main className="flex flex-1">
          { slug 
            ? <Video lessonSlug={slug} /> 
            : <div className="flex-1" />
          }
        </main>
            <span className="w-[348px]"></span>
        <Sidebar />
      </div>
  </>
  )
}