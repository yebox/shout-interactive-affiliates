import { Dialog, Stack } from "@mui/material";
import React, { useState } from "react";
import BaseLayout from "../../components/Layouts/BaseLayout";
import DisplayHeader from "../../components/Layouts/DisplayHeader";
import Padding from "../../components/Layouts/Padding";
import ModalContainer from "../../components/ModalContainer";
import TextField from "../../components/FormElements/TextField";
import MySelect from "../../components/FormElements/Select";

const Team = () => {
  const [open, setOpen] = useState(false);
  function toggle() {
    console.log("toggleing...");
    open ? setOpen(false) : setOpen(true);
  }
  return (
    <div className="bg bg-gray-lighter h-screen">
      <Padding>
        <Dialog onClose={toggle} open={open}>
          <ModalContainer actionText="Add" onClose={toggle} headerText="Add Team" icon={<span className="icon-plus-circle text-[15px] font-bold"></span>}>
            <Stack gap={"14px"}>
              {/* <MySelect label="Link Type"></MySelect> */}
              <TextField label="First name"></TextField>
              <TextField label="Last name"></TextField>
              <TextField label="Email"></TextField>
              <MySelect label="Role"></MySelect>
              <MySelect label="Branch"></MySelect>
            </Stack>
          </ModalContainer>
        </Dialog>
        <div className="max-w-[1094px]">
          <DisplayHeader displayText={"Team"} action={toggle} subheaderText={"Welcome to your Dashboard."} Button={{ text: "Add Team", link: "/brand/team" }} />
        </div>
      </Padding>
    </div>
  );
};

export default Team;
Team.Layout = BaseLayout;
