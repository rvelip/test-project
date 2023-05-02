import { GET_SAMPLE, SAMPLE_ERROR } from "../types";

export const getSampleData = () => {
  return {
    type: GET_SAMPLE,
    payload: [1, 2, 3, 4, 5, 6, 8, 9],
  }
}

export const Increment = () => {
  return {
    type: 'Increment'
  }
}

export const Decrement = () => {
  return {
    type: 'Decrement'
  }
}




