 import {PersonalInfo} from "./Home/PersonalInfo"
 import {Professionalinfo} from "./Home/Professionalinfo"
 import {ImageGallery} from "./Home/ImageGallery"
 import "./Home.css";
 export const Home = () => {
    return(
        <div>
            <table>
                <tr>
                    <td><PersonalInfo/></td>
                    <td><Professionalinfo/></td>
                </tr>
                <tr>
                
                    <td colSpan="2">
                        <ImageGallery/>
                        </td>
                </tr>
                </table>
  
        </div>
    );
};