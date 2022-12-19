import { useEffect, useState } from 'react';
import './App.css';
import { LoaderHoC } from './components/LoaderHoC/LoaderHoC';
import { PostList } from './components/PostList/PostList';
import { UserList } from './components/UserList';

const UserListWithLoader = LoaderHoC(UserList);
const PostListWithLoader = LoaderHoC(PostList);

function App() {
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [users, setUsers] = useState(null);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [posts, setPosts] = useState(null);

  const fetchUsers = async () => {
    setIsLoadingUsers(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
    setIsLoadingUsers(false);
  }

  const fetchPosts = async () => {
    setIsLoadingPosts(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data);
    setIsLoadingPosts(false);
  }

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Users Database
        <UserListWithLoader
          data={users}
          isLoading={isLoadingUsers}
          loader={<p>Loading user data....</p>}
          errorText={<p>No User Data found!</p>}
        />
        <PostListWithLoader
          data={posts}
          isLoading={isLoadingPosts}
          loader={<p>Loading post data....</p>}
          title="Available Posts for today"
        />
        <PostList data={posts} />
      </header>
    </div>
  );
}

export default App;
