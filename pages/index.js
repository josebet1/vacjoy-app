import * as React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from "../components/Card";
import { Select, MenuItem } from '@material-ui/core';
import Table from "../components/Table";

function Home({ sites }) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(0);
  const [age, setAge] = React.useState('');

  // React.useEffect(() => {
  //   (async () => {
  //     const res = await fetch('https://vacjoy.jose.workers.dev/fusion');
  //     const json = await res.json();
  //     setData(json);
  //     setLoading(false);
  //   })();
  // }, []);

  return (
    <div>
      <h1>Helo welcome to the internet</h1>
      <hr />
      <Table data={sites} />
      <Select sites=
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={(evt) => setAge(evt.target.value)}
      >
        {
          sites.map((x) => <MenuItem key={x.id} value={x.city}>{x.city}</MenuItem>)
        }
        <MenuItem value={1}>Ten</MenuItem>
        <MenuItem value={2}>Twenty</MenuItem>
        <MenuItem value={3}>Thirty</MenuItem>
      </Select>
      {sites.filter((x) => x.city === age).map((x) => <Card key={x.id} site={x}/>)}
    </div>
  )

  // return  <div>Next stars: {JSON.stringify(json)}</div>
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://vacjoy.jose.workers.dev/fusion');
  const sites = (await res.json()).data;
  return { sites };
}

export default Home
