import React, {useState} from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import { Drawer } from 'antd';
const listings = [
  {
    name: "Karuta",
    serverCount: 37714,
    votesCount: 284433,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci nesciunt beatae eveniet sequi",
    tags: ["economy", "anime", "leveling", "social"],
    id: 1,
  },
  {
    name: "Dank Memer",
    serverCount: 37714,
    votesCount: 284433,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci nesciunt beatae eveniet sequi",
    tags: ["economy", "anime", "leveling", "social"],
    id: 2,
  },
  {
    name: "Naruto",
    serverCount: 37714,
    votesCount: 284433,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci nesciunt beatae eveniet sequi",
    tags: ["economy", "anime", "leveling", "social"],
    id: 3,
  },
];

const Listings = () => {
  const [visible, setVisible] = useState(false)
  const [childrenDrawer, setChildrenDrawer] = useState(false)
  return (
    <div className="pb-5">
      <Navbar visible={visible} setVisible={setVisible} />
      <h5 className="text-white text-center">Recommended for you</h5>
      <div className="d-flex justify-content-center">
        <p className="w-75 text-grey text-center weight-500">
          Based off your previous searches on our website.
        </p>
      </div>
      <div className="mb-5">
        {listings.map((item) => (
          <Card 
          key={item.id}
          detail={item}
          />
        ))}
      </div>

      {/* BOTTOM SHEET */}
      <Drawer
          title="Advanced Filter"
          height={300}
          closable={false}
          onClose={() => setVisible(false)}
          visible={visible}
          placement={'bottom'}
          bodyStyle={{
            background: '#0a223a',
          }}
          headerStyle={{
            background: '#0a223a',
          }}
        >
          <div className="d-flex flex-column">
          <h4 className="text-center text-white">INPUT FIELDS</h4>
          </div>
          <button 
          onClick={() => {
            setVisible(false)
            setChildrenDrawer(true)
          }}
          className="btn style_button w-100 mt-5" style={{
            borderRadius: 10,
            color: '#FFF'
          }}>
            Save
          </button>

          
          <Drawer
            title="Filter"
            width={400}
            closable={true}
            placement={'bottom'}
            maskClosable={false}
            onClose={() => {
              setChildrenDrawer(false)
              setVisible(true)
            }}
            visible={childrenDrawer}
            zIndex={3000}
            bodyStyle={{
              background: '#0a223a',
            }}
            headerStyle={{
              background: '#0a223a',
            }}
          >
            <h4 className="text-center text-white">
              ADVANCED FILTER INPUTS
            </h4>
          </Drawer>
        </Drawer>

    </div>
  );
};

export default Listings;
