import PropTypes from "prop-types";

function Table(props){
    return (
        <div className="table">
            <table className="table">

            </table>
        </div>
    );
}

Table.propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number
};

export default Table;