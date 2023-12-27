
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { AiOutlineFolderOpen } from "react-icons/ai";
import axios from 'axios';


export const fetchTableData = async () => {
  try {
    const response = await axios.get("http://13.234.127.72:5000/GetDQMetaData")
    return response?.data
  } catch (error) {
    return error
  }
}

export const fetchInsertTableData = async (data) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}InsertDQMetaData`, data);
    return response?.data
  } catch (error) {
    return error
  }
}

export const fetchUpdateTableData = async (data) => {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}UpdateDQMetaData`, data)
    return response.data
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

export const fetchdatasource = async () => {
  try {
    const response = await axios.get("http://13.234.127.72:5000/TableDefinition")
    const data = response?.data?.map((item) => ({
      label: item?.dataSource, value: item?.dataSource
    }))
    return data
  } catch (error) {
    return error
  }
}
export const fetchentity = async () => {
  try {
    const response = await axios.get("http://13.234.127.72:5000/TableDefinition")
    const data = response?.data?.map((item) => ({
      label: item?.tableName, value: item?.tableName
    }))
    return data
  } catch (error) {
    return error
  }
}
export const fetchvalidationRule = async () => {
  try {
    const response = await axios.get("http://13.234.127.72:5000/DQRules")
    const data = response?.data?.map((item) => ({
      label: item?.validationRule, value: item?.validationRule
    }))
    return data
  } catch (error) {
    return error
  }
}


export const datasourceData = [
  { label: "ALL", value: "all" },
  { label: "cloud_storage", value: "cloud_storage" },
  { label: "AWS S3", value: "AWS S3" },
];

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
        text: "Guest Data - Cross Ref",
        linkTo: "guest-data-cross-ref",
        icon: ''
      },
      {
        text: "Guest Data - Cross Ref - Manual",
        linkTo: "guest-data-cross-ref-manual",
        icon: ''
      },
      {
        text: "Guest Data - Merge/Unmerge",
        linkTo: "guest-data-merge/unmerge",
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
export const matchdataValue = [
  { label: "0.1", value: "0.1" },
  { label: "0.2", value: "0.2" },
  { label: "0.3", value: "0.3" },
  { label: "0.4", value: "0.4" },
  { label: "0.5", value: "0.5" },
];

/* export const DataSource = [
  { label: "cloud_storage", value: "cloud_storage" },
  { label: "AWS_S3", value: "AWS_S3" },
]; */
/* export const tableName = [
  { label: "ldg_account_bus_card", value: "ldg_account_bus_card" },
  { label: "guest", value: "guest" },
]; */
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
  { label: "Full_Size", value: "Full_Size" },
  { label: "Twin Xl", value: "Twin Xl" }
]
export const floorlevel = [
  { label: "Low", value: "low" },
  { label: "Middle", value: "Middle" },
  { label: "High", value: "High" }
]
export const roomviewpref = [
  { label: "Fountain View", value: "Fountain View" }
]
export const bathslippers = [
  { label: "Large", value: "Large" },
  { label: "Small", value: "Small" },
]
export const favouritecuisine = [
  { label: "Indian, Italian", value: "Indian, Italian" }
]
export const airporttransfer = [
  { label: "Limousine", value: "Limousine" }
]
export const conceirgeservices = [
  { label: "Reservations twice a day", value: "Reservations twice a day" }
]
export const connectivityreg = [
  { label: "Wifi", value: "Wifi" }
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
  { label: "Film", value: "Film" }
]
export const roomtemppref = [
  { label: "Cool", value: "Cool" },
  { label: "Warm", value: "Warm" },
]
export const dietaryallergy = [
  { label: "Vegetarian", value: "Vegetarian" }
]
export const celebratoryoccasion = [
  { label: "BrithDay", value: "BrithDay" },
  { label: "Anniversary", value: "Anniversary" },
]
export const spatreatments = [
  { label: "Swedish Massage", value: "Swedish Massage" }
]
export const housekeepingschedule = [
  { label: "8:00 AM - 10:00 PM", value: "8:00 AM - 10:00 PM" }
]
export const modeofcommunication = [
  { label: "Email", value: "Email" },
  { label: "SMS", value: "SMS" },
]
export const preferreddiningtimes = [
  { label: "Lunch", value: "Lunch" },
  { label: "Dinner", value: "Dinner" },
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
  { label: "YouTube", value: "YouTube" },
  { label: "WhatsApp", value: "WhatsApp" },
  { label: "Twitter", value: "Twitter" },
  { label: "instagram", value: "instagram" },
  { label: "TikTOk", value: "TikTOk" },
  { label: "Linkedin", value: "Linkedin" },
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