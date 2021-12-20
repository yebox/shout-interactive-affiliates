import React from "react";
import BaseLayout from "../../../components/Layouts/BaseLayout";
import BtnIcon from "../../../components/Buttons/BtnIcon";
import Link from "next/link";
import BtnOutlined from "../../../components/Buttons/BtnOutlined";
import BtnPrimary from "../../../components/Buttons/BtnPrimary";
import Padding from "../../../components/Layouts/Padding";

const CreateNewAdvertSuccess = () => {
  return (
    <Padding>
      <div className="w-[949px]">
        <header className=" flex items-center mb-[62px]">
          <Link href={"/brand-management/adverts/"}>
            <span className="icon-arrow-circle-left text-[32px] text-black-default cursor-pointer"></span>
          </Link>
          <h1 className="display_3_heavy ml-[13px] mr-auto">Create New Advert</h1>
        </header>
        <main className="h-[500px] rounded-3xl border-my-border-color--1 bg-gray-lightest-1 p-[48px] flex  items-center justify-center">
          <div className=" flex flex-col items-center">
            <img src="/images/success.png" className="mb-7"></img>
            <h1 className="display_3_heavy text-green-500 mb-6">Success!</h1>
            <p className="body_light mb-[40px]">Your advert has been created.</p>
            <div className="flex gap-3 m-auto">
              <BtnOutlined text="Create More" link="/brand-management/adverts/new"></BtnOutlined>
              <BtnPrimary text="Done" link="/brand-management/adverts"></BtnPrimary>
            </div>
          </div>
        </main>
      </div>
    </Padding>
  );
};

CreateNewAdvertSuccess.Layout = BaseLayout;
export default CreateNewAdvertSuccess;
