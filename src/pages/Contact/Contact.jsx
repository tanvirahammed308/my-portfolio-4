const Contact = () => {
  return (
   
      <div className="hero  bg-green-600 ">
        <div className="md:flex  my-24">
          <div className="text-center lg:text-left md:w-[50%] mb-10">
            <h1 className="text-5xl font-bold mb-5 md:mt-28">Feel Free To Contact</h1>
          </div>
          <div className="card  md:w-[50%]  shadow-2xl bg-base-100 mx-5">
            <form className="card-body" action="https://formspree.io/f/xwkdeavg" method="POST">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name="email"
                  type="text"
                  placeholder="put your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <textarea
                name="message"
                  className="textarea textarea-primary"
                  placeholder="Write"
                ></textarea>
              </div>
              <div className="form-control mt-6">
              <input type="submit" value={'send'} className="btn btn-primary" />
               
              </div>
            </form>
          </div>
        </div>
      </div>
   
  );
};

export default Contact;
