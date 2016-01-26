import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as directoriesActions } from '../../redux/modules/directories'
import classes from './directories.scss'
import FlatToNested  from 'flat-to-nested';

const mapStateToProps = (state) => ({
    directories: state.directories
})


let convertFlatToNested = new FlatToNested({
    parent: 'parentId'
});

const cloneArrayOfObjects = (array) => {
    return array.map(item => Object.assign({}, {...item}));
}

const convertToNestedLists = (dirsArray) => {
    return convertFlatToNested.convert(cloneArrayOfObjects(dirsArray));
}

function renderElement(el) {
    return (
        <li key={el.id}>{el.name}</li>
    )
}

function renderDirsRecursively(nestedList = []) {
    return (
        <ul>
            {nestedList.map((el) => {
                return <li key={el.id}>
                    {el.name}
                    {renderDirsRecursively(el.children)}
                </li>
            })}
        </ul>
    );
}


export class Directories extends React.Component {
    render() {
        let nestedList = convertToNestedLists(this.props.directories);
        return (
            <div>
                {renderDirsRecursively(nestedList.children)}
            </div>
        )
    }
}

export default connect(mapStateToProps, directoriesActions)(Directories)
