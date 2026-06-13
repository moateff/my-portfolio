document.addEventListener("DOMContentLoaded", () => {
	const links = document.querySelectorAll("#nav-links a");
	const sections = document.querySelectorAll(".portfolio-section");
	const brandLogo = document.getElementById("nav-brand");

	function switchTab(targetId) {
		// Hide all sections and remove explicit active styles from all links
		sections.forEach(section => section.classList.add("hidden"));
		links.forEach(link => {
			link.classList.remove("font-bold", "text-teal-900");
		});

		// Show the chosen view targeting its matching ID
		const targetSection = document.getElementById(targetId);
		if (targetSection) {
			targetSection.classList.remove("hidden");
			window.scrollTo(0, 0); // instantly scroll to the top of the freshly mounted view
		}

		// Apply visual active status back to navigation link UI item
		const activeLink = Array.from(links).find(link => link.getAttribute("href") === `#${targetId}`);
		if (activeLink) {
			activeLink.classList.add("font-bold", "text-teal-900");
		}
	}

	// Handle standard menu clicks
	links.forEach(link => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			const targetId = link.getAttribute("href").substring(1);
			switchTab(targetId);
		});
	});

	// Handle logo click to return back to home (About) view
	brandLogo.addEventListener("click", () => {
		switchTab("about");
	});
});