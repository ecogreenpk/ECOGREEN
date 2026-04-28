import '../styles/WhatsAppButton.css'

function WhatsAppButton() {
  const phone = '923432300185' // Full phone number with country code (e.g., 923432300185 for Pakistan)
  const presetMessage = `Hello EcoGreen, I would like a quote for scrap collection and pickup.`
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(presetMessage)}`

  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    // For mobile devices, try to open native app
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isAndroid = /Android/.test(navigator.userAgent)

    if (isIOS || isAndroid) {
      window.location.href = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(presetMessage)}`
      setTimeout(() => {
        if (document.visibilityState !== 'hidden') {
          window.open(url, '_blank', 'noopener,noreferrer')
        }
      }, 1200)
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <a
      className="whatsapp-fab"
      href={url}
      onClick={handleWhatsAppClick}
      aria-label="Message us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.372 0 .012 5.372.012 12a11.79 11.79 0 001.78 6.04L0 24l5.9-1.96A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.22-1.25-6.24-3.48-8.52z" fill="#25D366" />
        <path d="M17.2 14.4c-.36-.18-2.12-1.04-2.44-1.16-.32-.12-.56-.18-.8.18-.24.36-.92 1.16-1.12 1.4-.2.24-.4.27-.76.09-.36-.18-1.52-.56-2.9-1.8-1.08-.96-1.8-2.16-2.02-2.52-.2-.36-.02-.56.16-.74.16-.16.36-.42.54-.63.18-.2.24-.36.36-.6.12-.24 0-.44-.02-.62-.02-.18-.8-1.94-1.12-2.66-.3-.7-.6-.6-.82-.6-.2 0-.44-.02-.68-.02-.24 0-.62.09-.94.44-.32.36-1.22 1.2-1.22 2.92 0 1.72 1.32 3.38 1.5 3.62.18.24 2.6 4 6.3 5.56 3.7 1.56 3.7 1.04 4.36.98.66-.06 2.12-.86 2.42-1.68.3-.82.3-1.52.2-1.68-.12-.18-.44-.3-.8-.48z" fill="#fff" />
      </svg>
    </a>
  )
}

export default WhatsAppButton
