import { Link } from 'react-router-dom';
import { memo } from 'react';

const ServiceCard = memo(({ service, isExpanded, onToggle, className = '' }) => {
    // Handler for keyboard accessibility
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle(service.id);
        }
    };

    const handleClick = () => {
        onToggle(service.id);
    };

    return (
        <div
            className={`service-card reveal ${service.leaf ? 'leaf-card' : ''} ${className}`}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-expanded={isExpanded}
        >
            <span className="material-symbols-outlined card-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {isExpanded && (
                <div className="card-details">
                    <ul>
                        {service.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                        ))}
                    </ul>
                    <Link to={service.link} className="btn-explore" onClick={(e) => e.stopPropagation()}>
                        {service.linkText}
                    </Link>
                </div>
            )}
        </div>
    );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
