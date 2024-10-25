
import Admin from "./admin";
import User from "./user";

var isrole = "user";


function Condition() {
    return(<>{

            isrole=="admin"?<Admin/>:<User/>
        }
        </>
        );
}


export default Condition;