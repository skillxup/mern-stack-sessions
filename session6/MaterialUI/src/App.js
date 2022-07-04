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
import ViewColumn from "@material-ui/icons/";

import Alert from "@material-ui/lab/Alert";
import axios from "axios";

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
    return(
        ''
    );
}

export default App;