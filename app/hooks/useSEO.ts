import { useEffect } from "react";

const SITE_URL = "https://bmsolicitor.co";
const SITE_NAME = "BM Solicitor (Pvt) Limited";
const DEFAULT_IMAGE = `${SITE_URL}/favicon.png`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  jsonLd?: Record<string, unknown>;
}

/**
 * Custom hook to set per-page SEO meta tags dynamically.
 * Updates document.title, meta description, OG tags, Twitter cards,
 * canonical URL, and injects page-specific JSON-LD structured data.
 */
export function useSEO({ title, description, path = "/", keywords, jsonLd }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const fullUrl = `${SITE_URL}${path}`;

    // Standard meta
    setMeta("name", "description", description);
    if (keywords) {
      setMeta("name", "keywords", keywords);
    }

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:image", DEFAULT_IMAGE);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:locale", "en_PK");

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", DEFAULT_IMAGE);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // JSON-LD structured data
    const existingLd = document.getElementById("page-jsonld");
    if (existingLd) existingLd.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.id = "page-jsonld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    // Cleanup: remove page-specific JSON-LD on unmount
    return () => {
      const ld = document.getElementById("page-jsonld");
      if (ld) ld.remove();
    };
  }, [title, description, path, keywords, jsonLd]);
}
