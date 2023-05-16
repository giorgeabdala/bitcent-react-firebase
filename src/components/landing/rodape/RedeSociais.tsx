import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandYoutube } from "@tabler/icons-react";
import RedeSocial from "./RedeSocial";

 

 export default function RedesSocias() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandInstagram />} url="https://www.instagram.com/giorgeabdala/" />
            <RedeSocial icone={<IconBrandFacebook />} url="https://www.facebook.com/giorgeabdala" />
            <RedeSocial icone={<IconBrandGithub />} url="https://github.com/giorgeabdala/" />
        </div>
             
    )
 }