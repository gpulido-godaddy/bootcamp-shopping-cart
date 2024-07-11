/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import Link from 'next/link';

export const IndexPage = (props) => (
  <div>
    <Head title='Home'/>
    <h1>Bootcamp 2024</h1>
    <div>
    <Link href="/cart">View cart</Link>
    </div>
    <div>
    <Link href="/shop">View shop</Link>
    </div>
    <div>
    <Link href="/aboutus">Learn about our company!</Link>
    </div>
  </div>
);

export default IndexPage