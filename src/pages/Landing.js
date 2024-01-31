import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}

        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Welcome to our Job Tracking App! Here you have stepped into a
            user-friendly and powerful tool that will help you manage your
            business more efficiently. Now you can log in to start your
            experience.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="job hut" className="img main-img " />
      </div>
    </Wrapper>
  )
}

export default Landing
