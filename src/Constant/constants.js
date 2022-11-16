import {Link} from "react-router-dom"
export default {
    TYPOGRAPHY:{
        H1:({children,additionalStyle})=><h1 className={`text-6xl font-normal leading-normal mt-0 mb-2 ${additionalStyle?additionalStyle:""}`}>{children}</h1>,
        H2:({children,additionalStyle})=><h2 className={`text-5xl font-normal leading-normal mt-0 mb-2 ${additionalStyle?additionalStyle:""}`}>
        {children}
        </h2>,
        H3:({children,additionalStyle})=><h3 className={`text-4xl font-normal leading-normal mt-0 mb-2 ${additionalStyle?additionalStyle:""}`}>
        {children}
        </h3>,
        H4:({children,additionalStyle})=><h4 className={`text-3xl font-normal leading-normal mt-0 mb-2 ${additionalStyle?additionalStyle:""}`}>
        {children}
        </h4>,
        H5:({children,additionalStyle})=><h5 className={`text-2xl font-normal leading-normal mt-0 mb-2 ${additionalStyle?additionalStyle:""}`}>
        {children}
        </h5>,
        H6:({children,additionalStyle})=><h6 className={`text-xl font-normal leading-normal mt-0 mb-2 ${additionalStyle?additionalStyle:""}`}>
        {children}
        </h6>
    },
    PRIMARY_COLOR:"#7164F0",
    SECONDARY_COLOR:"#000829",
    BUTTONS:{
        BTN_PRIMARY:({children:text,additionalStyle})=><button className={`bg-[#7164F0] hover:bg-blue-700 text-white font-bold text-sm py-1 px-1 md:py-2 md:px-4 md:text-base rounded ${additionalStyle?additionalStyle:""}`}>
        {text}
      </button>,
      BTN_OUTLINE:({children:text,additionalStyle})=><button className={`bg-transparent hover:bg-blue-500 text-[#7164F0] font-semibold hover:text-white text-sm py-1 px-1 md:py-2 md:px-4 md:text-base border border-[#7164F0] hover:border-transparent rounded ${additionalStyle?additionalStyle:""}`}>
      {text}
    </button>
    },
    NAV_LINK:({children,to})=><Link to={to}><li className="mr-6 rounded list-none py-2 px-4 hover:bg-[#E8E6F9]">
    <span className="text-[#000829] hover:text-[#7164F0]" href="#">{children}</span>
  </li></Link>,
    NAV_MENU_ITEMS:[
        {
            name:"Rent",
            to:"/rent"
        },
        {
            name:"Buy",
            to:"/buy"
        },
        {
            name:"Sell",
            to:"/sell"
        },
        {
            name:"Manage Property",
            to:"/manageproperty"
        },
        {
            name:"Resources",
            to:"/resources"
        }
    ]
}