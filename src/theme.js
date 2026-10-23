import { flushSync } from 'react-dom'

const STORAGE_KEY = 'syntrix-theme'

// --- current theme (set before first paint by the inline script in index.html) ---
export function getTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function saveTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // storage blocked (private mode): the theme still applies for this visit
  }
}

// --- switch theme with a circular reveal that grows from the clicked button ---
// onApply runs inside the transition so React state (e.g. the toggle icon) lands in the new snapshot
export function switchTheme(next, originEl, onApply) {
  const root = document.documentElement
  const apply = () => {
    root.dataset.theme = next
    saveTheme(next)
    flushSync(() => onApply?.(next))
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    apply()
    return
  }

  // fallback for browsers without View Transitions: a short color fade
  if (!document.startViewTransition) {
    root.classList.add('theme-fading')
    apply()
    window.setTimeout(() => root.classList.remove('theme-fading'), 450)
    return
  }

  const rect = originEl?.getBoundingClientRect()
  const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2
  const y = rect ? rect.top + rect.height / 2 : 0
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

  const transition = document.startViewTransition(apply)
  transition.ready.then(() => {
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 650, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', pseudoElement: '::view-transition-new(root)' }
    )
  })
}
