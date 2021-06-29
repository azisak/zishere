import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import profileImage from "../public/me.jpg"

export default function Home() {
    return (
        <div>
            <Header/>
            <main className="h-screen flex items-center justify-center prose max-w-none">
                <div className="border-cyan border-4 rounded-full p-2 w-64 h-64 mx-8">
                    <Image placeholder="blur" alt="owner's profile picture" className="rounded-full" width={500} height={500} src={profileImage}></Image>
                </div>
                <div className="inline-block">
                    <div className="text-xl ">Nice to meet you 👋</div>
                    <div className="text-xl ">My name is</div>
                    <div className="text-cyan text-6xl my-4">Azis Adi Kuncoro</div>
                    <div className="my-4 text-4xl">I build backend services and data platform</div>
                    <p className="text-xl" style={{ maxWidth: "500px" }}>
                        I&apos;m an Indonesia-based Software Engineer specialized in data realm.
                        Currently, I&apos;m building <a className="text-cyan" href="https://www.linkedin.com/company/pt-bukalapak-com">Bukalapak</a>&apos;s data platform to support analytical or operational use cases.
                    </p>
                </div>
            </main>
        </div>

    )
}
