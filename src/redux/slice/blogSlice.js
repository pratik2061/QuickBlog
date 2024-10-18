import { createSlice } from "@reduxjs/toolkit";

const initialSate = {
  blogs : [
    {
      id:1,
      title : "demo blog",
      description : "i am admin of this quick blog web app."
    },
  ]
}

export const blogSlice = createSlice({
  name : 'blog',
  initialSate,
  reducers:{

  }
})

export default blogSlice.reducer;