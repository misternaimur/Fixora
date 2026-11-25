"use client";

import type React from "react";
import { useEffect, useState } from "react";

export function scrollToHash(
	e: React.MouseEvent<HTMLAnchorElement>,
	href: string
) {
	if (!href.startsWith("#")) return;
	const target = document.getElementById(href.slice(1));
	if (!target) return;

	e.preventDefault();
	target.scrollIntoView({ behavior: "smooth", block: "start" });
	window.history.pushState(null, "", href);
}

export function useScroll(downThreshold = 24, upThreshold?: number) {
	const [scrolled, setScrolled] = useState(false);
	const scrollUpThreshold = upThreshold ?? Math.floor(downThreshold / 3);

	useEffect(() => {
		let rafId: number | null = null;

		const updateScrollState = () => {
			rafId = null;
			const y = window.scrollY;
			// Hysteresis: different thresholds for up/down to prevent flickering
			setScrolled((prev) => (prev ? y > scrollUpThreshold : y > downThreshold));
		};

		const handleScroll = () => {
			if (rafId !== null) return;
			rafId = window.requestAnimationFrame(updateScrollState);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		updateScrollState();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (rafId !== null) {
				window.cancelAnimationFrame(rafId);
			}
		};
	}, [downThreshold, scrollUpThreshold]);

	return scrolled;
}

export function useActiveSection(
	sectionIds: readonly string[],
	offset = 120
) {
	const [activeId, setActiveId] = useState<string>("");

	useEffect(() => {
		let rafId: number | null = null;

		const updateActiveSection = () => {
			rafId = null;
			let current = "";

			for (const id of sectionIds) {
				const element = document.getElementById(id);
				if (!element) continue;

				const rect = element.getBoundingClientRect();
				if (rect.top <= offset && rect.bottom > offset * 0.5) {
					current = id;
				}
			}

			setActiveId((prev) => (prev === current ? prev : current));
		};

		const handleScroll = () => {
			if (rafId !== null) return;
			rafId = window.requestAnimationFrame(updateActiveSection);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		updateActiveSection();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (rafId !== null) {
				window.cancelAnimationFrame(rafId);
			}
		};
	}, [sectionIds, offset]);

	return activeId;
}
