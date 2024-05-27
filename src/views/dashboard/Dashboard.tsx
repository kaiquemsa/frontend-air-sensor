// @ts-nocheck
import React, { useState, useEffect } from 'react'
import CIcon from '@coreui/icons-react'
import { cilCloudDownload } from '@coreui/icons'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CRow,
} from '@coreui/react'

import { MainChartMoinsture } from './MainChart'


const Dashboard: React.FC = () => {

  const [selectedPeriod, setSelectedPeriod] = useState('Umidade');

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
  };

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Umidade presente no ar
              </h4>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Umidade', 'Temperatura', 'Valor Bruto'].map((value) => (
                  <CButton
                    key={value}
                    color="outline-secondary"
                    className="mx-0"
                    active={selectedPeriod === value}
                    onClick={() => handlePeriodChange(value)}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartMoinsture selectedPeriod={selectedPeriod} />
        </CCardBody>
        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Dashboard
