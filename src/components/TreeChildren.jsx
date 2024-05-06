import PropTypes from "prop-types";
import { useState } from "react";
import "./TreeChildren.css";

export default function TreeChildren({ node, renderSelectedNode }) {
    const [isExpand, setExpand] = useState(false);

    function handleClick() {
        setExpand(!isExpand);
    }

    function handleCheck(isChecked, label) {
        console.log("isChecked :>> ", isChecked);
        renderSelectedNode(isChecked, label);
    }

    return (
        <li key={node.label}>
            <input
                type="checkbox"
                onChange={(e) => handleCheck(e.target.checked, node.label)}
            />
            <label>{node.label}</label>
            {node.childrens.length > 0 && (
                <>
                    <button onClick={() => handleClick(node.label)}>
                        {isExpand ? "-" : "+"}
                    </button>
                    <ul className={isExpand ? "expanded" : "collapsed"}>
                        {node.childrens.map((_node) => {
                            return (
                                <TreeChildren
                                    key={_node.label}
                                    node={_node}
                                    renderSelectedNode={renderSelectedNode}
                                />
                            );
                        })}
                    </ul>
                </>
            )}
        </li>
    );
}

TreeChildren.propTypes = {
    node: PropTypes.object,
    renderSelectedNode: PropTypes.func,
};
