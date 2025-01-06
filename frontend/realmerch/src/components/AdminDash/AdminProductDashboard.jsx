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
import { useFormik } from "formik";
import * as Yup from "yup";

const AdminProductDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [showImageUploadModal, setShowImageUploadModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productImage, setProductImage] = useState("");
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);


  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    axios.get("https://realmerch.onrender.com/product/all-products").then((response) => {
      console.log(response.data);
      setAllProduct(response.data.data);
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      price: "",
      quantity: "",
      image: "",
    },

    onSubmit: (values) => {
      setloading(true);

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("category", values.category);
      formData.append("price", values.price);
      formData.append("quantity", values.quantity);
      formData.append("image", values.image);
      // console.log(formData);
    
      if (isEditing) {
        // Edit product
        axios
          .put(`https://realmerch.onrender.com/product/update-product/${editingProductId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response.data);
            setloading(false);
            closeModal();
            loadProducts();
          })
          .catch((error) => {
            console.error(error);
            setloading(false);
          });
      } else {
        // Add product
        
        axios
          .post("https://realmerch.onrender.com/product/add-product", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response.data);
            setloading(false);
            setShowAddProductModal(false);
            setProductImage("");
            formik.resetForm();
            loadProducts();
          })
          .catch((error) => {
            console.error(error);
            setloading(false);
          });
      }
    },
    

    validationSchema: Yup.object({
      name: Yup.string().required("Product Name is required"),
      category: Yup.string().required("Category is required"),
      price: Yup.string().required("Price is required"),
      quantity: Yup.string().required("Quantity is required"),
      image: Yup.string().required("Image is required"),
    }),
  });

  const handleQuantityClick = (index) => {
    console.log(allProduct[index]);
    setSelectedProduct(allProduct[index]);
    setShowQuantityModal(true);

  };
    
  const handleQuantityChange = (operation) => {
    setSelectedProduct((prevProduct) => ({
      ...prevProduct,
      quantity:
        operation === "increment"
          ? prevProduct.quantity + 1
          : Math.max(1, prevProduct.quantity - 1),
    }));
  };

  const saveQuantity = () => {
    const updatedProduct = { ...selectedProduct, quantity: selectedProduct.quantity };
    axios.put(`https://realmerch.onrender.com/product/update-product/${selectedProduct._id}`, updatedProduct)
    .then((response)=>{
      console.log(response.data);
      loadProducts();
    })
    .catch((error)=>{
      console.log(error);
    });
    setShowQuantityModal(false);
  };

  const handleDeleteProduct = (id) => {
    let sure = window.confirm("Are you sure you want to delete this product?");
    if (!sure) return;
  
    axios.delete(`https://realmerch.onrender.com/product/delete-product/${id}`)
    .then((response)=>{
      console.log(response.data);
      loadProducts();
    })
    .catch((error)=>{
      console.log(error);
    });
  };


  const handleEditProduct = (index) => {
    const product = allProduct[index];
    console.log(product);
    setIsEditing(true);
    setEditingProductId(product._id);
  
    // Populate form fields
    formik.setValues({
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      image: product.image,
    });
    setProductImage(product.image);
    setShowAddProductModal(true);
    
  };

  const closeModal = () => {
    setShowAddProductModal(false);
    setIsEditing(false);
    setEditingProductId(null);
    setProductImage("");
    formik.resetForm();
  };
  



  const handleLocalImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      formik.setFieldValue("image", image);
      setProductImage(URL.createObjectURL(e.target.files[0]));
      console.log(productImage);
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
            {filteredProducts && filteredProducts.length > 0 ? filteredProducts.map((product, index) => (
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
                  #{product.price.toLocaleString()}
                </td>
                <td className="p-[4px] md:p-4 text-[8px] md:text-[10px] lg:text-[16px]">
                  {product.quantity}
                </td>
                <td className="p-[4px] md:p-4 text-[8px] md:text-[10px] lg:text-[16px]">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleQuantityClick(index)}
                      className="p-2 rounded-lg border"
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="text-[#646465]"
                      />
                    </button>
                    <button className="p-2 rounded-lg border"
                      onClick={() => handleEditProduct(index)}
                    >
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="text-green-500"
                      />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
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
            )) : (
              <tr>
                <td colSpan={6} className="text-center p-4 text-gray-500">
                  {
                    filteredProducts == null || undefined
                    ? "No products found"
                    : "Loading..."

                  }
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Add Product Modal */}
        {showAddProductModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-[300px] text-center">
              <form onSubmit={formik.handleSubmit}>
                <h2 className="text-xl font-bold mb-4">{isEditing ? "Edit Product" : "Add New Product"}</h2>
                <input
                  type="text"
                  placeholder="Product Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border p-2 w-full mb-4 rounded"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
                <input
                  type="text"
                  placeholder="Category"
                  name="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border p-2 w-full mb-4 rounded"
                />
                {formik.touched.category && formik.errors.category && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.category}
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border p-2 w-full mb-4 rounded"
                />
                {formik.touched.price && formik.errors.price && (
                  <p className="text-red-500 text-sm">{formik.errors.price}</p>
                )}
                {/* <input
                  type="text"
                  placeholder="Image URL"
                  name="image"
                  value={formik.values.image}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border p-2 w-full mb-4 rounded"
                />
                {formik.touched.image && formik.errors.image && (
                  <p className="text-red-500 text-sm">{formik.errors.image}</p>
                )} */}
                <input
                  type="text"
                  placeholder="Quantity"
                  name="quantity"
                  value={formik.values.quantity}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border p-2 w-full mb-4 rounded"
                />
                {formik.touched.quantity && formik.errors.quantity && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.quantity}
                  </p>
                )}
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
                  type="submit"
                  className="bg-[#845649] text-white px-4 py-2 rounded-lg"
                >
                  {loading ? "Loading..." : isEditing ? "Update Product" : "Add Product"}
                </button>

                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-500 mt-2 block underline"
                >
                  Cancel
                </button>
              </form>
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
                <span className="mx-4">{selectedProduct?.quantity}</span>
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
