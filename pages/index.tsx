import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Homepage from '../component/pages/home/Homepage'
import dataLayer from './../data-laye'

const inter = Inter({ subsets: ['latin'] })
export interface home {
  page: []
}

export default function Home({ page }: home) {
  return (
    <>
      <Homepage page={page} />
    </>
  )
}

export async function getStaticProps({ params, preview = true, previewData }: any) {

  let getData = await dataLayer.getPostData()
  let news = await getData.data
  if (getData)
    return {
      props: {
        page: news || [],

      },
      revalidate: 60,
    }


}
