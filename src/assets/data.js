
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { AiOutlineFolderOpen } from "react-icons/ai";
import axios from 'axios';

// -----------  Data Quality rules
export const fetchTableData = async () => {
  try {
    const response = await axios.get("http://13.234.127.72:5000/GetDQMetaData")
    return response?.data
  } catch (error) {
    return error
  }
}
// -----------  Data Quality rules
export const fetchInsertTableData = async (data) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}InsertDQMetaData`, data);
    return response?.data
  } catch (error) {
    return error
  }
}
// -----------  Data Quality rules
export const fetchUpdateTableData = async (data) => {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}UpdateDQMetaData`, data)
    return response.data
  } catch (error) {
    return error
  }
}
//---------NA
export const fetchDeleteTableData = async (data) => {
  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}DeleteDQMetaData?id=${data}`)
    return response
  } catch (error) {
    return error
  }
}
// -----------  Data Quality rules
export const fetchdatasource = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}ColumnDefinition`)

    return response
  } catch (error) {
    return error
  }
}
//---------NA
export const fetchentity = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}TableDefinition`)
    const data = response?.data?.map((item) => ({
      label: item?.tableName, value: item?.tableName
    }))
    return data
  } catch (error) {
    return error
  }
}
// -----------  Data Quality rules
export const fetchvalidationRule = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}DQRules`)
    const data = response?.data?.map((item) => ({
      label: item?.validationRule, value: item?.validationRule
    }))
    return data
  } catch (error) {
    return error
  }
}
//--------------Guest Data Create
export const fetchGuestData = async (data) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}GuestData/${data}`)
    return response?.data
  } catch (error) {
    return error
  }
}
// -----------  Data Matching Rules/Deterministic match
export const fetchDeterministicMatch = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Deterministic_Config`)
    return response?.data
  } catch (error) {
    return error
  }
}

// -----------  Data Matching Rules/Deterministic match
export const fetchDeterministic_Config = async (data) => {

  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}Deterministic_Config`, data);
    return response?.data
  } catch (error) {
    return error
  }
}

// -----------  Survivorship Rules
export const fetchsurvivorshipData = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}SurvivorshipRules`)
    return response?.data
  } catch (error) {
    return error
  }
}


// -----------  Survivorship Rules
export const fetchsurvivorshipDataUpdate = async (data) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}SurvivorshipRules`, data);
    return response?.data
  } catch (error) {
    return error
  }
}
//------------Data Matching Rules/Deterministic match
export const fetchProbabilisticConfig = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Probabilistic_Config`)
    return response?.data
  } catch (error) {
    return error
  }
}
//------------Data Matching Rules/Deterministic match
export const fetchProbabilistic_Config = async (data) => {

  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}Probabilistic_Config`, data);
    return response?.data
  } catch (error) {
    return error
  }
}

//------------User Management
export const fetchGetUsers = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}GetUsers`)
    return response?.data
  } catch (error) {
    return error
  }
}
//-----------User Management
export const fetchGetUsersCreate = async (data) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}InsertUser`, data)
    return response?.data
  } catch (error) {
    return error
  }
}
//-----------User Management
export const fetchGetUsersUpdate = async (data) => {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}UpdateUser`, data)
    return response?.data
  } catch (error) {
    return error
  }
}
//------------NA
export const fetchGetUsersDelete = async (userId) => {
  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}DeleteUser?userId=${userId}`)
    return response?.data
  } catch (error) {
    return error
  }
}
//----------User Management
export const fetchGetRoles = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}GetRoles`)
    return response?.data
  } catch (error) {
    return error
  }
}
//-----------Roles & Permissions
export const fetchRuleCreate = async (data) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}InsertRole`, data)
    return response?.data
  } catch (error) {
    return error
  }
}
//-----------Roles & Permissions
export const fetchUpdateRole = async (data) => {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}UpdateRole`, data)
    return response?.data
  } catch (error) {
    return error
  }
}
//----------NA
export const fetchDeleteRole = async (userId) => {
  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}DeleteRole?roleId=${userId}`)
    return response?.data
  } catch (error) {
    return error
  }
}
//----------Audit Logs / Batch Jobs
export const fetchGetAllBatchStatus = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}GetBatchStatus`)
    return response?.data
  } catch (error) {
    return error
  }
}
//----------NA
export const fetchGetBatchStatus = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}GetBatchStatus/1`)
    return response?.data
  } catch (error) {
    return error
  }
}
//----------Audit Logs / Batch Jobs
export const fetchGetJobStatus = async (batchId) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}GetJobStatus/${batchId}`)
    return response?.data
  } catch (error) {
    return error
  }
}

//-----------Guest Data Search
export const fetchSearchGeust = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}GuestDataForSearch`)
    return response?.data
  } catch (error) {
    return error
  }
}
//-----------Guest Data Create
export const fetchGoldLoyaltyProgram = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}GoldLoyaltyProgram`)
    return response?.data
  } catch (error) {
    return error
  }
}
//-----------Guest Data Create
export const fetchGoldLoyaltyProgramID = async (data) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}GoldLoyaltyProgramTierLevels/${data}`)
    return response?.data
  } catch (error) {
    return error
  }
}
//-----------Guest Data Create
export const fetchInsertGuestData = async (data) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}InsertGuestData`, data);
    return response?.data
  } catch (error) {
    return error
  }
}
//-----------Guest Data Create
export const fetchUpdateGuestData = async (data) => {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}UpdateGuestData`, data);
    return response?.data
  } catch (error) {
    return error
  }
}

//-----------Guest Data Create
// export const fetchUpdateRole = async (data) => {
//   try {
//     const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}UpdateGuestData`, data);
//     return response?.data
//   } catch (error) {
//     return error
//   }
// }




export const datasourceData = [
  { label: "ALL", value: "all" },
  { label: "cloud_storIssue", value: "cloud_storIssue" },
  { label: "AWS S3", value: "AWS S3" },
];

export const staticMenuItems = [
  {
    icon: <IoHome className="w-6 h-6" />,
    text: "Guest 360 Dashboard",
    linkTo: "Guest 360 Dashboard"
  },
  {
    icon: <GrConfigure className="w-6 h-6" />,
    text: "Configuration",
    hasChildren: true,
    linkTo: "configuration",
    children: [
      {
        text: "Admin Dashboard",
        linkTo: "Admin Dashboard",
        icon: ''
      },
      {
        text: "Data Quality Rules",
        linkTo: "Data Quality Rules",
        icon: ''
      },
      {
        text: "Data Matching Rules",
        linkTo: "Data Matching Rules",
        icon: ''
      },
      {
        text: "Survivorship Rule",
        linkTo: "Suvivorship Rule",
        icon: ''
      },
      {
        text: "User  Management",
        linkTo: "User Management",
        icon: ''
      },
      {
        text: "Roles & Permissions",
        linkTo: "Roles & Permissions",
        icon: ''
      },
    ],
  },
  {
    icon: <AiOutlineFolderOpen className="w-6 h-6" />,
    text: "Audit Logs",
    linkTo: "audit-logs",
    hasChildren: true,
    children: [
      {
        text: "Batch Jobs",
        linkTo: "Batch Jobs",
        icon: ''
      }
    ],
  },
  {
    icon: <FaUserAlt className="w-6 h-6" />,
    text: "Guest Data Management",
    hasChildren: true,
    linkTo: "guest-data-management",
    children: [
      {
        text: "My Tasks",
        linkTo: "My Tasks",
        icon: ''
      },
      {
        text: "Data Quality Dashboard",
        linkTo: "Data Quality Dashboard",
        icon: ''
      },
      {
        text: "Guest Data - Search",
        linkTo: "Guest 360 - Search",
        icon: ''
      },
      {
        text: "Guest Data - Create",
        linkTo: "Guest 360 - Create",
        icon: ''
      },
      {
        text: "Guest Data - Cross Ref",
        linkTo: "Guest 360 - Cross Ref",
        icon: ''
      },
      {
        text: "Guest Data - Cross Ref - Manual",
        linkTo: "guest-data-cross-ref-manual",
        icon: ''
      },
      {
        text: "Guest Data - Merge/Unmerge",
        linkTo: "'Guest 360 - Merge/Unmerge",
        icon: ''
      },
    ],
  },
];

export const ChartTabData = [
  {
    id: 0,
    title: 'Guest 360 Dashboard',
    selected: true,
    key: 'Guest 360 Dashboard',
  },
]

export const intakeSubTabs = [
  {
    id: 0,
    title: 'Create',
    selected: true,
    key: 'intakeManIssuement',
  },

  {
    id: 1,
    title: 'View',
    selected: false,
    key: 'queryView',
  }
]

export const medicalRecordsTabs = [
  {
    id: 0,
    title: 'Categorize',
    selected: true,
    key: 'medicalRecordsCategories',
  },

  {
    id: 1,
    title: 'Rules',
    selected: false,
    key: 'medicalRecordsRules',
  }
]
export const columnName = [
  { label: "legacyid", value: "legacyid" },
  { label: "email", value: "email" },
  { label: "city", value: "city" },
  { label: "street_line_1", value: "street_line_1" },
  { label: "State", value: "State" },
  { label: "name", value: "name" },
  { label: "pci_status", value: "pci_status" },
];

export const matchdata = [
  { label: "Name", value: "Name" },
  { label: "date_of_birth", value: "date_of_birth" },
  { label: "gender", value: "gender" },
  { label: "address", value: "address" },
  { label: "mobile_phone", value: "mobile_phone" },
  { label: "Aadhar_Card", value: "Aadhar_Card" },
  { label: "Passport", value: "Passport" },
  { label: "Driving_License", value: "Driving_Licenseport" },
];
export const matchdataValue = [
  { label: "0.1", value: "0.1" },
  { label: "0.2", value: "0.2" },
  { label: "0.3", value: "0.3" },
  { label: "0.4", value: "0.4" },
  { label: "0.5", value: "0.5" },
];

export const ruleDescription = [
  { label: "Check if the column(s) conatins duplicate values across rows.", value: "Check if the column(s) conatins duplicate values across rows." },
];
export const ValidationRule = [
  { label: "null_value_check", value: "null_value_check" },
  { label: "duplicate_value_check", value: "duplicate_value_check" },
  { label: "empty_value_check", value: "empty_value_check" },
  { label: "special_character_check", value: "special_character_check" },
  { label: "datatype_check", value: "datatype_check" },
  { label: "length_check", value: "length_check" },
  { label: "synonyms_check", value: "synonyms_check" },
  { label: "country_check", value: "country_check" },
  { label: "email_format_check", value: "email_format_check" },
  { label: "telephone_format_check", value: "telephone_format_check" },
  { label: "accepted_values_check", value: "accepted_values_check" },
]

export const tableData = [
  {
    id: 0,
    datasource: 'CRM',
    entity: 'guest',
    validationrule: 'datatype_check',
    attribute: 'name',
    ruleparameters: 'string',
    ismandatory: false,
    isactive: false,
  },
  {
    id: 1,
    datasource: 'CRM',
    entity: 'guest',
    validationrule: 'empty_value_check',
    attribute: 'name',
    ruleparameters: '',
    ismandatory: false,
    isactive: false,
  },
  {
    id: 2,
    datasource: 'CRM',
    entity: 'guest',
    validationrule: 'null_value_check',
    attribute: 'name',
    ruleparameters: 'string',
    ismandatory: false,
    isactive: false,
  },
  {
    id: 3,
    datasource: 'CRM',
    entity: 'guest',
    validationrule: 'length_check',
    attribute: 'name',
    ruleparameters: '255',
    ismandatory: false,
    isactive: false,
  },
  {
    id: 4,
    datasource: 'CRM',
    entity: 'guest',
    validationrule: 'special_character_check',
    attribute: 'name',
    ruleparameters: '!,@,#,$,%,^,&,*,+,~,|,=',
    ismandatory: false,
    isactive: false,
  },
]

export const ProbabilisticMatchtableData = [
  {
    id: 0,
    attribute: 'name',
    colwight: '0.2',
    minmatch: '1',
    delete: false,
  },
  {
    id: 1,
    attribute: 'date_of_birth',
    colwight: '0.2',
    minmatch: '1',
    delete: false,
  },
  {
    id: 2,
    attribute: 'aadhar',
    colwight: '0.2',
    minmatch: '1',
    delete: false,
  },
  {
    id: 3,
    attribute: 'passport',
    colwight: '0.2',
    minmatch: '1',
    delete: false,
  },
]

export const getData = [
  { data: 'ACC', source: 1027 },
  { data: 'ADMIN', source: 129 },
  { data: 'ATLAS', source: 1912 },
  { data: 'M4M', source: 1053 },
  { data: 'P3', source: 1713 },
  { data: 'ECIG1', source: 197 },
]

export const pieChartsData = [
  { label: 'ACC', value: 1027 },
  { label: 'ADMIN', value: 1929 },
  { label: 'ATLAS', value: 1312 },
  { label: 'M4M', value: 1053 },
  { label: 'P3', value: 513 },
  { label: 'ECIG1', value: 197 },
];

export const pieChartsGuestSpecial = [
  { label: 'Bedding preference', value: 7 },
  { label: 'Birthday celebration setup', value: 7 },
  { label: 'Childcare services', value: 7 },
  { label: 'Early check-in', value: 6 },
  { label: 'Event planning assistance', value: 7 },
  { label: 'Late check-out', value: 7 },
  { label: 'Room customization', value: 7 },
  { label: 'Room upgrade', value: 6 },
  { label: 'Room with a view', value: 7 },
  { label: 'Sightseeing recommendations', value: 6 },
  { label: 'Spa treatment request', value: 6 },
  { label: 'Special dietary request', value: 6 },
  { label: 'Transportation arrangement', value: 6 },



];

export const AddressTypeData = [
  { label: 'Home', value: 'Home' },
  { label: 'Business', value: 'Business' },
  { label: 'Work', value: 'Work' },
];
export const GuestCategoryData = [
  { label: 'Leisure Travelers', value: 'LEI' },
  { label: 'Business Travelers', value: 'BUS' },
  { label: 'Luxury Travelers', value: 'LUX' },
  { label: 'Adventure and Outdoor Enthusiasts', value: 'ADV' },
  { label: 'Budget Travelers', value: 'BUD' },
  { label: 'Event-Goers', value: 'EVN' },
  { label: 'Cultural and Historical Tourists', value: 'CUL' },
  { label: 'Pet Owners', value: 'PET    ' },
  { label: 'Special Occasion Travelers', value: 'SPE' },
  { label: 'Senior Travelers', value: 'SEN' },
  { label: 'Digital Nomads', value: 'DIG' },
];


export const StateData = [
  { label: 'Andaman and Nicobar Islands', value: 'AN' },
  { label: 'Andhra Pradesh', value: 'AP' },
  { label: 'Arunachal Pradesh', value: 'AR' },
  { label: 'Assam', value: 'AS' },
  { label: 'Bihar', value: 'BR' },
  { label: 'Chandigarh', value: 'CH' },
  { label: 'Chhattisgarh', value: 'CT' },
  { label: 'Dadra and Nagar Haveli and Daman and Diu', value: 'DN' },
  { label: 'Delhi', value: 'DL' },
  { label: 'Goa', value: 'GA' },
  { label: 'Gujarat', value: 'GJ' },
  { label: 'Haryana', value: 'HR' },
  { label: 'Himachal Pradesh', value: 'HP' },
  { label: 'Jammu and Kashmir', value: 'JK' },
  { label: 'Jharkhand', value: 'JH' },
  { label: 'Karnataka', value: 'KA' },
  { label: 'Kerala', value: 'KL' },
  { label: 'Lakshadweep', value: 'LD' },
  { label: 'Madhya Pradesh', value: 'MP' },
  { label: 'Maharashtra', value: 'MH' },
  { label: 'Manipur', value: 'MN' },
  { label: 'Meghalaya', value: 'ML' },
  { label: 'Mizoram', value: 'MZ' },
  { label: 'Nagaland', value: 'NL' },
  { label: 'Odisha', value: 'OD' },
  { label: 'Puducherry', value: 'Puducherry' },
  { label: 'Punjab', value: 'PB' },
  { label: 'Rajasthan', value: 'RJ' },
  { label: 'Sikkim', value: 'SK' },
  { label: 'Tamil Nadu', value: 'TN' },
  { label: 'Telangana', value: 'TS' },
  { label: 'Tripura', value: 'TR' },
  { label: 'Uttar Pradesh', value: 'UP' },
  { label: 'Uttarakhand', value: 'UK' },
  { label: 'West Bengal', value: 'WB' },
]



export const barChartsData = [
  {
    source: "ACC",
    data: 1027,
  },
  {
    source: "ADMIN",
    data: 124,
  },
  {
    source: "ATLAS",
    data: 1912,
  },
  {
    source: "M4M",
    data: 1053,
  },
  {
    source: "P3",
    data: 1713,
  },
  {
    source: "ECIG1",
    data: 197,
  }
];


export const entitySearch = [
  { label: "ALL", value: "all" },
  { label: "ldg_account_bus_card", value: "ldg_account_bus_card" },
];

export const attributeSearch = [
  { label: "ALL", value: "all" },
  { label: "State", value: "state" },
  { label: "Country", value: "country" },
  { label: "street_line_1", value: "street_line_1" },
  { label: "legacyid", value: "legacyid" },
  { label: "name", value: "name" },
  { label: "city", value: "city" },
  { label: "phone", value: "phone" },
  { label: "State", value: "State" },
  { label: "street_line_2", value: "street_line_2" },
]

export const rulesearch = [
  { label: "ALL", value: "all" },
  { label: "empty_value_check", value: "empty_value_check" },
  { label: "null_value_check", value: "null_value_check" },
  { label: "telephone_format_check", value: "telephone_format_check" },
  { label: "country_check", value: "country_check" },
  { label: "length_check", value: "length_check" },
  { label: "special_character_check", value: "special_character_check" },
]
export const statussearch = [
  { label: "ALL", value: "all" },
  { label: "Active", value: true },
  { label: "Inactive", value: false },
]
export const userroledata = [
  { label: "data_entry", value: "data_entry" },
  { label: "admin", value: "admin" },
  { label: "data_steward", value: "data_steward" },
  { label: "data_owner", value: "data_owner" },
  { label: "data_entry", value: "data_entry" },
]


export const rolesAndPermissionsTable = [
  {
    id: 0,
    section: 'Configuration',
    item: '',
    admin: '',
    datasteward: '',
    dataowner: '',
    dataentry: '',
  },
  {
    id: 1,
    section: '',
    item: 'Data Quality Rules',
    admin: 'Edit',
    datasteward: 'No Access',
    dataowner: 'View',
    dataentry: 'No Access'
  },
  {
    id: 2,
    section: '',
    item: 'Data Matching Rules',
    admin: 'Edit',
    datasteward: 'No Access',
    dataowner: 'View',
    dataentry: 'No Access'
  },
  {
    id: 3,
    section: '',
    item: 'Survivorship Rule',
    admin: 'Edit',
    datasteward: 'No Access',
    dataowner: 'View',
    dataentry: 'No Access'
  },
  {
    id: 4,
    section: '',
    item: 'User ManIssuement',
    admin: 'Edit',
    datasteward: 'No Access',
    dataowner: 'View',
    dataentry: 'No Access'
  },
  {
    id: 5,
    section: 'Audit Logs',
    item: '',
    admin: '',
    datasteward: '',
    dataowner: '',
    dataentry: '',
  },
  {
    id: 6,
    section: '',
    item: 'Batch Jobs',
    admin: 'Edit',
    datasteward: 'Edit',
    dataowner: 'Edit',
    dataentry: 'View'
  },
  {
    id: 7,
    section: 'Guest Data ManIssuement',
    item: '',
    admin: '',
    datasteward: '',
    dataowner: '',
    dataentry: '',
  },
  {
    id: 8,
    section: '',
    item: 'MY Tasks',
    admin: 'Edit',
    datasteward: 'Edit',
    dataowner: 'Edit',
    dataentry: 'Edit'
  },
  {
    id: 9,
    section: '',
    item: 'Guest 360 Dashboard',
    admin: 'Edit',
    datasteward: 'Edit',
    dataowner: 'Edit',
    dataentry: 'Edit'
  },
  {
    id: 10,
    section: '',
    item: 'Data Quality Dashboard',
    admin: 'Edit',
    datasteward: 'Edit',
    dataowner: 'Edit',
    dataentry: 'Edit'
  },
  {
    id: 11,
    section: '',
    item: 'Guest Data - Search',
    admin: 'Edit',
    datasteward: 'Edit',
    dataowner: 'Edit',
    dataentry: 'Edit'
  },
  {
    id: 12,
    section: '',
    item: 'Guest Data - Create',
    admin: 'Edit',
    datasteward: 'Edit',
    dataowner: 'Edit',
    dataentry: 'Edit'
  },
  {
    id: 13,
    section: '',
    item: 'Guest Data - Update',
    admin: 'Edit',
    datasteward: 'Edit',
    dataowner: 'Edit',
    dataentry: 'Edit'
  },
  {
    id: 14,
    section: '',
    item: 'Guest Data - Cross Ref',
    admin: 'Edit',
    datasteward: 'Edit',
    dataowner: 'Edit',
    dataentry: 'Edit'
  },
  {
    id: 15,
    section: '',
    item: 'Guest Data - Delete',
    admin: 'Edit',
    datasteward: 'Edit',
    dataowner: 'Edit',
    dataentry: 'Edit'
  },
  {
    id: 16,
    section: '',
    item: 'Guest Data - erge/UnMerge',
    admin: 'Edit',
    datasteward: 'Edit',
    dataowner: 'Edit',
    dataentry: 'Edit'
  },
]

export const UserStatus = [
  { label: "Active", value: "active" },
  { label: "In-Active", value: "inactive" },
];

export const MfaEnabled = [
  { label: "True", value: "true" },
  { label: "False", value: "false" },
];


export const UserRole = [
  { label: "ManIssuer", value: "manIssuer" },
];

export const Country = [
  { label: "India", value: "india" },
  { label: "United State", value: "unitedState" },
  { label: "Pakisthan", value: "pakisthan" },
  { label: "France", value: "france" },
  { label: "Japan", value: "japan" },
  { label: "Maldivs", value: "maldivs" },
  { label: "Germany", value: "germany" },
  { label: "Fransisco", value: "fransisco" },
  { label: "New Zeland", value: "newZeland" },
  { label: "Shrilanka", value: "shrilanka" },
  { label: "UAE", value: "uae" },
];

export const TimeZone = [
  { label: "GMT+05:30", value: "gmt" },
  { label: "UTC+04:20", value: "utc" },
  { label: "EST+09:45", value: "est" },
  { label: "CST+07:12", value: "cst" },
];

export const GuestDataSearchData = [
  {
    id: 0,
    guest_id: "1",
    guest_category_type: "Leisure Travelers",
    full_name: "Arjun Kumar Sharma",
    nationality: "Indian",
    company_name: "Tech Solution Pvt Ltd",
    address_line_1: "123 Main Street",
    address_line_2: "Apartment 101",
    address_line_3: "XYZ Towers",
    city: "Mumbai",
    country: "India",
    start_date: '2023-01-01',
    end_date: '',
    is_active: '',
    edit: '',
  },
  {
    id: 1,
    guest_id: "2",
    guest_category_type: "Leisure Travelers",
    full_name: "Arjun Kumar Sharma",
    nationality: "Indian",
    company_name: "Tech Solution Pvt Ltd",
    address_line_1: "123 Main Street",
    address_line_2: "Apartment 101",
    address_line_3: "XYZ Towers",
    city: "Mumbai",
    country: "India",
    start_date: '2023-01-01',
    end_date: '',
    is_active: '',
    edit: '',
  },
  {
    id: 2,
    guest_id: "3",
    guest_category_type: "Senior Travelers",
    full_name: "Arjun Kumar Sharma",
    nationality: "Indian",
    company_name: "Tech Solution Pvt Ltd",
    address_line_1: "123 Main Street",
    address_line_2: "Apartment 101",
    address_line_3: "XYZ Towers",
    city: "Mumbai",
    country: "India",
    start_date: '2023-01-01',
    end_date: '',
    is_active: '',
    edit: '',
  },
  {
    id: 3,
    guest_id: "4",
    guest_category_type: "Luxary Travelers",
    full_name: "Arjun Kumar Sharma",
    nationality: "Indian",
    company_name: "Tech Solution Pvt Ltd",
    address_line_1: "123 Main Street",
    address_line_2: "Apartment 101",
    address_line_3: "XYZ Towers",
    city: "Mumbai",
    country: "India",
    start_date: '2023-01-01',
    end_date: '',
    is_active: '',
    edit: '',
  },
  {
    id: 4,
    guest_id: "5",
    guest_category_type: "Business Travelers",
    full_name: "Arjun Kumar Sharma",
    nationality: "Indian",
    company_name: "Tech Solution Pvt Ltd",
    address_line_1: "123 Main Street",
    address_line_2: "Apartment 101",
    address_line_3: "XYZ Towers",
    city: "Mumbai",
    country: "India",
    start_date: '2023-01-01',
    end_date: '',
    is_active: '',
    edit: '',
  },
  {
    id: 5,
    guest_id: "6",
    guest_category_type: "Business Travelers",
    full_name: "Arjun Kumar Sharma",
    nationality: "Indian",
    company_name: "Tech Solution Pvt Ltd",
    address_line_1: "123 Main Street",
    address_line_2: "Apartment 101",
    address_line_3: "XYZ Towers",
    city: "Mumbai",
    country: "India",
    start_date: '2023-01-01',
    end_date: '',
    is_active: '',
    edit: '',
  }, {
    id: 6,
    guest_id: "7",
    guest_category_type: "Business Travelers",
    full_name: "Arjun Kumar Sharma",
    nationality: "Indian",
    company_name: "Tech Solution Pvt Ltd",
    address_line_1: "123 Main Street",
    address_line_2: "Apartment 101",
    address_line_3: "XYZ Towers",
    city: "Mumbai",
    country: "India",
    start_date: '2023-01-01',
    end_date: '',
    is_active: '',
    edit: '',
  }, {
    id: 7,
    guest_id: "8",
    guest_category_type: "Business Travelers",
    full_name: "Arjun Kumar Sharma",
    nationality: "Indian",
    company_name: "Tech Solution Pvt Ltd",
    address_line_1: "123 Main Street",
    address_line_2: "Apartment 101",
    address_line_3: "XYZ Towers",
    city: "Mumbai",
    country: "India",
    start_date: '2023-01-01',
    end_date: '',
    is_active: '',
    edit: '',
  }, {
    id: 8,
    guest_id: "9",
    guest_category_type: "Business Travelers",
    full_name: "Arjun Kumar Sharma",
    nationality: "Indian",
    company_name: "Tech Solution Pvt Ltd",
    address_line_1: "123 Main Street",
    address_line_2: "Apartment 101",
    address_line_3: "XYZ Towers",
    city: "Mumbai",
    country: "India",
    start_date: '2023-01-01',
    end_date: '',
    is_active: '',
    edit: '',
  }, {
    id: 9,
    guest_id: "10",
    guest_category_type: "Business Travelers",
    full_name: "Arjun Kumar Sharma",
    nationality: "Indian",
    company_name: "Tech Solution Pvt Ltd",
    address_line_1: "123 Main Street",
    address_line_2: "Apartment 101",
    address_line_3: "XYZ Towers",
    city: "Mumbai",
    country: "India",
    start_date: '2023-01-01',
    end_date: '',
    is_active: '',
    edit: '',
  }, {
    id: 10,
    guest_id: "11",
    guest_category_type: "Business Travelers",
    full_name: "Arjun Kumar Sharma",
    nationality: "Indian",
    company_name: "Tech Solution Pvt Ltd",
    address_line_1: "123 Main Street",
    address_line_2: "Apartment 101",
    address_line_3: "XYZ Towers",
    city: "Mumbai",
    country: "India",
    start_date: '2023-01-01',
    end_date: '',
    is_active: '',
    edit: '',
  }, {
    id: 11,
    guest_id: "12",
    guest_category_type: "Business Travelers",
    full_name: "Arjun Kumar Sharma",
    nationality: "Indian",
    company_name: "Tech Solution Pvt Ltd",
    address_line_1: "123 Main Street",
    address_line_2: "Apartment 101",
    address_line_3: "XYZ Towers",
    city: "Mumbai",
    country: "India",
    start_date: '2023-01-01',
    end_date: '',
    is_active: '',
    edit: '',
  }, {
    id: 12,
    guest_id: "13",
    guest_category_type: "Business Travelers",
    full_name: "Arjun Kumar Sharma",
    nationality: "Indian",
    company_name: "Tech Solution Pvt Ltd",
    address_line_1: "123 Main Street",
    address_line_2: "Apartment 101",
    address_line_3: "XYZ Towers",
    city: "Mumbai",
    country: "India",
    start_date: '2023-01-01',
    end_date: '',
    is_active: '',
    edit: '',
  },
]

export const GuestCreateAddressData = [
  {
    id: 0,
    addressType: "Home",
    addressLine1: "123 Main Street",
    addressLine2: "Apartment 101",
    addressLine3: "XYZ Towers",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    zipCode: "400001",
    isActive: "",
  }
]

export const IdentificationData = [
  {
    id: 0,
    identificationType: "Aadhar_card",
    identificationValue: "123456789023",
    issuingCountry: "India",
    issueDate: "15-01-2020",
    expiryDate: "15-01-2030",
  }
]


export const nationality = [
  { label: "India", value: "india" },
  { label: "NRI", value: "NRI" }
]
export const genderDate = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
]
export const married = [
  { label: "Married", value: "Married" },
  { label: "unMarried", value: "unMarried" }
]
export const income = [
  { label: "Low", value: "low" },
  { label: "Middle", value: "Middle" },
  { label: "High", value: "High" }
]
export const bedtype = [
  { label: "King_Size", value: "King_Size" },
  { label: "Queen_Size", value: "Queen_Size" },
]
export const floorlevel = [
  { label: "Low", value: "low" },
  { label: "Mid", value: "Mid" },
  { label: "High", value: "High" }
]
export const roomviewpref = [
  { label: "Fountain View", value: "Fountain View" },
  { label: "Ocean View", value: "Ocean View" },
  { label: "City View", value: "City View" },
  { label: "Mountain View", value: "Mountain View" },
]
export const bathslippers = [
  { label: "Large", value: "Large" },
  { label: "Small", value: "Small" },
  { label: "Medium	", value: "Medium	" },
]
export const favouritecuisine = [
  { label: "Indian, Italian", value: "Indian, Italian" },
  { label: "French, Chinese	", value: "French, Chinese" },
  { label: "Thai, Mexican", value: "Thai, Mexican	" },
  { label: "French, Japanese", value: "French, Japanese" },
  { label: "Japanese, Italian", value: "Japanese, Italian" },
  { label: "Indian, Mexican", value: "Indian, Mexican" },
  { label: "Thai, Italian", value: "Thai, Italian" },
  { label: "French, Italian", value: "French, Italian" },
  { label: "Thai, Chinese", value: "Thai, Chinese" },
  { label: "Indian, Japanese", value: "Indian, Japanese" },
  { label: "French, Mexican", value: "French, Mexican" },
  { label: "Indian, Chinese", value: "Indian, Chinese" },
  { label: "Thai, Japanese", value: "Thai, Japanese" },
  { label: "Japanese, Mexican", value: "Japanese, Mexican" },
]
export const airporttransfer = [
  { label: "Limousine", value: "Limousine" },
  { label: "Shuttle Service, Private Car", value: "Shuttle Service, Private Car" },
  { label: "Shuttle Service, Airport Taxi", value: "Shuttle Service, Airport Taxi" },
  { label: "Private Car, Limousine", value: "Private Car, Limousine" },
  { label: "Airport Taxi, Private Car", value: "Airport Taxi, Private Car" },
  { label: "Shuttle Service, Airport Taxi, Limous", value: "Shuttle Service, Airport Taxi, Limous" },
  { label: "Private Car, Airport Taxi", value: "Private Car, Airport Taxi" },
  { label: "Shuttle Service, Limousine", value: "Shuttle Service, Limousine" },
]
export const conceirgeservices = [
  { label: "Reservations twice a day", value: "Reservations twice a day" },
  { label: "Tour Booking", value: "Tour Booking" },
  { label: "Concierge Assistance", value: "Concierge Assistance" },
  { label: "Activity Reservations", value: "Activity Reservations" },
]
export const connectivityreg = [
  { label: "Wifi", value: "Wifi" },
  { label: "Ethernet", value: "Ethernet" }
]
export const promotionalmaterials = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "No" },
]
export const donotdisturb = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "No" },
]
export const pillowtype = [
  { label: "Film", value: "Film" },
  { label: "Soft", value: "Soft" },
  { label: "Medium", value: "Medium" },
]
export const roomtemppref = [
  { label: "Cool", value: "Cool" },
  { label: "Warm", value: "Warm" },
  { label: "Neutral", value: "Neutral" },
]
export const dietaryallergy = [
  { label: "Vegetarian", value: "Vegetarian" },
  { label: "No Dietary Restrictions	", value: "No Dietary Restrictions" },
  { label: "Vegan", value: "Vegan" },
  { label: "Nut Allergy	", value: "Nut Allergy" },
  { label: "Lactose Intolerant", value: "Lactose Intolerant" },
]
export const celebratoryoccasion = [
  { label: "Birthday, Anniversary", value: "Birthday, Anniversary" },
  { label: "Wedding", value: "Wedding" },
  { label: "Anniversary", value: "Anniversary" },
  { label: "Graduation", value: "Graduation" },
  { label: "Birthday", value: "Birthday" },
]
export const spatreatments = [
  { label: "Swedish MassIssue", value: "Swedish MassIssue" },
  { label: "Aromatherapy", value: "Aromatherapy" },
  { label: "Hot Stone MassIssue	", value: "Hot Stone MassIssue" },
  { label: "Deep Tissue MassIssue	", value: "Deep Tissue MassIssue" },
]
export const housekeepingschedule = [
  { label: "12 AM - 2 AM", value: "12 AM - 2 AM" },
  { label: "1 AM - 3 AM", value: "1 AM - 3 AM" },
  { label: "2 AM - 4 AM", value: "2 AM - 4 AM" },
  { label: "3 AM - 5 AM", value: "3 AM - 5 AM" },
  { label: "4 AM - 6 AM", value: "4 AM - 6 AM" },
  { label: "5 AM - 7 AM", value: "5 AM - 7 AM" },
  { label: "6 AM - 8 AM", value: "6 AM - 8 AM" },
  { label: "7 AM - 9 AM", value: "7 AM - 9 AM" },
  { label: "8 AM - 10 AM", value: "8 AM - 10 AM" },
  { label: "9 AM - 11 AM", value: "9 AM - 11 AM" },
  { label: "10 AM - 12 PM", value: "10 AM - 12 PM" },
  { label: "11 AM - 1 PM", value: "11 AM - 1 PM" },
  { label: "12 PM - 2 PM", value: "12 PM - 2 PM" },
  { label: "1 PM - 3 PM", value: "1 PM - 3 PM" },
  { label: "2 PM - 4 PM", value: "2 PM - 4 PM" },
  { label: "3 PM - 5 PM", value: "3 PM - 5 PM" },
  { label: "4 PM - 6 PM", value: "4 PM - 6 PM" },
  { label: "5 PM - 7 PM", value: "5 PM - 7 PM" },
  { label: "6 PM - 8 PM", value: "6 PM - 8 PM" },
  { label: "7 PM - 9 PM", value: "7 PM - 9 PM" },
  { label: "8 PM - 10 PM", value: "8 PM - 10 PM" },
  { label: "9 PM - 11 PM", value: "9 PM - 11 PM" },
  { label: "10 PM - 12 AM", value: "10 PM - 12 AM" },
  { label: "11 PM - 1 AM", value: "11 PM - 1 AM" },
]
export const modeofcommunication = [
  { label: "Email, SMS", value: "Email, SMS" },
  { label: "Email", value: "Email" },
  { label: "Email, Phone", value: "Email, Phone" },
  { label: "Phone", value: "Phone" },
]
export const preferreddiningtimes = [
  { label: "Lunch, Dinner", value: "Lunch, Dinner" },
  { label: "Breakfast, Dinner", value: "Breakfast, Dinner" },
  { label: "Breakfast, Lunch", value: "Breakfast, Lunch" },
]

export const SocialMediaData = [
  {
    id: 0,
    socialMediaApplication: "facebook",
    socialMediaProfile: "https://www.facebook.com/Arjun.Sharma",
  }
]

export const LoyalityData = [
  {
    id: 0,
    loyalityProgramMembership: "Elite Rewards",
    tierLevel: "Basic",
    startDate: "22-07-2022",
    endDate: "21-07-2026",
    earningHistory: "2900",
    remptionHistory: "145",
    loyalityPoints: "11600",
  }
]

export const identificationtype = [
  { label: "Aadhar_Card", value: "Aadhar_Card" },
  { label: "PassPort", value: "PassPort" },
  { label: "Driving_License", value: "Driving_License" },
]
export const issuingcountry = [
  { label: "India", value: "India" },
  { label: "USA", value: "USA" },
  { label: "UK", value: "UK" },
  { label: "Canada", value: "Canada" },
  { label: "Sweden", value: "Sweden" },
  { label: "Australia", value: "Australia" },
  { label: "Germany", value: "Germany" },
]
export const socialmediaData = [
  { label: "Facebook", value: "Facebook" },
  { label: "Twitter", value: "Twitter" },
  { label: "instagram", value: "instagram" },
  { label: "Linkedin", value: "Linkedin" },
  /* { label: "YouTube", value: "YouTube" },
  { label: "WhatsApp", value: "WhatsApp" },
  { label: "TikTOk", value: "TikTOk" }, */
]

export const CrossTableData = [
  {
    tableName: "Generic",
    recoedName: "Source System ID",
    goldenRecord: '10021',
    crm: '10021',
    pms: '10021',
    crs: '10021',

  },
  {
    tableName: "Generic",
    recoedName: "Batch Process ID",
    goldenRecord: '10234',
    crm: '10234',
    pms: '10234',
    crs: '10234',
  },
  {
    tableName: "Generic",
    recoedName: "Created Date",
    goldenRecord: '2020-01-15',
    crm: '2020-01-15',
    pms: '2020-01-15',
    crs: '2020-01-15',
  },
  {
    tableName: "Generic",
    recoedName: "Last Updated Date",
    goldenRecord: '2020-01-15',
    crm: '2020-01-15',
    pms: '2020-01-15',
    crs: '2020-01-15',
  },
  {
    tableName: "Generic Details",
    recoedName: "",
    goldenRecord: '',
    crm: '',
    pms: '',
    crs: '',
  },

  {
    id: 0,
    tableName: "Generic Details",
    recoedName: "First Name",
    goldenRecord: 'Arjun',
    crm: 'Arjun',
    pms: 'Arjun',
    crs: 'Arjun',
  },
  {
    id: 1,
    tableName: "Generic Details",
    recoedName: "Middie Name",
    goldenRecord: 'Kumar',
    crm: 'Kumar',
    pms: 'Kumar',
    crs: 'Kumar',
  },
  {
    id: 2,
    tableName: "Generic Details",
    recoedName: "LastName",
    goldenRecord: 'Sharma',
    crm: 'Sharma',
    pms: 'Sharma',
    crs: 'Sharma',
  },
  {
    id: 3,
    tableName: "Generic Details",
    recoedName: "Date Of Birth",
    goldenRecord: "2023-01-01",
    crm: "2023-01-01",
    pms: "2023-01-01",
    crs: "2023-01-01",
  },
  {
    id: 4,
    tableName: "Generic Details",
    recoedName: "Gender",
    goldenRecord: "Male",
    crm: "Male",
    pms: "Male",
    crs: "Male",
  },
  {
    id: 5,
    tableName: "Generic Details",
    recoedName: "Marital Status",
    goldenRecord: "Married",
    crm: "Married",
    pms: "Married",
    crs: "Married",
  },
  {
    id: 6,
    tableName: "Generic Details",
    recoedName: "Income Level",
    goldenRecord: "Middle",
    crm: "Middle",
    pms: "Middle",
    crs: "Middle",
  },
  {
    id: 7,
    tableName: "Generic Details",
    recoedName: "Nationality",
    goldenRecord: "Indian",
    crm: "Indian",
    pms: "Indian",
    crs: "Indian",
  },
  {
    id: 8,
    tableName: "Generic Details",
    recoedName: "company name",
    goldenRecord: "Tech Solution Pvt Ltd",
    crm: "Tech Solution Pvt Ltd",
    pms: "Tech Solution Pvt Ltd",
    crs: "Tech Solution Pvt Ltd",
  },
  {
    id: 9,
    tableName: "Generic Contact Details",
    recoedName: "",
    goldenRecord: "",
    crm: "",
    pms: "",
    crs: "",
  },
  {
    id: 10,
    tableName: "Generic Contact Details",
    recoedName: "business_mobile_phone_country_code ",
    goldenRecord: "91",
    crm: "91",
    pms: "91",
    crs: "91",
  },
  {
    id: 11,
    tableName: "Generic Contact Details",
    recoedName: "business_phone",
    goldenRecord: "22-1234567",
    crm: "22-1234567",
    pms: "22-1234567",
    crs: "22-1234567",
  },
  {
    id: 12,
    tableName: "Generic Contact Details",
    recoedName: "home_phone_country_code",
    goldenRecord: "91",
    crm: "91",
    pms: "91",
    crs: "91",
  },
  {
    id: 13,
    tableName: "Generic Contact Details",
    recoedName: "home_phone",
    goldenRecord: "22-9876543",
    crm: "22-9876543",
    pms: "22-9876543",
    crs: "22-9876543",
  },
  {
    id: 14,
    tableName: "Generic Contact Details",
    recoedName: "mobile_phone_country_code",
    goldenRecord: "91",
    crm: "91",
    pms: "91",
    crs: "91",
  },
  {
    id: 15,
    tableName: "Generic Contact Details",
    recoedName: "mobile_phone",
    goldenRecord: "9876543210",
    crm: "9876543210",
    pms: "9876543210",
    crs: "9876543210",
  },
  {
    id: 16,
    tableName: "Generic Contact Details",
    recoedName: "alternate_phone_country_code",
    goldenRecord: "91",
    crm: "91",
    pms: "91",
    crs: "91",
  },
  {
    id: 17,
    tableName: "Generic Contact Details",
    recoedName: "alternate_phone",
    goldenRecord: "9870012345",
    crm: "9870012345",
    pms: "9870012345",
    crs: "9870012345",
  },
  {
    id: 18,
    tableName: "Generic Contact Details",
    recoedName: "business_email",
    goldenRecord: "arjun_sharma@company1.com",
    crm: "arjun_sharma@company1.com",
    pms: "arjun_sharma@company1.com",
    crs: "arjun_sharma@company1.com",
  },
  {
    id: 19,
    tableName: "Generic Contact Details",
    recoedName: "personal_email",
    goldenRecord: "arjun_sharma@gmail.com",
    crm: "arjun_sharma@gmail.com",
    pms: "arjun_sharma@gmail.com",
    crs: "arjun_sharma@gmail.com",
  },
  {
    id: 20,
    tableName: "Generic Contact Details",
    recoedName: "alternate_email",
    goldenRecord: "arjun_sharma@yahoo.com",
    crm: "arjun_sharma@yahoo.com",
    pms: "arjun_sharma@yahoo.com",
    crs: "arjun_sharma@yahoo.com",
  },
  {
    id: 21,
    tableName: "Generic Address",
    recoedName: "",
    goldenRecord: "",
    crm: "",
    pms: "",
    crs: "",
  },
  {
    id: 22,
    tableName: "Generic Address",
    recoedName: "Address Type",
    goldenRecord: "123 Main Street",
    crm: "123 Main Street",
    pms: "123 Main Street",
    crs: "123 Main Street",
  },
  {
    id: 23,
    tableName: "Generic Address",
    recoedName: "adress line 1",
    goldenRecord: "Apariment 101",
    crm: "Apariment 101",
    pms: "Apariment 101",
    crs: "Apariment 101",
  },
  {
    id: 24,
    tableName: "Generic Address",
    recoedName: "adress line 2",
    goldenRecord: "XYZ Towers",
    crm: "XYZ Towers",
    pms: "XYZ Towers",
    crs: "XYZ Towers",
  },
  {
    id: 25,
    tableName: "Generic Address",
    recoedName: "City",
    goldenRecord: "Mumbai",
    crm: "Mumbai",
    pms: "Mumbai",
    crs: "Mumbai",
  },
  {
    id: 26,
    tableName: "Generic Address",
    recoedName: "Country",
    goldenRecord: "india",
    crm: "india",
    pms: "india",
    crs: "india",
  },
  {
    id: 27,
    tableName: "Generic Address",
    recoedName: "Zip_code",
    goldenRecord: "400001",
    crm: "400001",
    pms: "400001",
    crs: "400001",
  },
  {
    id: 28,
    tableName: "Generic Identification",
    recoedName: "",
    goldenRecord: "",
    crm: "",
    pms: "",
    crs: "",
  },
  {
    id: 29,
    tableName: "Generic Identification",
    recoedName: "identification type",
    goldenRecord: "Aadhar_Card",
    crm: "Aadhar_Card",
    pms: "Aadhar_Card",
    crs: "Aadhar_Card",
  },
  {
    id: 30,
    tableName: "Generic Identification",
    recoedName: "identification_value",
    goldenRecord: "1234567890",
    crm: "1234567890",
    pms: "1234567890",
    crs: "1234567890",
  },
  {
    id: 31,
    tableName: "Generic Identification",
    recoedName: "issuing_country",
    goldenRecord: "india",
    crm: "india",
    pms: "india",
    crs: "india",
  },
  {
    id: 32,
    tableName: "Generic Identification",
    recoedName: "issue_date",
    goldenRecord: "2020-01-15",
    crm: "2020-01-15",
    pms: "2020-01-15",
    crs: "2020-01-15",
  },
  {
    id: 33,
    tableName: "Generic Identification",
    recoedName: "expiry_date",
    goldenRecord: "2020-01-15",
    crm: "2020-01-15",
    pms: "2020-01-15",
    crs: "2020-01-15",
  },
  {
    id: 34,
    tableName: "Generic Social Media",
    recoedName: "",
    goldenRecord: "",
    crm: "",
    pms: "",
    crs: "",
  },
  {
    id: 35,
    tableName: "Generic Social Media",
    recoedName: "social_media_app",
    goldenRecord: "Facebook",
    crm: "Facebook",
    pms: "Facebook",
    crs: "Facebook",
  },
  {
    id: 35,
    tableName: "Generic Social Media",
    recoedName: "profile",
    goldenRecord: "https://www.facebook.com/Arjun_sharma",
    crm: "https://www.facebook.com/Arjun_sharma",
    pms: "https://www.facebook.com/Arjun_sharma",
    crs: "https://www.facebook.com/Arjun_sharma",
  },

]
export const CrossManualTableData = [
  {
    tableName: "Generic",
    recoedName: "Source System ID",
    sourcerecord: '10021',
    targetecord: '10021'

  },
  {
    tableName: "Generic",
    recoedName: "Batch Process ID",
    sourcerecord: '10234',
    targetecord: '10234'
  },
  {
    tableName: "Generic",
    recoedName: "Created Date",
    sourcerecord: '2020-01-15',
    targetecord: '2020-01-15'
  },
  {
    tableName: "Generic",
    recoedName: "Last Updated Date",
    sourcerecord: '2020-01-15',
    targetecord: '2020-01-15'
  },
  {
    tableName: "Generic Details",
    recoedName: "",
    sourcerecord: '',
    targetecord: ''
  },

  {
    id: 0,
    tableName: "Generic Details",
    recoedName: "First Name",
    sourcerecord: 'Arjun',
    targetecord: 'Arjun'
  },
  {
    id: 1,
    tableName: "Generic Details",
    recoedName: "Middie Name",
    sourcerecord: 'Kumar',
    targetecord: 'Kumar'
  },
  {
    id: 2,
    tableName: "Generic Details",
    recoedName: "LastName",
    sourcerecord: 'Sharma',
    targetecord: 'Sharma'
  },
  {
    id: 3,
    tableName: "Generic Details",
    recoedName: "Date Of Birth",
    sourcerecord: "2023-01-01",
    targetecord: "2023-01-01"
  },
  {
    id: 4,
    tableName: "Generic Details",
    recoedName: "Gender",
    sourcerecord: "Male",
    targetecord: "Male",
  },
  {
    id: 5,
    tableName: "Generic Details",
    recoedName: "Marital Status",
    sourcerecord: "Married",
    targetecord: "Married",
  },
  {
    id: 6,
    tableName: "Generic Details",
    recoedName: "Income Level",
    sourcerecord: "Middle",
    targetecord: "Middle",
  },
  {
    id: 7,
    tableName: "Generic Details",
    recoedName: "Nationality",
    sourcerecord: "Indian",
    targetecord: "Indian",
  },
  {
    id: 8,
    tableName: "Generic Details",
    recoedName: "company name",
    sourcerecord: "Tech Solution Pvt Ltd",
    targetecord: "Tech Solution Pvt Ltd",
  },
  {
    id: 9,
    tableName: "Generic Contact Details",
    recoedName: "",
    sourcerecord: "",
    targetecord: "",
  },
  {
    id: 10,
    tableName: "Generic Contact Details",
    recoedName: "business_mobile_phone_country_code ",
    sourcerecord: "91",
    targetecord: "91"
  },
  {
    id: 11,
    tableName: "Generic Contact Details",
    recoedName: "business_phone",
    sourcerecord: "22-1234567",
    targetecord: "22-1234567",
  },
  {
    id: 12,
    tableName: "Generic Contact Details",
    recoedName: "home_phone_country_code",
    sourcerecord: "91",
    targetecord: "91",
  },
  {
    id: 13,
    tableName: "Generic Contact Details",
    recoedName: "home_phone",
    sourcerecord: "22-9876543",
    targetecord: "22-9876543",
  },
  {
    id: 14,
    tableName: "Generic Contact Details",
    recoedName: "mobile_phone_country_code",
    sourcerecord: "91",
    targetecord: "91",
  },
  {
    id: 15,
    tableName: "Generic Contact Details",
    recoedName: "mobile_phone",
    sourcerecord: "9876543210",
    targetecord: "9876543210",
  },
  {
    id: 16,
    tableName: "Generic Contact Details",
    recoedName: "alternate_phone_country_code",
    sourcerecord: "91",
    targetecord: "91",
  },
  {
    id: 17,
    tableName: "Generic Contact Details",
    recoedName: "alternate_phone",
    sourcerecord: "9870012345",
    targetecord: "9870012345",
  },
  {
    id: 18,
    tableName: "Generic Contact Details",
    recoedName: "business_email",
    sourcerecord: "arjun_sharma@company1.com",
    targetecord: "arjun_sharma@company1.com",
  },
  {
    id: 19,
    tableName: "Generic Contact Details",
    recoedName: "personal_email",
    sourcerecord: "arjun_sharma@gmail.com",
    targetecord: "arjun_sharma@gmail.com",
  },
  {
    id: 20,
    tableName: "Generic Contact Details",
    recoedName: "alternate_email",
    sourcerecord: "arjun_sharma@yahoo.com",
    targetecord: "arjun_sharma@yahoo.com",
  },
  {
    id: 21,
    tableName: "Generic Address",
    recoedName: "",
    sourcerecord: "",
    targetecord: "",
  },
  {
    id: 22,
    tableName: "Generic Address",
    recoedName: "Address Type",
    sourcerecord: "123 Main Street",
    targetecord: "123 Main Street",
  },
  {
    id: 23,
    tableName: "Generic Address",
    recoedName: "adress line 1",
    sourcerecord: "Apariment 101",
    targetecord: "Apariment 101",
  },
  {
    id: 24,
    tableName: "Generic Address",
    recoedName: "adress line 2",
    sourcerecord: "XYZ Towers",
    targetecord: "XYZ Towers",
  },
  {
    id: 25,
    tableName: "Generic Address",
    recoedName: "City",
    goldensourcerecordRecord: "Mumbai",
    targetecord: "Mumbai",
  },
  {
    id: 26,
    tableName: "Generic Address",
    recoedName: "Country",
    sourcerecord: "india",
    targetecord: "india",
  },
  {
    id: 27,
    tableName: "Generic Address",
    recoedName: "Zip_code",
    sourcerecord: "400001",
    targetecord: "400001",
  },
  {
    id: 28,
    tableName: "Generic Identification",
    recoedName: "",
    sourcerecord: "",
    targetecord: "",
  },
  {
    id: 29,
    tableName: "Generic Identification",
    recoedName: "identification type",
    sourcerecord: "Aadhar_Card",
    targetecord: "Aadhar_Card",
  },
  {
    id: 30,
    tableName: "Generic Identification",
    recoedName: "identification_value",
    sourcerecord: "1234567890",
    targetecord: "1234567890",
  },
  {
    id: 31,
    tableName: "Generic Identification",
    recoedName: "issuing_country",
    sourcerecord: "india",
    targetecord: "india",
  },
  {
    id: 32,
    tableName: "Generic Identification",
    recoedName: "issue_date",
    sourcerecord: "2020-01-15",
    targetecord: "2020-01-15",
  },
  {
    id: 33,
    tableName: "Generic Identification",
    recoedName: "expiry_date",
    sourcerecord: "2020-01-15",
    targetecord: "2020-01-15",
  },
  {
    id: 34,
    tableName: "Generic Social Media",
    recoedName: "",
    sourcerecord: "",
    targetecord: "",
  },
  {
    id: 35,
    tableName: "Generic Social Media",
    recoedName: "social_media_app",
    sourcerecord: "Facebook",
    targetecord: "Facebook",
  },
  {
    id: 35,
    tableName: "Generic Social Media",
    recoedName: "profile",
    sourcerecord: "https://www.facebook.com/Arjun_sharma",
    targetecord: "https://www.facebook.com/Arjun_sharma",
  },

]
export const batchJobsStatustbleData = [
  {
    batchid: "0ae33fb3-6156-453c-a856-0013fbf82ed1",
    batchstatus: "Successful",
    batchcomment: "Data Quality Batch Run SuccessFull",
    startedat: "26-11-2023 08:47:02",
    endedat: "26-11-2023 08:47:02",
  },
  {
    batchid: "0ae33fb3-6156-453c-a856-0013fbf82ed1",
    batchstatus: "In Progress",
    batchcomment: "",
    startedat: "26-11-2023 08:47:02",
    endedat: "",
  },
  {
    batchid: "0ae33fb3-6156-453c-a856-0013fbf82ed1",
    batchstatus: "In Progres",
    batchcomment: "",
    startedat: "26-11-2023 08:47:02",
    endedat: "",
  },
  {
    batchid: "0ae33fb3-6156-453c-a856-0013fbf82ed1",
    batchstatus: "Failed",
    batchcomment: "Data Quality Batch Run Failed",
    startedat: "26-11-2023 08:47:02",
    endedat: "26-11-2023 08:47:02",
  },
  {
    batchid: "0ae33fb3-6156-453c-a856-0013fbf82ed1",
    batchstatus: "In Progres",
    batchcomment: "",
    startedat: "26-11-2023 08:47:02",
    endedat: "",
  },
  {
    batchid: "0ae33fb3-6156-453c-a856-0013fbf82ed1",
    batchstatus: "Successful",
    batchcomment: "Data Quality Batch Run SuccessFull",
    startedat: "26-11-2023 08:47:02",
    endedat: "26-11-2023 08:47:02",
  },
  {
    batchid: "0ae33fb3-6156-453c-a856-0013fbf82ed1",
    batchstatus: "Successful",
    batchcomment: "Data Quality Batch Run SuccessFull",
    startedat: "26-11-2023 08:47:02",
    endedat: "26-11-2023 08:47:02",
  },
];

export const userManIssuementTableData = [
  {
    id: 0,
    firstname: "Arjun",
    lastname: "Sharma",
    email: "arjun_sharma@company1.com",
    phonenumber: "91-22-1234567",
    username: "asharma",
    userrole: "data_entry",
    isactive: true,
  },
  {
    id: 1,
    firstname: "Simran",
    lastname: "Kaur",
    email: "simran_kaur@company2.com",
    phonenumber: "191-11-9876543",
    username: "askaur",
    userrole: "admin",
    isactive: false,
  },
  {
    id: 2,
    firstname: "Vikas",
    lastname: "Jain",
    email: "vikas_jain@company3.com",
    phonenumber: "91-33-5555555",
    username: "vjain",
    userrole: "data_steward",
    isactive: false,
  },
  {
    id: 3,
    firstname: "priya",
    lastname: "singh",
    email: "priya_singh@company4.com",
    phonenumber: "91-44-9876543",
    username: "psingh",
    userrole: "data_owner",
    isactive: false,
  },
  {
    id: 4,
    firstname: "sunil",
    lastname: "Gupta",
    email: "sunil_gupta@company5.com",
    phonenumber: "9122-2222222",
    username: "squpta",
    userrole: "data_entry",
    isactive: false,
  },
  {
    id: 5,
    firstname: "Meera",
    lastname: "Verma",
    email: "meera_verma@company6.com",
    phonenumber: "91-11-8765432",
    username: "mverma",
    userrole: "data_entry",
    isactive: false,
  },
  {
    id: 6,
    firstname: "Rajesh",
    lastname: "Yadav",
    email: "rajesh_yadav@company7.com",
    phonenumber: "91-33-1111111",
    username: "ryadav",
    userrole: "data_entry",
    isactive: false,
  },
  {
    id: 7,
    firstname: "sunita",
    lastname: "Rathore",
    email: "sunita_rathore@company8.com",
    phonenumber: "91-44-7654321",
    username: "srathore",
    userrole: "data_owner",
    isactive: false,
  },
  {
    id: 8,
    firstname: "rajat",
    lastname: "rastogi",
    email: "rajat_rastogi@company9.com",
    phonenumber: "01-22-8888888",
    username: "rrastogi",
    userrole: "data_steward",
    isactive: false,
  },
  {
    id: 9,
    firstname: "megha",
    lastname: "Mukheriee",
    email: "megha_mukheriee@company10.com",
    phonenumber: "91-11-9876543",
    username: "mmukheriee",
    userrole: "admin",
    isactive: false,
  },
]

export const RulesTableData = [
  {
    id: 0,
    rolename: "admin",
    description: "Administrator",
    isactive: false,
  },
  {
    id: 1,
    rolename: "Data Steward",
    description: "Data Steward",
    isactive: false,
  },
  {
    id: 0,
    rolename: "Data Owner",
    description: "Data Owner",
    isactive: false,
  },
  {
    id: 0,
    rolename: "Data Entry",
    description: "Data Entry",
    isactive: false,
  },
]

export const LengthofStay = [
  {
    source: "1",
    data: 18,
  },
  {
    source: "2",
    data: 18,
  },
  {
    source: "3",
    data: 10,
  },
  {
    source: "4",
    data: 2,
  },
  {
    source: "5",
    data: 0,
  },
  {
    source: "6",
    data: 1,
  },
  {
    source: "7",
    data: 1,
  }
];


export const CLVData = [
  {
    source: "0-20,000",
    data: 0,
  },
  {
    source: "20,000-40,000",
    data: 0,
  },
  {
    source: "40,000-60,000",
    data: 11,
  },
  {
    source: "60,000-80,000",
    data: 48,
  },
  {
    source: "80,000-1,00,000",
    data: 44,
  },
  {
    source: "1,00,000-1,20,000",
    data: 21,
  },
  {
    source: "1,20,000-1,40,000",
    data: 0,
  }
];




export const NumberOfGuest = [
  {
    source: "6",
    data: 15,
  },
  {
    source: "7",
    data: 20,
  },

  {
    source: "8",
    data: 31,

  },
  {
    source: "9",
    data: 20,
  },
  {
    source: "10",
    data: 14,
  },

];


export const GuestStayHis = [
  {
    source: "2",
    data: 20,
  },
  {
    source: "3",
    data: 15,
  },
  {
    source: "4",
    data: 15,
  },
  {
    source: "5",
    data: 16,
  },
  {
    source: "6",
    data: 15,
  },
  {
    source: "7",
    data: 10,
  },
  {
    source: "8",
    data: 5,
  },
  {
    source: "9",
    data: 4,
  },

];

export const issueData = [
  {
    Issue: 0,
    data: 5
  },
  {
    Issue: 1,
    data: 2
  },
  {
    Issue: 2,
    data: 0
  },
  {
    Issue: 3,
    data: 0
  },
  {
    Issue: 4,
    data: 0
  },

  {
    Issue: 5,
    data: 5
  },
  {
    Issue: 7,
    data: 0
  },
  {
    Issue: 8,
    data: 0
  },
  {
    Issue: 9,
    data: 0
  },
  {
    Issue: 10,
    data: 0
  },
  {
    Issue: 11,
    data: 0
  },
  {
    Issue: 12,
    data: 0
  },
  {
    Issue: 13,
    data: 0
  },
  {
    Issue: 14,
    data: 0
  },
  {
    Issue: 15,
    data: 2
  },
  {
    Issue: 16,
    data: 0
  },
  {
    Issue: 17,
    data: 0
  },
  {
    Issue: 18,
    data: 0
  },
  {
    Issue: 19,
    data: 0
  },
  {
    Issue: 20,
    data: 1
  },
  {
    Issue: 21,
    data: 0
  },
  {
    Issue: 22,
    data: 0
  },
  {
    Issue: 23,
    data: 0
  },
  {
    Issue: 24,
    data: 0
  },
  {
    Issue: 25,
    data: 0
  },

  // {
  //     Issue: 21,
  // },
];

export const TimeToReslove = [
  {
    TTR: 0,
    data: 6
  },
  {
    TTR: 1,
    data: 0
  },
  {
    TTR: 2,
    data: 0
  },
  {
    TTR: 3,
    data: 0
  },
  {
    TTR: 4,
    data: 0
  },

  {
    TTR: 5,
    data: 21
  },
  {
    TTR: 6,
    data: 5
  },
  {
    TTR: 7,
    data: 0
  },
  {
    TTR: 8,
    data: 0
  },
  {
    TTR: 9,
    data: 0
  },
  {
    TTR: 10,
    data: 38
  },
  {
    TTR: 11,
    data: 0
  },
  {
    TTR: 12,
    data: 0
  },
  {
    TTR: 13,
    data: 0
  },
  {
    TTR: 14,
    data: 0
  },
  {
    TTR: 15,
    data: 12
  },
  {
    TTR: 16,
    data: 0
  },
  {
    TTR: 17,
    data: 0
  },
  {
    TTR: 18,
    data: 0
  },
  {
    TTR: 19,
    data: 0
  },
  {
    TTR: 20,
    data: 11
  },
  {
    TTR: 21,
    data: 0
  },
  {
    TTR: 22,
    data: 0
  },
  {
    TTR: 23,
    data: 0
  },
  {
    TTR: 24,
    data: 0
  },
  {
    TTR: 25,
    data: 2
  },
  {
    TTR: 26,
    data: 0
  },
  {
    TTR: 27,
    data: 0
  },
  {
    TTR: 28,
    data: 0
  },
  {
    TTR: 29,
    data: 0
  },
  {
    TTR: 30,
    data: 0
  },

  // {
  //     Issue: 21,
  // },
];


export const NumberIssueFace = [
  {
    range: '0.00-5.00',
    data: 7,
  },
  {
    range: '5.00 - 10.00',
    data: 5,
  },
  {
    range: '10.00 - 15.00',
    data: 0,
  },
  {
    range: '15.00 - 20.00',
    data: 2,
  },
  {
    range: '20.00 - 25.00',
    data: 1,
  },

];

export const MenuVareityOption = [
  {
    source: "3",
    data: 24,
  },
  {
    source: "4",
    data: 63,
  },
  {
    source: "5",
    data: 13,
  },



];


export const GuestSatisfication = [
  {
    source: "3",
    data: 27,
  },
  {
    source: "4",
    data: 32,
  },
  {
    source: "5",
    data: 41,
  },



];
// export const UpsellRevenue = [

//   {
//     range: '2500.00 - 5000.00',
//     data: 5,
//   },
//   {
//     range: '5000.00 - 7500.00',
//     data: 29,
//   },
//   {
//     range: '7500.00 - 10000.00',
//     data: 16,
//   },
//   {
//     range: '10000.00 - 12500.00',
//     data: 16,
//   },
//   {
//     range: '12500.00 - 15000.00',
//     data: 11,
//   },
//   {
//     range: '15000.00 - 17500.00',
//     data: 14,
//   },
//   {
//     range: '17500.00 - 20000.00',
//     data: 5,
//   },
//   {
//     range: '20000.00 - 25000.00',
//     data: 4,
//   },
// ];


export const UpsellRevenue = [
  {
    USR: 2500,
    data: 0
  },
  {
    USR: 2600,
    data: 5
  },
  {
    USR: 5000,
    data: 20
  },
  {
    USR: 6000,
    data: 9
  },

  {
    USR: 7500,
    data: 10
  },
  {
    USR: 8500,
    data: 6
  },
  {
    USR: 10000,
    data: 10
  },
  {
    USR: 11000,
    data: 6
  },
  {
    USR: 12500,
    data: 11
  },

  {
    USR: 15000,
    data: 14
  },
  {
    USR: 17500,
    data: 5
  },
  {
    USR: 20000,
    data: 4
  },
  {
    USR: 25000,
    data: 0
  },
  // {
  //   USR: 9,
  //   data:0
  // },
  // {
  //   USR: 10,
  //   data:38
  // },
  // {
  //   USR: 11,
  //   data:0
  // },
  // {
  //   USR: 12,
  //   data:0
  // },
  // {
  //   USR: 13,
  //   data:0
  // },
  // {
  //   USR: 14,
  //   data:0
  // },
  // {
  //   USR: 15,
  //   data:12
  // },
  // {
  //   USR: 16,
  //   data:0
  // },
  // {
  //   USR: 17,
  //   data:0
  // },
  // {
  //   USR: 18,
  //   data:0
  // },
  // {
  //   USR: 19,
  //   data:0
  // },
  // {
  //   USR: 20,
  //   data:11
  // },
  // {
  //   USR: 21,
  //   data:0
  // },
  // {
  //   USR: 22,
  //   data:0
  // },
  // {
  //   USR: 23,
  //   data:0
  // },
  // {
  //   USR: 24,
  //   data:0
  // },
  // {
  //   USR: 25,
  //   data:2
  // },
  // {
  //   USR: 26,
  //   data:0
  // },
  // {
  //   USR: 27,
  //   data:0
  // },
  // {
  //   USR: 28,
  //   data:0
  // },
  // {
  //   USR: 29,
  //   data:0
  // },
  // {
  //   USR: 30,
  //   data:0
  // },

  // {
  //     Issue: 21,
  // },
];


// export const CustomerLifeTime = [
//   {
//     range: '100000-145000.00',
//     data: 19,
//   },
//   {
//     range: '145000.00 - 190000.00',
//     data: 11,
//   },
//   {
//     range: '190000.00 - 235000.00',
//     data: 20,
//   },
//   {
//     range: ' 235000.00 - 280000.00',
//     data: 12,
//   },
//   {
//     range: '280000.00 - 325000.00',
//     data: 10,
//   },
//   {
//     range: '325000.00- 370000.00',
//     data: 9,
//   },
//   {
//     range: '370000.00 - 415000.00',
//     data: 6,
//   },
//   {
//     range: '415000.00 - 460000.00',
//     data: 5,
//   },
//   {
//     range: '460000.00 - 505000.00',
//     data: 8,
//   },
// ];

export const CustomerLifeTime = [
  {
    CLT: 100000,
    data: 0
  },
  {
    CLT: 140000,
    data: 19
  },
  {
    CLT: 145000,
    data: 11
  },
  {
    CLT: 190000,
    data: 20
  },

  {
    CLT: 235000,
    data: 12
  },
  {
    CLT: 280000,
    data: 10
  },
  {
    CLT: 325000,
    data: 9
  },
  {
    CLT: 370000,
    data: 6
  },
  {
    CLT: 415000,
    data: 5
  },

  {
    CLT: 460000,
    data: 8
  },
  {
    CLT: 540000,
    data: 0
  },
  // {
  //   USR: 17500,
  //   data:5
  // },
  // {
  //   USR: 20000,
  //   data:4
  // },
  // {
  //   USR: 25000,
  //   data:0
  // },
  // {
  //   USR: 9,
  //   data:0
  // },
  // {
  //   USR: 10,
  //   data:38
  // },
  // {
  //   USR: 11,
  //   data:0
  // },
  // {
  //   USR: 12,
  //   data:0
  // },
  // {
  //   USR: 13,
  //   data:0
  // },
  // {
  //   USR: 14,
  //   data:0
  // },
  // {
  //   USR: 15,
  //   data:12
  // },
  // {
  //   USR: 16,
  //   data:0
  // },
  // {
  //   USR: 17,
  //   data:0
  // },
  // {
  //   USR: 18,
  //   data:0
  // },
  // {
  //   USR: 19,
  //   data:0
  // },
  // {
  //   USR: 20,
  //   data:11
  // },
  // {
  //   USR: 21,
  //   data:0
  // },
  // {
  //   USR: 22,
  //   data:0
  // },
  // {
  //   USR: 23,
  //   data:0
  // },
  // {
  //   USR: 24,
  //   data:0
  // },
  // {
  //   USR: 25,
  //   data:2
  // },
  // {
  //   USR: 26,
  //   data:0
  // },
  // {
  //   USR: 27,
  //   data:0
  // },
  // {
  //   USR: 28,
  //   data:0
  // },
  // {
  //   USR: 29,
  //   data:0
  // },
  // {
  //   USR: 30,
  //   data:0
  // },

  // {
  //     Issue: 21,
  // },
];

export const SatisfactionLevel = [
  {
    rating: "3",
    checkin: 22,
    roomservice: 12,
    amenities: 6
  },
  {
    rating: "4",
    checkin: 22,
    roomservice: 43,
    amenities: 43
  },
  {
    rating: "5",
    checkin: 11,
    roomservice: 0,
    amenities: 6
  },

];
export const gsinex = [
  {
    rating: "0-1",
    Guests: 0
  },
  {
    rating: "1-2",
    Guests: 0
  },
  {
    rating: "2-3",
    Guests: 38
  },
  {
    rating: "3-4",
    Guests: 22
  },
  {
    rating: "4-5",
    Guests: 40
  }
]
export const attribution = [
  {
    rating: "2019",
    Organic: 344,
    Paid: 166,
    Direct: 270,
    Other: 196
  },
  {
    rating: "2020",
    Organic: 399,
    Paid: 245,
    Direct: 344,
    Other: 418
  },
  {
    rating: "2021",
    Organic: 422,
    Paid: 238,
    Direct: 418,
    Other: 373
  },
  {
    rating: "2022",
    Organic: 344,
    Paid: 255,
    Direct: 270,
    Other: 492
  },
  {
    rating: "2023",
    Organic: 399,
    Paid: 245,
    Direct: 344,
    Other: 418
  }
]
export const reviewsvalue = [
  {
    rating: "Booking.com",
    Dec2023: 5,
    Jan2024: 8,
    Feb2024: 9
  },
  {
    rating: "Expedia",
    Dec2023: 2,
    Jan2024: 1,
    Feb2024: 6
  },
  {
    rating: "Google Reviews",
    Dec2023: 7,
    Jan2024: 12,
    Feb2024: 8
  },
  {
    rating: "TripAdvisor",
    Dec2023: 10,
    Jan2024: 14,
    Feb2024: 12
  },
  {
    rating: "Yelp",
    Dec2023: 1,
    Jan2024: 4,
    Feb2024: 1
  }
]

export const diningOption = [
  {
    rating: "Bangalore ",
    OverallRating: 3.8,
    FoodQualityRating: 3.8,
    MenuOptionsRating: 3.8
  },
  {
    rating: "Chennai ",
    OverallRating: 4.1,
    FoodQualityRating: 4.0,
    MenuOptionsRating: 4.1
  },
  {
    rating: "Delhi",
    OverallRating: 4.1,
    FoodQualityRating: 4.0,
    MenuOptionsRating: 4.1
  },
  {
    rating: "Hyderabad",
    OverallRating: 3.6,
    FoodQualityRating: 3.6,
    MenuOptionsRating: 3.6
  }, {
    rating: "Kochi",
    OverallRating: 3.8,
    FoodQualityRating: 3.8,
    MenuOptionsRating: 3.8
  }, {
    rating: "Mumbai",
    OverallRating: 4.5,
    FoodQualityRating: 4.5,
    MenuOptionsRating: 4.5
  }, {
    rating: "Mysore",
    OverallRating: 3.8,
    FoodQualityRating: 3.7,
    MenuOptionsRating: 3.8
  }, {
    rating: "Pune",
    OverallRating: 3.4,
    FoodQualityRating: 3.4,
    MenuOptionsRating: 3.4
  },
];

export const ResponseTime = [
  {
    rating: "Amy Wilson",
    SumOFResponseTime: 326,
    COUNTAofGuest: 10,

  },
  {
    rating: "David Brown",
    SumOFResponseTime: 155,
    COUNTAofGuest: 7,

  },
  {
    rating: "Emily smith",
    SumOFResponseTime: 220,
    COUNTAofGuest: 7,

  },
  {
    rating: "Emma jhonson",
    SumOFResponseTime: 225,
    COUNTAofGuest: 7,

  },
  {
    rating: "Ethan smith",
    SumOFResponseTime: 151,
    COUNTAofGuest: 7,

  },
  {
    rating: "John Miller",
    SumOFResponseTime: 213,
    COUNTAofGuest: 10,

  },
  {
    rating: "Liam Wilson",
    SumOFResponseTime: 134,
    COUNTAofGuest: 7,

  },
  {
    rating: "Matthew Davis",
    SumOFResponseTime: 235,
    COUNTAofGuest: 7,

  },
  {
    rating: "Michael Davis",
    SumOFResponseTime: 170,
    COUNTAofGuest: 8,

  },
  {
    rating: "Natalie Miller",
    SumOFResponseTime: 192,
    COUNTAofGuest: 8,

  },
  {
    rating: "Olivia Brown",
    SumOFResponseTime: 195,
    COUNTAofGuest: 7,

  },
  {
    rating: "Sarah johnson",
    SumOFResponseTime: 30,
    COUNTAofGuest: 1,

  },
  {
    rating: "Sophia Wilson",
    SumOFResponseTime: 260,
    COUNTAofGuest: 7,

  },
  {
    rating: "Grand Total",
    SumOFResponseTime: 2506,
    COUNTAofGuest: 92,

  },

];

export const Top3Services = [
  { ratingreceived: '0', spatreatments: 33, restaurantdining: 33, conciergerequests: 26 },
  { ratingreceived: '1', spatreatments: 13, restaurantdining: 9, conciergerequests: 20 },
  { ratingreceived: '2', spatreatments: 20, restaurantdining: 15, conciergerequests: 19 },
  { ratingreceived: '3', spatreatments: 20, restaurantdining: 16, conciergerequests: 18 },
  { ratingreceived: '4', spatreatments: 14, restaurantdining: 18, conciergerequests: 13 },
  { ratingreceived: '5', spatreatments: 0, restaurantdining: 9, conciergerequests: 4 },
]
export const repeatGuestChartData = [

  { ratingreceived: '2019', conciergerequests: 19 },
  { ratingreceived: '2020', conciergerequests: 18 },
  { ratingreceived: '2021', conciergerequests: 10 },
  { ratingreceived: '2022', conciergerequests: 13 },
  { ratingreceived: '2023', conciergerequests: 19 },
]

export const adrGrapgData = [

  { ratingreceived: '18-02-2024', spatreatments: 5800, restaurantdining: 8000, conciergerequests: 11000 },
  { ratingreceived: '19-02-2024', spatreatments: 6000, restaurantdining: 8200, conciergerequests: 10200 },
  { ratingreceived: '20-02-2024', spatreatments: 5900, restaurantdining: 8100, conciergerequests: 10300 },
  { ratingreceived: '21-02-2024', spatreatments: 6000, restaurantdining: 8200, conciergerequests: 10200 },
  { ratingreceived: '22-02-2024', spatreatments: 5900, restaurantdining: 8100, conciergerequests: 10300 },
  { ratingreceived: '23-02-2024', spatreatments: 5800, restaurantdining: 8000, conciergerequests: 10500 },
  { ratingreceived: '24-02-2024', spatreatments: 5900, restaurantdining: 8100, conciergerequests: 10300 },
  { ratingreceived: '25-02-2024', spatreatments: 5800, restaurantdining: 8000, conciergerequests: 10500 },
  { ratingreceived: '26-02-2024', spatreatments: 6100, restaurantdining: 8200, conciergerequests: 10700 },
  { ratingreceived: '27-02-2024', spatreatments: 5800, restaurantdining: 8000, conciergerequests: 10500 },
]

export const revParData = [
  { ratingreceived: '18-02-2024', spatreatments: 3867, restaurantdining: 5120, conciergerequests: 7700 },
  { ratingreceived: '19-02-2024', spatreatments: 5000, restaurantdining: 4592, conciergerequests: 7650 },
  { ratingreceived: '20-02-2024', spatreatments: 5310, restaurantdining: 4860, conciergerequests: 8240 },
  { ratingreceived: '21-02-2024', spatreatments: 5000, restaurantdining: 4592, conciergerequests: 7650 },
  { ratingreceived: '22-02-2024', spatreatments: 5310, restaurantdining: 4860, conciergerequests: 8240 },
  { ratingreceived: '23-02-2024', spatreatments: 4060, restaurantdining: 7040, conciergerequests: 6825 },
  { ratingreceived: '24-02-2024', spatreatments: 5310, restaurantdining: 4860, conciergerequests: 8240 },
  { ratingreceived: '25-02-2024', spatreatments: 4060, restaurantdining: 7040, conciergerequests: 6825 },
  { ratingreceived: '26-02-2024', spatreatments: 5693, restaurantdining: 5576, conciergerequests: 7490 },
  { ratingreceived: '27-02-2024', spatreatments: 4060, restaurantdining: 7040, conciergerequests: 6825 },

]

export const TTR = [
  {
    range: '0-5',
    data: 6,
  },
  {
    range: '5-10',
    data: 21,
  },
  {
    range: '10-15',
    data: 38,
  },
  {
    range: '15-20',
    data: 12,
  },
  {
    range: '20-25',
    data: 11,
  },
  {
    range: '25-30',
    data: 2,
  },
];

export const LevelAchieved = [
  {
    name: 'Gold',
    data: 6,
  },
  {
    name: 'Silver',
    data: 21,
  },
  {
    name: 'Bronze',
    data: 38,
  },
  {
    name: 'Not Enrolled',
    data: 12,
  },
];



export const LevelOfLoality = [






  {
    name: 'Bronze',
    data: 30,
  },
  {
    name: 'Gold',
    data: 10,
  },
  {
    name: 'Nil',
    data: 39,
  },
  {
    name: ' Silver',
    data: 21,
  },
  {
    name: 'Grand Total',
    data: 100,
  },
];

export const SatisfactionScore = [


  {
    SS: 3,
    data: 20
  },
  {
    SS: 3.25,
    data: 0
  },

  {
    SS: 3.50,
    data: 11
  },
  {
    SS: 3.75,
    data: 0
  },
  {
    SS: 4,
    data: 26
  },
  {
    SS: 4.25,
    data: 0
  },
  {
    SS: 4.50,
    data: 29
  },
  {
    SS: 4.75,
    data: 0
  },
  {
    SS: 5,
    data: 14
  },
  {
    SS: 5.25,
    data: 0
  },


]


export const NumberOfResponse = [
  {
    Nr: 3,
    data: 28
  },
  {
    Nr: 3.25,
    data: 0
  },

  {
    Nr: 3.50,
    data: 0
  },
  {
    Nr: 3.75,
    data: 0
  },
  {
    Nr: 4,
    data: 41
  },
  {
    Nr: 4.25,
    data: 0
  },
  {
    Nr: 4.50,
    data: 0
  },
  {
    Nr: 4.75,
    data: 0
  },
  {
    Nr: 5,
    data: 31
  },
  {
    Nr: 5.25,
    data: 0
  },


]


export const Postitive_Mentions = [
  {
    PM: 0,
    data: 0
  },
  {
    PM: 2.5,
    data: 6
  },

  {
    PM: 5,
    data: 27
  },
  {
    PM: 7.5,
    data: 17
  },
  {
    PM: 10,
    data: 26
  },
  {
    PM: 12.5,
    data: 11
  },
  {
    PM: 15,
    data: 5
  },
  {
    PM: 17.5,
    data: 4
  },
  {
    PM: 20,
    data: 4
  },
  {
    PM: 22.5,
    data: 0
  },



]



export const Negative_Mentions = [
  {
    NM: 1,
    data: 28
  },
  {
    NM: 1.35,
    data: 0
  },

  {
    NM: 1.70,
    data: 37
  },
  {
    NM: 2.05,
    data: 0
  },
  {
    NM: 2.40,
    data: 0
  },
  {
    NM: 2.75,
    data: 33
  },
  {
    NM: 3.10,
    data: 0
  },
  {
    NM: 3.45,
    data: 0
  },
  {
    NM: 3.80,
    data: 24
  },
  {
    NM: 4.15,
    data: 0
  },
  {
    NM: 4.50,
    data: 0
  },


]

export const Total_Mentions = [
  {
    TM: 0,
    data: 0
  },
  {
    TM: 2.5,
    data: 0
  },

  {
    TM: 5,
    data: 18
  },
  {
    TM: 7.5,
    data: 9
  },
  {
    TM: 10,
    data: 34
  },
  {
    TM: 12.50,
    data: 20
  },
  {
    TM: 15.0,
    data: 6
  },

  {
    TM: 17.50,
    data: 5
  },
  {
    TM: 20.00,
    data: 8
  },
  {
    TM: 22.5,
    data: 0
  },
  // {
  //   TM: 25.00,
  //   data:0
  // },


]


export const Engagement_Ratio = [
  {
    ER: 0.10,
    data: 4
  },
  {
    ER: 0.19,
    data: 1
  },

  {
    ER: 0.27,
    data: 17
  },
  {
    ER: 0.36,
    data: 4
  },
  {
    ER: 0.44,
    data: 12
  },
  {
    ER: 0.53,
    data: 2
  },
  {
    ER: 0.61,
    data: 30
  },

  {
    ER: 0.70,
    data: 0
  },
  {
    ER: 0.78,
    data: 15
  },
  {
    ER: 0.87,
    data: 15
  },
  {
    TM: 0.95,
    data: 0
  },


]

export const Website_visit = [
  {
    WV: 70,
    data: 9
  },
  {
    WV: 78.50,
    data: 6
  },

  {
    WV: 87,
    data: 25
  },
  {
    WV: 95.50,
    data: 10
  },
  {
    WV: 104,
    data: 19
  },
  {
    WV: 112.50,
    data: 14
  },
  {
    WV: 121,
    data: 5
  },

  {
    WV: 129.50,
    data: 10
  },
  {
    WV: 138,
    data: 1
  },
  {
    WV: 146.50,
    data: 1
  },
  {
    WV: 155,
    data: 0
  },


]


export const Reservation_Calls = [
  {
    RC: 2,
    data: 0
  },
  {
    RC: 2.2,
    data: 20
  },
  {
    RC: 2.55,
    data: 20
  },

  {
    RC: 3.10,
    data: 0
  },
  {
    RC: 3.65,
    data: 19
  },
  {
    RC: 4.20,
    data: 0
  },
  {
    RC: 4.75,
    data: 20
  },
  {
    RC: 5.30,
    data: 0
  },

  {
    RC: 5.85,
    data: 15
  },
  {
    RC: 6.40,
    data: 0
  },
  {
    RC: 6.95,
    data: 6
  },
  {
    RC: 7.50,
    data: 0
  },


]



export const Inquiries = [
  {
    IQ: 50,
    data: 14
  },
  {
    IQ: 56.50,
    data: 10
  },
  {
    IQ: 63,
    data: 5
  },

  {
    IQ: 69.50,
    data: 20
  },
  {
    IQ: 76,
    data: 11
  },
  {
    IQ: 82.5,
    data: 14
  },
  {
    IQ: 89,
    data: 15
  },
  {
    IQ: 95.5,
    data: 5
  },

  {
    IQ: 102,
    data: 5
  },
  {
    IQ: 108.50,
    data: 1
  },
  {
    IQ: 115,
    data: 0
  },

]

export const Check_in_score = [
  {
    CIS: 3,
    data: 20
  },
  {
    CIS: 3.25,
    data: 0
  },
  {
    CIS: 3.50,
    data: 11
  },

  {
    CIS: 3.75,
    data: 0
  },
  {
    CIS: 4,
    data: 26
  },
  {
    CIS: 4.25,
    data: 0
  },
  {
    CIS: 4.50,
    data: 29
  },

  {
    CIS: 4.75,
    data: 0
  },

  {
    CIS: 5,
    data: 14
  },


  {
    CIS: 5.25,
    data: 0
  },

]

export const RoomServiceScore = [
  {
    RSS: 3,
    data: 14
  },
  {
    RSS: 3.25,
    data: 0
  },
  {
    RSS: 3.50,
    data: 11
  },

  {
    RSS: 3.75,
    data: 0
  },
  {
    RSS: 4,
    data: 34
  },
  {
    RSS: 4.25,
    data: 0
  },
  {
    RSS: 4.50,
    data: 16
  },

  {
    RSS: 4.75,
    data: 0
  },

  {
    RSS: 5,
    data: 22
  },


  {
    RSS: 5.25,
    data: 0
  },

]

export const Survivorship_Rule = ["CRM", "CRS", "PMS"]

export const createRoleScreens = [
  {
    "roleScreenId": 61,
    "screenName": "Data Quality Rules",
    "accessLevel": "No Access"
  },
  {
    "roleScreenId": 62,
    "screenName": "Data Matching Rules",
    "accessLevel": "No Access"
  },
  {
    "roleScreenId": 63,
    "screenName": "Suvivorship Rule",
    "accessLevel": "No Access"
  },
  {
    "roleScreenId": 64,
    "screenName": "User Management",
    "accessLevel": "No Access"
  },
  {
    "roleScreenId": 65,
    "screenName": "Roles & Permissions",
    "accessLevel": "No Access"
  },
  {
    "roleScreenId": 66,
    "screenName": "Batch Jobs",
    "accessLevel": "No Access"
  },
  {
    "roleScreenId": 67,
    "screenName": "My Tasks",
    "accessLevel": "No Access"
  },
  {
    "roleScreenId": 68,
    "screenName": "Data Quality Dashboard",
    "accessLevel": "No Access"
  },
  {
    "roleScreenId": 69,
    "screenName": "Guest 360 - Search",
    "accessLevel": "No Access"
  },
  {
    "roleScreenId": 70,
    "screenName": "Guest 360 - Create",
    "accessLevel": "No Access"
  },
  {
    "roleScreenId": 71,
    "screenName": "Guest 360 - Update",
    "accessLevel": "No Access"
  },
  {
    "roleScreenId": 72,
    "screenName": "Guest 360 - Cross Ref",
    "accessLevel": "No Access"
  },
  {
    "roleScreenId": 73,
    "screenName": "Guest 360 - Delete",
    "accessLevel": "No Access"
  },
  {
    "roleScreenId": 74,
    "screenName": "Guest 360 - Merge/Unmerge",
    "accessLevel": "No Access"
  },
  {
    "roleScreenId": 75,
    "screenName": "Guest 360 Dashboard",
    "accessLevel": "No Access"
  }
]








