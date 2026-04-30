import { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import { FaLinkedin, FaFilePdf, FaLink, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const [activeSection, setActiveSection] = useState('perfil-profesional');

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
              <a className={activeSection === 'perfil-profesional' ? styles.active : ''} href="#perfil-profesional">
                Perfil Profesional
              </a>

              <a className={activeSection === 'experiencia-laboral' ? styles.active : ''} href="#experiencia-laboral">
                Experiencia Laboral
              </a>

              <a className={activeSection === 'formacion' ? styles.active : ''} href="#formacion">
                Formación
              </a>

              <a className={activeSection === 'stack-tecnologico' ? styles.active : ''} href="#stack-tecnologico">
                Stack Tecnológico
              </a>

              <a className={activeSection === 'casos-practicos' ? styles.active : ''} href="#casos-practicos">
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

              <a href="https://drive.google.com/file/d/1rDwqBbmyalAKrQEEjMyRwm0_PxLmpXcI/view?usp=sharing" target="_blank" rel="noreferrer" aria-label="CV" data-tooltip="CV">
                <FaFilePdf />
              </a>

              <a href="https://linktr.ee/sergioausach" target="_blank" rel="noreferrer" aria-label="Linktree" data-tooltip="Linktree">
                <FaLink />
              </a>

              <a href="/casos-practicos" aria-label="Casos Prácticos" data-tooltip="Casos Prácticos">
                <FaFolderOpen />
              </a>

            </div>

          </div>
        </aside>

        {/* ================= CONTENT ================= */}
        <div className={styles.content}>

          <section id="perfil-profesional" className={styles.section}>
            <div className={styles.profileWrapper}>

              <div className={styles.profileText}>
                <p>
                  Administrador de Sistemas Informáticos en Red (ASIR) especializado en Ciberseguridad, Hacking Ético y Análisis Forense Digital.
                </p>

                <p>
                  Me enfoco en la seguridad informática en sus distintas áreas: Blue Team, con monitorización y detección de amenazas mediante Wazuh y Splunk, hardening de sistemas y gestión de firewalls.
                </p>

                <p>
                  También en Red Team, con análisis de vulnerabilidades y pentesting utilizando herramientas como Nmap, Burp Suite y Metasploit, entre otras herramientas de seguridad ofensiva.
                </p>

                <p>
                  Me especializo también en análisis forense digital (DFIR), mediante Volatility para la adquisición y análisis de evidencias en memoria RAM, y Autopsy para el análisis de evidencias en sistemas de almacenamiento en entornos comprometidos.
                </p>

                <p>
                  Tengo experiencia en administración de sistemas Linux y Windows, incluyendo entornos Active Directory, así como en la gestión de incidencias en infraestructuras IT.
                </p>

                <p>
                  También trabajo con entornos de virtualización y contenedores mediante Proxmox, VMware, VirtualBox y Docker.
                </p>

                <p>
                  Perfil analítico, proactivo y orientado a la resolución de problemas, con interés en la detección de amenazas en entornos Blue Team, la realización de pruebas de seguridad en entornos Red Team y el análisis forense digital (DFIR), centrado en la adquisición, preservación y análisis de evidencias digitales en memoria RAM y sistemas de almacenamiento, aplicados en entornos reales.
                </p>
              </div>

            </div>
          </section>

          <section id="experiencia-laboral" className={styles.section}>
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
                Resolución y gestión de incidencias en entornos IT empresariales, asegurando la continuidad del servicio mediante la administración de sistemas y usuarios en Microsoft 365, la atención de tickets con Zammad y la gestión de incidencias técnicas en infraestructuras críticas. Implementación y mantenimiento de servicios esenciales como virtualización con Proxmox, servidores web Apache, certificados SSL con OpenSSL, redes con Ubiquiti, telefonía IP con Issabel y almacenamiento NAS con Synology, junto con la documentación y estandarización de procesos en BookStack para mejorar la trazabilidad y el soporte operativo.
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
                Soporte técnico a usuarios en entornos corporativos, resolviendo incidencias tanto de hardware como de software, garantizando la continuidad operativa de los puestos de trabajo. Gestión y resolución de incidencias IT mediante diagnóstico, análisis y solución de problemas en sistemas y aplicaciones. Administración de Active Directory, incluyendo la creación y gestión de usuarios, grupos y permisos. Configuración, mantenimiento y optimización de equipos informáticos para asegurar su correcto funcionamiento. Inventariado y control de activos IT utilizando GLPI, manteniendo actualizado el registro de hardware y software de la infraestructura. Elaboración de documentación técnica para estandarizar procedimientos y facilitar la resolución de incidencias futuras.
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

          <section id="formacion" className={styles.section}>
            <div className={styles.job}>

              <div className={styles.jobHeader}>
                <span className={styles.jobDate}>
                  Abril 2026 – Agosto 2026
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
                Formación integral en ciberseguridad y hacking ético, abarcando tanto enfoques defensivos (Blue Team) como ofensivos (Red Team), junto con análisis de amenazas, inteligencia artificial aplicada a la seguridad, cumplimiento normativo y metodologías de protección y evaluación de sistemas en entornos controlados basados en entornos reales.
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
                  Septiembre 2025 – Junio 2026
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
                Especialización en ciberseguridad aplicada a entornos TI, con enfoque en seguridad informática, análisis forense digital avanzado (memoria RAM, discos y dispositivos móviles) y prácticas de hacking ético orientadas a la identificación y explotación controlada de vulnerabilidades en sistemas reales.
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
                  Septiembre 2023 – Junio 2025
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
                Formación en administración de sistemas informáticos en red, centrada en la gestión de infraestructuras IT, sistemas Windows y Linux, redes, servicios y entornos Active Directory, con enfoque en la resolución de incidencias, seguridad básica y mantenimiento de sistemas en entornos empresariales.
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
                  Septiembre 2021 – Junio 2023
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
                 Formación en sistemas microinformáticos y redes, orientada al montaje, mantenimiento y reparación de equipos informáticos, administración básica de redes, instalación de sistemas operativos y soporte técnico a usuarios en entornos domésticos y empresariales.
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

          <section id="stack-tecnologico" className={styles.section}>
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

          <section id="casos-practicos" className={styles.section}>

            <div className={styles.casesWrapper}>

              <div className={styles.sectionIntro}>
                <p>
                  Laboratorios y casos prácticos de ciberseguridad enfocados en DFIR, Red Team, Blue Team y hardening de sistemas.
                </p>

                <a className={styles.sectionButton} href="/casos-practicos">
                  Casos Prácticos
                </a>
              </div>

              <div className={styles.labsGrid}>

                <div className={styles.labCard}>
                  <h3 className={styles.labTitle}>Análisis de Memoria RAM</h3>
                  <p>Investigación de procesos maliciosos en memoria volátil (RAM).</p>

                  <div className={styles.jobTools}>
                    <span>Volatility</span>
                    <span>DFIR</span>
                    <span>Análisis Forense</span>
                  </div>
                </div>

                <div className={styles.labCard}>
                  <h3 className={styles.labTitle}>Análisis Forense de Disco</h3>
                  <p>Análisis de evidencias en sistemas de almacenamiento.</p>

                  <div className={styles.jobTools}>
                    <span>Autopsy</span>
                    <span>DFIR</span>
                    <span>Análisis de discos duros</span>
                  </div>
                </div>

                <div className={styles.labCard}>
                  <h3 className={styles.labTitle}>SIEM (Splunk + Wazuh)</h3>
                  <p>Implementación de integración entre Splunk y Wazuh y correlación de eventos y monitorización centralizada.</p>

                  <div className={styles.jobTools}>
                    <span>Splunk</span>
                    <span>Wazuh</span>
                    <span>SIEM</span>
                  </div>
                </div>

                <div className={styles.labCard}>
                  <h3 className={styles.labTitle}>Hardening SSH Linux</h3>
                  <p>Implementación de protección contra ataques de fuerza bruta mediante Fail2Ban.</p>

                  <div className={styles.jobTools}>
                    <span>Linux</span>
                    <span>Fail2Ban</span>
                    <span>Seguridad</span>
                  </div>
                </div>

                <div className={styles.labCard}>
                  <h3 className={styles.labTitle}>Pentesting Web</h3>
                  <p>Pentesting Web en entorno controlado con SQLi.</p>

                  <div className={styles.jobTools}>
                    <span>SQLi</span>
                    <span>Nmap</span>
                    <span>Red Team</span>
                  </div>
                </div>

                <div className={styles.labCard}>
                  <h3 className={styles.labTitle}>Reconocimiento de Red</h3>
                  <p>Enumeración de servicios y tráfico de paquetes en la red.</p>

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