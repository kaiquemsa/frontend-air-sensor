// @ts-nocheck
import React from 'react'
import {
  CAvatar,
  CBadge,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { Link } from 'react-router-dom';

const AppHeaderDropdown: React.FC = () => {
  return (
    <Link to="/login">
      <CButton style={{ backgroundColor: '#6261cc'}}>
        Login
      </CButton>
    </Link>
  )
}

export default AppHeaderDropdown
