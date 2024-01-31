import { useSelector, useDispatch } from 'react-redux'
import Wrapper from '.././assets/wrappers/JobsContainer'
import Job from './Job'
import { useEffect } from 'react'
import Loading from './Loading'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import PageBtnContainer from './PageBtnContainer'

function JobsContainer() {
  const dispatch = useDispatch()
  const { search, searchType, sort, page, searchStatus } = useSelector(
    (store) => store.allJobs
  )
  useEffect(() => {
    dispatch(getAllJobs())
  }, [search, searchType, sort, page, searchStatus])

  const { isLoading, jobs, totalJobs, numOfPages } = useSelector(
    (store) => store.allJobs
  )

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    )
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>"No Jobs To Display.."</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} Found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}

export default JobsContainer
