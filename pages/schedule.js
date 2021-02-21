import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Home({ stars }) {
  return <div>Next stars: {stars}</div>
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Home
