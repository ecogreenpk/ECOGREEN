import { Link } from 'react-router-dom';
import { memo } from 'react';

const ServiceCard = memo(({ service, isExpanded, onToggle }) => {
    return (
        <div
            className={`service-card reveal ${service.leaf ? 'leaf-card' : ''}`}
            onClick={onToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
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
                    <Link to={service.link} className="btn-explore">{service.linkText}</Link>
                </div>
            )}
        </div>
    );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
