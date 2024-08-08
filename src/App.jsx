import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = function (event) {
    event.preventDefault();
    const formData = {
      productName,
      productPrice,
      description,
    };
    console.log(formData);
    setProducts([formData, ...products]);
    setProductName("");
    setProductPrice("");
    setDescription("");
  };

  return (
    <>
      <div className="container mx-auto p-4 flex flex-col gap-y-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-6 border border-slate-200 rounded p-6">
            <h1 className="text-center font-bold">Product Form</h1>
            <div className="flex flex-col">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Name
              </label>
              <input
                className="block border rounded text-sm py-2 px-4"
                type="text"
                placeholder="Enter Product Name"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Price
              </label>
              <input
                className="block border rounded text-sm py-2 px-4"
                type="number"
                placeholder="Enter Product Price"
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                className="block border rounded text-sm py-2 px-4"
                placeholder="Enter Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                rows={4}
              />
            </div>

            <div className="flex gap-4">
              <button className="py-2 px-4 rounded bg-slate-400 text-white font-bold drop-shadow-md hover:bg-slate-800">
                Cancel
              </button>
              <button className="py-2 px-4 rounded bg-blue-400 text-white font-bold drop-shadow-md hover:bg-blue-800">
                Add New Product
              </button>
            </div>
          </div>
        </form>

        <div className="flex flex-col gap-y-4 border border-slate-200 rounded p-6">
          <h1 className="text-center font-bold">Product List</h1>
          {products.length > 0 ? (
            <>
              {products.map((product) => {
                return (
                  <div key={product.productName} className="border rounded p-2">
                    <div className="flex">
                      <div className="flex-1">{product.productName}</div>
                      <div className="flex-1">{product.productPrice}</div>
                      <div className="flex-1">{product.description}</div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            "No product!"
          )}
        </div>
      </div>
    </>
  );
}

export default App;
