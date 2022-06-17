import { Dialog, Stack } from "@mui/material";
import React, { useState } from "react";
import BaseLayout from "../../components/Layouts/BaseLayout";
import DisplayHeader from "../../components/Layouts/DisplayHeader";
import Padding from "../../components/Layouts/Padding";
import TextField from "../../components/FormElements/TextField";
import ModalContainer from "../../components/ModalContainer";
import Calender from "../../components/FormElements/Calender";
import MySelect from "../../components/FormElements/Select";
import BrandsTable from "../../components/Tables/BrandManagement/BrandsTable";
import ManagerSwitcher from "../../components/ManagerSwitcher";
import LabelTag from "../../components/LabelTag";
import StatCard from "../../components/Cards/StatCard";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const stats = [
    { title: "Coupon Acquired", type: "number", value: "30/120" },
    { title: "Used Coupon ", type: "number", value: "41" },
    { title: "Total no of sales", type: "money", value: "97" },
    { title: "Expense Made", type: "money", value: "96" },
    { title: "Total Engagement", type: "people", value: "96" },
  ];
  function toggle() {
    console.log("toggleing...");
    open ? setOpen(false) : setOpen(true);
  }
  return (
    <Padding className="bg-gray-lighter !pb-[10rem]">
      <Dialog onClose={toggle} open={open}>
        <ModalContainer actionText="Done" onClose={toggle} headerText="Create Edible Shout Link" icon={<span className="icon-plus-circle text-[15px] font-bold"></span>}>
          <Stack gap={"24px"}>
            <Calender label="Party Date"></Calender>
            {/* <MySelect label="Link Type"></MySelect> */}
            <TextField label="Organiser"></TextField>
            <TextField label="Sponsor Limit"></TextField>
            {/* <Select></Select> */}
            <MySelect label="Link Type"></MySelect>
          </Stack>
        </ModalContainer>
      </Dialog>
      <div className="max-w-[1094px]">
        <DisplayHeader displayText={"Hello Tony,"} action={toggle} subheaderText={"Welcome to your Dashboard."} Button={{ text: "Create Edible Shout Link", link: "/brand/dashboard" }} />
        {/* Dashboard */}
        <div className="bg-white px-[5.9rem] pb-[3rem] pt-[3rem] rounded-[1.2rem] relative mb-[4rem]">
          <LabelTag className="ml-auto mb-[1rem]" text={"Active"} color={"#0356B0"} bg={"#EBF2FD"}></LabelTag>
          {/* Details */}
          <div className="flex flex-wrap items-center mb-[2rem]">
            <img className="w-[13.8rem] h-[13.8rem]" src="/images/pizza.png"></img>
            <div className="ml-[3rem]">
              <h2 className="display_3_heavy !mb-[1.2rem] block">Pizza Jungle</h2>
              <p className="subheader_light text-black-light max-w-[313px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis mauris eros nunc</p>
            </div>
            <div className="flex flex-wrap">
              <div className=" border-gray-light border-l px-[5.4rem] h-[11.1rem] grid place-items-center place-content-center">
                <h4 className="caption_light mb-[1.2rem] text-gray-dark">Category</h4>
                <p className="title_heavy text-black-default">Food</p>
              </div>
              <div className=" border-gray-light border-x px-[5.4rem] h-[11.1rem] grid place-items-center place-content-center">
                <h4 className="caption_light mb-[1.2rem] text-gray-dark">Products</h4>
                <p className="title_heavy text-black-default">02</p>
              </div>
            </div>
          </div>
          {/* Duration */}
          <p className=" text-right subheader_light text-black-light">
            <span className="mr-[9px]">Duration:</span>
            <span className="text-gray-darker !font-extrabold">15th Jun 2022 - 20th Dec 2023</span>
          </p>
        </div>
        <p className="subheader_heavy mb-[1.2rem]">Analytics</p>
        <div className="flex gap-[24px] overflow-x-scroll styled-scroll-bar mb-[1.6rem] md:mb-[4.4rem] border-dashed border-b md:border-none pb-7 md:pb-2">
          {stats.map((stat, i) => {
            return <StatCard key={i} type={stat.type} text={stat.title} value={stat.value}></StatCard>;
          })}
        </div>
        <ManagerSwitcher className="mb-[2rem]"></ManagerSwitcher>
        <BrandsTable></BrandsTable>
      </div>
    </Padding>
  );
};

Dashboard.Layout = BaseLayout;
export default Dashboard;
