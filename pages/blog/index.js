import React from 'react'
import moment from 'moment';
import Link from "next/link";
import GhostContentAPI from '@tryghost/content-api'
import Header from "../../components/Header"

export default function Blog(props) {
    const { posts } = props;
    
    const postElements = transformPosts(posts);
    return (
        <div className="text-white">
            <Header title="blog" />
            <main className="w-2/3 mx-auto mt-8">
                <h1 className="text-5xl mb-8">Blogs</h1>
                <div className="">
                    {postElements}
                </div>
            </main>
        </div>
    )
}

function transformPosts(rawPosts) {
    return rawPosts.map((post, idx) => {
        const { title, slug, excerpt, reading_time, published_at } = post;
        const publishedDate = moment(published_at).format("ddd, MMMM D, YYYY");
        return (
            <div key={idx} className="mb-8 last:mb-0">
                <h3 className="text-3xl text-cyan">
                    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
                        {title}
                    </Link>
                </h3>
                <span className="text-gray-300">{publishedDate} - {reading_time} min read</span>
                <p className="text-xl">{excerpt}</p>
            </div>
        );

    });
}

async function getPosts() {
    const { API_KEY, API_HOST } = process.env;
    const api = new GhostContentAPI({
        url: API_HOST,
        key: API_KEY,
        version: "v3"
    });
    return api.posts
        .browse({fields: 'title,slug,published_at,excerpt,reading_time', formats: 'plaintext,html'})
        .then((posts) => posts)
        .catch((err) => {
            console.error(err);
    });
}

export async function getStaticProps() {
    const resp = await getPosts();
    return {
        props: {
            posts: resp
        }
    }
}
