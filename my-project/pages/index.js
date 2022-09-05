import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import React, { useEffect, useState } from "react";




export default function Home() {

  const [category, setCategory] = useState("General")


  let requestPath = "localhost:8080/category/find_category?category=" + [category]
  

  return (
    <div>
      <Head>
        <title>MOC News</title>
      </Head>

      {/* <h1>Let's build MOC News!</h1> */}

      { /* Header */ }
      <Header />

      <main className="flex">
    

      { /* Sidebar */ }
     <Sidebar setCategory={setCategory} />
     {category}
      { /* Newsfeed */ }
      <Feed requestPath={requestPath}/>
      {requestPath}
      { /* Widgets */ }

      </main>

    </div>
  )
}


