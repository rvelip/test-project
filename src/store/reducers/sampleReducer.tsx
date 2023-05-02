import { GET_SAMPLE, SAMPLE_ERROR, Increment, Decrement } from "../types";

const initialState = {
  sample: [],
  loading: true,
  counter: 0
};

const sampleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SAMPLE:
      return {
        ...state,
        sample: action.payload,
        loading: false,
        counter: 10
      };

    case SAMPLE_ERROR:
      return {
        loading: false,
        error: action.payload,
        counter: 0
      };

    case Increment:
      return {
        sample: [],
        loading: false,
        counter: state.counter + 1
      }
    case Decrement:

      return {
        sample: [],
        loading: false,
        counter: state.counter - 1
      }
      

    default:
      return state;
  }
};

export default sampleReducer;
