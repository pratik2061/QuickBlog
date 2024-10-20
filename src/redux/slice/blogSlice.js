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


  ],
};

export const blogSlice = createSlice({
  name : 'blog',
  initialState,
  reducers:{
    addBlog : (state,action)=>{
      const data = action.payload
      const blog ={
        id : (state.blogs.length +1),
        title : data.title,
        description : data.description,
      }
      
      state.blogs.push(blog)
    },
    editBlog : (state,action)=>{
      const data = action.payload
      const findItem = state.blogs.find((items)=>items.id === data.id)
      if (findItem) {
        findItem.title = data.title,
        findItem.description = data.description
      }
    },
    removeBlog:(state,action)=>{
      const id = action.payload;
      state.blogs = state.blogs.filter((item)=>item.id !== id);
    }
  }
})

export const { addBlog, removeBlog ,editBlog} = blogSlice.actions;
export default blogSlice.reducer;