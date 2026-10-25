// Mintlify runs every .js file in the repo on each page. This one loads the
// self-hosted Umami tracker (kiroku.ryoku.dev, renamed paths so blocklists skip
// it) and its replay recorder, and records which outside links readers follow.
(() => {
  if (window.__ryokuAnalytics) return
  window.__ryokuAnalytics = true

  const host = 'https://kiroku.ryoku.dev'
  const websiteId = '31deface-2e29-4f38-a1bb-c8e38945941b'

  const load = (src, attrs) => {
    const script = document.createElement('script')
    script.src = src
    script.defer = true
    for (const [name, value] of Object.entries(attrs)) script.setAttribute(name, value)
    document.head.appendChild(script)
    return script
  }

  const tracker = load(`${host}/k.js`, {
    'data-website-id': websiteId,
    'data-domains': 'docs.ryoku.dev',
    'data-performance': 'true'
  })
  tracker.onload = () => load(`${host}/recorder.js`, { 'data-website-id': websiteId })

  const onClick = event => {
    if (event.type === 'auxclick' && event.button !== 1) return
    const link = event.target?.closest?.('a[href]')
    if (!link) return
    let url
    try {
      url = new URL(link.href, location.href)
    } catch {
      return
    }
    if (url.host === location.host || !url.protocol.startsWith('http')) return
    window.umami?.track('outbound', { url: url.href.slice(0, 300), host: url.host })
  }

  document.addEventListener('click', onClick, { capture: true })
  document.addEventListener('auxclick', onClick, { capture: true })
})()
