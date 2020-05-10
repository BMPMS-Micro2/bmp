import React from "react";
import CollapsibleTable from "../components/experimentResearcherTable";


const AssigmentResearcherView = () => {

    return(
        <div className="container">
            <h1>Reseachers Assign to Experiments</h1>
            <CollapsibleTable></CollapsibleTable>

        </div>
    );

}

export default AssigmentResearcherView;