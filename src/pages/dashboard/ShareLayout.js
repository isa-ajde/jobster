import { Outlet } from 'react-router-dom'
import { Navbar, BigSidebar, SmallSidebar } from '../../components'
import Wrapper from '../../assets/wrappers/SharedLayout'
import { useSelector } from 'react-redux'

function ShareLayout() {
  const { isLoading } = useSelector((state) => state.allJobs)
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div
            className={
              isLoading ? 'dashboard-page backgroundPage ' : 'dashboard-page'
            }
          >
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default ShareLayout
