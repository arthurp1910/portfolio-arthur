import { useEffect, useState, type FormEvent } from 'react'
import './App.css'

import FotoLado from './assets/FotoLado.png'
import FotoFrente from './assets/FotoFrente.png'
import Ecomotion from './assets/Ecomotion.png'

import JavaScriptIcon from './assets/javascript.svg'
import JavaIcon from './assets/java.svg'
import PythonIcon from './assets/python.svg'
import CypressIcon from './assets/cypress.svg'
import ReactIcon from './assets/react.svg'
import CssIcon from './assets/css.svg'
import HtmlIcon from './assets/html.svg'
import N8nIcon from './assets/n8n.svg'
import PostgreSqlIcon from './assets/postgree.svg'

import GithubIcon from './assets/github.svg'
import LinkedinIcon from './assets/linkedln.svg'
import EmailIcon from './assets/email.svg'

const skillItems = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
    description:
      'Usei JavaScript para criar interações em aplicações web, consumir APIs e desenvolver lógicas de automação no front-end.',
  },
  {
    name: 'Java',
    icon: JavaIcon,
    description:
      'Trabalhei com Java na construção de lógica de programação, estruturação de código e desenvolvimento de soluções orientadas a objetos.',
  },
  {
    name: 'Python',
    icon: PythonIcon,
    description:
      'Usei Python para scripts, automações e manipulação de dados, principalmente em tarefas repetitivas e fluxos de produtividade.',
  },
  {
    name: 'Cypress',
    icon: CypressIcon,
    description:
      'Trabalhei com Cypress na automação de testes end-to-end, validando fluxos de usuário e garantindo mais confiabilidade em aplicações web.',
  },
  {
    name: 'React',
    icon: ReactIcon,
    description:
      'Usei React para criar interfaces componentizadas, organizando telas, estados e interações de forma mais reutilizável.',
  },
  {
    name: 'CSS',
    icon: CssIcon,
    description:
      'Trabalhei com CSS para construir layouts responsivos, estilização visual, animações e ajustes de experiência do usuário.',
  },
  {
    name: 'HTML',
    icon: HtmlIcon,
    description:
      'Usei HTML para estruturar páginas web com semântica, acessibilidade básica e organização clara do conteúdo.',
  },
  {
    name: 'n8n',
    icon: N8nIcon,
    description:
      'Trabalhei com n8n criando automações, integrações entre sistemas, consumo de APIs e fluxos para reduzir tarefas manuais.',
  },
  {
    name: 'PostgreSQL',
    icon: PostgreSqlIcon,
    description:
      'Usei PostgreSQL para modelar dados, criar consultas SQL e organizar informações utilizadas por aplicações e automações.',
  },
]

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [selectedSkill, setSelectedSkill] = useState(skillItems[0])
  const [contactStatus, setContactStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')
  const ecoMotionLink =
    'https://www.figma.com/design/UJO02k1PDdFGWRQxEg0YnR/EcoMotion?t=rw3IsmgRkB9WUd7X-1'

  const scrollSectionToCenter = (sectionId: string) => {
    const section = document.getElementById(sectionId)

    if (!section) {
      return
    }

    const sectionCenter = section.offsetTop + section.offsetHeight / 2
    const viewportCenter = window.innerHeight / 2

    window.scrollTo({
      top: sectionCenter - viewportCenter,
      behavior: 'smooth',
    })
  }

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setContactStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append('_subject', 'Nova mensagem pelo portfolio')
    formData.append('_template', 'table')
    formData.append('_captcha', 'false')

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/arthur1910p@gmail.com',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        }
      )

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem')
      }

      form.reset()
      setContactStatus('success')
    } catch {
      setContactStatus('error')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(
        document.querySelectorAll('section[id]')
      ) as HTMLElement[]

      const scrollPosition = window.scrollY + 220

      let currentSection = 'inicio'

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className="header">
        <div className="logo">
          <strong>Arthur</strong>
          <br />
          Lemes
        </div>

        <nav className="navbar">
          <a
            href="#inicio"
            className={activeSection === 'inicio' ? 'active' : ''}
          >
            Início
          </a>

          <a
            href="#sobre"
            className={activeSection === 'sobre' ? 'active' : ''}
            onClick={(event) => {
              event.preventDefault()
              scrollSectionToCenter('sobre')
            }}
          >
            Sobre Mim
          </a>

          <a
            href="#projetos"
            className={activeSection === 'projetos' ? 'active' : ''}
          >
            Projetos
          </a>

          <a
            href="#hard-skills"
            className={activeSection === 'hard-skills' ? 'active' : ''}
          >
            Hard Skills
          </a>
        </nav>

        <a href="#contato" className="contact-button">
          Contato
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <h1>Quem sou eu?</h1>

            <h2>Desenvolvedor Full Stack com foco em testes e automação</h2>

            <p>
              Trago soluções eficientes, elegantes e tecnológicas.
              <br />
              Construo softwares com foco em eficiência, usabilidade e performance.
            </p>

            <div className="hero-actions">
              <a href="/curriculo.pdf" download className="resume-button">
                Currículo
              </a>

              <a
                href="https://github.com/arthurp1910"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                <img src={GithubIcon} alt="GitHub" />
              </a>

              <a
                href="https://www.linkedin.com/in/arthur-lemes-58b69926a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <img src={LinkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src={FotoLado} alt="Foto de Arthur Lemes" />
          </div>
        </section>

        <section className="about" id="sobre">
          <div className="about-image">
            <img src={FotoFrente} alt="Foto de Arthur Lemes" />
          </div>

          <div className="about-content">
            <h2>Sobre Mim</h2>

            <h3>Dev Full-stack com foco em automação e testes de software</h3>

            <p>
              Sou Arthur Lemes, graduando em Ciência da Computação pela
              Universidade Federal do Ceará (UFC) e desenvolvedor full-stack com
              foco em automação e testes de software.
            </p>

            <p>
              Tenho experiência no desenvolvimento de soluções automatizadas,
              atuando tanto na automação de testes com Cypress quanto na
              automação de processos e integrações utilizando n8n, APIs, bancos
              de dados e aplicações web.
            </p>

            <p>
              Meu principal objetivo é transformar processos repetitivos em
              fluxos inteligentes e automatizados, conectando sistemas,
              otimizando operações e contribuindo para o aumento da
              produtividade.
            </p>
          </div>
        </section>

        <section className="projects" id="projetos">
          <h2>Projetos</h2>

          <div className="project-list">
            <article className="project-card">
              <a href={ecoMotionLink} target="_blank" rel="noopener noreferrer">
                <img src={Ecomotion} alt="Projeto Ecomotion" />
              </a>

              <div className="project-content">
                <h3>ECOMOTION</h3>

                <p>
                  Automação de atendimento e agendamento para barbearias que
                  trabalham por agendamento. O bot faz o atendimento, verifica
                  horários disponíveis, agenda o serviço e notifica o cliente
                  antes do horário agendado.
                </p>
              </div>
            </article>

            <article className="project-card">
              <a href={ecoMotionLink} target="_blank" rel="noopener noreferrer">
                <img src={Ecomotion} alt="Imagem do projeto Ecomotion" />
              </a>

              <div className="project-content">
                <h3>ECOMOTION</h3>

                <p>
                  Automação de atendimento e agendamento para barbearias que
                  trabalham por agendamento. O bot faz o atendimento, verifica
                  horários disponíveis, agenda o serviço e notifica o cliente
                  antes do horário agendado.
                </p>
              </div>
            </article>

            <article className="project-card">
              <a href={ecoMotionLink} target="_blank" rel="noopener noreferrer">
                <img src={Ecomotion} alt="Imagem do projeto Ecomotion" />
              </a>

              <div className="project-content">
                <h3>ECOMOTION</h3>

                <p>
                  Automação de atendimento e agendamento para barbearias que
                  trabalham por agendamento. O bot faz o atendimento, verifica
                  horários disponíveis, agenda o serviço e notifica o cliente
                  antes do horário agendado.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="skills" id="hard-skills">
          <h2>Hard Skills</h2>

          <div className="skills-carousel">
            <div className="skill-track">
              {[...skillItems, ...skillItems].map((skill, index) => (
                <button
                  type="button"
                  key={`${skill.name}-${index}`}
                  className={`skill-button ${
                    selectedSkill.name === skill.name ? 'active' : ''
                  }`}
                  onClick={() => setSelectedSkill(skill)}
                  aria-label={`Selecionar ${skill.name}`}
                >
                  <img src={skill.icon} alt={skill.name} />
                </button>
              ))}
            </div>
          </div>

          <div className="skill-description">
            <h3>{selectedSkill.name}</h3>
            <p>{selectedSkill.description}</p>
          </div>
        </section>

        <section className="contact" id="contato">
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <h2>Contato</h2>

            <div className="form-group">
              <label htmlFor="name">
                Nome
                <br />
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
                <br />
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Mensagem
                <br />
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Digite sua mensagem aqui..."
                rows={4}
                required
              ></textarea>
            </div>

            <button type="submit" disabled={contactStatus === 'sending'}>
              {contactStatus === 'sending' ? 'Enviando...' : 'Enviar'}
            </button>

            <p className={`contact-feedback ${contactStatus}`} aria-live="polite">
              {contactStatus === 'success' &&
                'Mensagem enviada com sucesso. Obrigado pelo contato!'}
              {contactStatus === 'error' &&
                'Não foi possível enviar agora. Tente novamente em instantes.'}
            </p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>
              <strong>Arthur</strong>
              <br />
              Lemes
            </h3>

            <p>Desenvolvedor Full-stack</p>
          </div>

          <div className="footer-social">
            <a
              href="https://github.com/arthurp1910"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img src={GithubIcon} alt="GitHub" />
            </a>

            <a
              href="https://www.linkedin.com/in/arthur-lemes-58b69926a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=arthur1910p@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="E-mail"
            >
              <img src={EmailIcon} alt="E-mail" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 — Desenvolvido por Arthur</p>
        </div>
      </footer>
    </>
  )
}

export default App
