import React from 'react'
import moment from 'moment';
import Link from "next/link";
import GhostContentAPI from '@tryghost/content-api'
import Header from "../../components/Header"

export default function Blog(props) {
    const { posts } = props;

    const postElements = transformPosts(posts);
    return (
        <div>
            <Header title="blog" />
            <main className="w-2/3 mx-auto mt-8 prose max-w-none">
                <h1 className=" mb-8">Blogs</h1>
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
            <div key={idx} className="mb-16 last:mb-0">
                <Link href="/blog/[slug]" as={`/blog/${slug}`}>
                    <a style={{textDecoration: 'none'}}>
                        <div className="text-3xl mb-2 text-cyan">
                            {title}
                        </div>
                    </a>
                </Link>
                <span className="">{publishedDate} - {reading_time} min read</span>
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
        .browse({ fields: 'title,slug,published_at,excerpt,reading_time', formats: 'plaintext,html' })
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
