// assets
import { IconBrandChrome, IconHelp, IconUsers } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Team members',
            type: 'item',
            url: '/sample-page',
            icon: IconUsers,
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: 'Sponsors',
            type: 'item',
            url: '/sponsors',
            icon: icons.IconHelp,
            breadcrumbs: false
        }
    ]
};

export default other;
