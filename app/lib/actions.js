'use server';

import { unstable_noStore as noStore } from 'next/cache';

const domain = 'https://jsonplaceholder.typicode.com';

export async function getUserList() {
  noStore();
  try {
    const url = `${domain}/users`;
    console.log('getUserList URL ', url)
    const req = await fetch(url, { 
      method: "GET", 
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log('[ERR] Get User List', error);
  };
}