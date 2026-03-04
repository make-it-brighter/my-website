export interface Award {
  title: string
  issuer: string
  award: string
  image: string
}

export interface Certificate {
  title: string
  issuer: string
}

export interface CertificateGroup {
  name: string
  logo: string
  certificates: Certificate[]
}

export const awards: Award[] = []

export const certificateGroups: CertificateGroup[] = []
