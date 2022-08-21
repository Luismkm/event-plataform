import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import reactIcon from "../assets/react-icon.svg"
import logoRocketseat from "../assets/logo-rocketseat.svg"
import { useCreateSubscriberMutation } from "../graphql/generated";
import { Footer } from "../components/Footer";

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    createSubscriber({
      variables: {
        name,
        email
      }
    })
    
    navigate('/event/lesson/aula-02')
  }

  return (
    <div className="min-h-screen  bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <img
        className="absolute z-0"
        src={reactIcon} 
        alt="" 
      />
      <div className="w-full max-w-[490px] mt-16 z-0 flex flex-col items-center lg:flex-row lg:max-w-[1100px] lg:px-4 lg:mt-20 lg:mx-auto lg:justify-between xl:px-0 xl:max-w-[1214px]">
        <div className="flex flex-col items-center lg:items-start lg:max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-3xl max-w-[300px] sm:max-w-[600px] lg:max-w-[536px] xl:max-w-[640px] text-center lg:text-left lg:text-[2rem] xl:text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, <strong className="text-blue-500">com React JS</strong>
          </h1>
          <p className="my-8 text-gray-200 max-w-[300px] text-sm text-center sm:max-w-[600px] sm:text-base lg:text-left lg:text-[0.9375rem] lg:max-w-[598px] xl:text-base xl:max-w-[636px]">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 w-[100vw] bg-gray-700 lg:border lg:border-gray-500 lg:rounded lg:w-[391px]">
          <div className="max-w-[300px] flex flex-col mx-auto ">
            <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                <input
                  className="bg-gray-900 rounded px-5 h-14"
                  type="text" 
                  placeholder="Seu nome completo"
                  onChange={event => setName(event.target.value)} 
                />
                <input
                  className="bg-gray-900 rounded px-5 h-14"
                  type="email"
                  placeholder="Digite seu e-mail"
                  onChange={event => setEmail(event.target.value)}  
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                  Garantir minha vaga  
                </button>
              </form>
          </div>
        </div>
      </div>
      <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
      <Footer />
    </div>
  )
}