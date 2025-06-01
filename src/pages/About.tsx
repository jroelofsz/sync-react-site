export default function About() {
    return (
        <div className="container text-white text-center">
            <h1 className='page-header'>About</h1>
            <div className="container">
                <h2 className='p-1'>Lebubble Scripts</h2>
                <p>
                    Thank you for checking us out! Below is a brief overview of who we are and what we do. We're excited to share our journey with you and hope you find our work as interesting as we do.
                </p>
                <br />
                <hr />
                <h2 className='p-1 about-section'>Developers</h2>
                <hr />

                <div className="row">
                    <div className="col-md-6 d-inline">
                        <h2>lebubble</h2>
                        <a href='/' rel='noopener noreferrer' className='text-decoration-none text-white'>
                            <img src='../images/lbs_scripts_logo_icon_96x96.png' alt="Lebubble Logo" className="rounded-circle mb-4" style={{ width: '96px', height: '96px' }} />
                        </a>
                        <a href='https://github.com/Project-Sloth' target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
                            <img src='../images/project_sloth_logo.png' alt='Project Sloth Logo' className="rounded-circle mb-4" style={{ width: '96px', height: '96px' }} />
                        </a>
                    </div>
                    <div className="col-md-6">
                        <p>
                            I'm a web developer who loves turning ideas into real digital experiences. I started out with small projects that eventually sparked a passion for building things that not only work smoothly but also feel personal. I work a lot with React, TypeScript, and full-stack development, always aiming for solutions that are practical, scalable, and friendly to users.
                            <br /><br />
                            I've spent years learning how to design clean, intuitive interfaces and build robust systems that operate seamlessly behind the scenes. This journey has taught me to appreciate the blend of art and logic in coding – solving complex problems with elegant solutions.
                            <br /><br />
                            My goal is to create digital experiences that meet real needs while connecting with people on a human level. Every line of code is a step towards making that vision a reality.
                            <br /><br />
                            My current focus in on developing custom scripts and contributing to Project Sloth.
                            <br /><br />

                            <br /><br />
                            <em style={{ fontSize: '0.8rem' }}>lebubble</em>
                        </p>
                    </div>
                    <br />
                </div>
                <div>
                    <hr />
                    <h2 className='p-1 about-section'>Partners</h2>
                    <hr />
                </div>
                <div className='row'>
                    <div className='col-md-6 d-inline'>
                        <h2>kxirby</h2>
                        <a href='google.com' target='_blank' rel='noopener noreferrer' className='text-decoration-none text-white'>
                            <img src="../images/kxirby_logo_96x96.png" alt='kxirby logo' className="rounded-circle mb-4" style={{ width: '96px', height: '96px' }} />
                        </a>
                    </div>
                    <div className='col-md-6'>
                        <p>
                            Hey, I’m the owner of Sync RP, the main server that this dev team works on. I’ve been playing FiveM for a long time now and have always had a deep love for video games and online communities. Over the years, I’ve owned and managed multiple successful and populated servers, which has given me a good grip on what works and what doesn’t when it comes to creating a stable and enjoyable RP experience. Sync RP is my current focus, and it's where I’m putting all my energy into building something long-term and community-driven.
                            <br /><br />
                            Outside of running Sync, I also help other people with server setups—from full builds to troubleshooting, resource optimization, and helping get new communities off the ground. I’ve worked with a lot of server owners behind the scenes, helping them get things running right. On top of that, I’m also involved with content creation and help stream and promote FiveM content, both for Sync and other projects. Whether it’s community building, development, or just boosting visibility, I try to be hands-on wherever I can add value.
                            <br /><br />
                            <em style={{ fontSize: '0.8rem' }}>kxirby</em>
                        </p>
                    </div>
                </div>


                <br />

            </div>
            <hr />
        </div>
    )
}