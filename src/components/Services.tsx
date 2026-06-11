import { services } from '../data/portfolio'
import { getIcon } from './iconRegistry'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Mes services</span>
          <h2>Ce que je peux créer pour vous</h2>
          <p>
            Une gamme complète de services de design pour donner à votre marque
            une image forte, cohérente et professionnelle.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => {
            const Icon = getIcon(s.icon)
            return (
              <article key={s.id} className="service-card">
                <span className="service-card__icon">
                  <Icon size={26} variant="Bold" />
                </span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
