
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { GoChecklist } from "react-icons/go"
import { HiOutlineDocumentText } from "react-icons/hi"
import { GrConfigure } from "react-icons/gr";
import { AiOutlineFolderOpen } from "react-icons/ai";

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
