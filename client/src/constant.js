export const backendurl = "https://frank-body-backend-git-produtnew2-mr-raaz.vercel.app/";
export const localtest = "http://localhost:5000/"
export const currentRoute = localtest;
export const loginroute = currentRoute + "auth/login";
export const getuserdatawithID = currentRoute + "profile/";
export const getmobilenadgender = currentRoute + "profile/mobilegender/";
export const postmobilegenderemail = currentRoute + "profile/"
export const getallproduct = currentRoute + "products/";
//"https://frank-body-backend-git-produtnew2-mr-raaz.vercel.app/products";

// https://frank-body-backend.vercel.app/products/deletefromcart
export const deletefromcart = currentRoute + "products/deletefromcart/";
export const productaddtocart = currentRoute + "products/addtocart/";
export const getcartmainpage = currentRoute + "products/getcart/"
export const authlogin = currentRoute + "auth/login/"
export const authgoogle = currentRoute + "auth/google/";
export const authfacebook = currentRoute + "auth/facebook/";
export const userregister = currentRoute + "user/register/";
export const authgithub = currentRoute + "auth/github/";
export const usersetaddress = currentRoute + "user/setAddress/"
export const userorderplaced = currentRoute + "user/orderPlaced/";
export const getproductscategory = currentRoute + "products/category/";
export const commentget = currentRoute + "comment/";
export const getcommentget = currentRoute + "comment/get/";
export const sendresetPassword = currentRoute + "user/sendResetPassword/";
export const userResetPassword = currentRoute + "user/userResetPassword/";
export const authloginsuccess = currentRoute + "auth/login/success/";
export const usergoogleregister = currentRoute + "user/googleregister/";
// export const 
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