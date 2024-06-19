// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { MainChartAirQuality } from './MainChart'
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
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";


const DashboardPredict: React.FC = () => {
  const [activyColor, setActivyColor] = useState(false);

  useEffect(function () {
    function posicionScroll() {
      if (window.scrollY > 10) {
        setActivyColor(true);
      } else {
        setActivyColor(false);
      }
    }
    window.addEventListener("scroll", posicionScroll);
  }, []);

  const [selectedPeriod, setSelectedPeriod] = useState('1 Day'); // Estado para controlar o período selecionado

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
  };

  return (
    <>
     <Header action={activyColor} page="dashboard-predict" />
      <CCard className="mb-4" style={{minHeight: '100vh', marginTop: 100}}>
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Qualidade do ar
              </h4>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['1 Day', '7 Days', '30 Days'].map((value) => (
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
          <MainChartAirQuality selectedPeriod={selectedPeriod} />
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
      <Footer />
    </>
  )
}

export { DashboardPredict }
