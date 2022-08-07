import logoRocketseat from "../assets/logo-rocketseat.svg"

export function Footer() {
  return (
    <footer className="w-full h-[164px] flex flex-col text-sm items-center justify-between py-6 bg-[#09090A] border-t-2 border-gray-500 lg:h-20 lg:flex-row lg:items-center lg:justify-between">
          <span className="flex flex-col items-center lg:flex-row lg:pl-8">
            <img
              className="w-[162px] pb-5 lg:pb-0 mr-8"
              src={logoRocketseat} 
              alt="" 
            />
            <p>
              Rocketseat- Todos os direitos reservados
            </p>
          </span>
        <p className="mr-0 lg:mr-6">
        Políticas de privacidade
        </p>
      </footer>
  )
}