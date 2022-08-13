import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { inputField, messageField, fetchPosts} from './Actions/action';



const mapStateToProps = (state) => {
  return {
    count: state.count,

    message: state.message,

    posts: state.posts

  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    
    inputField: (number) => dispatch(inputField(number)),

    fetchPosts: (textdata) => dispatch(fetchPosts(textdata)),

    messageField: () => dispatch(messageField())
  }
}
const App = (props) => {

  const { posts,fetchPosts, inputField, messageField, message, count } = props

  const handleChange = (event) => inputField(event.target.value)

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    if(count===0){
      return null
    }
    else{
    fetchPosts(posts);
    console.log(posts);
    messageField(message);
    console.log(message);
    }
  }

  return (
    <div className='section-center'>
      <h1>{message}</h1>
      <form className='lorem-form' onSubmit={handleSubmit} >
        <label htmlFor='amount'>POSTS:</label>
        <input className='input'
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={handleChange}
        />
        <button className='btn'>GET DATA</button>
      </form>
      <div className='lorem-text'>
      {posts.filter(data=>data.id===count).map(newData=><p key={newData.id}>{newData.para}</p>
      )}
    
    
      </div>
    </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
