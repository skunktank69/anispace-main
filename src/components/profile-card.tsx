"use client";

export default function ProfileCardGrid({ items, CardComponent }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
      {items.map((item) => (
        <CardComponent key={item.providerId} anime={item} />
      ))}
    </div>
  );
}
