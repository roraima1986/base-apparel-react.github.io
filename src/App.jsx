
function App() {
  

  return (
    <>
      <main className="main">
        <div className="container">

          {/* content */}
          <div className="container__content">
            <img src="./src/assets/images/logo.svg" alt="Base Apprel" className="logo" />

            <h1 className="title">
              We're <span className="title__destacate"> coming soon</span>
            </h1>

            <p className="description">
              Hello fellow shoppers! We're currently building our new fashion store.  Add your email below to stay up-to-date with announcements and our launch deals.
            </p>

            <form className="form">
              <input type="text" placeholder="Email Address" className="form__input" />
              <button type="submit" className="">
                <img src="./src/assets/images/icon-arrow.svg" className="form__button" />
              </button>
            </form>
          </div>

          {/* image */}
          <div className="container__image">
            <picture>
              <source media="(max-width:650px)" srcSet="./src/assets/images/hero-mobile.jpg" />
              <img src="./src/assets/images/hero-desktop.jpg" />
            </picture>          
            
          </div>
        </div>
      </main>

      <footer>
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </>
  )
}

export default App


