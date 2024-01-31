import customFetch, { checkFormUnauthorizedResponse } from '../../utils/axios'
import { getAllJobs, hideLoading, showLoading } from '../allJobs/allJobsSlice'
import { clearValues } from './jobSlice'

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/jobs/${jobId}`, job)
    thunkAPI.dispatch(clearValues())
    return resp.data
  } catch (error) {
    return checkFormUnauthorizedResponse(error, thunkAPI)
  }
}

export const deleteJobThunk = async (_id, thunkAPI) => {
  thunkAPI.dispatch(showLoading())

  try {
    const rsp = await customFetch.delete(`/jobs/${_id}`)

    thunkAPI.dispatch(getAllJobs())
    return rsp.data.msg
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    return checkFormUnauthorizedResponse(error, thunkAPI)
  }
}

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post('/jobs', job)
    thunkAPI.dispatch(clearValues())

    return resp.data
  } catch (error) {
    return checkFormUnauthorizedResponse(error, thunkAPI)
  }
}
