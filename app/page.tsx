import "./globals.css";

const PHONE_DISPLAY = "(809) 792-5742";
const PHONE_TEL = "tel:+18097925742";
const WHATSAPP = "https://wa.me/18097925742";
const EMAIL = "manoscanadoras.rd@gmail.com";
const ADDRESS = "Calle Pedro Albizu Campos No. 10, Quisqueya, Santo Domingo, República Dominicana";
const MAP_EMBED =
  "https://www.google.com/maps?q=Centro%20de%20Masajes%20Manos%20Sanadoras%20%26%20Spa%2C%20Calle%20Pedro%20Albizu%20Campos%20No.%2010%2C%20Quisqueya%2C%20Santo%20Domingo%2C%20Rep%C3%BAblica%20Dominicana&output=embed";

const HERO_IMG = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80";
const ABOUT_IMG = "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80";
const GALLERY = [
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
];

const SERVICES = [
  {
    icon: "👐",
    title: "Masaje terapéutico",
    text: "Técnicas para aliviar dolores musculares, contracturas y tensión acumulada.",
  },
  {
    icon: "🌿",
    title: "Masaje relajante",
    text: "Movimientos suaves y aceites esenciales para desconectar del estrés diario.",
  },
  {
    icon: "🏃",
    title: "Masaje deportivo",
    text: "Recuperación muscular para quienes entrenan o llevan un ritmo exigente.",
  },
  {
    icon: "🦶",
    title: "Reflexología",
    text: "Terapia en pies que estimula el bienestar de todo el cuerpo.",
  },
  {
    icon: "🕯️",
    title: "Aromaterapia",
    text: "Aceites esenciales que potencian la relajación y el equilibrio.",
  },
  {
    icon: "🎁",
    title: "Paquetes spa",
    text: "Combina servicios en paquetes especiales para ti o para regalar.",
  }
];

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio">
            <span className="brand-mark">💆</span>
            <span className="brand-name">
              Manos Sanadoras & Spa
              <small>Masajes y spa</small>
            </span>
          </a>
          <nav className="nav">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
            <a className="btn btn-primary btn-sm" href={WHATSAPP} target="_blank" rel="noreferrer">
              Agendar por WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section className="hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">💆 Masajes y spa en Quisqueya</span>
              <h1>
                Relaja tu cuerpo, <span>renueva tu energía</span>
              </h1>
              <p className="lead">Masajes terapéuticos y relajantes en el sector Quisqueya, Santo Domingo. Un oasis de calma donde el estrés se queda afuera y tú sales renovado.</p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                  📲 Agendar por WhatsApp
                </a>
                <a className="btn btn-outline" href={PHONE_TEL}>
                  📞 (809) 792-5742
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <strong>📍 Quisqueya</strong>
                  Santo Domingo, D.N.
                </div>
                <div>
                  <strong>🕘 Reserva tu sesión por WhatsApp</strong>
                  Escríbenos para reservar
                </div>
              </div>
            </div>
            <div className="hero-card">
              <h2>¿Necesitas un respiro?</h2>
              <p>Escríbenos por WhatsApp y reserva tu sesión de masaje: tu cuerpo te lo va a agradecer.</p>
              <ul className="hours-list">
                              <li>
                <span>Horario</span>
                <span>Consúltalo por WhatsApp</span>
              </li>
              </ul>
              <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                Reservar mi masaje
              </a>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Nuestros servicios</span>
              <h2>Bienestar en buenas manos</h2>
              <p>Masajes y terapias para aliviar el cuerpo, calmar la mente y recargar energías.</p>
            </div>
            <div className="services-grid">
              {SERVICES.map((s) => (
                <article key={s.title} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="section alt">
          <div className="container about-grid">
            <div className="about-copy">
              <span
                className="kicker"
                style={{
                  color: "var(--orange-500)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "0.78rem",
                }}
              >
                Nosotros
              </span>
              <h2>Tu espacio de calma en Quisqueya</h2>
              <p>El Centro de Masajes Manos Sanadoras & Spa está ubicado en la Calle Pedro Albizu Campos No. 10, sector Quisqueya, Santo Domingo, dedicado al bienestar físico y mental de sus clientes.</p>
              <p>Creemos que el descanso no es un lujo: con manos expertas y un ambiente sereno, te ayudamos a recargar energías y sentirte bien de verdad.</p>
              <ul className="about-points">
                              <li>
                <span className="tick">✓</span>
                <span><strong>Terapeutas expertos:</strong> manos calificadas en distintas técnicas de masaje.</span>
              </li>
                              <li>
                <span className="tick">✓</span>
                <span><strong>Ambiente de calma:</strong> música suave, aromas y atención plena.</span>
              </li>
                              <li>
                <span className="tick">✓</span>
                <span><strong>Reserva por WhatsApp:</strong> aparta tu sesión en minutos.</span>
              </li>
              </ul>
            </div>
            <div className="about-photo">
              <img src={ABOUT_IMG} alt="Masajes y spa Manos Sanadoras & Spa" loading="lazy" />
              <div className="about-photo-strip">
                {GALLERY.map((g) => (
                  <img key={g} src={g} alt="Centro de Masajes Manos Sanadoras & Spa — galería" loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Ubicación</span>
              <h2>Encuéntranos fácilmente</h2>
              <p>{ADDRESS}</p>
            </div>
            <div className="location-grid">
              <div className="location-info">
                <div className="info-card">
                  <h3>📍 Dirección</h3>
                  <p>{ADDRESS}</p>
                </div>
                <div className="info-card">
                  <h3>🕘 Horario</h3>
                  <p>Consúltalo por WhatsApp — agenda tu cita por WhatsApp al (809) 792-5742.</p>
                </div>
                <div className="info-card">
                  <h3>🚗 Cómo llegar</h3>
                  <p>
                    Estamos en Calle Pedro Albizu Campos No. 10, Quisqueya. Abre el mapa para ver la ruta
                    desde tu ubicación.
                  </p>
                </div>
              </div>
              <div className="map-frame">
                <iframe
                  title="Mapa — Centro de Masajes Manos Sanadoras & Spa"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Contacto</span>
              <h2>Agenda hoy mismo</h2>
              <p>
                Escríbenos por WhatsApp, llámanos o envíanos un correo: te
                atendemos a la brevedad.
              </p>
            </div>
            <div className="contact-grid">
              <a className="contact-card" href={WHATSAPP} target="_blank" rel="noreferrer">
                <div className="label">WhatsApp</div>
                <div className="value">(809) 792-5742</div>
                <div className="hint">Agenda tu cita aquí →</div>
              </a>
              <a className="contact-card" href={PHONE_TEL}>
                <div className="label">Teléfono</div>
                <div className="value">(809) 792-5742</div>
                <div className="hint">Llámanos →</div>
              </a>
              <a className="contact-card" href={`mailto:${EMAIL}`}>
                <div className="label">Correo</div>
                <div className="value" style={{ fontSize: "0.95rem", wordBreak: "break-all" }}>{EMAIL}</div>
                <div className="hint">Escríbenos →</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <strong>Centro de Masajes Manos Sanadoras & Spa</strong>
              {ADDRESS}
              <br />
              Tel. (809) 792-5742
            </div>
            <div>
              <strong>Horario</strong>
              Consúltalo por WhatsApp
              <br />
              <a href={`mailto:${EMAIL}`} style={{ color: "inherit" }}>{EMAIL}</a>
            </div>
          </div>
          <p className="demo-note">
            Página de muestra — propuesta de diseño web preparada por NexoDev.
            Los servicios mostrados son categorías generales y pueden ajustarse
            a la oferta real del negocio.
          </p>
        </div>
      </footer>
    </>
  );
}
