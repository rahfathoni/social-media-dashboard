'use server';

import { unstable_noStore as noStore } from 'next/cache';

const domain = 'https://jsonplaceholder.typicode.com';

export async function getUserList() {
  noStore();
  try {
    const url = `${domain}/users`;
    console.log('getUserList URL ', url);
    const req = await fetch(url, { 
      method: "GET", 
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log('[ERR] Get User List', error);
  }
}

export async function getUserProfile(id) {
  noStore();
  try {
    const url = `${domain}/users/${id}`;
    console.log('getUserProfile URL ', url);
    const req = await fetch(url, { 
      method: "GET", 
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log('[ERR] Get User Profile', error);
  }
}

export async function getUserAlbums(id) {
  noStore();
  try {
    const url = `${domain}/users/${id}/albums`;
    console.log('getUserAlbums URL ', url);
    const req = await fetch(url, { 
      method: "GET", 
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log('[ERR] Get User Albums', error);
  }
}

export async function getUserPosts(id) {
  noStore();
  try {
    const url = `${domain}/users/${id}/posts`;
    console.log('getUserPosts URL ', url);
    const req = await fetch(url, { 
      method: "GET", 
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log('[ERR] Get User Posts', error);
  }
}

export async function getPostComment(postId) {
  noStore();
  try {
    const url = `${domain}/posts/${postId}/comments`;
    console.log('getPostComment URL ', url);
    const req = await fetch(url, { 
      method: "GET", 
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log('[ERR] Get Post Comment', error);
  }
}

export async function getPhotoAlbum(albumId) {
  noStore();
  try {
    const url = `${domain}/albums/${albumId}/photos`;
    console.log('getPhotoAlbum URL ', url);
    const req = await fetch(url, { 
      method: "GET", 
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log('[ERR] Get Photo Album', error);
  }
}

export async function postNewPost(data) {
  noStore();
  try {
    const url = `${domain}/posts`;
    const req = await fetch(url, { 
      method: 'POST',
      body: JSON.stringify({
        title: data.title,
        body: data.body,
        userId: data.id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log('[ERR] Post New Post', error);
  }
}