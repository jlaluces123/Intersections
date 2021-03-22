import Head from 'next/head';

// Components
import '../components/navigation';
import Navigation from '../components/navigation';

export default function Home() {
    return (
        <div className='relative min-h-screen w-full'>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <header className='relative w-full'>
                <Navigation />
            </header>

            <section className='absolute w-full h-screen overflow-hidden'>
                <video
                    className='absolute top-0 left-0 w-full h-full object-cover'
                    autoPlay
                    loop
                    muted
                    src='https://perizazy.sirv.com/Intersection%20Project/IMG-1419.MOV'
                ></video>
                {/* Text in background */}
                <div className='absolute opacity-95 z-10 top-0 left-0 w-full h-full flex justify-center items-center flex-col font-bold text-center bg-white text-black blend-screen'>
                    <h1 className='text-9xl uppercase'>Intersections</h1>
                    <span className='text-3xl'>
                        Documenting my life one intersection at a time
                    </span>
                </div>
            </section>
        </div>
    );
}
