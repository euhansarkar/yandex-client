/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const categories = [
  { id: "electronics", name: "Electronics" },
  { id: "apparel", name: "Apparel" },
  { id: "home-goods", name: "Home Goods" },
];

function CategoriesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleCategoryClick = (id: string) => {
    // Update the URL with the category id
    const newSearchParams = new URLSearchParams(searchParams as any);
    newSearchParams.set("category", id);

    // Push the updated URL
    router.push(`?${newSearchParams.toString()}`, { scroll: false });

    // Scroll to the category
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Get the category id from the search params
    const categoryId = searchParams.get("category");
    if (categoryId) {
      // Scroll to the specific category
      document
        .getElementById(categoryId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar with categories */}
      <div style={{ marginRight: "20px" }}>
        <h3>Categories</h3>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              style={{ cursor: "pointer", marginBottom: "10px" }}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Content area */}
      <div style={{ flex: 1 }}>
        {categories.map((category) => (
          <div
            key={category.id}
            id={category.id}
            style={{
              height: "300px",
              border: "1px solid #ddd",
              marginBottom: "20px",
              padding: "10px",
            }}
          >
            <h2>{category.name}</h2>
            <p>Content for {category.name}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CategoriesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoriesContent />
    </Suspense>
  );
}
