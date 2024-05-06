import TreeChildren from "./TreeChildren";
import { useState } from "react";

export default function Tree() {
    const [selectedNode, setSelectedNode] = useState([]);

    const treeProps = [
        {
            label: "1",
            childrens: [
                {
                    label: "1-1",
                    childrens: [],
                },
                {
                    label: "1-2",
                    childrens: [],
                },
            ],
        },
        {
            label: "2",
            childrens: [
                {
                    label: "2-1",
                    childrens: [
                        {
                            label: "2-1-1",
                            childrens: [],
                        },
                        {
                            label: "2-1-2",
                            childrens: [],
                        },
                    ],
                },
                {
                    label: "2-2",
                    childrens: [],
                },
            ],
        },
        {
            label: "3",
            childrens: [],
        },
    ];

    const renderSelectedNode = (isChecked, label) => {
        if (isChecked) {
            setSelectedNode((prev) => {
                return [...prev, label];
            });
        } else {
            setSelectedNode((prev) => {
                return prev.filter((node) => node !== label);
            });
        }
    };

    return (
        <>
            <p>Select: {selectedNode.join(", ")} </p>
            {treeProps.map((node) => (
                <TreeChildren
                    key={node.label}
                    node={node}
                    renderSelectedNode={renderSelectedNode}
                />
            ))}
        </>
    );
}
