
import styles from "@/styles/About.module.css"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="keyword" content="ขายของ,ขายเสื้อผ้า" />
      </Head>
        <div className={styles.container}>
          <h1 className={styles.title} >About page</h1>
          <Image src="/about.svg" width={400} height={400} alt="logo" />
          <Link className={styles.btn} href="/products" >see products</Link>
        </div>
    </>
  )
}
