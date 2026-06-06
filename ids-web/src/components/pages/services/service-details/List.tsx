interface ListProps {
    features?: string[];
}

const List = ({ features }: ListProps) => {
    const defaultFeatures = [
        "Financial strategy planning",
        "Operational improvement",
        "Risk management solutions",
        "investment ppportunite",
        "Rvenue growth optimization",
        "Sustainable business",
        "Performance monitoring"
    ];
    const softwareFeatures = [
        "Custom Software Development",
        "Web Application Development",
        "Android App Development",
        "iOS App Development",
        "UI/UX Design Solutions",
        "Cloud Integration Services",
        "API Development & Integration",
        "Enterprise Software Solutions",
        "E-Commerce Development",
        "CRM & ERP Systems",
        "Software Maintenance & Support",
        "Digital Transformation Services"
    ];
    const activeFeatures = features || softwareFeatures;

    // Split features list into two columns
    const half = Math.ceil(activeFeatures.length / 2);
    const firstCol = activeFeatures.slice(0, half);
    const secondCol = activeFeatures.slice(half);

    return (
        <>
            <ul>
                {firstCol.map((item, index) => (
                    <li key={index}>
                        <i className="fa-solid fa-circle-check"></i>
                        {item}
                    </li>
                ))}
            </ul>
            <ul>
                {secondCol.map((item, index) => (
                    <li key={index}>
                        <i className="fa-solid fa-circle-check"></i>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default List
