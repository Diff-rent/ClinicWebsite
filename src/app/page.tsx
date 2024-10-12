"use client";
import { useState, useEffect, use } from "react";
import "animated-text-letters/index.css";
import AnimatedText from "animated-text-letters";
import {
  ArrowRight,
  Bell,
  CheckCheck,
  CheckCircle2Icon,
  Laptop,
  Smartphone,
  Tablet,
  Globe,
  Link,
  Instagram,
  Mail,
  Menu,
} from "lucide-react";
import { Fade, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const WHATSAPP_URL = "https://wa.me/message/3WJ7JTEDDPE3E1";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 499) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="w-full max-w-[1600px] px-8 lg:px-16">
      <header className="w-full flex items-center justify-between py-8 lg:px-0 mb-[4%] sm:mb-[10%]">
        <div className="flex items-center gap-2 text-xl font-bold text-blue-500">
          <Fade triggerOnce duration={1400}>
            <img src="/assets/logo.png" alt="logo" />
            <p>EASYMED</p>
          </Fade>
        </div>

        <div className="flex gap-4 sm:gap-8 text-sm font-normal text-gray-700">
          {isMobile ? (
            <Menu
              size={24}
              color="rgb(96 96 96)"
              className="cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          ) : (
            <>
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
                className="border-b-2 border-transparent hover:border-blue-400 transition-all ease-out duration-300 pb-1 cursor-pointer"
                onClick={() => window.open(WHATSAPP_URL, "_blank")}
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
            </>
          )}
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="w-full flex items-center justify-between mb-12 bg-gray-100 p-4 rounded z-[999]"
          style={{
            animation: "fadeIn 0.8s ease forwards",
          }}
        >
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
            className="border-b-2 border-transparent hover:border-blue-400 transition-all ease-out duration-300 pb-1 cursor-pointer"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
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
      )}

      <div className="w-full flex flex-col lg:flex-row gap-24 lg:gap-16 mb-[32%] lg:mb-[24%]">
        <div className="w-full flex flex-1 flex-col justify-center">
          <h1 className="text-4xl lg:text-[3.5rem] text-[#171717] font-black text-start mb-8">
            <AnimatedText
              text="Otimize sua clínica com o nosso sistema de agendamento"
              animationDuration={1200}
              delay={42}
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
          <Fade triggerOnce duration={3200} cascade>
            <p className="w-[80%] text font-normal text-gray-700 mb-14 lg:mb-20">
              <AnimatedText
                text="Facilite o processo de agendamento de consultas da sua clínica com
              o nosso sistema e foque no que realmente importa. "
                animationDuration={1200}
                delay={26}
                animation="slide-right"
                easing="ease"
                transitionOnlyDifferentLetters={true}
                style={{
                  display: "flex",
                  alignItems: "start",
                  flexWrap: "wrap",
                }}
              />
              <div
                className="inline-flex items-center h-full justify-center gap-1 cursor-pointer"
                onClick={() =>
                  window.open("https://demo.easymed.tech", "_blank")
                }
              >
                <span className="inline-block text-sm font-bold text-blue-500">
                  Visitar demo
                </span>
                <ArrowRight
                  size={16}
                  strokeWidth={2.8}
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
            <button
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              className="w-full lg:w-max bg-blue-500 text-white font-bold rounded px-4 py-2 hover:scale-110 shadow-md transition-all ease-out duration-300"
            >
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
          className="flex flex-1 lg:items-center lg:justify-center py-8 lg:py-0"
        >
          <img src="/assets/hero.webp" alt="Hero" className="w-full" />
        </Reveal>
      </div>

      <section
        id="about"
        className="w-full flex flex-col gap-[12rem] lg:gap-[26rem] mb-[12rem] lg:mb-[22rem]"
      >
        <div className="w-full flex flex-col items-center lg:flex-row gap-8 lg:gap-16">
          <Reveal
            triggerOnce
            duration={1200}
            fraction={0.16}
            keyframes={keyframes`
              from {
                opacity: 0;
                transform:translateY(2rem);
              }

              to {
                opacity: 1;
                transform: translateY(0rem);
              }
            `}
            className="w-full flex flex-1 shadow-lg rounded-lg h-fit"
          >
            <img
              className="w-full rounded-xl shadow-xl border-b-[0.75rem] border-l-[0.75rem] border-t-2 border-r-2 border-blue-500"
              src="/assets/demo.gif"
            />
          </Reveal>

          <div className="w-full flex flex-1 flex-col justify-center">
            <Reveal
              triggerOnce
              duration={1600}
              keyframes={keyframes`
              from {
                opacity: 0;
              }

              to {
                opacity: 1;
              }
            `}
              fraction={0.22}
            >
              <h3 className="text-3xl font-black text-start mb-4">
                Eleve sua presença online com um site pessoal e único para
                agendamentos
              </h3>
              <p className="text font-normal text-gray-700 mb-12">
                Garanta sua presença online com um site exclusivo, onde seus
                pacientes podem agendar consultas de maneira simples e
                eficiente, seja para consultas particulares ou por convênios.
                Nosso sistema otimiza o gerenciamento e a organização da sua
                agenda, oferecendo uma experiência profissional e prática tanto
                para você quanto para seus pacientes.
              </p>
            </Reveal>
            <div className="flex flex-wrap gap-2">
              <Fade triggerOnce duration={800} cascade damping={0.18}>
                <div className="w-max flex items-center gap-1 px-4 py-[0.4rem] shadow rounded-full bg-sky-600 text-xs font-bold text-white">
                  <Globe size={20} color="white" />
                  Site pessoal
                </div>
                <div className="w-max flex items-center gap-1 px-4 py-[0.4rem] shadow rounded-full bg-sky-600 text-xs font-bold text-white">
                  <Link size={20} color="white" />
                  Link unico
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col-reverse lg:flex-row gap-8 lg:gap-16">
          <div className="w-full flex flex-1 flex-col justify-center">
            <h3 className="text-3xl font-black text-start mb-4">
              Visualize e gerencie sua agenda de consultas de qualquer lugar
            </h3>
            <p className="text font-normal text-gray-700 mb-12">
              Seja no computador, tablet ou celular, nosso sistema oferece uma
              interface intuitiva e sincronizada, permitindo que você acompanhe
              e organize seus compromissos com facilidade em todas as
              localidades onde atende. Isso garante uma gestão eficiente e
              prática, sem limitações de lugar ou dispositivo.
            </p>

            <div className="flex flex-wrap gap-2">
              <Fade triggerOnce duration={800} cascade damping={0.18}>
                <div className="w-max flex items-center gap-1 px-4 py-[0.4rem] shadow rounded-full bg-sky-600 text-xs font-bold text-white">
                  <Laptop size={20} color="white" />
                  Computador
                </div>
                <div className="w-max flex items-center gap-1 px-4 py-[0.4rem] shadow rounded-full bg-sky-600 text-xs font-bold text-white">
                  <Tablet size={20} color="white" />
                  Tablet
                </div>
                <div className="w-max flex items-center gap-1 px-4 py-[0.4rem] shadow rounded-full bg-sky-600 text-xs font-bold text-white">
                  <Smartphone size={20} color="white" />
                  Celular
                </div>
              </Fade>
            </div>
          </div>
          <img
            className="w-full flex flex-1 rounded-lg shadow-lg border-b-[0.75rem] border-r-[0.75rem] border-t-2 border-l-2 border-blue-500"
            src="/assets/agenda.gif"
            alt="Calendar demo"
          />
        </div>

        <div className="w-full flex flex-col items-center lg:flex-row gap-8 lg:gap-16">
          <Reveal
            triggerOnce
            duration={1200}
            keyframes={keyframes`
              from {
                opacity: 0;
                transform:translateY(2rem);
              }

              to {
                opacity: 1;
                transform: translateY(0rem);
              }
            `}
            className="w-full flex flex-1 shadow-lg rounded-lg h-fit"
          >
            <img
              src="/assets/mail.png"
              alt="About"
              className="w-full flex flex-1 rounded-lg shadow-lg border-b-[0.75rem] border-l-[0.75rem] border-t-2 border-r-2 border-blue-500"
            />
          </Reveal>
          <div className="w-full flex flex-1 flex-col justify-center">
            <Fade triggerOnce duration={1200} cascade damping={0.16}>
              <h3 className="text-3xl font-black text-start mb-4">
                Envie lembretes e notificações personalizadas para seus
                pacientes
              </h3>
              <p className="text font-normal text-gray-700 mb-12">
                Reduza significativamente as faltas às consultas com
                notificações automáticas, proporcionando um atendimento mais
                eficiente e personalizado.
              </p>
            </Fade>

            <div className="flex flex-wrap gap-2">
              <Fade triggerOnce duration={1200} damping={0.24} cascade>
                <div className="w-max flex items-center gap-2 px-4 py-2 bg-sky-600 rounded-full text-xs font-bold text-white shadow-sm">
                  <CheckCheck size={20} color="white" />
                  <h6>Confirmação de agendamento</h6>
                </div>

                <div className="w-max flex items-center gap-2 px-4 py-2 bg-sky-600 rounded-full text-xs font-bold text-white shadow-sm">
                  <Bell size={20} color="white" />
                  <h6>Lembretes de consulta</h6>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mb-24">
        <div className="w-full flex flex-col mt-16">
          <h4 className="text-5xl font-black text-center mb-0">Planos</h4>
          <h6 className="text-lg font-bold text-center mb-16">(em breve)</h6>

          <div className="w-full items-center flex-wrap justify-center flex gap-16 blur-[0.8rem]">
            <Reveal
              triggerOnce
              fraction={0.16}
              duration={1200}
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
            >
              <div className="w-full max-w-[22rem] flex flex-col justify-center border-[0.2rem] rounded-xl border-gray-500 p-8 shadow-lg">
                <h4 className="font-bold text-start">Starter</h4>
                <h3 className="text-5xl font-black text-start mb-12 text-blue-600">
                  R$99
                </h3>

                <span className="font-bold text-xs mb-2">
                  Este plano inclui:
                </span>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>Site de agendamento</h6>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>1 agenda medica</h6>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>Notificacoes por email</h6>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>Subdominio easymed.tech</h6>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>Suporte por WhatsApp</h6>
                </div>
              </div>
            </Reveal>

            <Reveal
              triggerOnce
              fraction={0.16}
              duration={1200}
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
            >
              <div className="w-full max-w-[22rem] flex flex-col justify-center border-[0.75rem] rounded-xl border-blue-500 p-8 shadow-lg">
                <h4 className="font-bold text-start">Starter</h4>
                <h3 className="text-5xl font-black text-start mb-12 text-blue-600">
                  R$99
                </h3>

                <span className="font-bold text-xs mb-2">
                  Este plano inclui:
                </span>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>Site de agendamento</h6>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>1 agenda medica</h6>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>Notificacoes por email</h6>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>Subdominio easymed.tech</h6>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>Suporte por WhatsApp</h6>
                </div>
              </div>
            </Reveal>

            <Reveal
              triggerOnce
              fraction={0.16}
              duration={1200}
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
            >
              <div className="w-full max-w-[22rem] flex flex-col justify-center border-[0.2rem] rounded-xl border-gray-500 p-8 shadow-lg">
                <h4 className="font-bold text-start">Starter</h4>
                <h3 className="text-5xl font-black text-start mb-12 text-blue-600">
                  R$99
                </h3>

                <span className="font-bold text-xs mb-2">
                  Este plano inclui:
                </span>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>Site de agendamento</h6>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>1 agenda medica</h6>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>Notificacoes por email</h6>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>Subdominio easymed.tech</h6>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2Icon size={26} color="white" fill="#4ECB71" />
                  <h6>Suporte por WhatsApp</h6>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="w-full flex items-center justify-center mb-64">
        <Reveal
          triggerOnce
          duration={1200}
          fraction={0.24}
          keyframes={keyframes`
            from {
              opacity: 0;
              transform: scale(0.84) translateY(1rem);
            }

            to {
              opacity: 1;
              transform: scale(1) translateY(0rem);
            }`}
        >
          <button
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className="rounded px-4 py-2 bg-blue-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-300"
          >
            Clique para requisitar acesso antecipado
          </button>
        </Reveal>
      </div>

      <footer className="w-full flex items-center justify-center rounded p-8 bg-gray-100 mb-4 shadow-sm">
        <Fade triggerOnce duration={1400} cascade>
          <div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <a href="mailto:equipeeasymed@gmail.com">
                <Mail
                  size={22}
                  color="rgb(96 96 96)"
                  className="cursor-pointer"
                />
              </a>
              <Instagram
                size={21}
                color="rgb(96 96 96)"
                className="cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/easymed.tech",
                    "_blank"
                  );
                }}
              />
            </div>

            <div className="flex items-center flex-col">
              <p className="text-xs font-semibold text-gray-700">
                {`EasyMed © ${new Date().getFullYear()}`}
              </p>
              <p className="text-xs font-semibold text-gray-700">
                {`Todos os direitos reservados`}
              </p>
            </div>
          </div>
        </Fade>
      </footer>
    </main>
  );
}
