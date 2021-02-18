import Head from "next/head";
import React from "react";
import Button from "../compponents/Button";
import Eyecatch from "../compponents/Eyecatch/Eyecatch";
import Header from "../compponents/Header/Header";
import Test from "../compponents/Test";
import styles from "../styles/Home.module.css";

/**
 *
 * pages/index.tsx = https://risema.app/
 *
 * pages/about.tsx = https://risema.app/about
 *
 * pages/posts/ = https://risema.app/posts
 *
 * pages/posts/ = https://risema.app/posts/1
 *
 */

export default function Home() {
  return (
    <div>
      <Header />
      <Eyecatch />
    </div>
  );
}
