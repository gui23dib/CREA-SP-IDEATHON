import { Separator } from "@radix-ui/react-separator"
import { Building, User } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "./components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel"

function App() {
  const enterpriseProfileRef = useRef<HTMLDivElement>(null)
  const professionalProfileRef = useRef<HTMLDivElement>(null)
  const contactFooterRef = useRef<HTMLDivElement>(null)
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
      <div className="relative w-screen h-screen bg-black">
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
        <h1 className="absolute z-10 text-2xl font-bold text-white sm:text-3xl top-4 left-4">
          CREA Confia
        </h1>
        <h2 className="absolute z-10 px-4 text-4xl font-bold text-center text-white transform -translate-x-1/2 -translate-y-1/2 sm:text-5xl top-1/2 left-1/2">
          O CREA não é apenas um conselho, é uma comunidade!
        </h2>
      </div>
      <div className="flex flex-col w-screen bg-crea-blue">
        <div className="flex flex-col w-full gap-5 py-5">
          <div className="flex flex-col items-center justify-center w-full gap-5 px-4 sm:px-14">
            <h2 className="text-4xl font-bold text-center sm:text-6xl">Qual seu perfil?</h2>
            <p className="text-xl text-center sm:text-2xl">
              O CREA tem diferentes perfis de usuários, cada um com selos diferentes.
            </p>
          </div>

          <div className="flex flex-col justify-center w-full sm:flex-row">
            <div
              className="flex flex-col items-center justify-center w-full gap-5 p-8 sm:p-14 hover:cursor-pointer"
              onClick={() => enterpriseProfileRef.current?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="flex flex-col items-center justify-center w-full gap-5 p-4 bg-crea-yellow rounded-xl sm:p-6 hover:bg-crea-yellow/80">
                <Building className="w-24 h-24 sm:w-32 sm:h-32" />
                <h3 className="text-3xl font-bold text-center sm:text-4xl">Instituição</h3>
              </div>
            </div>
            <Separator orientation="horizontal" className="h-1 bg-black sm:hidden" />
            <Separator orientation="vertical" className="hidden w-1 bg-black sm:block" />
            <div
              className="flex flex-col items-center justify-center w-full gap-5 p-8 sm:p-14"
              onClick={() => professionalProfileRef.current?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="flex flex-col items-center justify-center w-full gap-5 p-4 bg-crea-yellow rounded-xl sm:p-6 hover:bg-crea-yellow/80">
                <User className="w-24 h-24 sm:w-32 sm:h-32" />
                <h3 className="text-3xl font-bold text-center sm:text-4xl">Profissional</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full gap-5 p-8 sm:p-14 bg-crea-yellow" ref={enterpriseProfileRef}>
          <div className="flex flex-col items-center justify-center w-full gap-8">
            <div className="flex flex-col items-center justify-center w-full gap-5">
              <h2 className="text-3xl font-bold text-center sm:text-4xl">Aplique para se tornar uma organização com selo CREA!</h2>
              <p className="text-lg text-center sm:text-xl">
                Garanta sua vantagem competitiva no mercado, atraindo clientes e profissionais.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center w-full gap-5 sm:flex-row">
              <div className="flex flex-col items-center justify-center w-full gap-5">
                <div className="flex items-center justify-center w-40 h-40 rounded-full sm:w-48 sm:h-48 bg-crea-blue">
                  <h3 className="p-0 m-0 text-5xl font-bold text-center text-white sm:text-6xl">47%*</h3>
                </div>
                <p className="text-2xl font-bold text-center sm:text-3xl">
                  Mais Contratos
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-5">
                <div className="flex items-center justify-center w-48 h-48 rounded-full sm:w-60 sm:h-60 bg-crea-blue">
                  <h3 className="p-0 m-0 text-6xl font-bold text-center text-white sm:text-8xl">324*</h3>
                </div>
                <p className="text-2xl font-bold text-center sm:text-3xl">
                  Empresas com CREA GOLD
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-5">
                <div className="flex items-center justify-center w-40 h-40 rounded-full sm:w-48 sm:h-48 bg-crea-blue">
                  <h3 className="p-0 m-0 text-5xl font-bold text-center text-white sm:text-6xl">78%*</h3>
                </div>
                <p className="text-2xl font-bold text-center sm:text-3xl">
                  Mais visibilidade
                </p>
              </div>
            </div>


            <div className="flex flex-col items-center justify-center w-screen p-10 bg-yellow-500">
              <h2 className="mb-16 text-4xl font-bold text-center sm:text-5xl">
                Empresas 3 estrelas do CREA
              </h2>
              <div className="flex flex-col items-center justify-center w-full gap-5 sm:flex-row">
                <div className="flex flex-col items-center justify-center w-full p-4 border-4 border-black border-solid rounded-xl sm:p-6">
                  <h2 className="text-xl font-bold text-center sm:text-2xl">
                  Estrutura Prime Engenharia
                  </h2>
                  <div className="flex flex-col items-center justify-center w-full ">
                    <h2 className="my-5 text-5xl font-bold text-center sm:text-6xl">
                      87%
                    </h2>
                    <h2 className="text-2xl font-bold text-center sm:text-3xl">
                      dos associados acima de 4 estrelas*
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full p-4 border-4 border-black border-solid rounded-xl sm:p-6">
                <h2 className="text-xl font-bold text-center sm:text-2xl">
                Fundação e Forma Construtora
                  </h2>
                  <div className="flex flex-col items-center justify-center w-full ">
                    <h2 className="my-5 text-5xl font-bold text-center sm:text-6xl">
                      98%
                    </h2>
                    <h2 className="text-2xl font-bold text-center sm:text-3xl">
                      dos associados acima de 4 estrelas*
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full p-4 border-4 border-black border-solid rounded-xl sm:p-6">
                  <h2 className="text-2xl font-bold text-center sm:text-3xl">
                    Artemis Infra e Projetos
                  </h2>
                  <div className="flex flex-col items-center justify-center w-full ">
                    <h2 className="my-5 text-5xl font-bold text-center sm:text-6xl">
                      92%
                    </h2>
                    <h2 className="text-2xl font-bold text-center sm:text-3xl">
                      dos associados acima de 4 estrelas*
                    </h2>
                  </div>
                </div>
              </div>
              <p className="w-full text-left">
                *Dados fictícios
              </p>
            </div>


            <div className="w-full mx-4 sm:mx-10">
              <Carousel className="">
                <CarouselContent>
                  <CarouselItem className="flex flex-col items-center justify-center w-full gap-5 p-4 text-left sm:p-6">
                    <div className="flex flex-col items-center justify-center w-full gap-5 text-left sm:flex-row">
                      <div className="flex flex-col w-full gap-5 sm:w-1/2">
                        <h3 className="text-xl font-bold text-justify sm:text-2xl">
                          Entenda a importância de carregar o prestígio do maior Conselho de fiscalização de exercício profissional da América Latina!
                        </h3>
                        <p className="text-sm text-justify sm:text-md">
                          O programa propõe uma maior integração das organizações ao programas e iniciativas do CREA, oferece aos seus clientes e investidores a GARANTIA de que os processos e atividades estão de acordo com as leis e regulamentações e tenha acesso a negócios mais vantajosos.
                          Se destaque entre as 89.000 empresas registradas.
                        </p>
                        <Button className="text-white bg-black w-fit">
                          APLICAR
                        </Button>
                      </div>
                      <div className="flex items-center justify-center w-full sm:w-1/2">
                        <img src="carouselEmpresa.jpeg" alt="mockuplvsl" className="object-cover mt-4 bg-transparent rounded-full h-96 w-96" />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col items-center justify-center w-full gap-5 p-4 text-left sm:p-6">
                    <div className="flex flex-col items-center justify-center w-full gap-5 text-left sm:flex-row">
                      <div className="flex items-center justify-center w-full sm:w-1/2">
                        <img src="carouselLicitacao.jpeg" alt="mockuplvsl" className="object-cover mt-4 bg-transparent rounded-full h-96 w-96" />
                      </div>
                      <div className="flex flex-col w-full gap-5 sm:w-1/2">
                        <h3 className="text-xl font-bold text-justify sm:text-2xl">
                          O Selo de Verificação CREA é a solução ideal para garantir confiança e transparência em seus projetos!
                        </h3>
                        <p className="text-sm text-justify sm:text-md">
                          Ele destaca empresas e profissionais alinhados com as normas regulamentares, facilitando processos e transmitindo segurança para a sociedade. Inclua o selo em seus editais e contratações públicas e assegure que seus projetos sejam conduzidos por quem realmente entende do assunto.
                        </p>
                        <Button className="text-white bg-black w-fit">
                          APLICAR
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col items-center justify-center w-full gap-5 p-4 text-left sm:p-6">
                    <div className="flex flex-col items-center justify-center w-full gap-5 text-left sm:flex-row">
                      <div className="flex flex-col w-full gap-5 sm:w-1/2">
                        <h3 className="text-xl font-bold text-justify sm:text-2xl">
                          O Selo de Verificação CREA é a marca que diferencia sua instituição!
                        </h3>
                        <p className="text-sm text-justify sm:text-md">
                          Com ele, sua universidade ou faculdade demonstra, de forma clara e confiável, que está alinhada com as melhores práticas e normas do setor, reforçando seu compromisso com a formação de profissionais preparados para os desafios do mercado. Mostre ao mundo que sua instituição está à frente, investindo em credibilidade e inovação para atrair os melhores talentos!
                        </p>
                        <Button className="text-white bg-black w-fit">
                          APLICAR
                        </Button>
                      </div>
                      <div className="flex items-center justify-center w-full sm:w-1/2">
                        <img src="carouselPrefeitura.jpeg" alt="mockuplvsl" className="object-cover mt-4 bg-transparent rounded-full h-96 w-96" />
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden sm:block" />
                <CarouselNext className="hidden sm:block" />
              </Carousel>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-5 p-8 sm:p-14" ref={professionalProfileRef}>
          <div className="flex flex-col items-center justify-center w-full gap-5">
            <h2 className="text-4xl font-bold text-center sm:text-5xl">Pontue e se destaque!</h2>
            <p className="text-lg text-center sm:text-xl">
              Seja visto pelas melhores empresas e amplie suas oportunidades, se registre hoje para começar a pontuar.
            </p>
          </div>

          <div className="flex flex-col w-full gap-5 mt-10">
            <h2 className="text-4xl font-bold text-center sm:text-5xl">Seja visto primeiro!</h2>

            <div className="flex items-center justify-center w-full bg-transparent h-96">
              <img src="mock.png" alt="mockuplvsl" className="object-contain w-full mt-4 bg-transparent h-96" />
            </div>
          </div>

          <div className="flex flex-col w-screen gap-6 p-10 mt-10 bg-blue-900">
            <h2 className="text-3xl font-bold text-left sm:text-4xl">
              O foco é em você! Seja visto entre os mais de
            </h2>
            <h1 className="text-center text-[12vw] sm:text-[18vw] font-black">370.000</h1>
            <h2 className="text-3xl font-bold text-right sm:text-4xl">
              registrados no CREA,<br /> e seja recompensado pela sua participação na comunidade.
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-full px-4 pb-10 sm:flex-row h-fit sm:px-10">
          <div className="flex flex-col items-center justify-center w-full gap-5 p-4 mb-4 border-4 border-gray-300 border-solid h-96 sm:p-5 sm:mb-0 sm:mr-4 rounded-xl">
            <h3 className="text-2xl font-semibold sm:text-3xl">Estudante</h3>
            <p className="text-center">
              Cadastre seu perfil logo cedo! participando de nossas iniciativas como CREA CAPACITA e CREA JOVEM, pontue e garanta visibilidade para sua primeira vaga na área
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-5 p-4 mb-4 border-4 border-gray-300 border-solid h-96 sm:p-5 sm:mb-0 sm:mx-4 rounded-xl">
            <h3 className="text-2xl font-semibold sm:text-3xl">Profissional registrado</h3>
            <p className="text-center ">
              Garanta pontos e descubra novas oportunidades por meio de nosso banco de talentos, se mantenha engajado para não perder seu ranking! Participe de nossos eventos, ideathons e palestras.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-5 p-4 border-4 border-gray-300 border-solid h-96 sm:p-5 sm:ml-4 rounded-xl">
            <h3 className="text-2xl font-semibold sm:text-3xl">Profissional não registrado</h3>
            <p className="text-center">
              Tá esperando o que! venha fazer parte do maior Conselho de fiscalização de exercício profissional da América Latina, aproveite de vantagens como:
              Seja visto! se destaque no nosso banco de talentos e participe dos nossos eventos
              Aproveite dos nosso programa de vantagens
              Seja ouvido! a união faz a força, se una aos mais de 370.000 profissionais registrados.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full text-white bg-blue-950">
        <div className="flex flex-row w-full sm:flex-col" ref={contactFooterRef}>
          <div className="flex flex-col items-center justify-center w-full p-12">
            <h2 className="text-lg font-bold text-left sm:text-xl">
              ATENDIMENTO SEDE
            </h2>
            <p className="text-sm text-center sm:text-md">
              Somente via Agendamento

              Segunda à sexta-feira

              08h30 às 16h30
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-12">
            <h2 className="text-lg font-bold text-left sm:text-xl">
              ENDEREÇO SEDE
            </h2>
            <p className="text-sm text-center sm:text-md">
              São Paulo-SP

              Av. Brigadeiro Faria Lima, 1059, Pinheiros

              CEP: 01452-920
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-12">
            <h2 className="text-lg font-bold text-left sm:text-xl">
            CONTATOS
            </h2>
            <p className="text-sm text-center sm:text-md">
              Call-Center: 0800 017 18 11

              Whatsapp: (11) 9 1000-8888

              faleconosco@creasp.org.br

              Segunda a Sexta: das 7h às 21h

              Sábados: das 7h às 13h
            </p>
          </div>

        </div>
        <img src="LogosCreaConfeaMutua.svg" alt="logos" className="items-center justify-center object-contain w-1/2 px-10 py-5 mx-auto h-1/2" />
        </div>
      </div>
    </>
  )
}

export default App
