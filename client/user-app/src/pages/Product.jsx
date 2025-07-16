// ✅ pages/Product.jsx
export default function Product() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Our Product Catalog</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="p-4 border rounded shadow">T-Shirts - Your design, our quality</div>
        <div className="p-4 border rounded shadow">Hoodies - Warm, stylish, custom</div>
        <div className="p-4 border rounded shadow">Tote Bags - Print anything</div>
        <div className="p-4 border rounded shadow">Caps - Perfect for branding</div>
      </div>
    </div>
  );
}
