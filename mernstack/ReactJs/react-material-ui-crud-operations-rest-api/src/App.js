import React, { useState, useEffect } from "react";
import "./App.css";

import { forwardRef } from "react";
import Avatar from "react-avatar";
import MaterialTable from "material-table";
import Grid from "@material-ui/core/Grid";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import Search from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ViewColumn from "@material-ui/icons/ViewColumn";

import Alert from "@mui/lab/Alert";
import axios from "axios";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />), 
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />), 
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />), 
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />), 
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />), 
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />), 
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />), 
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />), 
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />), 
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />), 
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />), 
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />), 
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />), 
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />), 
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />), 
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />), 
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const api = axios.create({
    baseURL: `https://reqres.in`
});

function App() {
    var columns = [
        { title: "Id", field: "id", hidden: true }, 
        { title: "Avatar",  }, 
        { title: "First Name", field: "first_name" }, 
        { title: "Last Name", field: "last_name" }, 
        { title: "Email", field: "email" }
    ];

    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    useEffect(() => {
        api.get('/users')
            .then(res => {
                setData(res.data.data)
            }).catch(error => {
                console.log(error);
            })
    }, []);

    return(
        <Grid container spacing={1}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                {/* error messages */}

                {/* materialtable */}
                <MaterialTable 
                    title='user data' 
                    columns={columns} 
                    icons={tableIcons} 
                    data={data} 
                />
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    );
}

export default App;