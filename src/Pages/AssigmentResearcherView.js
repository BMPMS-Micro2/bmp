import React from "react";
import CollapsibleTable from "../components/experimentResearcherTable";

const AssigmentResearcherView = () => {

    return(
        <div className="container">
            <h1>Researchers Assign to Experiments</h1>
            <CollapsibleTable></CollapsibleTable>
        </div>
    );

}

export default AssigmentResearcherView;