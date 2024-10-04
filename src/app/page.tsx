"use client";
import "animated-text-letters/index.css";
import AnimatedText from "animated-text-letters";
import { ArrowRight, CheckCircle2Icon } from "lucide-react";
import { Fade, Slide, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

export default function Home() {
  return (
    <main className="w-full max-w-[1400px] px-16">
      <header className="w-full flex items-center justify-between px-8 py-8 lg:px-0 mb-[10%]">
        <Fade triggerOnce duration={800}>
          <img src="/assets/logo.png" alt="logo" />
        </Fade>

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
          <h1 className="text-[3.5rem] font-black text-start mb-4">
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
          <Fade triggerOnce duration={2200} cascade>
            <p className="w-[80%] text-lg font-normal text-gray-800 mb-20">
              Facilite o processo de agendamento de consultas da sua clinica com
              o nosso sistema e foque no que realmente importa.
              <div
                className="inline-flex items-center h-full justify-center gap-1 cursor-pointer"
                onClick={() =>
                  window.open("https://demo.easymed.tech", "_blank")
                }
              >
                <span className="inline-block text-sm font-bold text-blue-500 ml-2">
                  Visitar demo
                </span>
                <ArrowRight
                  size={18}
                  strokeWidth={2.75}
                  color="rgb(59 130 246 )"
                />
              </div>
            </p>
          </Fade>

          <Reveal
            keyframes={keyframes`
            from {
              opacity: 0;
              transform: translateY(2rem);
            }

            to {
              opacity: 1;
              transform: translateY(0rem);
            }
          `}
            triggerOnce
            duration={1600}
          >
            <button className="w-max bg-blue-500 text-white font-bold rounded px-4 py-2 hover:scale-110 shadow-md transition-all ease-out duration-300">
              Entre em contato
            </button>
          </Reveal>
        </div>

        <Reveal
          keyframes={keyframes`
            from {
              opacity: 0;
              transform: scale(0.84) translateY(1rem);
            }

            to {
              opacity: 1;
              transform: scale(1) translateY(0rem);
            }
          `}
          triggerOnce
          duration={1000}
          className="w-full flex flex-1"
        >
          <img src="/assets/hero.png" alt="Hero" />
        </Reveal>
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
        <div className="w-full flex flex-col mt-16">
          <h4 className="text-5xl font-black text-center mb-12">Planos</h4>

          <div className="w-full items-center justify-center flex gap-16">
            <div className="w-full max-w-[22rem] flex flex-col justify-center border-[0.75rem] rounded-xl border-indigo-500 p-8 shadow-lg">
              <h4 className="font-bold text-start">Starter</h4>
              <h3 className="text-5xl font-black text-start mb-12 text-indigo-600">
                R$99
              </h3>

              <span className="font-bold text-xs mb-2">Este plano inclui:</span>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                <h6>Site pessoal</h6>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                <h6>Agenda medica</h6>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                <h6>Notificacoes por email</h6>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                <h6>Subdominio personalizado</h6>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                <h6>Suporte por WhatsApp</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
