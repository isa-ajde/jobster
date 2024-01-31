import { useDispatch, useSelector } from 'react-redux'
import FormRow from './FormRow'
import FormRowSelect from './FormRowSelect'
import Wrapper from '../assets/wrappers/SearchContainer'
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice'
import { useState, useMemo } from 'react'

function SearchContainer() {
  const [localSearch, setLocalSearch] = useState('')
  const dispatch = useDispatch()
  const { isLoading, searchType, searchStatus, sort, sortOptions } =
    useSelector((store) => store.allJobs)
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)
  const handleSubmit = (e) => {
    e.preventDefault()
    setLocalSearch('')

    dispatch(clearFilters())
  }
  const handleSearch = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }

  const debounce = () => {
    let timeoutID
    return (e) => {
      setLocalSearch(e.target.value)
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }))
      }, 1000)
    }
  }

  const optimizeDebounce = useMemo(() => debounce(), [])

  return (
    <Wrapper>
      <form className="form">
        <h4>Search Form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={localSearch}
            handleChange={optimizeDebounce}
          />
          <FormRowSelect
            labelText="Status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer
