import { Box, Grid } from "@mui/material";
import React ,{useState, useEffect} from 'react';
import PopoverPopupState from "../../../PopOver/PopOver";
import { useCompanyProfileQuery } from "../../../../store/services/companyServices";
import { useSelector } from "react-redux";
import palette from "../../../../theme/palette";
import { developmentApi } from "../../../../config";

const ProfilePopOver = () => {
  const data = '';
  const { permissionData } = useSelector((state) => state?.getPermission);
  const userPermission = Array.isArray(permissionData)
    ? permissionData.map((p) => p.toLowerCase())
    : permissionData?.length > 0
      ? permissionData?.toLowerCase()
      : "";
  return (
    <Grid container spacing={2} justifyContent={"flex-end"} alignItems="center">
      {/* { pathname?.includes(location?.pathname) &&  <Grid item >
        <Button variant="contained" onClick={()=>navigate('/casenotes/addcasenotes')} >Add Case Note</Button>
        </Grid>} */}
      <Grid
        p="5px"
        mt="10px"
        ml={"15px"}
        borderRadius={30}
        backgroundColor={palette.navbarProfile.main}
      >
        <PopoverPopupState data={data} />
      </Grid>
      {(Array.isArray(userPermission) && userPermission?.includes("company")) ||
        (userPermission === "company" && (
          <Grid item>
            <img
              src={
                data?.companyLogo ? developmentApi + data?.companyLogo : "logo"
              }
              alt="GoodstewardLogo"
              style={{ maxHeight: "60px", width: "auto", maxWidth: "100%" }}
            />
          </Grid>
        ))}
    </Grid>
  );
}

export default ClientProfilePopOver;