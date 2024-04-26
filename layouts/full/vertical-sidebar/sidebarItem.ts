import {
    LayoutDashboardIcon, LoginIcon, PillIcon, UserPlusIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        to: '/'
    },
    {
        title: 'Pill Reminder',
        icon: PillIcon,
        to: '/PillReminder'
    },
    {  },
    {
        title: 'Log out',
        icon: LoginIcon,
        to: '/auth/login'
    },
];

export default sidebarItem;
