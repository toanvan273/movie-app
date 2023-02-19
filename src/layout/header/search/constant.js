

export const optionsSort = [
    {value: 'popularity.asc',label: 'Popularity Ascending'},
    {value: 'popularity.desc',label: 'Popularity Descending'},
    {value: 'release_date.asc',label: 'Release Date Ascending'},
    {value: 'release_date.desc',label: 'Release Date Descending'},
    {value: 'original_title.asc',label: 'Title (Z-A)'},
    {value: 'original_title.desc',label: 'Title (A-Z)'},
]

export  const customSortStyles = {
    control: (provided, state) => {
        return {
        ...provided,
        borderRadius: '10px',
        // borderColor: state.isFocused ? '#F5A122' : '#C4C4C4',
        // boxShadow: state.isFocused ? '#F5A122' : '#C4C4C4',
        // backgroundColor: "#fff",
        };
    },
    option: (provided, state) => {
        return {
        ...provided,
        // ['&:hover']: { backgroundColor: '#393A3F' },
        // color: state.isSelected ? '#f5a122' : '#ffffff',
        // backgroundColor: '#28292f',
        };
    },
    // singleValue: (provided) => {
    //     return { ...provided, color: '#000000' };
    // },
};


