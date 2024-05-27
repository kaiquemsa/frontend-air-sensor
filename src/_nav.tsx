// @ts-nocheck
import React, { ReactElement } from 'react'
import CIcon from '@coreui/icons-react'
import { cilDescription, cilSpeedometer, cilHome } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

interface NavItem {
  component: typeof CNavItem | typeof CNavTitle | typeof CNavGroup,
  name: string,
  to?: string,
  href?: string,
  icon?: ReactElement,
  badge?: {
    color: string,
    text: string,
  },
  items?: NavItem[],
}

const _nav: NavItem[] = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Qualidade do Ar',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Umidade do Ar',
    to: '/dashboard_predicts',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
]

export default _nav
