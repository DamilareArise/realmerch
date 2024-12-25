import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mock from "./../../assets/mock.svg";
import {
  faEdit,
  faTrash,
  faPlus,
  faMinus,
  faTimes,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import SideNav from "./SideNav";
import axios from "axios";

const AdminProductDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [showImageUploadModal, setShowImageUploadModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [allProduct, setAllProduct] = useState([])
  const [products, setProducts] = useState([
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
  ]);

  useEffect(() => {
    axios.get("http://localhost:5000/product/all-products")
    .then((response)=>{
      console.log(response.data);
      setAllProduct(response.data.data)
    })
  }, []);


  const handleQuantityClick = (product) => {
    setSelectedProduct({ ...product });
    setShowQuantityModal(true);
  };

  const handleQuantityChange = (operation) => {
    setSelectedProduct((prevProduct) => ({
      ...prevProduct,
      qty:
        operation === "increment"
          ? prevProduct.qty + 1
          : Math.max(1, prevProduct.qty - 1),
    }));
  };

  const saveQuantity = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.name === selectedProduct.name ? selectedProduct : product
      )
    );
    setShowQuantityModal(false);
  };

  const handleAddProduct = () => {
    const newProduct = {
      image: productImage,
      name: productName,
      category: productCategory,
      price: productPrice,
      qty: 1,
    };
    setProducts([...products, newProduct]);
    setShowAddProductModal(false);
    resetProductForm();
  };

  const resetProductForm = () => {
    setProductImage("");
    setProductName("");
    setProductCategory("");
    setProductPrice("");
  };

  const handleDeleteProduct = (name) => {
    setProducts(products.filter((product) => product.name !== name));
  };

  const handleLocalImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProductImage(URL.createObjectURL(e.target.files[0]));
      setShowImageUploadModal(false);
    }
  };

  const filteredProducts = allProduct.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  

  return (
    <div className="flex bg-[#F9F2F2]">
      <SideNav />
      <div className="hidden md:block md:w-[13%] lg:w-[10%]"></div>
      <div className="md:w-[87%] lg:w-[90%] p-[20px] md:p-8 min-h-screen">
        <div className="flex justify-between gap-[10px] items-start md:items-center mb-6 mt-[38px] /px-[20px] flex-col md:flex-row flex-wrap">
          <h1 className="text-[12px] md:text-xl lg:text-2xl font-bold">
            Product Stock
          </h1>
          
            <div className="flex /flex-col items-center">
              
                <p className="mr-4 text-[10px] md:text-[14px]">Welcome Jubril</p>
                <button
                  className="bg-[#845649] text-[12px] px-[12px] lg:text-[14px] lg:px-[16px] py-[6px] text-white rounded-[12px] mr-4"
                  onClick={() => setShowAddProductModal(true)}
                >
                  Add product
                </button>
                <br className="" />
              
            </div>

          <input
              type="text"
              placeholder="Search Product Name"
              className="border border-gray-300 px-4 py-[4px] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#845649] placeholder:text-[12px] w-[120px] md:w-[200px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>

        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-[#f4f4f4] text-left">
              <th className="p-[4px] md:p-4 text-[10px] md:text-[12px] lg:text-2xl">
                Image
              </th>
              <th className="p-[4px] md:p-4 text-[10px] md:text-[12px] lg:text-2xl">
                Product Name
              </th>
              <th className="p-[4px] md:p-4 text-[10px] md:text-[12px] lg:text-2xl">
                Category
              </th>
              <th className="p-[4px] md:p-4 text-[10px] md:text-[12px] lg:text-2xl">
                Price
              </th>
              <th className="p-[4px] md:p-4 text-[10px] md:text-[12px] lg:text-2xl">
                Qty
              </th>
              <th className="p-[4px] md:p-4 text-[10px] md:text-[12px] lg:text-2xl">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">
                  <img
                    src={product.image}
                    // src={mock}
                    alt={product.name}
                    className="w-[50px] md:w-[64px] h-[50px] md:h-[64px] object-contain rounded-md"
                  />
                </td>
                <td className="p-[4px] md:p-4 text-[8px] md:text-[10px] lg:text-[16px]">
                  {product.name}
                </td>
                <td className="p-[4px] md:p-4 text-[8px] md:text-[10px] lg:text-[16px]">
                  {product.category}
                </td>
                <td className="p-[4px] md:p-4 text-[8px] md:text-[10px] lg:text-[16px]">
                  {product.price}
                </td>
                <td className="p-[4px] md:p-4 text-[8px] md:text-[10px] lg:text-[16px]">
                  {product.quantity}
                </td>
                <td className="p-[4px] md:p-4 text-[8px] md:text-[10px] lg:text-[16px]">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleQuantityClick(product)}
                      className="p-2 rounded-lg border"
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="text-[#646465]"
                      />
                    </button>
                    <button className="p-2 rounded-lg border">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="text-green-500"
                      />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.name)}
                      className="p-2 rounded-lg border"
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-red-500"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Product Modal */}
        {showAddProductModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-[300px] text-center">
              <h2 className="text-xl font-bold mb-4">Add New Product</h2>
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="border p-2 w-full mb-4 rounded"
              />
              <input
                type="text"
                placeholder="Category"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="border p-2 w-full mb-4 rounded"
              />
              <input
                type="text"
                placeholder="Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="border p-2 w-full mb-4 rounded"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
                className="border p-2 w-full mb-4 rounded"
              />
              <button
                className="bg-[#845649] text-white px-4 py-2 rounded-lg mb-4"
                onClick={() => setShowImageUploadModal(true)}
              >
                <FontAwesomeIcon icon={faUpload} className="mr-2" />
                Upload Local Image
              </button>
              {productImage && (
                <img
                  src={productImage}
                  alt="Product Preview"
                  className="w-24 h-24 object-cover mb-4"
                />
              )}
              <button
                onClick={handleAddProduct}
                className="bg-[#845649] text-white px-4 py-2 rounded-lg"
              >
                Add Product
              </button>
              <button
                onClick={() => setShowAddProductModal(false)}
                className="text-gray-500 mt-2 block underline"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Image Upload Modal */}
        {showImageUploadModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-[300px] text-center">
              <h2 className="text-xl font-bold mb-4">Upload Local Image</h2>
              <input
                type="file"
                accept="image/*"
                onChange={handleLocalImageUpload}
                className="mb-4"
              />
              <button
                onClick={() => setShowImageUploadModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Quantity Modal */}
        {showQuantityModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-[300px] text-center">
              <h2 className="text-xl font-bold mb-4">Update Quantity</h2>
              <div className="flex items-center justify-center mb-4">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="p-2 rounded-lg border"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="mx-4">{selectedProduct?.qty}</span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="p-2 rounded-lg border"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <button
                onClick={saveQuantity}
                className="bg-[#845649] text-white px-4 py-2 rounded-lg"
              >
                Save
              </button>
              <button
                onClick={() => setShowQuantityModal(false)}
                className="text-gray-500 mt-2 block underline"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProductDashboard;
