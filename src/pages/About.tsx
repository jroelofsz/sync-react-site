export default function About() {
    return (
        <div className="container text-white text-center">
            <h1 className='page-header'>About</h1>

            <div className="container">
                <hr />
                <h2 className='p-1'>Developers</h2>
                <hr />
                <a href='/' rel='noopener noreferrer' className='text-decoration-none text-white logo-link'>
                    <img src='../images/lbs_scripts_logo_icon_96x96.png' alt="Lebubble Logo" className="rounded-circle mb-4" style={{ width: '96px', height: '96px' }} />
                </a>
                <h2>lebubble</h2>
                <br />
                <p>
                    I'm a web developer who loves turning ideas into real digital experiences. I started out with small projects that eventually sparked a passion for building things that not only work smoothly but also feel personal. I work a lot with React, TypeScript, and full-stack development, always aiming for solutions that are practical, scalable, and friendly to users.
                    <br /><br />
                    I've spent years learning how to design clean, intuitive interfaces and build robust systems that operate seamlessly behind the scenes. This journey has taught me to appreciate the blend of art and logic in coding – solving complex problems with elegant solutions.
                    <br /><br />
                    My goal is to create digital experiences that meet real needs while connecting with people on a human level. Every line of code is a step towards making that vision a reality.
                    <br /><br />
                    <em style={{ fontSize: '0.8rem' }}>lebubble</em>
                </p>
                <hr />
                <h2 className='p-1'>Partners</h2>
                <hr />
                <a href='google.com' target='_blank' rel='noopener noreferrer' className='text-decoration-none text-white logo-link'>
                    <img src="../images/kxirby_logo_96x96.png" alt='kxirby logo' className="rounded-circle mb-4" style={{ width: '96px', height: '96px' }} />
                </a>
                <h2>kxirby</h2>
                <br />
                <p>
                    Hey, I’m the owner of Sync RP, the main server that this dev team works on. I’ve been playing FiveM for a long time now and have always had a deep love for video games and online communities. Over the years, I’ve owned and managed multiple successful and populated servers, which has given me a good grip on what works and what doesn’t when it comes to creating a stable and enjoyable RP experience. Sync RP is my current focus, and it's where I’m putting all my energy into building something long-term and community-driven.
                    <br /><br />
                    Outside of running Sync, I also help other people with server setups—from full builds to troubleshooting, resource optimization, and helping get new communities off the ground. I’ve worked with a lot of server owners behind the scenes, helping them get things running right. On top of that, I’m also involved with content creation and help stream and promote FiveM content, both for Sync and other projects. Whether it’s community building, development, or just boosting visibility, I try to be hands-on wherever I can add value.
                    <br /><br />
                    <em style={{ fontSize: '0.8rem' }}>kxirby</em>
                </p>
            </div>
            <hr />
        </div>
    )
}