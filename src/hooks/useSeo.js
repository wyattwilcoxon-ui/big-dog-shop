import { useEffect } from 'react';

/**
 * Sets document.title and meta description for a page.
 * Call at the top of any page component.
 */
export function useSeo(title, description) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = 'description';
        document.head.appendChild(tag);
      }
      tag.content = description;
    }
  }, [title, description]);
}