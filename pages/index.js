
import styles from "@/styles/Home.module.css"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="keyword" content="ขายของ,ขายเสื้อผ้า" />
      </Head>
        <div className={styles.container}>
          <h1 className={styles.title} >Home page</h1>
          <Image src="/shopping.svg" width={400} height={300} alt="logo" />
          <p>Welcome</p>
          <Link className={styles.btn} href="/products" >see products</Link>
        </div>
    </>
  )
}
