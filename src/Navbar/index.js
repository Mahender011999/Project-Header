import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { FaGraduationCap } from "react-icons/fa";
import "./index.css";

export default function TemplateDemo() {
  const items = [
    {
      label: "Home",
      items: [
        {
          label: "Home Page 01",  
        },
        {
            separator: true,
          },
        {
          label: "Home Page 02",
        },
        {
            separator: true,
          },
        {
          label: "Home Page 03",
        },
      ],
    },
    {
      label: "About Us",
    },
    {
        label: "Courses",
        items: [
          {
            label: "Our Courses",  
          },
          {
              separator: true,
            },
          {
            label: "Courses Details",
          },
        ],
      },
      {
        label: "Pages",
        items: [
          {
            label: "Event",  
          },
          {
              separator: true,
            },
          {
            label: "Gallery",
          },
          {
              separator: true,
            },
          {
            label: "Pricing",
          },
          {
            label: "Faq",  
          },
          {
              separator: true,
            },
          {
            label: "Teacher",
          }
        ],
      },
   
    {
      label: "Blog",
    },
    {
        label: "Contact",
      },
  ];

  
 
  const end = <InputText placeholder="Search" type="text" className="w-full" />;

  return (
    <div className="card">
      <FaGraduationCap className="graduation-cap"/>
      <h1 className="heading">QUDE<label className="heading1" >CATO</label></h1>
      <Menubar  className="bg-white" model={items}/>
      <Menubar className="bg-white" end={end}/>
      <div className="admission-open">
      <h3 className="heading3">ADMISSION OPEN</h3>
      </div>
    </div>
  );
}
