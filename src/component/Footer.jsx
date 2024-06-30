const Footer = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  }
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"></svg>
      </a>
      <span className="mb-3 mb-md-0 text-muted">© Diki Maulana 2024</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-5">
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-5">
      <li className="ms-3"><a className="text-muted" href="#" onClick={() => openLink('https://www.instagram.com/dikimaulanarama/')}><i className="bi bi-instagram" width="50" height="50"></i></a></li>
      <li className="ms-3"><a className="text-muted" href="#" onClick={() => openLink('https://www.linkedin.com/in/diki-maulana-842725165/')}><i className="bi bi-linkedin" width="50" height="50"></i></a></li>
      <li className="ms-3"><a className="text-muted" href="#" onClick={() => openLink('https://github.com/maulanadiki')}><i className="bi bi-github" width="50" height="50"></i></a></li>
    </ul>
    </ul>
  </footer>
    // <div>Created By Diki Maulana inspired of 21 cineplex.com</div>
  )
}

export default Footer