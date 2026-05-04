import { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { FaLinkedin, FaFilePdf, FaLink, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const [activeSection, setActiveSection] = useState('Perfil-Profesional');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));

    const handleScroll = () => {
      const scrollPos = window.innerHeight * 0.4;

      let currentSection = sections[0]?.id;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= scrollPos) {
          currentSection = section.id;
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll(); // init

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout title={siteConfig.title} description="Portfolio de Sergio Ausach | Ciberseguridad">

      <main className={styles.layout}>

        {/* ================= SIDEBAR ================= */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <div className={styles.profileAvatar}>
              <img src="/img/profile.png" alt="Sergio Ausach" />
            </div>
            <h1 className={styles.name}>Sergio Ausach Cuartero</h1>

            <h2 className={styles.role}>Administrador de Sistemas Informáticos</h2>

            <p className={styles.desc}>
              Ciberseguridad · Blue Team · Red Team · DFIR
            </p>

            <nav className={styles.nav}>
              <a className={activeSection === 'Perfil-Profesional' ? styles.active : ''} href="#Perfil-Profesional">
                Perfil Profesional
              </a>

              <a className={activeSection === 'Experiencia-Laboral' ? styles.active : ''} href="#Experiencia-Laboral">
                Experiencia Laboral
              </a>

              <a className={activeSection === 'Formacion' ? styles.active : ''} href="#Formacion">
                Formación
              </a>

              <a className={activeSection === 'Stack-Tecnologico' ? styles.active : ''} href="#Stack-Tecnologico">
                Stack Tecnológico
              </a>

              <a className={activeSection === 'Casos-Practicos' ? styles.active : ''} href="#Casos-Practicos">
                Casos Prácticos
              </a>
            </nav>

            {/* ================= ENLACES EXTERNOS SOLO ICONOS ================= */}
            <div className={styles.externalLinks}>

              <a href="https://www.linkedin.com/in/sergio-ausach-cuartero" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn">
                <FaLinkedin />
              </a>

              <a
                href="mailto:sergioausach@gmail.com" aria-label="Correo Electrónico" data-tooltip="Correo Electrónico">
                <FaEnvelope />
              </a>

              <a href="https://drive.google.com/file/d/1kmZ-IEJof4YK1pGBeL0h-OdBWKdgtmoM/view" target="_blank" rel="noreferrer" aria-label="CV" data-tooltip="CV">
                <FaFilePdf />
              </a>

              <a href="https://linktr.ee/sergioausach" target="_blank" rel="noreferrer" aria-label="Linktree" data-tooltip="Linktree">
                <FaLink />
              </a>

              <a href="/Casos-Practicos" aria-label="Casos Prácticos" data-tooltip="Casos Prácticos">
                <FaFolderOpen />
              </a>

            </div>

          </div>
        </aside>

        {/* ================= CONTENT ================= */}
        <div className={styles.content}>

          <section id="Perfil-Profesional" className={styles.section}>
            <div className={styles.profileWrapper}>

              <div className={styles.profileText}>
                <p>
                  Administrador de Sistemas (ASIR) con enfoque en ciberseguridad, especializado en entornos de sistemas, redes y seguridad informática.
                </p>

                <p>
                  He desarrollado experiencia práctica en entornos reales y virtualizados mediante prácticas y laboratorios técnicos, trabajando con administración de sistemas Linux y Windows, redes, y fundamentos de seguridad.
                </p>

                <p>
                  Este portfolio recoge proyectos, documentación técnica y laboratorios orientados a ciberseguridad (Blue Team, Red Team y análisis forense digital), con el objetivo de demostrar capacidades prácticas y evolución técnica.
                </p>

              </div>

            </div>
          </section>

          <section id="Experiencia-Laboral" className={styles.section}>
            <div className={styles.job}>

              <div className={styles.jobHeader}>
                <span className={styles.jobDate}>Abril 2025 - Agosto 2025</span>

                <div className={styles.jobTitleBlock}>
                  <h3 className={styles.jobTitle}>
                    Administrador de Sistemas Informáticos
                  </h3>
                  <span className={styles.jobCompany}>
                    VMSIS - Sant Joan Despí
                  </span>
                </div>
              </div>

              <p className={styles.jobDesc}>
                Resolución y gestión de incidencias en entornos IT empresariales, asegurando la continuidad del servicio mediante la administración de sistemas y usuarios en Microsoft 365 y la gestión de tickets con Zammad.

                Participación en la administración y mantenimiento de infraestructuras IT, incluyendo virtualización con Proxmox, servidores web Apache, certificados SSL, redes empresariales, telefonía IP y almacenamiento NAS.

                Elaboración de documentación técnica y estandarización de procesos en BookStack para mejorar la trazabilidad y el soporte operativo.
              </p>

              <div className={styles.jobTools}>
                <span>Zammad</span>
                <span>Office 365</span>
                <span>BookStack</span>
                <span>Proxmox</span>
                <span>Apache</span>
                <span>OpenSSL</span>
                <span>Issabel</span>
                <span>Ubiquiti</span>
                <span>Synology</span>
              </div>
            </div>
            <div className={styles.job}>

              <div className={styles.jobHeader}>
                <span className={styles.jobDate}>
                  Noviembre 2022 - Mayo 2023
                </span>

                <div className={styles.jobTitleBlock}>
                  <h3 className={styles.jobTitle}>
                    Técnico Informático
                  </h3>
                  <span className={styles.jobCompany}>
                    Ayuntamiento de Cervelló - Cervelló
                  </span>
                </div>
              </div>

              <p className={styles.jobDesc}>
                Soporte técnico a usuarios en entorno corporativo, resolviendo incidencias de hardware y software para garantizar la continuidad operativa de los puestos de trabajo.

                Gestión y resolución de incidencias IT mediante diagnóstico, análisis y solución de problemas en sistemas y aplicaciones.

                Administración de Active Directory, incluyendo la creación y gestión de usuarios, grupos y permisos.

                Inventariado y control de activos IT mediante GLPI, manteniendo actualizado el registro de hardware y software de la infraestructura.

                Configuración y mantenimiento de equipos informáticos, junto con la elaboración de documentación técnica para estandarizar procedimientos y mejorar la resolución de incidencias.
              </p>

              <div className={styles.jobTools}>
                <span>Active Directory</span>
                <span>GLPI</span>
                <span>Windows</span>
                <span>Soporte IT</span>
                <span>Redes</span>
                <span>Hardware</span>
                <span>Software</span>
                <span>Documentación</span>
              </div>

            </div>
          </section>

          <section id="Formacion" className={styles.section}>
            <div className={styles.job}>

              <div className={styles.jobHeader}>
                <span className={styles.jobDate}>
                  Abril 2026 - Actualmente
                </span>

                <div className={styles.jobTitleBlock}>
                  <h3 className={styles.jobTitle}>
                    Máster en Ciberseguridad y Hacking Ético
                  </h3>
                  <span className={styles.jobCompany}>
                    BIG School - Barcelona
                  </span>
                </div>
              </div>

              <p className={styles.jobDesc}>
                Formación en ciberseguridad y hacking ético con enfoque integral en seguridad ofensiva (Red Team) y defensiva (Blue Team).

                El programa abarca análisis de amenazas, evaluación de vulnerabilidades, metodologías de pentesting, inteligencia de seguridad y fundamentos de protección de sistemas en entornos controlados basados en escenarios reales.
              </p>

              <div className={styles.jobTools}>
                <span>Pentesting</span>
                <span>Red Team</span>
                <span>Burp Suite</span>
                <span>Nmap</span>
                <span>Metasploit</span>
                <span>Linux</span>
              </div>

            </div>


            <div className={styles.job}>

              <div className={styles.jobHeader}>
                <span className={styles.jobDate}>
                  Septiembre 2025 - Actualmente
                </span>

                <div className={styles.jobTitleBlock}>
                  <h3 className={styles.jobTitle}>
                    Curso de Especialización en Ciberseguridad en Entornos de las Tecnologias de la Información
                  </h3>
                  <span className={styles.jobCompany}>
                    INS Esteve Terradas i Illa - Cornellà de Llobregat
                  </span>
                </div>
              </div>

              <p className={styles.jobDesc}>
                Especialización en ciberseguridad aplicada a entornos TI, con enfoque en seguridad informática, análisis forense digital y seguridad ofensiva en entornos controlados.

                La formación abarca la identificación, análisis y explotación de vulnerabilidades en sistemas reales, así como técnicas de defensa, monitorización y respuesta ante incidentes en infraestructuras IT.
              </p>

              <div className={styles.jobTools}>
                <span>Volatility</span>
                <span>Autopsy</span>
                <span>FTK Imager</span>
                <span>Wazuh</span>
                <span>Splunk</span>
                <span>Snort</span>
                <span>Linux</span>
                <span>Hacking Ético</span>
                <span>Nmap</span>
                <span>Metasploit</span>
                <span>Burp Suite</span>
                <span>Hydra</span>
                <span>Hardening</span>
              </div>

            </div>


            <div className={styles.job}>

              <div className={styles.jobHeader}>
                <span className={styles.jobDate}>
                  Septiembre 2023 - Junio 2025
                </span>

                <div className={styles.jobTitleBlock}>
                  <h3 className={styles.jobTitle}>
                    Administración de Sistemas Informáticos en Red
                  </h3>
                  <span className={styles.jobCompany}>
                    IES Marianao - Sant Boi de Llobregat
                  </span>
                </div>
              </div>

              <p className={styles.jobDesc}>
                Formación en Administración de Sistemas Informáticos en Red (ASIR) orientada a la gestión de infraestructuras IT, administración de sistemas Windows y Linux, redes y servicios en entornos empresariales.

                Enfoque en la administración de sistemas, gestión de entornos Active Directory, virtualización, servicios de red y resolución de incidencias en infraestructura IT.
              </p>

              <div className={styles.jobTools}>
                <span>Windows Server</span>
                <span>Linux</span>
                <span>Active Directory</span>
                <span>Ansible</span>
                <span>Bash</span>
                <span>Powershell</span>
                <span>C</span>
                <span>MySQL</span>
                <span>Virtualización</span>
                <span>Redes Informáticas</span>
              </div>

            </div>


            <div className={styles.job}>

              <div className={styles.jobHeader}>
                <span className={styles.jobDate}>
                  Septiembre 2021 - Junio 2023
                </span>

                <div className={styles.jobTitleBlock}>
                  <h3 className={styles.jobTitle}>
                    Sistemas Microinformáticos y Redes
                  </h3>
                  <span className={styles.jobCompany}>
                    Institut Bernat el Ferrer - Molins de Rei
                  </span>
                </div>
              </div>

              <p className={styles.jobDesc}>
                Formación en Sistemas Microinformáticos y Redes orientada al montaje, mantenimiento y reparación de equipos informáticos, administración básica de redes, instalación de sistemas operativos y soporte técnico a usuarios en entornos domésticos y empresariales.

                Base técnica en hardware, software y redes locales, con introducción a sistemas operativos y fundamentos de administración de sistemas.
              </p>

              <div className={styles.jobTools}>
                <span>Hardware</span>
                <span>Software</span>
                <span>Redes Locales</span>
                <span>Windows</span>
                <span>Active Directory</span>
                <span>Linux</span>
                <span>Python</span>
                <span>Montaje PC</span>
              </div>

            </div>
          </section>

          <section id="Stack-Tecnologico" className={styles.section}>
            <div className={styles.stackGrid}>
              <img src="/img/ftk-imager.png" alt="FTK Imager" />
              <img src="/img/volatility.png" alt="Volatility" />
              <img src="/img/autopsy.png" alt="Autopsy" />
              <img src="/img/docker.png" alt="Docker" />
              <img src="/img/wazuh.png" alt="Wazuh" />
              <img src="/img/splunk.png" alt="Splunk" />
              <img src="/img/burp-suite.png" alt="Burp Suite" />
              <img src="/img/nmap.png" alt="Nmap" />
              <img src="/img/hydra.png" alt="Hydra" />
              <img src="/img/metasploit.png" alt="Metasploit" />
            </div>
          </section>

          <section id="Casos-Practicos" className={styles.section}>

            <div className={styles.casesWrapper}>

              <div className={styles.sectionIntro}>
                <p>
                  Laboratorios y casos prácticos de ciberseguridad aplicados a entornos controlados, enfocados en análisis forense digital (DFIR), seguridad ofensiva (Red Team), defensiva (Blue Team) y hardening de sistemas.
                </p>

                <a className={styles.sectionButton} href="/Casos-Practicos">
                  Casos Prácticos
                </a>
              </div>

              <div className={styles.labsGrid}>

                <div className={styles.labCard}>
                  <h3 className={styles.labTitle}>Análisis de Memoria RAM</h3>
                  <p>Investigación de procesos maliciosos en memoria volátil (RAM) mediante técnicas de análisis forense digital, identificando posibles indicadores de compromiso y comportamiento sospechoso en sistemas comprometidos.</p>

                  <div className={styles.jobTools}>
                    <span>Volatility</span>
                    <span>DFIR</span>
                    <span>Análisis Forense</span>
                  </div>
                </div>

                <div className={styles.labCard}>
                  <h3 className={styles.labTitle}>Análisis Forense de Disco</h3>
                  <p>Análisis de evidencias en sistemas de almacenamiento mediante inspección de discos y recuperación de información relevante para la investigación de incidentes de seguridad.</p>

                  <div className={styles.jobTools}>
                    <span>Autopsy</span>
                    <span>DFIR</span>
                    <span>Análisis de discos duros</span>
                  </div>
                </div>

                <div className={styles.labCard}>
                  <h3 className={styles.labTitle}>SIEM (Splunk + Wazuh)</h3>
                  <p>Configuración de un entorno de monitorización y correlación de eventos mediante integración de herramientas SIEM para detección centralizada de amenazas y análisis de logs.</p>

                  <div className={styles.jobTools}>
                    <span>Splunk</span>
                    <span>Wazuh</span>
                    <span>SIEM</span>
                  </div>
                </div>

                <div className={styles.labCard}>
                  <h3 className={styles.labTitle}>Hardening SSH Linux</h3>
                  <p>Implementación de medidas de seguridad en servidores Linux para mitigar ataques de fuerza bruta, incluyendo endurecimiento de configuración SSH y sistemas de bloqueo automático de intentos de acceso.</p>

                  <div className={styles.jobTools}>
                    <span>Linux</span>
                    <span>Fail2Ban</span>
                    <span>Seguridad</span>
                  </div>
                </div>

                <div className={styles.labCard}>
                  <h3 className={styles.labTitle}>Pentesting Web</h3>
                  <p>Evaluación de seguridad en aplicaciones web en entorno controlado, identificando y explotando vulnerabilidades comunes como inyección SQL para comprender el impacto de fallos de validación en aplicaciones.</p>

                  <div className={styles.jobTools}>
                    <span>SQLi</span>
                    <span>Nmap</span>
                    <span>Red Team</span>
                  </div>
                </div>

                <div className={styles.labCard}>
                  <h3 className={styles.labTitle}>Reconocimiento de Red</h3>
                  <p>Análisis de red mediante enumeración de servicios activos, identificación de hosts y captura de tráfico para entender la superficie de ataque en entornos internos.</p>

                  <div className={styles.jobTools}>
                    <span>Nmap</span>
                    <span>Wireshark</span>
                    <span>Enumeración</span>
                  </div>
                </div>

              </div>

            </div>

          </section>

        </div>

      </main>

    </Layout>
  );
}
