import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const location = useLocation();
  
  // Generate breadcrumbs from current path if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Convert segment to readable label
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath,
        current: isLast
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) {
    return null; // Don't show breadcrumbs for home page
  }

  return (
    <nav 
      className={`bg-gray-50 border-b border-gray-200 py-3 ${className}`}
      aria-label="Breadcrumb"
    >
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm font-redhat">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight 
                  className="h-4 w-4 text-gray-400 mx-2" 
                  aria-hidden="true" 
                />
              )}
              
              {index === 0 && (
                <Home 
                  className="h-4 w-4 text-gray-500 mr-1" 
                  aria-hidden="true" 
                />
              )}
              
              {item.href && !item.current ? (
                <Link
                  to={item.href}
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span 
                  className={`${
                    item.current 
                      ? 'text-gray-900 font-medium' 
                      : 'text-gray-600'
                  }`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;