import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <PostDetail></PostDetail>
      <h1>Hello World</h1>
      <District name="Saiyadul Amin Akhand" spacial="Mathematicial"></District>
      <District name="Asadul Amin Akhand" spacial="Allaher prio Bandda"></District>
      <District name="Sonia Akter" spacial="Nurse, House maker"></District>

    </div>
  );
}
function PostDetail() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Posts title={post.title} body={post.body} key={post.id}></Posts>)
      }
    </div>
  )
}

function Posts(props) {
  return (
    <div style={{ backgroundColor: 'blue', border: '2px solid red', margin: '20px', padding: '20px', color: 'white' }}>
      <h4>Title: {props.title}</h4>
      <p>{props.body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'Red',
  color: 'white',
  margin: '20px',
  padding: '20px'
}
function District(props) {
  const [power, setPower] = useState(1)

  const powerBuild = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h1>Name:{props.name}</h1>
      <h4>Spacially: {props.spacial}</h4>
      <h3>Power: {power} </h3>
      <button onClick={powerBuild}>Set The Power</button>
    </div>
  )
}
export default App;
