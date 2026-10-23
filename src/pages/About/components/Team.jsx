import './Team.css'

// --- Team (props) ---
export default function Team({ members }) {
  return (
    <section className="SectionBlock AboutTeam">
      <div className="MaxWidthWrapper">
        <div className="TeamIntro">
          <h2 className="SectionTitle">
            <span className="SectionTitleAccent">Small team,</span> big standards
          </h2>
          <p className="SectionBody">
            We are a team of three developers who turn ideas into functional, well-designed digital solutions.
            When you work with us, you talk directly to the people building your system, from design and
            development to support and maintenance.
          </p>
        </div>

        <div className="TeamGrid">
          {/* --- map --- */}
          {members.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Profile Link (props) ---
// a '#' placeholder stays clickable but goes nowhere; a real URL opens in a new tab
function ProfileLink({ href, label, className }) {
  const isPlaceholder = !href || href === '#'
  return (
    <a
      href={href || '#'}
      className={`TeamIconLinkBtn ${className}`}
      aria-label={label}
      title={label}
      {...(isPlaceholder
        ? { onClick: (e) => e.preventDefault() }
        : { target: '_blank', rel: 'noopener noreferrer' })}
    />
  )
}

// --- Team Card (props) ---
function TeamCard({ name, role, linkedin, github }) {
  return (
    <div className="TeamCard">
      <div className="TeamImage"></div>
      <div className="TeamInfo">
        <div>
          <h3 className="TeamName">{name}</h3>
          <p className="TeamRole">{role}</p>
        </div>
        <div className="TeamIcons">
          <ProfileLink href={linkedin} label={`${name} on LinkedIn`} className="TeamIconLink" />
          <ProfileLink href={github} label={`${name} on GitHub`} className="TeamIconGit" />
        </div>
      </div>
    </div>
  )
}
