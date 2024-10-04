import AnimatedText from "animated-text-letters";
import "animated-text-letters/index.css";

export default function Home() {
  return (
    <main className="w-full max-w-[1600px] px-16">
      <header className="w-full flex items-center justify-between px-8 py-8 lg:px-0 mb-[10%]">
        <img src="/assets/logo.png" alt="logo" />

        <div className="flex gap-8">
          <a
            className="border-b-2 border-transparent hover:border-blue-400 transition-all ease-out duration-300 pb-1"
            href="#about"
          >
            <AnimatedText
              text="Sobre"
              animationDuration={800}
              delay={42}
              animation="pop-up"
              easing="ease"
              transitionOnlyDifferentLetters={true}
              style={{
                display: "flex",
                alignItems: "start",
                flexWrap: "wrap",
              }}
            />
          </a>
          <a
            className="border-b-2 border-transparent hover:border-blue-400 transition-all ease-out duration-300 pb-1"
            href="#pricing"
          >
            <AnimatedText
              text="Planos"
              animationDuration={800}
              delay={42}
              animation="pop-up"
              easing="ease"
              transitionOnlyDifferentLetters={true}
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            />
          </a>
          <a
            className="border-b-2 border-transparent hover:border-blue-400 transition-all ease-out duration-300 pb-1"
            href="#"
          >
            <AnimatedText
              text="Contato"
              animationDuration={800}
              delay={42}
              animation="pop-up"
              easing="ease"
              transitionOnlyDifferentLetters={true}
              style={{
                display: "flex",
                alignItems: "start",
                flexWrap: "wrap",
              }}
            />
          </a>
        </div>
      </header>

      <div className="w-full flex gap-16 mb-[24%]">
        <div className="w-full flex flex-1 flex-col justify-center">
          <h1 className="text-6xl font-black text-start mb-4">
            <AnimatedText
              text="Otimize sua clinica com o nosso sistema de agendamento"
              animationDuration={800}
              delay={32}
              animation="slide-up"
              easing="ease"
              transitionOnlyDifferentLetters={true}
              style={{
                display: "flex",
                alignItems: "start",
                flexWrap: "wrap",
              }}
            />
          </h1>
          <p className="w-[80%] text-lg font-normal text-gray-800 mb-20">
            Facilite o processo de agendamento de consultas da sua clinica com o
            nosso sistema e foque no que realmente importa.
          </p>

          <button className="w-max bg-blue-500 text-white font-bold rounded px-4 py-2 hover:scale-110 shadow-md transition-all ease-out duration-300">
            Entre em contato
          </button>
        </div>

        <img className="w-full flex flex-1" src="/assets/hero.png" alt="Hero" />
      </div>

      <section
        id="about"
        className="w-full flex flex-col gap-[26rem] mb-[28rem]"
      >
        <div className="w-full flex gap-16">
          <img
            className="w-full flex flex-1 rounded-lg shadow-lg"
            src="/assets/about.png"
            alt="About"
          />

          <div className="w-full flex flex-1 flex-col justify-center">
            <h3 className="text-3xl font-black text-start mb-4">
              Eleve sua presenca online com um site pessoal e unico para
              agendamentos
            </h3>
            <p className="text font-normal text-gray-700">
              Garanta sua presença online com um site exclusivo, onde seus
              pacientes podem agendar consultas de forma simples e eficiente.
              Nosso sistema facilita o gerenciamento e a organização de sua
              agenda, proporcionando uma experiência profissional e prática para
              você e seus pacientes.
            </p>
          </div>
        </div>

        <div className="w-full flex gap-16">
          <div className="w-full flex flex-1 flex-col justify-center">
            <h3 className="text-3xl font-black text-start mb-4">
              Gerencie e visualize sua agenda de consultas de qualquer lugar
            </h3>
            <p className="text font-normal text-gray-700">
              Garanta sua presença online com um site exclusivo, onde seus
              pacientes podem agendar consultas de forma simples e eficiente.
              Nosso sistema facilita o gerenciamento e a organização de sua
              agenda, proporcionando uma experiência profissional e prática para
              você e seus pacientes.
            </p>
          </div>
          <img
            className="w-full flex flex-1 rounded-lg shadow-lg"
            src="/assets/about.png"
            alt="About"
          />
        </div>

        <div className="w-full flex gap-16">
          <img
            className="w-full flex flex-1 rounded-lg shadow-lg"
            src="/assets/about.png"
            alt="About"
          />
          <div className="w-full flex flex-1 flex-col justify-center">
            <h3 className="text-3xl font-black text-start mb-4">
              Envie lembretes e notificacoes personalizadas para seus pacientes
            </h3>
            <p className="text font-normal text-gray-700">
              Diminua significativamente as faltas às consultas com notificações
              automáticas, proporcionando um atendimento mais eficiente e
              personalizado.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="mb-[32rem]">
        <div className="w-full flex flex-col gap-16 mt-16">
          <h2 className="text-4xl font-black text-center mb-4">Planos</h2>

          <div className="w-full flex gap-16">
            <div className="w-full flex flex-1 flex-col justify-center">
              <h3 className="text-3xl font-black text-start mb-4">
                Plano Basico
              </h3>
              <p className="text font-normal text-gray-700">
                Garanta sua presença online com um site exclusivo, onde seus
                pacientes podem agendar consultas de forma simples e eficiente.
                Nosso sistema facilita o gerenciamento e a organização de sua
                agenda, proporcionando uma experiência profissional e prática
                para você e seus pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
