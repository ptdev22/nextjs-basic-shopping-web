import styles from "@/styles/Products.module.css"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"


export async function getStaticProps(){
    const res = await fetch("https://dummyjson.com/products?limit=12")
    const data = await res.json()
    // console.log(data)
    return{
        props:{products:data.products}
    }
}
export default function Products({products}){
    return (
        <>
            <Head>
                <title>Products page</title>
                <meta name="keyword" content="ขายของ,ขายเสื้อผ้า" />
            </Head>
            <h1>Products</h1>

            <div className={styles.container}>
                {products.map(item=>(
                    <div key={item.id}>
                        <Link href={'/products/'+item.id}>
                            <h2 className={styles.title}>{item.title}</h2>
                            <Image src={item.thumbnail} width={300} height={300} alt={item.title}/>
                        </Link>
                    </div>
                ))}
            </div>
        </>
      )
}