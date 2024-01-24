import { useEffect, useCallback, useState } from 'react';
import ReactFlow, {
    Controls,
    useNodesState,
    useEdgesState,
    addEdge,
    Background
} from 'reactflow';
import '../styles/graph.css';
import 'reactflow/dist/style.css';
import { getLayoutedElements } from '../utils/layout';
import CustomEdge from '../styles/CustomEdge.jsx';
import { addCourse, removeCourse } from './CourseFunctions';


const CourseGraph = ({ axiosInstance, courses, onCoursesUpdated }) => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const closeSidebar = () => setIsSidebarOpen(false);
    const [selectedCourseName, setSelectedCourseName] = useState('');

    const onLayout = useCallback((newNodes, newEdges) => {
        const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(newNodes, newEdges);
        setNodes([...layoutedNodes]);
        setEdges([...layoutedEdges]);
    }, [setNodes, setEdges]);

    useEffect(() => {
        if (courses.length > 0) {
            const newNodes = courses.map(course => course.createNode({ x: 0, y: 0 }));
            const newEdges = courses.flatMap(course => {
                return course.createEdges().map(edge => ({
                    ...edge,
                    //animated: true If anybody needs this later, leaving it here
                }));
            });

            setNodes(newNodes);
            setEdges(newEdges);

            onLayout(newNodes, newEdges);
        }
    }, [courses, onLayout]);


    useEffect(() => {
        getLayoutedElements(nodes, edges);
    }, []);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    const onNodeClick = (event, node) => {
        setSelectedCourseName(node.data.label); 
        setIsSidebarOpen(true);
    };

    return (
        <div className='reactflow-wrapper'>
            {isSidebarOpen && (
                <div className="sidebar">
                    <button onClick={closeSidebar} className="close-button">X</button>
                    <h3>{selectedCourseName}</h3> 
                    <h4>Esitieto vaatimukset</h4>
                </div>
            )}

            <button onClick={() => onLayout(nodes, edges)}>Auto Layout</button>
            <button onClick={() => addCourse(axiosInstance, onCoursesUpdated)}>Add Course</button>
            <button onClick={() => removeCourse(axiosInstance, onCoursesUpdated)}>Remove Course</button>

            <CustomEdge />
            <ReactFlow

                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={onNodeClick}
            >
                <Controls />
                <Background color="#555" gap={32} />
            </ReactFlow>
        </div>
    );
};

export default CourseGraph;