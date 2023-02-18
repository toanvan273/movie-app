export const options = [
    {value: '/popular',label: 'Popular'},
    {value: '/now-playing',label: 'Now Playing'},
    {value: '/top-rated',label: 'Top Rated'},
]

export  const customStyles = {
    control: (provided, state) => {
        return {
        ...provided,
        borderRadius: '10px',
        borderColor: state.isFocused ? '#F5A122' : '#C4C4C4',
        boxShadow: state.isFocused ? '#F5A122' : '#C4C4C4',
        backgroundColor: "#fff",
        };
    },
    option: (provided, state) => {
        return {
        ...provided,
        ['&:hover']: { backgroundColor: '#393A3F' },
        color: state.isSelected ? '#f5a122' : '#ffffff',
        backgroundColor: '#28292f',
        };
    },
    singleValue: (provided) => {
        return { ...provided, color: '#000000' };
    },
};