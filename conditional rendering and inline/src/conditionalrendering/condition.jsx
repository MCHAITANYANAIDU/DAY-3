import Admin from "./admin";
import User from "./user";

var isrole = "admin";

// var isrole = "user"

var compon = "";

// if (isrole == "admin") {
//     compon = <Admin />;
// } else {
//     compon = <User />;
// }

switch (isrole) {
    case "admin":
        compon = <Admin/>
        break;
        case "user":
            compon = <User/>
            break;

    default:
        break;
}

function Condition() {
    // // return (<>{

    // //     // isrole=="admin"?<Admin/>:<User/>
    // // }
    // </>
    // );
    return (<>
    {compon}  
    </>);

    // return <>
  
    // {isrole=="admin" && <Admin/>}
    //                                     {/* using logical and operator */}
    // {isrole=="user" && <User/>}
      
    //   </>;
    }



export default Condition;