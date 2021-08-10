import {React} from "react";
import { useDispatch } from "react-redux";
import { filterChange } from "./redux/actions";

const Filter = () => {
  const dispatch = useDispatch()

  return(
    <div className='m-3 row g-2 align-items-start'>
        <div className="form-check form-check-inline col-auto" >
          <input className="form-check-input" type="radio" name="radio" id="radio1"
           onChange={() => dispatch(filterChange('ALL'))} />
          <label className="form-check-label" htmlFor="radio1" >
            all
          </label>
        </div>
        <div className="form-check col-auto form-check-inline" >
          <input className="form-check-input" type="radio" name="radio" id="radio2"
           onChange={() => dispatch(filterChange('IMPORTANT'))} />
          <label className="form-check-label" htmlFor="radio2">
            important
          </label>
        </div>
        <div className="form-check col form-check-inline" >
          <input className="form-check-input" type="radio" name="radio" id="radio3"
           onChange={() => dispatch(filterChange('NONIMPORTANT'))}/>
          <label className="form-check-label" htmlFor="radio3">
            nonimportant
          </label>
        </div>
      </div>
  )
}

export default Filter