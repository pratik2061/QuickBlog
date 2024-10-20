import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: 1,
      title: "demo blog",
      description: "i am admin of this quick blog web app.",
    },
    {
      id: 2,
      title: "Last step",
      description: "Ending of the quick blog project.",
    },
    {
      id: 3,
      title: "Ready to jump",
      description:
        "Ready for the big project and to improve my skills in react.With worthy project like appointment booking web app",
    },
    {
      id: 4,
      title: "Ready to jump",
      description:
        "Ready for the big project and to improve my skills in react.With worthy project like appointment booking web app",
    },
  ],
};

export const blogSlice = createSlice({
  name : 'blog',
  initialState,
  reducers:{
    addBlog : (state,action)=>{
      const blog ={
        id : (state.blogs.length +1),
        title : action.payload,
        description : action.payload,
      }
      state.blogs.push(blog)
    },
    editBlog : (state,action)=>{

    },
    removeBlog:(state,action)=>{
      const id = action.payload;
      state.blogs = state.blogs.filter((item)=>item.id !== id);
    }
  }
})

export const { addBlog, removeBlog ,editBlog} = blogSlice.actions;
export default blogSlice.reducer;