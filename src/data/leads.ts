export interface Lead {
  id: string
  company: string
  website?: string
  industry?: string
  location?: string
  contact?: string
  email?: string
  status?: 'New'|'Contacted'|'Interested'|'Follow Up'|'Converted'|'Archived'
  score?: number
}

export const sampleLeads: Lead[] = [
  { id: 'lead_1', company: 'Nova Fitness', website: 'novafitness.com', industry: 'Fitness Equipment', location: 'Spain', contact: 'Carlos Ruiz', email: 'hello@novafitness.com', status: 'New', score: 92 },
  { id: 'lead_2', company: 'GymSupplyCo', website: 'gymsupply.co', industry: 'Gym Suppliers', location: 'Germany', contact: 'Anna Schmidt', email: 'anna@gym.co', status: 'Follow Up', score: 78 },
]
