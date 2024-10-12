import SideNav from "./SideNav";

const AdminProductDashboard = () => {
  const products = [
    {
      image: "image1.jpg",
      name: "Apple Watch Series 4",
      category: "Digital Product",
      price: "$690.00",
      qty: 63,
    },
    {
      image: "image2.jpg",
      name: "Microsoft Headsquare",
      category: "Digital Product",
      price: "$190.00",
      qty: 13,
    },
    {
      image: "image3.jpg",
      name: "Women's Dress",
      category: "Fashion",
      price: "$640.00",
      qty: 635,
    },
    {
      image: "image4.jpg",
      name: "Samsung A50",
      category: "Mobile",
      price: "$400.00",
      qty: 67,
    },
    {
      image: "image5.jpg",
      name: "Camera",
      category: "Electronic",
      price: "$420.00",
      qty: 52,
    },
  ];
  return (
    <div className="flex bg-[#F9F2F2]">
        <SideNav/>
        <div className="w-[10%]"></div>
      <div className="w-[90%] p-8 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Product Stock</h1>
          <div className="flex items-center">
            <p className="mr-4">Welcome Jubril</p>
            <input
              type="text"
              placeholder="Search Product Name"
              className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#845649]"
            />
          </div>
        </div>

        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-[#f4f4f4] text-left">
              <th className="p-4">Image</th>
              <th className="p-4">Product Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Qty</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="p-4">{product.name}</td>
                <td className="p-4">{product.category}</td>
                <td className="p-4">{product.price}</td>
                <td className="p-4">{product.qty}</td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <button className="bg-green-500 text-white p-2 rounded-lg">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded-lg">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductDashboard;
