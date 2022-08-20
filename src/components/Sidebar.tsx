import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <aside className='w-screen h-screen max-h-[100%] bg-gray-700 p-6 border-l border-gray-600 absolute xl:relative z-20 xl:z-0 flex flex-col items-center sm:w-[348px] sm:top-19 sm:right-0 lg:translate-x-0 lg:visible'>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8 w-[348px] px-6">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availabletAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}