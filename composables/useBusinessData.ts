export const useContactData = () => {
  const contactInfo = {
    phone: '+48 123 456 789',
    email: 'kontakt@korepetycje.pl',
    address: 'ul. Przykładowa 123, 00-001 Warszawa',
    workingHours: 'Pn-Pt: 8:00-20:00, Sb: 9:00-18:00'
  }

  return {
    contactInfo
  }
}

export const useBusinessData = () => {
  const businessInfo = {
    name: 'Korepetycje - Profesjonalne Nauczanie',
    description: 'Profesjonalne korepetycje z różnych przedmiotów',
    established: '2014',
    studentsHelped: '500+',
    teachers: '15+',
    successRate: '98%'
  }

  return {
    businessInfo
  }
}
