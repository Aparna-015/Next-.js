export default function ProductDetailLayout({ children }) {
  return (
    <div className="product-layout-container">
      {/* Specific banner or sidebar just for product pages */}
      <aside className="bg-gray-100 p-4">Product Sidebar / Filter</aside>

      {/* The actual product [id] page content will render here */}
      <main>{children}</main>
      <h1>Product Layout</h1>
    </div>
  );
}