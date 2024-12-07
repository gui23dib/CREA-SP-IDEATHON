import { Separator } from "@radix-ui/react-separator"
import { Building, User } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "./components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel"

function App() {
  const enterpriseProfileRef = useRef<HTMLDivElement>(null)
  const professionalProfileRef = useRef<HTMLDivElement>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = ["./heroimg.jpg", "./heroimg2.jpg", "./heroimg3.jpg", "./heroimg4.jpg"]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <>
      <div className="w-screen h-screen relative bg-black">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="mockuplvsl"
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-crea-blue"></div>
        <h1 className="text-white text-2xl sm:text-3xl font-bold absolute top-4 left-4 z-10">
          CREA Confia
        </h1>
        <h2 className="text-white text-4xl sm:text-5xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 px-4">
          O CREA não é apenas um conselho, é uma comunidade!
        </h2>
      </div>
      <div className="flex flex-col w-full bg-crea-blue">
        <div className="flex flex-col py-5 w-full gap-5">
          <div className="flex flex-col gap-5 w-full items-center justify-center px-4 sm:px-14">
            <h2 className="text-center text-4xl sm:text-6xl font-bold">Qual seu perfil?</h2>
            <p className="text-center text-xl sm:text-2xl">
              O CREA tem diferentes perfis de usuários, cada um com selos diferentes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row w-full justify-center">
            <div
              className="flex flex-col gap-5 w-full items-center justify-center p-8 sm:p-14"
              onClick={() => enterpriseProfileRef.current?.scrollIntoView({ behavior: "smooth" })}
            >
              <Building className="w-24 h-24 sm:w-32 sm:h-32" />
              <h3 className="text-center text-3xl sm:text-4xl font-bold">Instituicao</h3>
            </div>
            <Separator orientation="horizontal" className="bg-black h-1 sm:hidden" />
            <Separator orientation="vertical" className="bg-black w-1 hidden sm:block" />
            <div
              className="flex flex-col gap-5 w-full items-center justify-center p-8 sm:p-14"
              onClick={() => professionalProfileRef.current?.scrollIntoView({ behavior: "smooth" })}
            >
              <User className="w-24 h-24 sm:w-32 sm:h-32" />
              <h3 className="text-center text-3xl sm:text-4xl font-bold">Profissional</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full items-center p-8 sm:p-14 bg-crea-yellow" ref={enterpriseProfileRef}>
          <div className="flex flex-col gap-8 w-full items-center justify-center">
            <div className="flex flex-col gap-5 w-full items-center justify-center">
              <h2 className="text-center text-3xl sm:text-4xl font-bold">Aplique para se tornar uma organização com selo CREA!</h2>
              <p className="text-center text-lg sm:text-xl">
                Garanta sua vantagem competitiva no mercado, atraindo clientes e profissionais.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 w-full items-center justify-center">
              <div className="flex flex-col gap-5 w-full items-center justify-center">
                <div className="flex items-center justify-center rounded-full w-40 h-40 sm:w-48 sm:h-48 bg-crea-blue">
                  <h3 className="text-center text-5xl sm:text-6xl font-bold p-0 m-0 text-white">47%*</h3>
                </div>
                <p className="text-center text-2xl sm:text-3xl font-bold">
                  Mais Contratos
                </p>
              </div>
              <div className="flex flex-col gap-5 w-full items-center justify-center">
                <div className="flex items-center justify-center rounded-full w-48 h-48 sm:w-60 sm:h-60 bg-crea-blue">
                  <h3 className="text-center text-6xl sm:text-8xl font-bold p-0 m-0 text-white">324*</h3>
                </div>
                <p className="text-center text-2xl sm:text-3xl font-bold">
                  Empresas com CREA GOLD
                </p>
              </div>
              <div className="flex flex-col gap-5 w-full items-center justify-center">
                <div className="flex items-center justify-center rounded-full w-40 h-40 sm:w-48 sm:h-48 bg-crea-blue">
                  <h3 className="text-center text-5xl sm:text-6xl font-bold p-0 m-0 text-white">78%*</h3>
                </div>
                <p className="text-center text-2xl sm:text-3xl font-bold">
                  Mais visibilidade
                </p>
              </div>
            </div>
            <p className="w-full text-left">
              *Dados fictícios
            </p>

            <div className="mx-4 sm:mx-10">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem className="flex flex-col gap-5 w-full items-center justify-center text-left p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-5 w-full items-center justify-center text-left">
                      <div className="flex flex-col gap-5 w-full sm:w-1/2">
                        <h3 className="text-justify text-xl sm:text-2xl font-bold">
                          Entenda a importância de carregar o prestígio do maior Conselho de fiscalização de exercício profissional da América Latina!
                        </h3>
                        <p className="text-justify text-sm sm:text-md">
                          O programa propõe uma maior integração das organizações ao programas e iniciativas do CREA, oferece aos seus clientes e investidores a GARANTIA de que os processos e atividades estão de acordo com as leis e regulamentações e tenha acesso a negócios mais vantajosos.
                          Se destaque entre as 89.000 empresas registradas.
                        </p>
                        <Button className="bg-black text-white w-fit">
                          APLICAR
                        </Button>
                      </div>
                      <div className="flex items-center justify-center w-full sm:w-1/2">
                        {/* Adicione a imagem aqui */}
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    ...
                  </CarouselItem>
                  <CarouselItem>
                    ...
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full items-center justify-center p-8 sm:p-14" ref={professionalProfileRef}>
          <div className="flex flex-col gap-5 w-full items-center justify-center">
            <h2 className="text-center text-4xl sm:text-5xl font-bold">Pontue e se destaque!</h2>
            <p className="text-center text-lg sm:text-xl">
              Seja visto pelas melhores empresas e amplie suas oportunidades, se registre hoje para começar a pontuar.
            </p>
          </div>

          <div className="flex flex-col w-full mt-10">
            <h2 className="text-center text-4xl sm:text-5xl font-bold">Seja visto primeiro!</h2>

            <img src="" alt="mockuplvsl" className="w-full mt-4" />
          </div>

          <div className="flex flex-col w-full mt-10 gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-left">
              O foco é em você! Seja visto entre os mais de
            </h2>
            <h1 className="text-center text-[12vw] sm:text-[18vw] font-black">370.000</h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-right">
              registrados no CREA,<br /> e seja recompensado pela sua participação na comunidade.
            </h2>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full px-4 sm:px-10 pb-10">
          <div className="flex flex-col items-center justify-center w-full h-full p-4 sm:p-5 gap-5 mb-4 sm:mb-0 sm:mr-4 border-solid border-4 border-gray-300 rounded-xl">
            <h3 className="text-2xl sm:text-3xl font-semibold">Estudante</h3>
            <p className="text-center">
              Cadastre seu perfil logo cedo! participando de nossas iniciativas como CREA CAPACITA e CREA JOVEM, pontue e garanta visibilidade para sua primeira vaga na área
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-4 sm:p-5 gap-5 mb-4 sm:mb-0 sm:mx-4 border-solid border-4 border-gray-300 rounded-xl">
            <h3 className="text-2xl sm:text-3xl font-semibold">Profissional registrado</h3>
            <p className="text-center">
              Garanta pontos e descubra novas oportunidades por meio de nosso banco de talentos, se mantenha engajado para não perder seu ranking! Participe de nossos eventos, ideathons e palestras.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-4 sm:p-5 gap-5 sm:ml-4 border-solid border-4 border-gray-300 rounded-xl">
            <h3 className="text-2xl sm:text-3xl font-semibold">Profissional não registrado</h3>
            <p className="text-center">
              Tá esperando o que! venha fazer parte do maior Conselho de fiscalização de exercício profissional da América Latina, aproveite de vantagens como:
              Seja visto! se destaque no nosso banco de talentos e participe dos nossos eventos
              Aproveite dos nosso programa de vantagens
              Seja ouvido! a união faz a força, se una aos mais de 370.000 profissionais registrados.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
