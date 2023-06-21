import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import Login from '@/components/Login';
import { resetAction } from '@/store/actions/rootAction';
import TopBar from '@/components/Layout/TopBar/TopBar';



export default function Home({ posts }: any) {
  const dispatch: any = useDispatch();

  return (
    <></>
  )
}

//https://jsonplaceholder.typicode.com/posts

export async function getStaticProps() { // run at server side- display data in console.
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const allPosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
  let posts = JSON.parse(JSON.stringify(allPosts.data));
  // console.log('allPosts', posts)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}