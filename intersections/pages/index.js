import Head from 'next/head';

// Components
import '../components/navigation';
import Navigation from '../components/navigation';

export default function Home() {
    return (
        <div className='bg-black min-h-screen'>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Navigation />

            <h1 className='text-2xl'>Hello World</h1>
        </div>
    );
}
