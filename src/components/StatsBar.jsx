import './StatsBar.css'

// --- Stats Bar (props) ---
export default function StatsBar({ stats }) {
  return (
    <section className="StatsBar">
      <div className="MaxWidthWrapper StatsBarGrid">
        {/* --- map --- */}
        {stats.map((stat) => (
          <div key={stat.id} className="StatBlock">
            <p className="StatValue">{stat.value}</p>
            <p className="StatLabel">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
