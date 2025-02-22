import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { useGetLessonBySlugQuery } from "../graphql/generated";

import '@vime/core/themes/default.css'
import { Footer } from "./Footer";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug
    }
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>  
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video z-10">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 pb-0  max-w-[1100px] mx-auto">
        <div className="flex flex-col items-start gap-16 lg:flex-row ">
          <div className="flex-1">
            <h1 className=" text-lg font-bold xl:text-2xl">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed text-sm">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img 
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />
                <div className="leading-relaxed">
                  <strong className="text-lg font-bold block xl:text-2xl">{data.lesson.teacher.name}</strong>
                  <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
            </div>
            )}
          </div>
          <div className="flex flex-col gap-4 mx-auto md:flex-row lg:flex-col">
            <a href="#" className="py-4 px-11 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a href="#" className="p-4 px-11 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="my-20 grid gap-8 justify-center md:grid-cols-2 xl:grid-cols-2">
          <a href="" className="bg-gray-700 rounded overflow-hidden flex max-w-[400px] gap-4 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-4 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-lg xl:text-2xl">Material complementar</strong>
              <p className="text-xs text-gray-200 mt-2 xl:text-sm">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-2 flex items-center">
              <CaretRight size={24} />  
            </div>
          </a>
          <a href="" className="bg-gray-700 rounded overflow-hidden flex max-w-[400px] items-stretch gap-4 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-4 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-lg xl:text-2xl">Material complementar</strong>
              <p className="text-xs text-gray-200 mt-2 xl:text-sm">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="h-full p-2 flex items-center">
              <CaretRight size={24} />  
            </div>
          </a>
        </div>
        <Footer />
      </div>
    </div>
  )
}