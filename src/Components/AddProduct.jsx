import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const addProduct = {
      name,
      brand,
      type,
      price,
      description,
      rating,
      photo,
    };
    console.log(addProduct);

    //send data to the user
    fetch(
      `https://brand-shop-server-i11rg1e81-roufs-projects.vercel.app/product`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "User added successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

  return (
    <>
      <div className="bg-slate-500">
        <h2>add Product</h2>

        {/* form hare start */}
        <form onSubmit={handleAddProduct}>
          <div className="flex gap-7 w-4/5 mx-auto justify-center">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/*update of next level supplier and test */}
          <div className="flex gap-7 w-4/5 mx-auto justify-center">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  placeholder="Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/*update of next level category and details */}

          <div className="flex gap-7 w-4/5 mx-auto justify-center">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/*update of next level supplier and test */}
          <div className="flex gap-7 w-4/5 mx-auto justify-center">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className=" mx-auto text-center   justify-center w-28">
            <button className="btn btn-square w-28">
              <input type="submit" value="add Product" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
