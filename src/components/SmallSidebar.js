import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../features/user/userSlice'
import NavLinks from './NavLlinks'

function SmallSidebar() {
  const dispatch = useDispatch()
  const { isSidebarOpen } = useSelector((store) => store.user)
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggle={toggle} />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
