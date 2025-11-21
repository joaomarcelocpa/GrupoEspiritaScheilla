const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Campaign {
    id: number;
    titulo: string;
    descricao: string;
    tipo: string;
    data_inicio: string;
    data_fim: string;
    privacidade: string;
    created_at: string;
    updated_at: string;
}

export interface CampaignsResponse {
    campaigns: Campaign[];
}

class CampaignService {

    async listCampaigns(): Promise<Campaign[]> {
        try {
            const response = await fetch(`${API_URL}/campaign/list/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Erro ao listar campanhas: ${response.status}`);
            }

            const data: CampaignsResponse = await response.json();
            return data.campaigns;
        } catch (error) {
            console.error('Erro ao buscar campanhas:', error);
            throw error;
        }
    }
    campaignsToCalendarEvents(campaigns: Campaign[]) {
        const publicCampaigns = campaigns.filter(campaign => campaign.privacidade === 'publico');

        return publicCampaigns.map(campaign => ({
            date: campaign.data_inicio,
            title: campaign.titulo,
            time: "Todo o dia",
            location: "Centro Espírita",
            description: campaign.descricao,
            privacy: campaign.privacidade,
            type: "campanha" as const,
            campaign_id: campaign.id,
            data_fim: campaign.data_fim,
        }));
    }
}

export const campaignService = new CampaignService();
export default campaignService;