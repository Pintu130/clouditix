import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import CustomModal from "@/components/common/CustomModal";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";
import React, { useEffect, useState } from "react";
import GuestCreateAddress from "./GuestCreateAddress";
import PreferanceModel from "./PreferanceModel";
import {
  GuestCategoryData,
  fetchGuestData,
  fetchInsertGuestData,
  fetchUpdateGuestData,
  genderDate,
  income,
  married,
  nationality,
} from "@/assets/data";
import { FaChevronDown } from "react-icons/fa";
import GuestContactDetails from "./GuestContactDetails";
import GuestIdentification from "./GuestIdentification";
import SocialMedia from "./SocialMedia";
import LoyalityProgram from "./LoyalityProgram";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { setEdititem, setDetails } from "@/store/guestDetails";

const initialValue = {
  goldenId: 0,
  guestCategoryType: "",
  firstName: "",
  middleName: "",
  lastName: "",
  fullName: "",
  dateOfBirth: "",
  gender: "",
  maritalStatus: "",
  noOfChildren: 0,
  incomeLevel: "",
  nationality: "",
  companyName: "",
  notes: "",
  createById: "",
  lastUpdatedById: "",
  isDeleted: true,
  source: "",
  isActiveFlag: true,
};

const GuestDataCreate = ({ openGuestSearchPage }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setformData] = useState(initialValue);
  const [isHideAll, setIsHideAll] = useState(true);
  const [allData, setAllData] = useState({});
  const [hideAllStates, setHideAllStates] = useState({
    creareAddress: false,
    contactDetails: false,
    identification: false,
    socialMedia: false,
    lotaltyProgram: false,
  });
  const [edited, setEdited] = useState(false);

  const goldenId = useSelector((state) => state?.guestDetails?.goldenID);
  // console.log("🚀 ~ GuestDataCreate ~ goldenId:---------", goldenId) 

  const isEdit = useSelector((state) => state?.guestDetails?.isEdit);
  // console.log("🚀 ~ GuestDataCreate ~ isEdit:---------", isEdit)

  const CreatedAddressData = useSelector((state) => state?.createData?.Address);
  const CreatedcontectData = useSelector((state) => state?.createData?.contect);
  const CreatedidentificationData = useSelector(
    (state) => state?.createData?.identification
  );
  const CreatedsocialMedia = useSelector(
    (state) => state?.createData?.socialMedia
  );
  const CreatedPreferanceMedia = useSelector(
    (state) => state?.createData?.Preferance
  );
  const Createdloyality = useSelector((state) => state?.createData?.loyality);

  // console.log(goldenId, "JAF");

  useEffect(() => {
    // dispatch(setDetails(0));
    if (isEdit !== "Edit" && goldenId > 0) {
      setEdited(true);
    } else {
      setEdited(false);
    }
  }, [isEdit,goldenId]);

  useEffect(() => {
    (async () => {
      if (goldenId > 0) {
        const Data = await fetchGuestData(goldenId);
        const formDataValue = Data?.guest;
        const formDatas = {
          firstName: formDataValue?.firstName,
          middleName: formDataValue?.middleName,
          lastName: formDataValue?.lastName,
          fullName: formDataValue?.fullName,
          notes: formDataValue?.notes,
          date: formDataValue?.dateOfBirth,
          gender: {
            label: formDataValue?.gender,
            value: formDataValue?.gender,
          },
          married: {
            label: formDataValue?.maritalStatus,
            value: formDataValue?.maritalStatus,
          },
          children: formDataValue?.noOfChildren,
          nationality: {
            label: formDataValue?.nationality,
            value: formDataValue?.nationality,
          },
          companyName: formDataValue?.companyName,
          income: {
            label: formDataValue?.incomeLevel,
            value: formDataValue?.incomeLevel,
          },
          category: categoryFilter(formDataValue?.guestCategoryType),
          isActive: formDataValue?.isActiveFlag,
          createById: formDataValue?.createById,
          lastUpdatedById: formDataValue?.lastUpdatedById,
          isDeleted: formDataValue?.isDeleted,
          source: formDataValue?.source,
        };
        setformData(formDatas);
        setAllData(Data);
      } else {
        setformData(initialValue);
        setAllData({});
      }
    })();
  }, [isEdit,goldenId]);

  const categoryFilter = (category) => {
    const data = GuestCategoryData?.filter(
      (item) => item.value === category
    )?.[0];
    return data ? data : { label: category, value: category };
  };

  const handleFromData = (value, name) => {
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handlehideChange = (component, isHidden) => {
    setHideAllStates((prevHideStates) => ({
      ...prevHideStates,
      [component]: isHidden,
    }));
  };

  useEffect(() => {
    const areALLHidden = Object.values(hideAllStates).every((state) => state);

    if (areALLHidden) {
      setIsHideAll(true);
    }
  }, [hideAllStates]);

  const handleAddModal = () => {
    setIsModalOpen(true);
  };

  const handleGoRefer = () => {};

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSaveDetails = async () => {
    const guest = {
      goldenId: formData?.goldenId,
      guestCategoryType: formData?.category?.value,
      firstName: formData?.firstName,
      middleName: formData?.middleName,
      lastName: formData?.lastName,
      fullName: formData?.fullName,
      dateOfBirth: formData?.date,
      gender: formData?.gender?.value,
      maritalStatus: formData?.married?.value,
      noOfChildren: +formData?.children,
      incomeLevel: formData?.income?.value,
      nationality: formData?.nationality?.value,
      companyName: formData?.companyName,
      notes: formData?.notes,
      createById: formData?.createById,
      lastUpdatedById: formData?.lastUpdatedById,
      isDeleted: formData?.isDeleted,
      source: formData?.source,
      isActiveFlag: formData?.isActive,
    };

    const upDatedData = {
      guest: guest,
      addresses: CreatedAddressData,
      contactDetails: CreatedcontectData,
      identificationInfo: CreatedidentificationData,
      socialMediaProfiles: CreatedsocialMedia,
      guestPreferences: [CreatedPreferanceMedia],
      loyaltyProgramMemberships: Createdloyality,
    };

    const data = await fetchInsertGuestData(upDatedData);

    // console.log(data);

    if (data?.isSuccess > 0) {
      toast.success("Create New Guest", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "toastId",
      });
      openGuestSearchPage("guest-data-search");
    } else {
      toast.error("Error in saving", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "toastId",
      });
    }
  };

  const handleUpdateDetails = async () => {
    const guest = {
      goldenId: allData?.guest?.goldenId,
      guestCategoryType: formData?.category?.value,
      firstName: formData?.firstName,
      middleName: formData?.middleName,
      lastName: formData?.lastName,
      fullName: formData?.fullName,
      dateOfBirth: formData?.date,
      gender: formData?.gender?.value,
      maritalStatus: formData?.married?.value,
      noOfChildren: +formData?.children,
      incomeLevel: formData?.income?.value,
      nationality: formData?.nationality?.value,
      companyName: formData?.companyName,
      notes: formData?.notes,
      createById: formData?.createById,
      lastUpdatedById: formData?.lastUpdatedById,
      isDeleted: formData?.isDeleted,
      source: formData?.source,
      isActiveFlag: formData?.isActive,
    };

    const upDatedData = {
      guest: guest,
      addresses: CreatedAddressData,
      contactDetails: CreatedcontectData,
      identificationInfo: CreatedidentificationData,
      socialMediaProfiles: CreatedsocialMedia,
      guestPreferences: [CreatedPreferanceMedia],
      loyaltyProgramMemberships: Createdloyality,
    };

    const data = await fetchUpdateGuestData(upDatedData);

    // console.log(data,'this is updated data');

    if (data?.isSuccess > 0) {
      toast.success("Guest Data modified", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "toastId",
      });
      dispatch(setEdititem(""));
      dispatch(setDetails(null));
      openGuestSearchPage("guest-data-search");
    } else {
      toast.error("Error", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "toastId",
      });
    }
  };

  const dateObject = new Date(formData?.date);
  const formattedDate = dateObject
    ? `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${dateObject.getDate().toString().padStart(2, "0")}`
    : "";
  // const formattedDate = formData?.date ? formData.date.split('/').reverse().join('-') : '';

  return (
    <div className="w-full p-2 ">
      <CustomModal type="Create" isopen={isModalOpen} onClose={closeModal}>
        <PreferanceModel onClose={closeModal} allData={allData} />
      </CustomModal>

      <h1 className=" text-lg font-semibold px-2">Guest Information</h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-5 p-5 w-full">
        <div className="flex flex-col gap-5 w-full">
          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px]">First Name</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="first Name"
                name="firstName"
                value={formData?.firstName}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
                isdisablad={edited}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px]">Middle Name</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="middle Name"
                name="middleName"
                value={formData?.middleName}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
                isdisablad={edited}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px]">Last Name</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="last Name"
                name="lastName"
                value={formData?.lastName}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
                isdisablad={edited}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px]">Full Name</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="full Name"
                name="fullName"
                value={formData?.fullName}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
                isdisablad={edited}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px]">Notes</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="Notes"
                name="notes"
                value={formData?.notes}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
                isdisablad={edited}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full">
          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[160px]">Date of Birth</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <input
                type="date"
                placeholder="DD/mm/yyyy"
                autoComplete="false"
                id="date"
                name="date"
                // value={formattedDate}
                value={
                  formattedDate
                    ? formattedDate.split("/").reverse().join("-")
                    : ""
                }
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
                disabled={edited}
                className={`w-full h-10 p-2 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none `}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[160px] ">Gender</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <SingleSelectDropDown
                placeholder="gender"
                options={genderDate}
                target="gender"
                creatableSelect={true}
                selectedType={formData?.gender}
                handleSelectChange={(data) => handleFromData(data, "gender")}
                isDisabled={edited}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[160px] ">
              Marital Status
            </label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <SingleSelectDropDown
                placeholder=" Marital Status"
                options={married}
                target="married"
                creatableSelect={true}
                selectedType={formData?.married}
                handleSelectChange={(data) => handleFromData(data, "married")}
                isDisabled={edited}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[160px] ">
              No of Children
            </label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <CustomInput
                isNUmber={true}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="children"
                name="children"
                value={formData?.children}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
                isdisablad={edited}
              />
            </div>
          </div>

          <div className="w-full flex gap-4 ">
            <label className="flex items-center w-24 ml-2 ">Is Active</label>
            <input
              type="checkbox"
              placeholder=""
              autoComplete="false"
              id="date"
              name="isActive"
              checked={formData?.isActive}
              onChange={(e) => handleFromData(e.target.checked, e.target.name)}
              disabled={edited}
              className={`w-5 h-5 rounded-[4px] border-[1px] border-gray-G30 placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40  active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full">
          <div className=" w-full flex items-start justify-start flex-col xl:flex-row gap-2 xl:gap-4">
            <label className="flex items-center w-[170px] ">Nationality</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <SingleSelectDropDown
                placeholder="nationality"
                options={nationality}
                target="nationality"
                creatableSelect={true}
                selectedType={formData?.nationality}
                handleSelectChange={(data) =>
                  handleFromData(data, "nationality")
                }
                isDisabled={edited}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px] ">Company Name</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <CustomInput
                isNUmber={false}
                isRequired={true}
                isIcon={true}
                label=""
                placeholder="company Name"
                name="companyName"
                value={formData?.companyName}
                onChange={(e) => handleFromData(e.target.value, e.target.name)}
                isdisablad={edited}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px]">Income Level</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <SingleSelectDropDown
                placeholder="Middle"
                options={income}
                target="income"
                creatableSelect={true}
                selectedType={formData?.income}
                handleSelectChange={(data) => handleFromData(data, "income")}
                isDisabled={edited}
              />
            </div>
          </div>

          <div className=" w-full flex items-start justify-start flex-col xl:flex-row  gap-2 xl:gap-4">
            <label className="flex items-center w-[170px]">Category</label>
            <div className=" w-full md:w-[250px] xl:w-[300px] ]">
              <SingleSelectDropDown
                placeholder="Leisure Travelers"
                options={GuestCategoryData}
                target="category"
                creatableSelect={true}
                selectedType={formData?.category ?? GuestCategoryData?.[0]}
                handleSelectChange={(data) => handleFromData(data, "category")}
                isDisabled={edited}
              />
            </div>
          </div>

          <div className="w-full flex flex-col xs:flex-row  md:flex-col  lg:flex-row items-center justify-between gap-10">
            <div className="flex gap-5">
              <div className="w-full max-w-[150px]  ">
                <CustomButton
                  name="Show Preferences"
                  handleClick={() => handleAddModal()}
                  isDisable={false}
                  isLoading={false}
                />
              </div>
              <div className="w-full max-w-[180px]  ">
                <CustomButton
                  name="Go To Cross Reference"
                  handleClick={() => handleGoRefer()}
                  isDisable={false}
                  isLoading={false}
                />
              </div>
            </div>

            {(isEdit === "Edit" || goldenId === 0) && (
              <div className="flex  gap-4">
                <div className="w-full max-w-[150px]  ">
                  <CustomButton
                    name={goldenId !== 0  ? "Update" : "Save"}
                    handleClick={() => {
                      isEdit === "Edit"
                        ? handleUpdateDetails()
                        : handleSaveDetails();
                    }}
                    isDisable={false}
                    isLoading={false}
                  />
                </div>
                <div className="w-full max-w-[150px]  ">
                  <CustomButton
                    name="Cancel"
                    handleClick={() => {}}
                    isDisable={false}
                    isLoading={false}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className=" w-full h-full border border-gray-400 rounded-lg p-2 flex flex-col gap-6 max-h-[52vh] overflow-auto custom-scroll    ">
        <div className="flex items-center gap-3  px-4">
          <FaChevronDown
            className={`h-4 w-4 transform ${
              !isHideAll ? "rotate-180" : "rotate-0"
            } transition-transform duration-300 ease-in-out`}
            onClick={() => setIsHideAll(!isHideAll)}
          />

          <div className=" w-[150px] flex gap-2">
            <CustomButton
              name={isHideAll ? "Hide All" : "Show All"}
              handleClick={() => setIsHideAll(!isHideAll)}
              isDisable={false}
              isLoading={false}
            />
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-6">
          <div className="w-full h-full">
            <GuestCreateAddress
              isHideAll={isHideAll}
              onHandleHide={(isHidden) =>
                handlehideChange("creareAddress", isHidden)
              }
              allData={allData}
            />
          </div>

          <div className="w-full h-full">
            <GuestContactDetails
              isHideAll={isHideAll}
              onHandleHide={(isHidden) =>
                handlehideChange("contactDetails", isHidden)
              }
              allData={allData}
            />
          </div>

          <div className="w-full h-full">
            <GuestIdentification
              isHideAll={isHideAll}
              onHandleHide={(isHidden) =>
                handlehideChange("identification", isHidden)
              }
              allData={allData}
            />
          </div>

          <div className="w-full h-full">
            <SocialMedia
              isHideAll={isHideAll}
              onHandleHide={(isHidden) =>
                handlehideChange("socialMedia", isHidden)
              }
              allData={allData}
            />
          </div>

          <div className="w-full h-full">
            <LoyalityProgram
              isHideAll={isHideAll}
              onHandleHide={(isHidden) =>
                handlehideChange("lotaltyProgram", isHidden)
              }
              allData={allData}
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
            // console.log("🚀 ~ GuestDataCreate ~ isEdit:", isEdit)
            // console.log("🚀 ~ GuestDataCreate ~ isEdit:", isEdit)
            // console.log("🚀 ~ GuestDataCreate ~ isEdit:", isEdit)
};

export default GuestDataCreate;
