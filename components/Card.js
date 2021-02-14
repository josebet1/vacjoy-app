import * as React from 'react';

export default function Card({ site }) {
  return (
    <h1>{site.provider} {site.city}</h1>
  )
}
