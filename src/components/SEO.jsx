import { useEffect } from "react";
import { SITE } from "@/config/site.config";

const OG_TYPE = "website";
const TWITTER_CARD = "summary_large_image";

function setTag(selector, attr, key, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Per-page SEO — <title>, description, canonical, OpenGraph, Twitter.
export default function SEO({ title, description, path }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
    const desc = description || SITE.defaultDescription;
    const url = path === "/" ? SITE.baseUrl : `${SITE.baseUrl}${path}`;

    document.title = fullTitle;

    setTag('meta[name="description"]', "name", "description", desc);
    setTag('meta[property="og:title"]', "property", "og:title", fullTitle);
    setTag('meta[property="og:description"]', "property", "og:description", desc);
    setTag('meta[property="og:type"]', "property", "og:type", OG_TYPE);
    setTag('meta[property="og:url"]', "property", "og:url", url);
    setTag('meta[property="og:site_name"]', "property", "og:site_name", SITE.name);
    setTag('meta[name="twitter:card"]', "name", "twitter:card", TWITTER_CARD);
    setTag('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setTag('meta[name="twitter:description"]', "name", "twitter:description", desc);
    setLink("canonical", url);
  }, [title, description, path]);

  return null;
}