import Post from "../_component/Post";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import style from "./home.module.css";
import React from "react";

const page = () => {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
      </TabProvider>
    </main>
  );
};

export default page;
