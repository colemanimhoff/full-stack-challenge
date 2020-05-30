

const knex = require('./connection')

module.exports = {
  getCompanies() {
    return knex('company', '*')
  },
  getCompanyById(id) {
    return knex('company')
      .innerJoin('founder', 'company.id', 'founder.company_id')
      .where('company.id', id)
      .select([
        'company.id',
        'company.name',
        'company.description',
        'company.city',
        'company.state',
        'company.date_founded',
        knex.raw(
          'ARRAY_TO_JSON (ARRAY_AGG (founder)) founders'
        )
      ])
      .groupBy('company.id', 'company.name')
      .first()
  }
}