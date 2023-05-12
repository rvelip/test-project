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
    <>
      <Login />
      {/* <DashboardWrapper /> */}
      {/* <nav className='bg-slate-950 flex justify-between text-white'>
        <img src='https://fastly.picsum.photos/id/518/200/200.jpg?hmac=nY2cAnZ0_ItWhhAsJ_XL3RsNkDo7_zobodK8FWIoCDM' className='h-20 px-3 py-4' />
        <ul className='px-28 py-4 flex space-x-11 justify-end'>
          <li > Home </li>
          <li >Abouhhhhhhhhhhhhhhhhhhhht</li>
          <li > Contact   </li>
          <li >Login In</li>
        </ul>
      </nav> */}
      {/* <div className='bg-black text-white  sm:bg-red-900 md:bg-green-950 lg:bg-blue-950 xl:bg-amber-950 xl:py-20 px-20'>
        My self Ramchandra Kuiro velip
      </div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">11</div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400">22</div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">33</div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400">44</div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-500">55</div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-400">666</div>
      </div> */}
      {/* <h1 classNameNameName="text-center text-2xl font-extrabold">
        Hello world! {process.env.NEXT_PUBLIC_ANALYTICS_ID}<br />
        hiiii {process.env.NEXT_PUBLIC_DB_HOST}
      </h1> */}
      {/*  Load home page components-slider, categories and products - similar to home page*/}
      {/* 
      <h3>{JSON.stringify(sample)}</h3>

      <button onClick={() => dispatch(Increment())}>
        <b >Increment</b>
      </button>
      <p>Vaule:{sampleListData.counter}</p>
      <button onClick={() => dispatch(Decrement())}>
        <b>Decrement</b>
      </button>

      {postListData.posts.map((post: any) => (
        <p key={post.id}> {post.title} </p>
      ))} */}
    </>


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