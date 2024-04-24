import React from "react";
import "./single.scss";
import Edit from "../../img/edit.png";
import Delete from "../../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        ></img>
        <div className="user">
          <img
            src="https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={"/write?edit=2"}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis! Aliquip nostrud duis duis nulla. Minim minim et pariatur
          exercitation laborum nisi ut aliqua. Sit laboris excepteur ad
          consequat sint non pariatur. Exercitation dolor tempor proident
          laborum ipsum anim dolor irure laboris Lorem. Incididunt Lorem
          adipisicing velit incididunt aute qui aliquip tempor ea sint. Enim
          aliquip esse dolore sint in cupidatat. Nisi nostrud duis laboris
          consequat cupidatat. Amet dolore laboris aliqua magna qui culpa ea
          deserunt minim est. Ut proident cillum dolore aliqua incididunt
          reprehenderit sit voluptate. Commodo incididunt id deserunt nulla amet
          nulla irure cupidatat proident est. Veniam irure qui amet incididunt
          esse est dolore minim aute aliqua enim tempor anim culpa. Ut est
          pariatur reprehenderit duis ut cillum laboris dolor deserunt commodo.
          Veniam nostrud culpa excepteur amet sint duis reprehenderit occaecat
          velit dolor labore incididunt. Cupidatat sit pariatur magna
          exercitation sit aliqua amet laboris aliquip dolore dolor in ipsum
          tempor. Quis consequat qui Lorem excepteur adipisicing consectetur ut
          qui dolore Lorem sint veniam. Eiusmod minim anim irure elit ad qui
          exercitation nostrud ex aliquip aute laboris in. In commodo nulla
          mollit sit cillum. Mollit reprehenderit ex occaecat laboris ex
          occaecat esse. Proident et aute dolore minim consectetur aute
          incididunt fugiat tempor culpa sit culpa cupidatat deserunt. Lorem
          enim sit culpa ea tempor. Id amet do aliquip Lorem irure qui excepteur
          est. Eiusmod in id incididunt magna veniam sunt sit. Velit ad anim ut
          sit cillum do aliquip. Qui velit cupidatat consectetur est eu ea nisi
          nisi deserunt. Enim reprehenderit ex voluptate dolore magna laborum
          labore consectetur. Nostrud qui pariatur cupidatat aute proident Lorem
          Lorem sint dolore non nisi nulla. Eu do pariatur fugiat aute laboris
          culpa sint ipsum deserunt. Nostrud duis Lorem ea sunt consequat
          adipisicing pariatur nulla proident enim nostrud anim laboris
          exercitation. Consequat duis nisi fugiat ipsum nostrud sunt. Est ut
          aliquip exercitation dolor dolor qui non et proident sit Lorem sunt
          enim. Dolore pariatur tempor quis ad Lorem magna qui ullamco
          exercitation irure voluptate. Adipisicing nisi cillum reprehenderit
          ipsum consequat aliqua consequat. Deserunt Lorem tempor magna velit
          deserunt dolor pariatur dolor cupidatat ea elit esse voluptate. Nisi
          irure esse id qui aliqua cupidatat do aliquip. Non do eu est commodo
          qui occaecat dolor. Cupidatat tempor pariatur officia enim
          adipisicing. Lorem cupidatat nisi incididunt non consectetur esse
          consequat anim commodo culpa aute in et. Eiusmod exercitation qui
          proident proident exercitation proident sunt id Lorem reprehenderit
          nostrud ipsum. Enim sit sit qui id. Adipisicing tempor fugiat
          adipisicing Lorem deserunt incididunt tempor. Consequat laborum
          pariatur ex non occaecat duis amet aliquip commodo velit cillum magna.
          Ipsum eu sit id consectetur dolor cupidatat deserunt tempor qui
          incididunt aliqua. Culpa in commodo esse reprehenderit. Ex magna culpa
          duis officia et proident labore nostrud sunt. Incididunt consequat
          mollit fugiat officia voluptate quis ipsum laborum. Consectetur ipsum
          aute qui proident cillum ex ea proident incididunt sit ullamco est id
          dolore. Pariatur commodo esse mollit consequat. Commodo laborum magna
          duis et reprehenderit velit nisi quis magna consequat anim et. Sit sit
          fugiat elit dolore. Anim laboris fugiat minim laboris dolor ullamco.
          Et Lorem proident non dolor consequat officia velit cupidatat pariatur
          ipsum non qui velit.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
