import React from "react";
import "../global.css";

function SearchInput({ onSearchValueChanged, data }) {
    if (data.length === 0) {
        return null;
    }

    return (
        <>
            <div className="search_Input_Wrapper">
                <input
                    type="text"
                    className="search_Input"
                    placeholder="Поиск по вакансиям"
                    onChange={(event) =>
                        onSearchValueChanged(event.target.value)
                    }
                />
            </div>
        </>
    );
}

export default SearchInput;
