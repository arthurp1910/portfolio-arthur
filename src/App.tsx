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

function App() {
  return (
    <>
        <header className="header">
        <div className="logo">
          <strong>Arthur</strong><br/> Lemes
        </div>

        <nav className="navbar">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre Mim</a>
          <a href="#projetos">Projetos</a>
          <a href="#hard-skills">Hard Skills</a>
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
              Trago soluções eficientes, elegantes e tecnológicas.<br />
              Construo softwares com foco em eficiência, usabilidade e performance.
            </p>

            <div className="hero-actions">
              <a
                href="/curriculo.pdf"
                download
                className="resume-button"
              >
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
      </main>

      <section className="about"  id = "sobre">
        <div className="about-image">
          <img src={FotoFrente} alt="Foto de Arthur Lemes" />
        </div> 

        <div className="about-content">
          <h2>Sobre Mim</h2>
          <h3>Dev Full-stack com foco em automação e testes de software
          </h3>

          <p>
            Sou Arthur Lemes, graduando em Ciência da Computação pela Universidade Federal do Ceará (UFC)
            e desenvolvedor full-stack com foco em automação e testes de software.
          </p>

          <p>
            Tenho experiência no desenvolvimento de soluções automatizadas, atuando tanto na automação
            de testes com Cypress quanto na automação de processos e integrações utilizando n8n, APIs,
            bancos de dados e aplicações web.
          </p>

          <p>
            Meu principal objetivo é transformar processos repetitivos em fluxos inteligentes e automatizados,
            conectando sistemas, otimizando operações e contribuindo para o aumento da produtividade.
          </p>
        </div>
      </section>

      <section className="projects" id="projetos">
        <h2>Projetos</h2>

        <div className="project-list">
          <article className="project-card">
            <img src={Ecomotion} alt="Projeto Ecomotion" />

            <div className="project-content">
              <h3>ECOMOTION</h3>

              <p>
                Automação de atendimento e agendamento para barbearias que trabalham por agendamento.
                O bot faz o atendimento, verifica horários disponíveis, agenda o serviço e notifica
                o cliente antes do horário agendado.
              </p>
            </div>
          </article>

          <article className="project-card">
            <img src={Ecomotion} alt="Imagem do projeto Ecomotion" />

            <div className="project-content">
              <h3>ECOMOTION</h3>

              <p>
                Automação de atendimento e agendamento para barbearias que trabalham por agendamento.
              </p>
            </div>
          </article>

          <article className="project-card">
            <img src={Ecomotion} alt="Imagem do projeto Ecomotion" />

            <div className="project-content">
              <h3>ECOMOTION</h3>

              <p>
                Automação de atendimento e agendamento para barbearias que trabalham por agendamento.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="skills" id = "hard-skills">
        <h2>Hard Skills</h2>

        <div className="skills-carousel">
          <div className="skill-track">
            <img src={JavaScriptIcon} alt="JavaScript" />
            <img src={JavaIcon} alt="Java" />
            <img src={PythonIcon} alt="Python" />
            <img src={CypressIcon} alt="Cypress" />
            <img src={ReactIcon} alt="React" />
            <img src={CssIcon} alt="CSS" />
            <img src={HtmlIcon} alt="HTML" />
            <img src={N8nIcon} alt="n8n" />
            <img src={PostgreSqlIcon} alt="PostgreSQL" />
            
            <img src={JavaScriptIcon} alt="JavaScript" />
            <img src={JavaIcon} alt="Java" />
            <img src={PythonIcon} alt="Python" />
            <img src={CypressIcon} alt="Cypress" />
            <img src={ReactIcon} alt="React" />
            <img src={CssIcon} alt="CSS" />
            <img src={HtmlIcon} alt="HTML" />
            <img src={N8nIcon} alt="n8n" />
            <img src={PostgreSqlIcon} alt="PostgreSQL" />
          </div>  
        </div>
      </section>

      <section className="contact" id = "contato">
        <form className="contact-form">
          <h2>Contato</h2>

          <div className="form-group">
            <label htmlFor="name">Nome<br /></label>
            <input type="text" id="name" name="name" placeholder="Nome completo"/>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email<br/></label>
            <input type="email" id="email" name="email" placeholder="Digite seu email completo"/>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem<br/></label>
            <textarea id="message" name="message" placeholder="Digite sua mensagem aqui..." rows={4}></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </section>

      <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3><strong>Arthur</strong> <br />Lemes</h3>
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
          href="https://mail.google.com/mail/?view=cm&fs=1&to=lemesarthurr@gmail.com"
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