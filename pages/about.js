import React from 'react'
import Header from '../components/Header'

export default function about() {
    return (
        <div>
            <main className="h-screen flex items-center justify-center">
                <div className="border-cyan bg-navy border-4 rounded-full p-2 w-64 h-64 mx-8">
                    <img className="rounded-full" src="https://zishere.net/images/profile.jpg"></img>
                </div>
                <div className="inline-block">
                    <div className="text-xl text-white">Nice to meet you 👋</div>
                    <div className="text-xl text-white">My name is</div>
                    <div className="text-cyan text-6xl my-4">Azis Adi Kuncoro</div>
                    <div className="my-4 text-gray-300 text-4xl">I build backend services and data platform</div>
                    <p className="text-gray-300 text-xl" style={{ maxWidth: "500px" }}>
                        I'm an Indonesia-based Software Engineer specialized in data realm.
                        Currently, I'm building <a className="text-cyan" href="https://www.linkedin.com/company/pt-bukalapak-com">Bukalapak</a>'s data platform to support analytical or operational use cases.
                    </p>
                </div>
            </main>
        </div>

    )
}
