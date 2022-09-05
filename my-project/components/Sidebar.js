

import SidebarRow from "./SidebarRow";

import {
    ChipIcon,
    FilmIcon,
    OfficeBuildingIcon,
    BeakerIcon,
    SpeakerphoneIcon,
    EyeIcon,
    GlobeAltIcon,
} from "@heroicons/react/outline";




function Sidebar({ setCategory }) {

    return (
        <div className="p-22 mt-5 max-w-[600px] xl:min-w- [300px] " >
            <SidebarRow setCategory={setCategory} onClick={() => setCategory("General")} Icon={GlobeAltIcon} title="General" />
            <SidebarRow setCategory={setCategory} onClick={() => setCategory("Business")} Icon={OfficeBuildingIcon} title="Business"/>
            <SidebarRow setCategory={setCategory} onClick={() => setCategory("Entertainment")}Icon={FilmIcon} title="Entertainment" />
            <SidebarRow setCategory={setCategory} onClick={() => setCategory("Health")} Icon={EyeIcon} title="Health" />
            <SidebarRow setCategory={setCategory} onClick={() => setCategory("Science")} Icon={BeakerIcon} title="Science" />
            <SidebarRow setCategory={setCategory} onClick={() => setCategory("Sports")} Icon={SpeakerphoneIcon} title="Sports" />
            <SidebarRow setCategory={setCategory} onClick={() => setCategory("Technology")} Icon={ChipIcon} title="Technology" />
            <button onClick={() => setCategory("title")}>button</button>
        </div>
    );
}



export default Sidebar