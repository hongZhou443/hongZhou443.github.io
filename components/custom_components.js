class Header extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header id="header">
                <a href="index.html" class="logo"><strong>Hong Zhou</strong> Northwestern University</a>
                <ul class="icons">
                    <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                    <li><a href="#" class="icon brands fa-snapchat-ghost"><span class="label">Snapchat</span></a></li>
                    <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                    <li><a href="#" class="icon brands fa-medium-m"><span class="label">Medium</span></a></li>
                </ul>
            </header>
        `;
    }
}

class SideBar extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
            <div id="sidebar">
				<div class="inner">

					<!-- Search -->
						<section id="search" class="alt">
							<form method="post" action="#">
								<input type="text" name="query" id="query" placeholder="Search" />
							</form>
						</section>

					<!-- Menu -->
						<nav id="menu">
							<header class="major">
								<h2>Menu</h2>
							</header>
							<ul>
							    <li><a href="index.html">Homepage</a></li>
								<li><a href="resume_pg.html">Resume</a></li>
								<li>
									<span class="opener">Projects</span>
									<ul>
										<li><a href="AAPL_Stock_Model_proj.html">AAPL Stock Model</a></li>
										<li><a href="under_construction.html">CHILE Web Scrape</a></li>
										<li><a href="projects_all.html">See all</a></li>
									</ul>
								</li>
								<li>
									<span class="opener">Affiliated Organizations</span>
									<ul>
										<li><a href="organizations_all.html">See all</a></li>
									</ul>
								</li>
								<li>
									<span class="opener">LeetCode Solutions</span>
									<ul>
										<li><a href="#">See all</a></li>
									</ul>
								</li>
								
							</ul>
						</nav>

                    <!-- Section -->
                        <section>
                            <header class="major">
                                <h2>Featured Posts</h2>
                            </header>
                            <div class="mini-posts">
                                <article>
                                    <a href="#" class="image"><img src="images/pic07.jpg" alt="" /></a>
                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                                </article>
                            </div>
                            <ul class="actions">
                                <li><a href="#" class="button">More</a></li>
                            </ul>
                        </section>

                    <!-- Section -->
                        <section>
                            <header class="major">
                                <h2>Get in touch</h2>
                            </header>
                            <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul class="contact">
                                <li class="icon solid fa-envelope"><a href="#">hongzhou221@gmail.com</a></li>
                                <li class="icon solid fa-phone">(425) 236-7362</li>
                            </ul>
                        </section>

                    <!-- Footer -->
                        <footer id="footer">
                            <p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                        </footer>

                </div>
            </div>
            `;
    }
}

customElements.define('header-component', Header);
customElements.define('sidebar-component', SideBar);