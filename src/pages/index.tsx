import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { useDispatch, useSelector } from "react-redux";
import { getSampleData, Increment, Decrement } from "../store/actions/sampleAction";
import { useEffect } from "react";
import axios from 'axios';
import { fetchPosts } from '../store/actions/postAction';
import Login from '@/components/Login';
import DashboardWrapper from '@/components/Dashboard';
import { VinAction } from '@/store/actions/vinAction';
import { VinTableAction } from '@/store/actions/vinTableAction';

// import TopBar from '@/components/Layout/TopBar/TopBar';


export default function Home({ posts }: any) {
  const dispatch: any = useDispatch();
  const sampleListData = useSelector((state: any) => state.sampleData);
  const postListData = useSelector((state: any) => state.postState);
  const { sample } = sampleListData
  // console.log('postListData', postListData)
  // console.log('sampleListData', sampleListData)

  useEffect(() => {
    // dispatch(getSampleData());
    // dispatch(fetchPosts());
    // dispatch(VinAction());
    // dispatch(VinTableAction());
  }, [dispatch]);

  return (
      <Login />
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