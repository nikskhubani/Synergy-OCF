import {
  Box,
  Button,
  FormControl,
  Grid2,
  styled,
  Typography,
} from "@mui/material";
import { FormWrapper } from "../components/form-wrapper";
import { TextInputLabel } from "../styles/global";
import { Controller, useFieldArray, UseFormReturn } from "react-hook-form";
import { FormType } from "../schemas/schema";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";
import "dayjs/locale/fr-ca";
import SignaturePad from "../components/signature";
import { Title } from "../components/title";
import SingleInput from "../components/singleInput";
import { useEffect } from "react";
import DatePickerInput from "../components/datepicker";

type ThirdFormProps = {
  form: UseFormReturn<FormType>;
};

export const ThirdForm = ({
  form: {
    control,
    formState: { errors },
  },
}: ThirdFormProps) => {
  const {
    fields: locationFields,
    append: newLocation,
    remove: removeLocation,
  } = useFieldArray({
    control,
    name: "authorization.multipleLocations",
  });

  useEffect(() => {
    if (!locationFields.length) {
      newLocation({});
    }
  }, []);

  return (
    <Box>
      <Title text="Trespass to Property Authorization Form" />
      <Typography sx={{mb: 2}} variant="body2" component="p" gutterBottom>
        Please specify any additional recipients who should receive electronic security reports related to your services.   
        </Typography>

      <FormWrapper>
        <Box>
          <Controller
            name={`authorization.client`}
            control={control}
            render={({ field }) => (
              <SingleInput
                label="Client"
                id={`authorization-client`}
                isError={!!errors.authorization?.client}
                errorMessage={errors.authorization?.client?.message}
                {...field}
              />
            )}
          />

          {locationFields.map((field, idx) => (
            <Box
              key={field.id}
              sx={{
                width: "100%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Grid2 container spacing={2}>
                <Grid2 size={4}>
                  <Controller
                    name="streetNumber"
                    control={control}
                    render={({ field }) => (
                      <SingleInput
                        label="Street Number"
                        id="streetNumber"
                        isError={!!errors.streetNumber}
                        errorMessage={errors.streetNumber?.message}
                        {...field}
                      />
                    )}
                  />
                </Grid2>
                <Grid2 size={4}>
                  <Controller
                    name="streetName"
                    control={control}
                    render={({ field }) => (
                      <SingleInput
                        label="Street Name"
                        id="streetName"
                        isError={!!errors.streetName}
                        errorMessage={errors.streetName?.message}
                        {...field}
                      />
                    )}
                  />
                </Grid2>
                <Grid2 size={4}>
                  <Controller
                    name="suiteNo"
                    control={control}
                    render={({ field }) => (
                      <SingleInput
                        label="Suite No"
                        id="suiteNo"
                        isError={!!errors.suiteNo}
                        errorMessage={errors.suiteNo?.message}
                        {...field}
                      />
                    )}
                  />
                </Grid2>
              </Grid2>

              <Grid2 container spacing={2}>
                <Grid2 size={4}>
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <SingleInput
                        label="City"
                        id="city"
                        isError={!!errors.city}
                        errorMessage={errors.city?.message}
                        {...field}
                      />
                    )}
                  />
                </Grid2>
                <Grid2 size={4}>
                  <Controller
                    name="province"
                    control={control}
                    render={({ field }) => (
                      <SingleInput
                        label="Province"
                        id="province"
                        isError={!!errors.province}
                        errorMessage={errors.province?.message}
                        {...field}
                      />
                    )}
                  />
                </Grid2>
                <Grid2 size={4}>
                  <Controller
                    name="postalCode"
                    control={control}
                    render={({ field }) => (
                      <SingleInput
                        label="Postal Code"
                        id="postalCode"
                        isError={!!errors.postalCode}
                        errorMessage={errors.postalCode?.message}
                        {...field}
                      />
                    )}
                  />
                </Grid2>
              </Grid2>

              <RemoveWrapper>
                <RemoveButton color="error" onClick={() => removeLocation(idx)}>
                  Remove
                </RemoveButton>
              </RemoveWrapper>
            </Box>
          ))}

          <Button type="button" sx={{mb: 2}} variant="outlined" onClick={() => newLocation({})}>
            Add More Location
          </Button>

          <Controller
            name={`authorization.effectiveDate`}
            control={control}
            render={({ field }) => (
              <DatePickerInput
                label="Effective Date"
                isError={!!errors.authorization?.effectiveDate}
                errorMessage={errors.authorization?.effectiveDate?.message}
                {...field}
              />
            )}
          />
        </Box>

        <Typography pt="12px" variant="body1" component="p" gutterBottom>
          The Undersigned hereby authorizes the Synergy Protection Group Inc and
          all of its subsidiaries and agents herein named SYNERGY PROTECTION
          GROUP INC., to enforce all aspects of the Trespass to Property Act,
          Revised Statutes of Ontario, 1990, Chapter T.21 (Act) for the
          above-mentioned Establishment, operated by the Undersigned as Owner or
          Tenant of the Property. In particular, this will authorize any member
          of the SYNERGY PROTECTION GROUP INC. to act as agent of the
          Undersigned with respect to the Act.
        </Typography>

        <Typography pt="12px" variant="body1" component="p" gutterBottom>
          This authorization is intended to confer upon the SYNERGY PROTECTION
          GROUP INC. the same authority as the Undersigned under the Act, namely
          the authority to prohibit entry to the Property/Establishment, and/or
          where SYNERGY PROTECTION GROUP INC. determines it necessary, to remove
          from the Property/Location, any person who has been verbally or in
          writing, prohibited entry and is therefore unlawfully in the
          Property/Location. Any individual who unlawfully is on the
          Property/Location, in violation of being prohibited entry, as
          authorized by Section 9(1) of the Act, may be arrested and charged
          with trespass at the discretion of SYNERGY PROTECTION GROUP INC.
        </Typography>

        <Typography pt="12px" variant="body1" component="p" gutterBottom>
          Upon the request, SYNERGY PROTECTION GROUP INC., will also issue a
          second and concurrent notice prohibiting entry to the
          Property/Location, to any individual who has been given a verbal
          and/or written notice prohibiting entry by SYNERGY PROTECTION GROUP
          INC. It is acknowledged that this authorization given by this document
          to SYNERGY PROTECTION GROUP INC., by the undersigned, may be withdrawn
          at any time by sending written notification.
        </Typography>

        <Box sx={{ width: "100%", my: "16px" }}>
          <Box sx={{ width: "100%" }}>
            <FormControl>
              <TextInputLabel htmlFor={`authorization-signature`}>
                Signature:
              </TextInputLabel>

              <Controller
                name={`authorization.signature`}
                control={control}
                render={({ field: { onChange, ...field } }) => (
                  <SignaturePad onSignatureChange={onChange} {...field} />
                )}
              />
            </FormControl>
          </Box>
          <Typography
            sx={{ width: "100%" }}
            variant="caption"
            component="p"
            gutterBottom
          >
            I have the authority to bind the coporation.
          </Typography>
        </Box>

        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Controller
              name={`authorization.fullName`}
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Full Name"
                  id={`authorization-fullName`}
                  isError={!!errors.authorization?.fullName}
                  errorMessage={errors.authorization?.fullName?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={4}>
            <Controller
              name={`authorization.position`}
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Position"
                  id={`authorization-position`}
                  isError={!!errors.authorization?.position}
                  errorMessage={errors.authorization?.position?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={4}>
            <Controller
              name="authorization.position"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Company"
                  id="l"
                  // isError={!!errors.authorization?.position}
                  // errorMessage={errors.authorization?.position?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
        </Grid2>

      </FormWrapper>
    </Box>
  );
};

const RemoveWrapper = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
});

const RemoveButton = styled(Button)({
  textDecoration: "underline",
  width: "80px",
});
