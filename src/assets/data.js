
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { AiOutlineFolderOpen } from "react-icons/ai";
import axios from 'axios';


export const fetchTableData = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}GetDQMetaData/cloud_storage/ldg_account_bus_card`)
    return response?.data
  } catch (error) {
    return error
  }
}

export const fetchInsertTableData = async (data) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}InsertDQMetaData`, data);
    console.log(response);
    return response?.data
  } catch (error) {
    return error
  }
}

export const fetchUpdateTableData = async (data) => {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}UpdateDQMetaData`, data)
    return response
  } catch (error) {
    return error
  }
}

export const fetchDeleteTableData = async (data) => {
  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}DeleteDQMetaData?id=${data}`)
    return response
  } catch (error) {
    return error
  }
}

export const staticMenuItems = [
  {
    icon: <IoHome className="w-6 h-6" />,
    text: "Home",
    linkTo: "home"
  },
  {
    icon: <GrConfigure className="w-6 h-6" />,
    text: "Configuration",
    hasChildren: true,
    linkTo: "configuration",
    children: [
      {
        text: "Data Quality Rules",
        linkTo: "data-quality-rules",
        icon: ''
      },
      {
        text: "Data Matching Rules",
        linkTo: "data-matching-rules",
        icon: ''
      },
      {
        text: "Survivorship Rule",
        linkTo: "survivorship-rule",
        icon: ''
      },
      {
        text: "User Management",
        linkTo: "user-management",
        icon: ''
      },
      {
        text: "Roles & Permissions",
        linkTo: "roles-&-permissions",
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
        linkTo: "batch-jobs",
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
        linkTo: "my-tasks",
        icon: ''
      },
      {
        text: "Guest 360 Dashboard",
        linkTo: "guest-360-dashboard",
        icon: ''
      },
      {
        text: "Data Quality Dashboard",
        linkTo: "data-quality-dashboard",
        icon: ''
      },
      {
        text: "Guest Data - Search",
        linkTo: "guest-data-search",
        icon: ''
      },
      {
        text: "Guest Data - Create",
        linkTo: "guest-data-create",
        icon: ''
      },
      {
        text: "Guest Data - Update",
        linkTo: "guest-data-update",
        icon: ''
      },
      {
        text: "Guest Data - Cross Ref",
        linkTo: "guest-data-cross-ref",
        icon: ''
      },
    ],
  },
];

export const ChartTabData = [
  {
    id: 0,
    title: 'Home',
    selected: true,
    key: 'home',
  },
]

export const intakeSubTabs = [
  {
    id: 0,
    title: 'Create',
    selected: true,
    key: 'intakeManagement',
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
  { label: "name", value: "name" },
  { label: "date_of_birth", value: "date_of_birth" },
  { label: "Aadhar", value: "Aadhar" },
  { label: "Passport", value: "Passport" },
  { label: "Driving_License", value: "Driving_License" },
  { label: "email", value: "email" },
  { label: "mobile number", value: "mobile_number" },
];

export const DataSource = [
  { label: "CRM", value: "crm" },
];
export const tableName = [
  { label: "ldg_account_bus_card", value: "ldg_account_bus_card" },
];
export const ruleDescription = [
  { label: "Check if the column(s) conatins duplicate values across rows.", value: "Check if the column(s) conatins duplicate values across rows." },
];
export const ValidationRule = [
  { label: "datatype_check", value: "datatype_check" },
  { label: "empty_value_check", value: "empty_value_check" },
  { label: "null_value_check", value: "null_value_check" },
  { label: "length_check", value: "length_check" },
  { label: "special_character_check", value: "special_character_check" },
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
  { label: "guest", value: "guest" },
];

export const attributeSearch = [
  { label: "John", value: "john" },
  { label: "Jack", value: "jack" },
  { label: "Pitter", value: "pitter" },
  { label: "Rock", value: "rock" },
]

export const rulesearch = [
  { label: "Rule 1", value: "rule1" },
  { label: "Rule 2", value: "rule2" },
  { label: "Rule 3", value: "rule3" },
]
export const statussearch = [
  { label: "status 1", value: "status1" },
  { label: "status 2", value: "status2" },
  { label: "status 3", value: "status3" },
]

export const survivorshipData = [
  {
    entity: "Guest",
    attribute: "guest_category_type",
    priority1: "CRM",
    priority2: "PMS",
    priority3: "CRM",
  },
  {
    entity: "",
    attribute: "middle_name",
    priority1: "CRM",
    priority2: "PMS",
    priority3: "CRS",
  },
  {
    entity: "",
    attribute: "last_name",
    priority1: "CRM",
    priority2: "PMS",
    priority3: "CRS",
  },
  {
    entity: "",
    attribute: "full_name",
    priority1: "CRM",
    priority2: "PMS",
    priority3: "CRS",
  },
  {
    entity: "",
    attribute: "gender",
    priority1: "PMS",
    priority2: "CRM",
    priority3: "CRS",
  },
  {
    entity: "",
    attribute: "marital_status",
    priority1: "PMS",
    priority2: "CRM",
    priority3: "CRS",
  },
  {
    entity: "",
    attribute: "no_of_children",
    priority1: "PMS",
    priority2: "CRM",
    priority3: "CRS",
  },
  {
    entity: "",
    attribute: "income_level",
    priority1: "CRM",
    priority2: "PMS",
    priority3: "CRS",
  },
  {
    entity: "",
    attribute: "company_name",
    priority1: "CRM",
    priority2: "PMS",
    priority3: "CRS",
  },
  {
    entity: "",
    attribute: "notes",
    priority1: "CRM",
    priority2: "PMS",
    priority3: "CRS",
  },

  {
    entity: "contact_details",
    attribute: "business_phone",
    priority1: "CRM",
    priority2: "PMS",
    priority3: "CRS",
  },
  {
    entity: "",
    attribute: "home_phone",
    priority1: "CRM",
    priority2: "PMS",
    priority3: "CRS",
  },
  {
    entity: "",
    attribute: "mobile_phone",
    priority1: "PMS",
    priority2: "PMS",
    priority3: "CRS",
  },
  {
    entity: "",
    attribute: "alternane_phone",
    priority1: "PMS",
    priority2: "CRM",
    priority3: "CRS",
  },
  {
    entity: "",
    attribute: "business_email",
    priority1: "PMS",
    priority2: "CRM",
    priority3: "CRS",
  },
  {
    entity: "",
    attribute: "personal_email",
    priority1: "PMS",
    priority2: "CRM",
    priority3: "CRS",
  },
];


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
    item: 'User Management',
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
    section: 'Guest Data Management',
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
  { label: "Manager", value: "manager" },


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