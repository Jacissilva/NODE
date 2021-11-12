import Head from 'next/head';

function Home(){
    return (
        <div>
            <Head>
                <title>Home - Celke </title>
                <meta name='robots' content='index/follow' />
                <meta name='description' content='Site de ... sobre ...' />
            </Head>
            <h1>Bem vindo Celke!</h1>
        </div>
    );
};

export default Home;