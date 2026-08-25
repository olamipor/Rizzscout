import { Lead, sampleLeads } from '../data/leads'

export const fetchLeads = async (): Promise<Lead[]> => {
  // placeholder for real API call
  await new Promise((r) => setTimeout(r, 300))
  return sampleLeads
}

export const getLeadById = async (id: string): Promise<Lead | undefined> => {
  const leads = await fetchLeads()
  return leads.find((l) => l.id === id)
}
