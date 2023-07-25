import './style.css'
import VITE_LOGO from '/vite.svg'

document.querySelector<HTMLDivElement>('#application-container')!.innerHTML = `
  <div>
      <img src="${VITE_LOGO}"/>
      <span>UI Kit</span>
  </div>
`
