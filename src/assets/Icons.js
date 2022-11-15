import {
    AiOutlineHome,
    AiOutlinePlus,
    AiOutlineArrowUp,
    AiOutlineArrowDown,
  } from "react-icons/ai";
  import { CgSearch } from "react-icons/cg";
  import { HiOutlineBell, HiOutlineMail } from "react-icons/hi";
  import { VscGraph } from "react-icons/vsc";
  import { BiPointer } from "react-icons/bi";
  import { TiTicket } from "react-icons/ti";
  import { BsPerson, BsPeople, BsFolder } from "react-icons/bs";
  import { TbReportSearch, TbSettings, TbLogout } from "react-icons/tb";
  import { MdArrowForwardIos } from "react-icons/md";
  import { FaBars } from "react-icons/fa";
  
  const Icons = {
    SearchIcon: <CgSearch />,
    BellIcon: <HiOutlineBell />,
    MailIcon: <HiOutlineMail />,
    PlusIcon: <AiOutlinePlus />,
    HomeIcon: <AiOutlineHome />,
    BarGraphIcon: <VscGraph />,
    PointerIcon: <BiPointer />,
    TicketIcon: <TiTicket />,
    PersonIcon: <BsPerson />,
    DoublePersonIcon: <BsPeople />,
    FolderIcon: <BsFolder />,
    ReportIcon: <TbReportSearch />,
    SettingIcon: <TbSettings />,
    LogoutIcon: <TbLogout />,
    UpArrowIcon: <AiOutlineArrowUp />,
    DownArrowIcon: <AiOutlineArrowDown />,
    RightArrowIcon: <MdArrowForwardIos />,
    BarsIcon: <FaBars />,
  };
  
  export default Icons;