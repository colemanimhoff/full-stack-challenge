
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import { bff } from '../../config'

import CompanyCard from './components/CompanyCard'
import Footer from './components/Footer'

const Companies = () => {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    const url = bff + '/companies'
    fetch(url)
      .then(res => res.json())
      .then(res => setCompanies(res))
      .catch(err => console.error(err))
  }, [])

  return (
    <Container className="container">
      {companies.map(company => {
        return <CompanyCard key={'company-' + company.id} company={company} />
      })}
      <Footer />
    </Container>
  )
}

export default Companies