export const backendurl = "https://frank-body-backend-git-produtnew2-mr-raaz.vercel.app/";
export const localtest = "http://localhost:5000/"
export const currentRoute = localtest;
export const loginroute = currentRoute + "auth/login";
export const getuserdatawithID = currentRoute + "profile/";
export const getmobilenadgender = currentRoute + "profile/mobilegender/";
export const postmobilegenderemail = currentRoute + "profile/"
export const getallproduct = currentRoute + "products/"
export const profileSideList = [
    {
       listImg: "https://www.netmeds.com/msassets/images/icons/profile-icon.svg",
       content : "Account Information"
    },
    {
        listImg: "https://www.netmeds.com/msassets/images/icons/wallet_grey.svg",
        content: "My Wallet"
    },
    {
        listImg: "https://www.netmeds.com/msassets/images/icons/favorite.svg",
        content: "My WhishList"
    },
    {
        listImg: "https://www.netmeds.com/msassets/images/icons/offer_inactive.svg",
        content: "Offers"
    },
    {
        listImg: "https://www.netmeds.com/msassets/images/icons/delivery_inactive.svg",
        content: "Delivery Address"
    },
    {
        listImg: "https://www.netmeds.com/msassets/images/icons/lock_grey.svg",
        content: "Logout"
    }
]