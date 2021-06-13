import React from "react"
import style from "./Filter.module.css"

const Filter = ({ value, onChange }) => (
    <label className={style.filter_label}>
        Find contacts by name
        <br />
        <input type="text" value={value} onChange={onChange} />
    </label>
)

export default Filter
