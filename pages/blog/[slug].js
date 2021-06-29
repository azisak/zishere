import React from 'react'
import GhostContentAPI from '@tryghost/content-api'
import { useRouter } from 'next/dist/client/router';
import moment from 'moment'
import Header from "../../components/Header"


export default function BlogPost(props) {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <div className="text-white">Loading...</div>
        )
    }
    const { post } = props;
    const { title, html, published_at, reading_time} = post;
    const publishedDate = moment(published_at).format("ddd, MMMM D, YYYY")
    return (
        <div>
            <Header title={title} />
            <main className="w-1/2 mx-auto">
                <h1 className="text-4xl">{title}</h1>
                <span>{publishedDate} - {reading_time}</span>
                <div className="prose prose-green text-white max-w-none" dangerouslySetInnerHTML={{__html:html}}/>
            </main>
        </div>
    )
}

async function getPost(slug) {
    const { API_KEY, API_HOST } = process.env;
    const api = new GhostContentAPI({
        url: API_HOST,
        key: API_KEY,
        version: "v3"
    });
    return await api
        .posts
        .read({ slug })
        .then(post => post)
        .catch((err) => {
            console.error(err);
        });

}

export function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const post = await getPost(params.slug);
    return {
        props: {
            post
        }
    }
}