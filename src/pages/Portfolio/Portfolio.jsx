import { Link } from "react-router-dom";
import p1 from "../../../public/img/p1.png";
import p2 from "../../../public/img/p2.png";
import p3 from "../../../public/img/p3.png";
const Portfolio = () => {
  return (
    <div className="mx-5">
      {/* project-1  */}
      <div className="card lg:card-side shadow-2xl mt-10 bg-green-600">
        <figure>
          <img src={p1} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Global Language Hub</h2>
          <p className="font-bold">Education Learning Website</p>
          <ul>
            <li>
              Create a website with 3 roles(Admin,Instructor,User)who can access
              this website.
            </li>
            <li>This website included a payment system.</li>
            <li>Instructors can modify and add new classes.</li>
            <li>It’s an user friendly website</li>
          </ul>
          <h4 className="font-bold">Technology: mongodb,firebase,react.js</h4>
          <div className="card-actions flex gap-10">
            <Link to="https://venerable-cat-31d483.netlify.app/">
              <a className="link link-primary font-bold text-xl">
                Live Project
              </a>
            </Link>
            <Link to="https://github.com/tanvirahammed308/assignment-12">
              <a className="link link-primary font-bold text-xl">
                Github Link
              </a>
            </Link>
          
          </div>
        </div>
      </div>
      {/* projects-2  */}
      <div className="card lg:card-side bg-green-600 shadow-2xl mt-10 mb-10">
        <div className="card-body">
          <h2 className="card-title">Toy-Garden</h2>
          <p className="font-bold">E-Commerce Website</p>
          <ul>
            <li>Different types of car sections</li>
            <li>New Arrival section added.</li>
            <li>Modify,update,delete car from car section.</li>
            <li>It’s an easily manageable website</li>
          </ul>
          <h4 className="font-bold">Technology:react.js, firebase node.js</h4>
          <div className="card-actions flex gap-10">
            <Link to="https://stunning-starlight-98a765.netlify.app/">
              <a className="link link-primary font-bold text-xl">
                Live Project
              </a>
            </Link>
            <Link to="https://github.com/tanvirahammed308/assigment-11">
              <a className="link link-primary font-bold text-xl">
               Github Link
              </a>
            </Link>
            
          </div>
        </div>
        <figure>
          <img src={p2} alt="Album" />
        </figure>
      </div>
      {/* projects-3  */}
      <div className="card lg:card-side bg-green-600 shadow-2xl mt-10 mb-10">
        <figure>
          <img src={p3} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Foodie</h2>
          <p className="font-bold">Online food delivery Website</p>
          <ul>
            <li>Showing menu , order section and dashboard</li>
            <li>
              Admin panel added. Admin can add new food items or modify them.
            </li>
            <li>
              Admin can show all the users who registered on this website.
            </li>
            <li>It’s an user friendly website</li>
          </ul>
          <h4 className="font-bold">Technology:react.js,firebase,mongodb,node.js</h4>
          <div className="card-actions flex gap-10">
            <Link to="https://bucolic-salmiakki-124681.netlify.app/">
              <a className="link link-primary font-bold text-xl">
                Live Project
              </a>
            </Link>
            <Link to="https://github.com/tanvirahammed308/foodie-c">
              <a className="link link-primary font-bold text-xl">
                Github Link
              </a>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
